import "dotenv/config";
import { fetchers } from "../fetchers";

describe("Fetchers", () => {
  describe("ProxyLine", () => {
    const fetcher = fetchers.proxyLine({
      apiKey: process.env.PROXYLINE_API_KEY as string
    });

    test("should fetch proxies", async () => {
      const proxies = await fetcher.fetch();
      expect(proxies.size).toBeGreaterThan(0);
    });
  });

  describe("Proxy6", () => {
    const fetcher = fetchers.proxy6({
      apiKey: process.env.PROXY6_API_KEY as string
    });

    test("should fetch proxies", async () => {
      const proxies = await fetcher.fetch();
      expect(proxies.size).toBeGreaterThan(0);
    });
  });

  describe("File", () => {
    const fetcher = fetchers.file({
      path: "./proxy.txt",
      check: false,
      defaultProxyType: "http"
    });

    test("should fetch proxies", async () => {
      const proxies = await fetcher.fetch();

      expect([...proxies]).toStrictEqual([
        [
          {
            host: "localhost",
            port: 300,
            username: "pupa",
            password: "lupa",
            type: "http"
          } as any,

          {
            line: "pupa:lupa@localhost:300"
          }
        ]
      ]);
    });
  });

  describe("Combine", () => {
    const fetcher = fetchers.combine({
      fetchers: [
        fetchers.file({
          path: "https://raw.githubusercontent.com/proxifly/free-proxy-list/main/proxies/all/data.txt",
          check: false
        }),
        fetchers.file({
          path: "https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt",
          defaultProxyType: "http",
          check: false
        }),
        fetchers.file({
          path: "https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/socks4.txt",
          defaultProxyType: "socks4",
          check: false
        }),
        fetchers.file({
          path: "https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/socks5.txt",
          defaultProxyType: "socks5",
          check: false
        })
      ]
    });

    test("should fetch proxies from github", async () => {
      const proxies = await fetcher.fetch();

      expect(proxies.size).toBeGreaterThan(0);
    });
  });
});
