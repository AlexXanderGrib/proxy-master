import { EventEmitter } from "eventemitter3";
import { CheckedProxy, check } from "../checker";
import { ProxyFetcher } from "../fetcher";
import { ParallelMapOptions } from "../parallel";
import {
  AnyProxyInfo,
  Mutable,
  ProxyInfo,
  ProxyType,
  parse,
  parseRequireType,
  stringifyToUrl
} from "../parser";
import { ProxyParsingError } from "../errors";
import { MaybeAsyncIterable, MaybePromiseLike } from "../types";

type AnyProxy = string | URL | AnyProxyInfo;
type ProxyWithMeta<T> =
  | [proxy: AnyProxy, info: T]
  | { proxy: AnyProxy; info: T };

export type CustomFetcherOptions = {
  check?: boolean;
  checkUrl?: string;
  checkTimeout?: number;
  defaultProxyType?: ProxyType;
} & ParallelMapOptions;

export type CustomFetcherEvents = {
  "checked:valid": (proxy: CheckedProxy) => void;
  "checked:failed": (line: string, error: unknown) => void;
  "fetch:failed": (error: unknown) => void;
};

export type CustomFetcherFetch<T> = () => MaybePromiseLike<
  MaybeAsyncIterable<T extends never ? AnyProxy : ProxyWithMeta<T>>
>;

/**
 *
 *
 * @export
 * @class CustomFetcher
 * @extends {ProxyFetcher<T>}
 * @template T
 */
export class CustomFetcher<T = never> extends ProxyFetcher<T> {
  private readonly _invalid = new Set<string>();
  private readonly _valid = new Map<string, ProxyInfo>();
  private readonly _customFetch: CustomFetcherFetch<T>;
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
   * @param {(string | URL | AnyProxyInfo)} proxy
   * @return {*}
   * @memberof CustomFetcher
   */
  private async _autoCheck(proxy: AnyProxy): Promise<Mutable<ProxyInfo>> {
    if (proxy instanceof URL) {
      proxy = proxy.toString();
    } else if (typeof proxy === "object") {
      proxy = stringifyToUrl(proxy);
    }

    const cachedValid = this._valid.get(proxy);

    if (cachedValid) {
      return cachedValid;
    }

    if (this._invalid.has(proxy)) {
      throw new Error("Known invalid proxy");
    }

    try {
      if (this.options.check ?? true) {
        const result = await check(parse(proxy), {
          url: this.options.checkUrl,
          timeout: this.options.checkTimeout
        });

        this._valid.set(proxy, result);
        this.events.emit("checked:valid", result);

        return result;
      } else {
        return parseRequireType(proxy, this.options.defaultProxyType);
      }
    } catch (error) {
      if (error instanceof ProxyParsingError) {
        this._invalid.add(proxy);
      }

      this.events.emit("checked:failed", proxy, error);
      throw error;
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
    let fetched: MaybeAsyncIterable<AnyProxy | ProxyWithMeta<T>>;

    try {
      fetched = await this._customFetch();
    } catch (error) {
      this.events.emit("fetch:failed", error);
      throw error;
    }

    for await (const result of fetched) {
      if (!result) {
        continue;
      }

      let proxy: AnyProxy;
      let info: T | undefined;

      if (typeof result === "string") {
        proxy = result;
      } else if (result instanceof URL) {
        proxy = result;
      } else if (
        typeof result === "object" &&
        "host" in result &&
        "port" in result
      ) {
        proxy = result;
      } else if (typeof result === "object" && "proxy" in result) {
        proxy = result.proxy;
        info = result.info;
      } else if (Array.isArray(result)) {
        [proxy, info] = result;
      } else {
        continue;
      }

      try {
        const checked = await this._autoCheck(proxy);
        yield [checked, info as T];
      } catch {
        continue;
      }
    }
  }
}
