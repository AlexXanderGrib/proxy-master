import { Agent } from "https";
import { anonymizeProxy, closeAnonymizedProxy } from "./anonymize";
import {
  HttpLikeProxy,
  ProxyType,
  SocksProxy,
  ProxyInfo,
  stringifyToUrl
} from "./parser";
import { getAgent } from "./agent";
import { createSocksSocket } from "./socks";
import { Socket } from "net";

/**
 *
 *
 * @export
 * @class ProxyPair
 */
export class ProxyPair implements ProxyInfo {
  /**
   * Creates an instance of ProxyPair.
   * @param {HttpLikeProxy} http
   * @param {SocksProxy} socks
   * @memberof ProxyPair
   */
  constructor(
    public readonly http: HttpLikeProxy,
    public readonly socks: SocksProxy,
    public readonly primaryType: "socks" | "http" = "http"
  ) {}

  /**
   *
   *
   * @readonly
   * @type {ProxyType}
   * @memberof ProxyPair
   */
  get type(): ProxyType {
    return this.primary.type;
  }
  /**
   *
   *
   * @readonly
   * @type {string}
   * @memberof ProxyPair
   */
  get host(): string {
    return this.primary.host;
  }
  /**
   *
   *
   * @readonly
   * @type {number}
   * @memberof ProxyPair
   */
  get port(): number {
    return this.primary.port;
  }
  /**
   *
   *
   * @readonly
   * @type {(string | undefined)}
   * @memberof ProxyPair
   */
  get username(): string | undefined {
    return this.primary.username;
  }

  /**
   *
   *
   * @readonly
   * @type {(string | undefined)}
   * @memberof ProxyPair
   */
  get password(): string | undefined {
    return this.primary.password;
  }

  /**
   *
   *
   * @readonly
   * @type {ProxyInfo}
   * @memberof ProxyPair
   */
  get primary(): ProxyInfo {
    return this[this.primaryType];
  }

  private _browserProxy: HttpLikeProxy | undefined;
  private _browserUrl: string | undefined;

  private _socksAgent: Agent | undefined;
  private _httpAgent: Agent | undefined;

  /**
   *
   *
   * @readonly
   * @private
   * @memberof ProxyPair
   */
  private get _primaryAgent() {
    return this.primaryType === "http" ? this._httpAgent : this._socksAgent;
  }

  /**
   *
   *
   * @return {Agent}  {Agent}
   * @memberof ProxyPair
   */
  createAgent(): Agent {
    return this.primaryType === "http"
      ? this.createHttpAgent()
      : this.createSocksAgent();
  }

  /**
   *
   *
   * @return {Agent}  {Agent}
   * @memberof ProxyPair
   */
  getAgent(): Agent {
    return this._primaryAgent ?? this.createAgent();
  }

  /**
   *
   *
   * @return {Agent}  {Agent}
   * @memberof ProxyPair
   */
  getHttpAgent(): Agent {
    return this._httpAgent ?? this.createHttpAgent();
  }

  /**
   *
   *
   * @return {Agent}  {Agent}
   * @memberof ProxyPair
   */
  getSocksAgent(): Agent {
    return this._socksAgent ?? this.createSocksAgent();
  }

  /**
   *
   *
   * @return {Agent}  {Agent}
   * @memberof ProxyPair
   */
  createHttpAgent(): Agent {
    const agent = getAgent(this.http);
    this._httpAgent ??= agent;

    return agent;
  }

  /**
   *
   *
   * @return {Agent}  {Agent}
   * @memberof ProxyPair
   */
  createSocksAgent(): Agent {
    const agent = getAgent(this.socks);
    this._socksAgent ??= agent;

    return agent;
  }

  /**
   *
   *
   * @param {string} host
   * @param {number} port
   * @return {Promise<Socket>}  {Promise<Socket>}
   * @memberof ProxyPair
   */
  async createSocksSocket(host: string, port: number): Promise<Socket> {
    return await createSocksSocket(this.socks, host, port);
  }

  /**
   *
   *
   * @return {Promise<string>}
   * @memberof ProxyPair
   */
  async getBrowserUrl(): Promise<string> {
    if (this._browserUrl) {
      return this._browserUrl;
    }

    this._browserProxy = await anonymizeProxy(this.http);
    this._browserUrl = stringifyToUrl(this._browserProxy);

    return this._browserUrl;
  }

  /**
   *
   *
   * @memberof ProxyPair
   */
  async closeBrowserUrl(): Promise<void> {
    if (this._browserProxy) {
      await closeAnonymizedProxy(this._browserProxy);
      this._browserProxy = undefined;
      this._browserUrl = undefined;
    }
  }
}
