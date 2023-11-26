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
      autoCheck: false,
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
            line: "pupa:lupa@localhost:300",
            lineIndex: 1
          }
        ]
      ]);
    });
  });
});
