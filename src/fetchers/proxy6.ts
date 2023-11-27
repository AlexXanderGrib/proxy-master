import axios, { Axios } from "axios";
import { ProxyFetcher } from "../fetcher";
import { ProxyInfo } from "../parser";
import queryString from "query-string";
import { Agent } from "node:https";

export type Proxy6Info = {
  id: string;
  country: string;
  purchaseDate: Date;
  expiryDate: Date;
  description?: string;
  ip?: string;
};

export type Proxy6FetcherOptions = {
  apiKey: string;
  state?: "active" | "expired" | "expiring" | "all";
  description?: string;
  page?: number;
  limit?: number;

  agent?: Agent;
};

// Generated by https://quicktype.io

export type Proxy6Response = {
  status: string;
  user_id: string;
  balance: string;
  currency: string;
  date_mod: string;
  list_count: number;
  list: Proxy6Proxy[];
  page: number;
};

export type Proxy6Proxy = {
  id: string;
  version: string;
  ip: string;
  host: string;
  port: string;
  user: string;
  pass: string;
  type: "socks" | "http";
  country: string;
  date: string;
  date_end: string;
  unixtime: number;
  unixtime_end: number;
  descr: string;
  active: string;
};

/**
 *
 *
 * @export
 * @class Proxy6Fetcher
 * @extends {ProxyFetcher<Proxy6Info>}
 */
export class Proxy6Fetcher extends ProxyFetcher<Proxy6Info> {
  private readonly _axios: Axios;

  /**
   * Creates an instance of Proxy6Fetcher.
   * @param {Proxy6FetcherOptions} options
   * @memberof Proxy6Fetcher
   */
  constructor(public readonly options: Proxy6FetcherOptions) {
    super();
    this._axios = axios.create({
      baseURL: `https://proxy6.net/api/${options.apiKey}/`,
      paramsSerializer: (parameters) =>
        queryString.stringify(parameters, { arrayFormat: "comma" }),

      httpsAgent: options.agent
    });
  }

  /**
   *
   *
   * @protected
   * @return {Promise<Map<ProxyInfo, Proxy6Info>>}  {Promise<Map<ProxyInfo, Proxy6Info>>}
   * @memberof Proxy6Fetcher
   */
  protected async _fetch(): Promise<Map<ProxyInfo, Proxy6Info>> {
    const { data } = await this._axios.get<Proxy6Response>("getproxy", {
      params: {
        state: this.options.state ?? "active",
        descr: this.options.description,
        nokey: "1",
        page: this.options.page,
        limit: this.options.limit
      }
    });

    return new Map(
      data.list.map((proxy) => {
        return [
          {
            type: proxy.type === "socks" ? "socks5" : "http",
            host: proxy.host,
            port: Number.parseInt(proxy.port),
            username: proxy.user,
            password: proxy.pass
          } as ProxyInfo,
          {
            id: proxy.id,
            ip: proxy.ip,
            country: proxy.country,
            description: proxy.descr,
            purchaseDate: new Date(proxy.date),
            expiryDate: new Date(proxy.date_end)
          } as Proxy6Info
        ];
      })
    );
  }

  /**
   *
   *
   * @param {string} type
   * @param {string[]} ids
   * @return {Promise<void>}  {Promise<void>}
   * @memberof Proxy6Fetcher
   */
  async setType(
    type: Proxy6Proxy["type"],
    ids: Proxy6Proxy["id"][]
  ): Promise<void> {
    await this._axios.get("settype", {
      params: { type, ids }
    });
  }
}
