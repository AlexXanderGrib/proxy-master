import { Mutable, AnyProxyInfo, ProxyInfo, ProxyType } from "./parser";
import { MaybeAsyncIterable, MaybePromiseLike } from "./types";

/**
 *
 *
 * @export
 * @abstract
 * @class ProxyFetcher
 * @template T
 */
export abstract class ProxyFetcher<
  T,
  K extends AnyProxyInfo = Mutable<ProxyInfo>
> {
  protected $_infoType!: T;
  protected $_proxyType!: K;
  private _proxies = new Map<K, T>();
  protected abstract _fetch(): MaybePromiseLike<
    MaybeAsyncIterable<[proxy: K, info: T]>
  >;

  /**
   *
   *
   * @return {Promise<Map<K, T>>}  {Promise<Map<K, T>>}
   * @memberof ProxyFetcher
   */
  async fetch(): Promise<Map<K, T>> {
    const copy = new Map<K, T>();

    for await (const [proxy, info] of await this._fetch()) {
      copy.set(proxy, info);
      this._proxies.set(proxy, info);
    }

    this._proxies = copy;
    return this.get();
  }

  /**
   *
   *
   * @param {number} timeout
   * @param {AbortSignal} signal
   * @return {*}
   * @memberof ProxyFetcher
   */
  refetchOnInterval(timeout: number, signal?: AbortSignal): () => void {
    const interval = setInterval(() => this.fetch(), timeout);

    signal?.addEventListener("abort", () => clearInterval(interval), {
      once: true
    });

    return () => {
      clearInterval(interval);
    };
  }

  /**
   *
   * @param {*} filter
   * @return {Map<K, T>}  {Map<K, T>}
   * @memberof ProxyFetcher
   */
  get(filter?: ProxyType | ((proxy: K, info: T) => boolean)): Map<K, T> {
    if (typeof filter === "string") {
      return this.get((proxy) => proxy.type === filter);
    }

    let proxies = [...this._proxies];

    if (filter) {
      proxies = proxies.filter(([proxy, info]) => filter(proxy, info));
    }

    return new Map(proxies);
  }

  /**
   *
   * @param {*} filter
   * @return {*}  {([K, T] | undefined)}
   * @memberof ProxyFetcher
   */
  random(
    filter?: ProxyType | ((proxy: K, info: T) => boolean)
  ): [K, T] | undefined {
    const list = [...this.get(filter)];
    return list[Math.floor(list.length)];
  }

  /**
   *
   *
   * @return {*}
   * @memberof ProxyFetcher
   */
  toJSON() {
    return {
      type: this.constructor.name,
      proxies: [...this._proxies].map(([proxy, info]) => ({
        proxy,
        info
      }))
    };
  }
}
