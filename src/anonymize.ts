import chains from "proxy-chain";
import { HttpProxy, isHttp, parse, stringifyToUrl } from "./parser";

/**
 *
 * @param {HttpProxy} proxy
 * @param {*} [options]
 * @return {Promise<HttpProxy>}
 */
export async function anonymizeProxy(
  proxy: HttpProxy,
  { localPort = 0 } = {}
): Promise<HttpProxy> {
  const url = await chains.anonymizeProxy({
    port: localPort,
    url: stringifyToUrl(proxy)
  });

  const result = parse(url);

  if (!isHttp(result)) {
    throw new Error("This should not happen");
  }

  return result;
}

/**
 *
 *
 * @export
 * @param {HttpProxy} proxy
 * @param {*} [options]
 * @return {Promise<void>}  {Promise<void>}
 */
export async function closeAnonymizedProxy(
  proxy: HttpProxy,
  { closeConnections = true } = {}
): Promise<void> {
  const result = await chains.closeAnonymizedProxy(
    stringifyToUrl(proxy),
    closeConnections
  );

  if (!result) {
    throw new Error("Unable to close proxy: proxy was not open");
  }
}
