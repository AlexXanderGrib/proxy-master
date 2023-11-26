import { SocksClient, SocksClientOptions } from "socks";
import { SocksProxy } from "./parser";
import { Socket } from "net";

/**
 *
 *
 * @export
 * @param {SocksProxy} proxy
 * @param {string} host
 * @param {number} port
 * @param {Partial<SocksClientOptions>} [options={}]
 * @return {Promise<Socket>}  {Promise<Socket>}
 */
export async function createSocksSocket(
  proxy: SocksProxy,
  host: string,
  port: number,
  options: Partial<SocksClientOptions> = {}
): Promise<Socket> {
  const { socket } = await SocksClient.createConnection({
    command: "connect",
    destination: { host, port },
    proxy: {
      port: proxy.port,
      type: proxy.type === "socks4" ? 4 : 5,
      host: proxy.host,
      userId: proxy.username,
      password: proxy.password
    },
    ...options
  });

  return socket;
}
