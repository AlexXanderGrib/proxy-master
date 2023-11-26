import axios from "axios";
import { ProxyFetcher } from "../fetcher";
import { ProxyPair } from "../pair";
import queryString from "query-string";

export type ProxyLineFetcherOptions = {
  apiKey: string;

  type?: "dedicated" | "shared";
  ipVersion?: 4 | 6;
  country?: string[];

  status?: "active" | "expired" | "deleted";

  purchaseDateBefore?: Date;
  purchaseDateAfter?: Date;

  expiryDateBefore?: Date;
  expiryDateAfter?: Date;

  orderId?: number[];
  limit?: number;
  offset?: number;
};

export type ProxyLineInfo = {
  id: number;
  orderId: number;
  purchaseDate: Date;
  expiryDate: Date;
  tags: string[];
  country: string;
};

export type ProxyLineResponse = {
  count: number;
  next: number;
  previous: number;
  results: ProxyLineProxy[];
};

export type ProxyLineProxy = {
  id: number;
  ip: string;
  internal_ip: null;
  port_http: number;
  port_socks5: number;
  user: string;
  username: string;
  password: string;
  order_id: number;
  type: string;
  ip_version: number;
  country: string;
  date: string;
  date_end: string;
  tags: any[];
  access_ips: any[];
};

export type ProxyLineGetBalanceResult = {
  /** in USD */
  balance: number;

  /** in USD */
  partnerBalance: number;
};

export type ProxyLinePeriodDays =
  | 5
  | 10
  | 20
  | 30
  | 60
  | 90
  | 120
  | 150
  | 180
  | 210
  | 240
  | 270
  | 300
  | 330
  | 360;

export type ProxyLineRenewParameters = {
  proxies: number[];
  period: ProxyLinePeriodDays;
  coupon?: string;
};

export type ProxyLineOrderParameters = {
  type: ProxyLineFetcherOptions["type"];
  ipVersion: ProxyLineFetcherOptions["ipVersion"];
  country: ProxyLineFetcherOptions["country"];
  quantity: number;
  period: ProxyLinePeriodDays;
  coupon?: string;
  ips?: string[];
};

/**
 *
 *
 * @export
 * @class ProxyLineFetcher
 */
export class ProxyLineFetcher extends ProxyFetcher<ProxyLineInfo, ProxyPair> {
  private readonly _axios = axios.create({
    baseURL: "https://panel.proxyline.net/api/",
    responseType: "json",
    paramsSerializer: (parameters) =>
      queryString.stringify(parameters, { arrayFormat: "none" })
  });

  /**
   * Creates an instance of ProxyLineFetcher.
   * @param {ProxyLineFetcherOptions} options
   * @memberof ProxyLineFetcher
   */
  constructor(public readonly options: ProxyLineFetcherOptions) {
    super();
    this._axios.interceptors.request.use((config) => {
      if (!config.url?.endsWith("/")) {
        config.url += "/";
      }

      config.params.api_key = options.apiKey;

      return config;
    });
  }

  /**
   *
   *
   * @protected
   * @return {Promise<Map<ProxyPair, ProxyLineInfo>>}  {Promise<Map<ProxyPair, ProxyLineInfo>>}
   * @memberof ProxyLineFetcher
   */
  protected async _fetch(): Promise<Map<ProxyPair, ProxyLineInfo>> {
    const { data } = await this._axios.get<ProxyLineResponse>("proxies", {
      params: {
        status: this.options.status ?? "active",
        ip_version: this.options.ipVersion,
        country: this.options.country,
        date_after: this.options.purchaseDateAfter,
        date_before: this.options.purchaseDateBefore,
        date_end_after: this.options.expiryDateAfter,
        date_end_before: this.options.expiryDateBefore,
        orders: this.options.orderId,
        limit: this.options.limit ?? 2000,
        offset: this.options.offset ?? 0
      }
    });

    return new Map(
      data.results.map((proxy) => {
        const pair = new ProxyPair(
          {
            type: "http",
            host: proxy.ip,
            port: proxy.port_http,
            username: proxy.username,
            password: proxy.password
          },
          {
            type: "socks5",
            host: proxy.ip,
            port: proxy.port_socks5,
            username: proxy.username,
            password: proxy.password
          }
        );

        const info: ProxyLineInfo = {
          id: proxy.id,
          orderId: proxy.order_id,
          country: proxy.country,
          tags: proxy.tags,
          purchaseDate: new Date(proxy.date),
          expiryDate: new Date(proxy.date_end)
        };

        return [pair, info];
      })
    );
  }

  /**
   *
   *
   * @return {ProxyLineGetBalanceResult}
   * @memberof ProxyLineFetcher
   */
  async getBalance(): Promise<ProxyLineGetBalanceResult> {
    const { data } = await this._axios.get("balance");

    return { balance: data.balance, partnerBalance: data.partner_balance };
  }

  /**
   *
   *
   * @param {ProxyLineRenewParameters} parameters
   * @return {Promise<void>}  {Promise<void>}
   * @memberof ProxyLineFetcher
   */
  async renew(parameters: ProxyLineRenewParameters): Promise<void> {
    await this._axios.get("renew", { params: parameters });
    await this.fetch();
  }

  /**
   *
   *
   * @param {ProxyLineOrderParameters} parameters
   * @return {Promise<void>}
   * @memberof ProxyLineFetcher
   */
  async order(parameters: ProxyLineOrderParameters): Promise<void> {
    await this._axios.get("new-order", {
      params: {
        type: parameters.type,
        ip_version: parameters.ipVersion,
        country: parameters.country,
        quantity: parameters.quantity,
        period: parameters.period,
        coupon: parameters.country,
        ip_list: parameters.ips
      }
    });
    await this.fetch();
  }
}
