import { Mutable, AnyProxyInfo, ProxyInfo } from "./parser";
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
   *
   * @return {Map<K, T>}  {Map<K, T>}
   * @memberof ProxyFetcher
   */
  get(): Map<K, T> {
    return new Map(this._proxies);
  }

  /**
   *
   *
   * @return {*}  {([K, T] | undefined)}
   * @memberof ProxyFetcher
   */
  random(): [K, T] | undefined {
    const list = [...this._proxies];
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
