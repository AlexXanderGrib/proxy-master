import { type ProxyInfo, stringifyToUrl } from "./parser";
import { ProxyTypeRequiredError } from "./errors";

import type { Agent } from "https";
import { HttpsProxyAgent } from "https-proxy-agent";
import { HttpProxyAgent } from "http-proxy-agent";
import { SocksProxyAgent } from "socks-proxy-agent";
import { ProxyAgent } from "proxy-agent";

/**
 *
 *
 * @export
 * @param {ProxyInfo} proxy
 * @return {*}  {{
 *   httpsAgent: Agent;
 *   httpAgent: Agent;
 * }}
 */
export function getAgents(proxy: ProxyInfo): {
  httpsAgent: Agent;
  httpAgent: Agent;
} {
  const url = stringifyToUrl(proxy);

  switch (proxy.type) {
    case "http":
    case "https": {
      return {
        httpAgent: new HttpProxyAgent(url),
        httpsAgent: new HttpsProxyAgent(url)
      };
    }

    case "socks4":
    case "socks5": {
      const agent = new SocksProxyAgent(url);
      return { httpAgent: agent, httpsAgent: agent };
    }

    default: {
      throw new ProxyTypeRequiredError(proxy);
    }
  }
}

/**
 *
 * @param {ProxyInfo} proxy
 * @return {Agent}
 */
export function getAgent(proxy: ProxyInfo): Agent {
  return new ProxyAgent(getAgents(proxy));
}
