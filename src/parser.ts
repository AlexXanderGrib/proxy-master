import { isIP } from "net";

export type ProxyType = "http" | "socks4" | "socks5";

export type ProxyInfo = {
  readonly type?: ProxyType;
  readonly host: string;
  readonly port: number;
  readonly username?: string;
  readonly password?: string;
};

export type TypedProxyInfo<T extends ProxyType = ProxyType> = ProxyInfo & {
  readonly type: T;
};

export type HttpProxy = TypedProxyInfo<"http">;
export type Socks5Proxy = TypedProxyInfo<"socks5">;
export type Socks4Proxy = TypedProxyInfo<"socks4">;
export type SocksProxy = Socks4Proxy | Socks5Proxy;
export type Mutable<T extends {}> = { -readonly [P in keyof T]: T[P] };

/**
 *
 * @param {number} value
 * @return {boolean}
 */
function isPort(value: string): boolean {
  const number = Number(value);
  return Number.isSafeInteger(number) && number > 0 && number < 65_536;
}

const protocolToType: Record<string, ProxyType> = {
  "socks:": "socks5",
  "socks4:": "socks4",
  "socks5:": "socks5",
  "http:": "http",
  "https:": "http"
};

/**
 *
 *
 * @export
 * @class ProxyParsingError
 * @extends {Error}
 */
export class ProxyParsingError extends Error {
  override name = "ProxyParsingError";

  /**
   * Creates an instance of ProxyParsingError.
   * @param {string} line
   * @memberof ProxyParsingError
   */
  constructor(line: string) {
    super(`Invalid proxy format: ${line}`);
  }
}

/**
 *
 * @param {string} line
 * @return {string}
 */
export function parse(line: string | URL): Mutable<ProxyInfo> {
  if (line instanceof URL) {
    const proxy: Mutable<ProxyInfo> = {
      host: line.hostname,
      port: Number.parseInt(line.port)
    };

    const type = protocolToType[line.protocol];

    if (type) {
      proxy.type = type;
    }

    if (line.username) {
      proxy.username = line.username;
    }

    if (line.password) {
      proxy.password = line.password;
    }

    return proxy;
  }

  if (line.includes("://")) {
    return parse(new URL(line));
  }

  if (line.includes("@")) {
    const [part1, part2] = line.split("@");

    const [ipPart, portPart] = part2.split(":");

    if (isIP(ipPart) || isPort(portPart)) {
      return parse(`proxy://${line}`);
    }

    return parse(`proxy://${part2}@${part1}`);
  }

  const parts = line.split(":");

  if (isPort(parts[1])) {
    const [hostname, port, username, password] = parts;
    const url = new URL(`proxy://${hostname}:${port}`);

    if (username) url.username = username;
    if (password) url.password = password;

    return parse(url);
  }

  if (isPort(parts[3])) {
    const [username, password, hostname, port] = parts;
    const url = new URL(`proxy://${hostname}:${port}`);

    url.username = username;
    url.password = password;

    return parse(url);
  }

  throw new ProxyParsingError(line);
}

/**
 *
 * @param {ProxyInfo} proxy
 * @return {string} URL
 */
export function stringifyToUrl(proxy: ProxyInfo): string {
  const url = new URL(`${proxy.type ?? "proxy"}://${proxy.host}:${proxy.port}`);

  if (proxy.username) {
    url.username = proxy.username;
  }

  if (proxy.password) {
    url.password = proxy.password;
  }

  return url.toString();
}

/**
 *
 * @param {ProxyInfo} proxy
 * @return {boolean}
 */
export function isHttp(proxy: ProxyInfo): proxy is HttpProxy {
  return proxy.type === "http";
}

/**
 *
 * @param {ProxyInfo} proxy
 * @return {boolean}
 */
export function isSocks5(proxy: ProxyInfo): proxy is Socks5Proxy {
  return proxy.type === "socks5";
}

/**
 *
 * @param {ProxyInfo} proxy
 * @return {boolean}
 */
export function isSocks4(proxy: ProxyInfo): proxy is Socks4Proxy {
  return proxy.type === "socks4";
}

/**
 *
 * @param {ProxyInfo} proxy
 * @return {boolean}
 */
export function isSocks(proxy: ProxyInfo): proxy is SocksProxy {
  return isSocks5(proxy) || isSocks4(proxy);
}
