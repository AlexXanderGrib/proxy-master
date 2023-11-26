import chains from "proxy-chain";
import { HttpLikeProxy, isHttp, parse, stringifyToUrl } from "./parser";

/**
 *
 * @param {HttpLikeProxy} proxy
 * @param {*} [options]
 * @return {Promise<HttpLikeProxy>}
 */
export async function anonymizeProxy(
  proxy: HttpLikeProxy,
  { localPort = 0 } = {}
): Promise<HttpLikeProxy> {
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
 * @param {HttpLikeProxy} proxy
 * @param {*} [options]
 * @return {Promise<void>}  {Promise<void>}
 */
export async function closeAnonymizedProxy(
  proxy: HttpLikeProxy,
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
