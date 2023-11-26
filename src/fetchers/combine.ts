import { ProxyFetcher } from "../fetcher";
import { ParallelMapOptions, parallelMap } from "../parallel";
import { Mutable, ProxyInfo, stringifyToUrl } from "../parser";

export type CombinedFetcherOptions = {
  readonly fetchers?: ProxyFetcher<unknown>[];

  /**
   * - `true` - use fetcher.fetch() - to fetch proxies
   * - `false` - use fetcher.get() - to get only cached proxies
   *
   * @default true
   */
  readonly allowFetch?: boolean;
} & ParallelMapOptions;

/**
 *
 *
 * @export
 * @class CombinedFetcher
 * @extends {ProxyFetcher<unknown>}
 * @template T
 */
export class CombinedFetcher extends ProxyFetcher<unknown> {
  /**
   * Creates an instance of CombinedFetcher.
   * @param {CombinedFetcherOptions} options
   * @memberof CombinedFetcher
   */
  constructor(public readonly options: CombinedFetcherOptions) {
    super();
  }

  /**
   *
   *
   * @protected
   * @return {Promise<Map<Mutable<ProxyInfo>, unknown>>}  {Promise<Map<Mutable<ProxyInfo>, unknown>>}
   * @memberof CombinedFetcher
   */
  protected async _fetch(): Promise<Map<Mutable<ProxyInfo>, unknown>> {
    const result = new Map<Mutable<ProxyInfo>, unknown>();
    const urls = new Set<string>();

    const { parallel = true, allowFetch = true, fetchers = [] } = this.options;

    /**
     *
     *
     * @param {ProxyFetcher<unknown>} fetcher
     */
    async function apply(fetcher: ProxyFetcher<unknown>) {
      const proxies = await (allowFetch ? fetcher.fetch() : fetcher.get());

      for (const [proxy, info] of proxies) {
        const url = stringifyToUrl(proxy);

        if (urls.has(url)) {
          continue;
        }

        result.set(proxy, info);
        urls.add(url);
      }
    }

    await parallelMap(fetchers, apply, { parallel });
    return result;
  }
}
