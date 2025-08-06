/* eslint-disable unicorn/no-null */
import { Agent, type Dispatcher, ProxyAgent, buildConnector } from "undici";
import { isHttpLike, isSocks, type ProxyInfo } from "./parser";
import { createSocksSocket } from "./socks";
import { ProxyTypeRequiredError } from "./errors";

/**
 *
 *
 * @export
 * @param {ProxyInfo} proxy
 * @param {buildConnector.BuildOptions} [connectorOptions={}]
 * @return {Dispatcher}  {Dispatcher}
 */
export function getDispatcher(
  proxy: ProxyInfo,
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
        const { httpSocket, hostname, port, protocol } = options;
        let socket = httpSocket;

        try {
          socket = await createSocksSocket(
            proxy,
            hostname,
            Number.parseInt(port) || (protocol === "https:" ? 443 : 80),
            { existing_socket: httpSocket }
          );
        } catch (error) {
          callback(error as Error, null);
        }

        if (socket && protocol !== "https:") {
          return callback(null, socket.setNoDelay());
        }

        const connect = buildConnector(connectorOptions);
        return connect({ ...options, httpSocket: socket }, callback);
      }
    });
  }

  throw new ProxyTypeRequiredError(proxy);
}
