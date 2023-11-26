import { Mutable, ProxyInfo, ProxyType } from "./parser";
import { getAgents } from "./agent";

import axios from "axios";

export type CheckedProxy = Mutable<ProxyInfo> & {
  timeout: number;
  type: ProxyType;
};
const proxyTypes: ProxyType[] = ["socks5", "http"];

/**
 *
 * @param {ProxyInfo} proxy
 * @param {*} options
 * @return {Promise<CheckedProxy>}
 */
export async function check(
  proxy: ProxyInfo,
  {
    url: checkingUrl = "https://google.com",
    timeout = 3000,
    signal = undefined as AbortSignal | undefined,
    allowHeuristics = true,
    allowParallel = true
  } = {}
): Promise<CheckedProxy> {
  if (proxy.type) {
    const start = Date.now();

    let timeoutObject: ReturnType<typeof setTimeout> | undefined;

    if (!signal && timeout) {
      const abortController = new AbortController();
      signal = abortController.signal;

      timeoutObject = setTimeout(() => abortController.abort(), timeout);
    }

    const cancelToken = new axios.CancelToken((cancel) => {
      signal?.addEventListener("abort", () => cancel("Aborted"));
    });

    const { httpAgent, httpsAgent } = getAgents(proxy);

    try {
      await axios.get(checkingUrl, {
        signal,
        timeout,
        cancelToken,
        httpAgent,
        httpsAgent
      });
    } finally {
      httpAgent.destroy();
      httpsAgent.destroy();

      if (timeoutObject) {
        clearTimeout(timeoutObject);
      }
    }

    const diff = Date.now() - start;

    return { ...proxy, timeout: diff, type: proxy.type };
  }

  if (!allowHeuristics) {
    throw new Error(
      "Proxy type is not defined. You can enable guessing by setting allowHeuristics to true"
    );
  }

  if (allowParallel) {
    return await Promise.any(
      proxyTypes.map(async (type) => await check({ ...proxy, type }))
    );
  }

  let errorToThrow: unknown;

  for (const type of proxyTypes) {
    try {
      return await check({ ...proxy, type });
    } catch (error) {
      errorToThrow = error;
    }
  }

  throw errorToThrow;
}
