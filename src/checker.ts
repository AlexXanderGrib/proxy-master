import { type Mutable, type AnyProxyInfo, type ProxyInfo, type ProxyType, isTyped } from "./parser";
import { getAgents } from "./agent";

import axios from "axios";
import { type ParallelMapOptions, getMultiTryResult, parallelMap } from "./parallel";

export type CheckedProxy = Mutable<ProxyInfo> & {
  timeout: number;
};
const proxyTypes: ProxyType[] = ["socks5", "http", "https", "socks4"];

export type CheckerOptions = {
  url?: string;
  timeout?: number;
  signal?: AbortSignal;
  allowHeuristics?: boolean;
} & ParallelMapOptions;

/**
 *
 * @param {AnyProxyInfo} proxy
 * @param {CheckerOptions} options
 * @return {Promise<CheckedProxy>}
 */
export async function check(
  proxy: AnyProxyInfo,
  {
    url: checkingUrl = "http://example.com",
    timeout = 3000,
    signal = undefined as AbortSignal | undefined,
    allowHeuristics = true,
    parallel = true
  }: CheckerOptions = {}
): Promise<CheckedProxy> {
  if (isTyped(proxy)) {
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
        httpsAgent,
        validateStatus: (status) => status !== 407
      });
    } finally {
      httpAgent.destroy();
      httpsAgent.destroy();

      if (timeoutObject) {
        clearTimeout(timeoutObject);
      }
    }

    const diff = Date.now() - start;
    return { ...proxy, timeout: diff };
  }

  if (!allowHeuristics) {
    throw new Error(
      "Proxy type is not defined. You can enable guessing by setting allowHeuristics to true"
    );
  }

  const results = await parallelMap(
    proxyTypes,
    (type) => check({ ...proxy, type }),
    { parallel }
  );

  return getMultiTryResult(results);
}
