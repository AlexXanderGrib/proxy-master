import { Mutable, AnyProxyInfo, ProxyInfo, ProxyType, isTyped } from "./parser";
import { getAgent } from "./agent";

import axios from "axios";
import { ParallelMapOptions, getMultiTryResult, parallelMap } from "./parallel";

export type CheckedProxy = Mutable<ProxyInfo> & {
  timeout: number;
};
const proxyTypes: ProxyType[] = ["socks5", "http"];

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
    url: checkingUrl = "https://google.com",
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

    const agent = getAgent(proxy);

    try {
      await axios.get(checkingUrl, {
        signal,
        timeout,
        cancelToken,
        httpAgent: agent,
        httpsAgent: agent
      });
    } finally {
      agent.destroy();

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
