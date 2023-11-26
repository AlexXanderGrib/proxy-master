import { Mutable, ProxyInfo } from "./parser";

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
  K extends ProxyInfo = Mutable<ProxyInfo>
> {
  private _proxies = new Map<K, T>();
  protected abstract _fetch(): Promise<Map<K, T>>;

  /**
   *
   *
   * @return {Promise<Map<K, T>>}  {Promise<Map<K, T>>}
   * @memberof ProxyFetcher
   */
  async fetch(): Promise<Map<K, T>> {
    this._proxies = await this._fetch();
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
