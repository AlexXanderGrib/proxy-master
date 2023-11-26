/* eslint-disable unicorn/no-null */
import { Agent, Dispatcher, ProxyAgent, buildConnector } from "undici";
import { isHttpLike, isSocks, TypedProxyInfo } from "./parser";
import { createSocksSocket } from "./socks";
import { ProxyTypeRequiredError } from "./errors";

/**
 *
 *
 * @export
 * @param {TypedProxyInfo} proxy
 * @param {buildConnector.BuildOptions} [connectorOptions={}]
 * @return {Dispatcher}  {Dispatcher}
 */
export function getDispatcher(
  proxy: TypedProxyInfo,
  connectorOptions: buildConnector.BuildOptions = {}
): Dispatcher {
  if (isHttpLike(proxy)) {
    return new ProxyAgent({
      uri: `${proxy.type}://${proxy.host}:${proxy.port}`,
      token:
        proxy.username || proxy.password
          ? `Basic ${Buffer.from(
              `${proxy.username}:${proxy.password}`
            ).toString("base64")}`
          : undefined
    });
  }

  if (isSocks(proxy)) {
    return new Agent({
      connect: async (options, callback) => {
        let { httpSocket, hostname, port, protocol } = options;

        try {
          httpSocket = await createSocksSocket(
            proxy,
            hostname,
            Number.parseInt(port) || (protocol === "https:" ? 443 : 80),
            { existing_socket: httpSocket }
          );
        } catch (error) {
          callback(error as Error, null);
        }

        if (httpSocket && protocol !== "https:") {
          return callback(null, httpSocket.setNoDelay());
        }

        const connect = buildConnector(connectorOptions);
        return connect({ ...options, httpSocket }, callback);
      }
    });
  }

  throw new ProxyTypeRequiredError(proxy);
}
