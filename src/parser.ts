import { isIP } from "net";
import { ProxyParsingError, ProxyTypeRequiredError } from "./errors";

export type ProxyType = "http" | "https" | "socks4" | "socks5";

export type AnyProxyInfo = {
  readonly type?: ProxyType;
  readonly host: string;
  readonly port: number;
  readonly username?: string;
  readonly password?: string;
};

export type ProxyInfo<T extends ProxyType = ProxyType> = AnyProxyInfo & {
  readonly type: T;
};

export type HttpProxy = ProxyInfo<"http">;
export type HttpsProxy = ProxyInfo<"https">;
export type HttpLikeProxy = HttpProxy | HttpsProxy;
export type Socks5Proxy = ProxyInfo<"socks5">;
export type Socks4Proxy = ProxyInfo<"socks4">;
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
  "https:": "https"
};

/**
 *
 * @param {string} line
 * @return {string}
 */
export function parse(line: string | URL): Mutable<AnyProxyInfo> {
  if (line instanceof URL) {
    const proxy: Mutable<AnyProxyInfo> = {
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
 * @param {AnyProxyInfo} proxy
 * @return {string} URL
 */
export function stringifyToUrl(proxy: AnyProxyInfo): string {
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
 * @param {AnyProxyInfo} proxy
 * @return {boolean}
 */
export function isHttp(proxy: AnyProxyInfo): proxy is HttpProxy {
  return proxy.type === "http";
}

/**
 *
 * @param {AnyProxyInfo} proxy
 * @return {boolean}
 */
export function isSocks5(proxy: AnyProxyInfo): proxy is Socks5Proxy {
  return proxy.type === "socks5";
}

/**
 *
 * @param {AnyProxyInfo} proxy
 * @return {boolean}
 */
export function isSocks4(proxy: AnyProxyInfo): proxy is Socks4Proxy {
  return proxy.type === "socks4";
}

/**
 *
 *
 * @export
 * @param {AnyProxyInfo} proxy
 * @return {boolean}  {proxy is HttpsProxy}
 */
export function isHttps(proxy: AnyProxyInfo): proxy is HttpsProxy {
  return proxy.type === "https";
}

/**
 *
 *
 * @export
 * @param {AnyProxyInfo} proxy
 * @return {boolean}  {proxy is HttpLikeProxy}
 */
export function isHttpLike(proxy: AnyProxyInfo): proxy is HttpLikeProxy {
  return isHttp(proxy) || isHttps(proxy);
}

/**
 *
 * @param {AnyProxyInfo} proxy
 * @return {boolean}
 */
export function isSocks(proxy: AnyProxyInfo): proxy is SocksProxy {
  return isSocks5(proxy) || isSocks4(proxy);
}

/**
 *
 *
 * @export
 * @param {AnyProxyInfo} proxy
 * @return {boolean}  {proxy is ProxyInfo}
 */
export function isTyped(proxy: AnyProxyInfo): proxy is ProxyInfo {
  return !!proxy.type;
}

/**
 *
 *
 * @export
 * @param {(string | URL)} line
 * @param {ProxyType} [defaultType]
 * @return {Mutable<ProxyInfo>}  {Mutable<ProxyInfo>}
 */
export function parseRequireType(
  line: string | URL,
  defaultType?: ProxyType
): Mutable<ProxyInfo> {
  const proxy = parse(line);

  if (isTyped(proxy)) {
    return proxy;
  }

  if (defaultType) {
    return { ...proxy, type: defaultType };
  }

  throw new ProxyTypeRequiredError(proxy);
}
