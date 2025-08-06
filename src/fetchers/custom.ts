import { EventEmitter } from "eventemitter3";
import { type CheckedProxy, check } from "../checker";
import { ProxyFetcher } from "../fetcher";
import { PARALLEL_COUNT, type ParallelMapOptions, threadedMap } from "../parallel";
import {
  type AnyProxyInfo,
  type Mutable,
  type ProxyInfo,
  type ProxyType,
  parse,
  parseRequireType,
  stringifyToUrl
} from "../parser";
import { type MaybeAsyncIterable, type MaybePromiseLike } from "../types";

type AnyProxy = string | URL | AnyProxyInfo;
type ProxyWithMeta<T> =
  | [proxy: AnyProxy, info: T]
  | { proxy: AnyProxy; info: T };

export type CustomFetcherOptions = {
  check?: boolean;
  checkUrl?: string;
  checkTimeout?: number;
  defaultProxyType?: ProxyType;
  filter?: (proxy: AnyProxyInfo) => boolean;
} & ParallelMapOptions;

export type CustomFetcherEvents = {
  "checked:valid": (proxy: CheckedProxy, line: string) => void;
  "checked:valid:dedupe": (proxy: CheckedProxy, line: string) => void;
  "checked:failed": (line: string, error: unknown) => void;
  "checked:failed:dedupe": (line: string, error: unknown) => void;
  "fetch:failed": (error: unknown) => void;
};

export type CustomFetcherFetch<T> = () => MaybePromiseLike<
  MaybeAsyncIterable<T extends never ? AnyProxy : ProxyWithMeta<T>>
>;

/**
 *
 *
 * @template T
 * @param {(AnyProxy | ProxyWithMeta<T>)} proxy
 * @return {*}  {[string, T?]}
 */
function anyProxyToString<T>(proxy: AnyProxy | ProxyWithMeta<T>): [string, T?] {
  if (typeof proxy === "string") {
    return [proxy];
  } else if (proxy instanceof URL) {
    return [proxy.toString()];
  } else if (typeof proxy === "object" && "host" in proxy && "port" in proxy) {
    return [stringifyToUrl(proxy)];
  } else if (typeof proxy === "object" && "proxy" in proxy) {
    const result = anyProxyToString<T>(proxy.proxy);
    result[1] = proxy.info;
    return result;
  } else if (Array.isArray(proxy)) {
    const result = anyProxyToString<T>(proxy[0]);
    result[1] = proxy[1];
    return result;
  } else {
    throw new TypeError("Invalid proxy/info pair");
  }
}

/**
 *
 *
 * @export
 * @class CustomFetcher
 * @extends {ProxyFetcher<T>}
 * @template T
 */
export class CustomFetcher<T = never> extends ProxyFetcher<T> {
  private readonly _customFetch: CustomFetcherFetch<T>;
  private readonly _valid = new Set<string>();
  private readonly _invalid = new Set<string>();
  public readonly events = new EventEmitter<CustomFetcherEvents>();

  /**
   * Creates an instance of CustomFetcher.
   * @param {CustomFetcherFetch<T>} fetch
   * @param {CustomFetcherOptions} options
   * @memberof CustomFetcher
   */
  constructor(
    fetch: CustomFetcherFetch<T>,
    public readonly options: CustomFetcherOptions = {}
  ) {
    super();
    this._customFetch = fetch;
  }

  /**
   *
   *
   * @private
   * @return {*}  {AsyncIterable<[AnyProxyInfo, T]>}
   * @memberof CustomFetcher
   */
  private async *_prefetch(): AsyncIterable<[string, T]> {
    let fetched: MaybeAsyncIterable<AnyProxy | ProxyWithMeta<T>>;

    try {
      fetched = await this._customFetch();
    } catch (error) {
      this.events.emit("fetch:failed", error);
      throw error;
    }

    const keep = this.options.filter ?? (() => true);

    for await (const result of fetched) {
      if (!result) {
        continue;
      }

      const [line, info] = anyProxyToString(result) as [string, T];

      try {
        const parsed = parse(line);

        if (!keep(parsed)) {
          continue;
        }
      } catch {
        continue;
      }

      yield [line, info];
    }
  }

  /**
   *
   *
   * @protected
   * @return {*}  {Promise<Map<Mutable<ProxyInfo>, T>>}
   * @memberof CustomFetcher
   */
  protected async *_fetch(): AsyncIterable<[Mutable<ProxyInfo>, T]> {
    yield* threadedMap(
      this._prefetch(),
      async ([proxy, info]) => {
        if (this.options.check ?? true) {
          const parsed = parse(proxy);

          const checked = await check(parsed, {
            url: this.options.checkUrl,
            timeout: this.options.checkTimeout
          });

          const string = stringifyToUrl(checked);

          this.events.emit("checked:valid", checked, proxy);

          if (!this._valid.has(string)) {
            this._valid.add(string);
            this.events.emit("checked:valid:dedupe", checked, proxy);
          }

          return [checked, info];
        } else {
          const checked = parseRequireType(
            proxy,
            this.options.defaultProxyType
          );
          return [checked, info];
        }
      },
      {
        key: ([proxy]) => proxy,
        onError: (error, [line]) => {
          this.events.emit("checked:failed", line, error);

          if (!this._invalid.has(line)) {
            this._invalid.add(line);
            this.events.emit("checked:failed:dedupe", line, error);
          }
        },

        parallel: PARALLEL_COUNT * 10
      }
    );
  }
}
