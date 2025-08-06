import "dotenv/config";
import { fetchers } from "../fetchers";
import { describe, expect, test } from "vitest";

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

    test.todo("should fetch proxies", async () => {
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
    let total = 0;
    const fetcher = fetchers.freeFromGithub({
      checkTimeout: 1000,
      filter: () => ++total < 100
    });

    test("should fetch proxies from github", async () => {
      const proxies = await fetcher.fetch();
      expect(proxies.size).toBeGreaterThan(0);
    }, 10_000);
  });
});
