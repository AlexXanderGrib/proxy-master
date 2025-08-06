import { describe, test, expect } from "vitest";
import { type AnyProxyInfo, parse, stringifyToUrl } from "../parser";

describe("Proxy parser", () => {
  const toParse: Record<string, AnyProxyInfo> = {
    "socks://pupa:lupa@[::]:300": {
      host: "[::]",
      port: 300,
      username: "pupa",
      password: "lupa",
      type: "socks5"
    },

    "pupa:lupa@localhost:300": {
      host: "localhost",
      port: 300,
      username: "pupa",
      password: "lupa"
    },

    "8.8.105.8:62627:forjfrifmr:391432974139": {
      host: "8.8.105.8",
      port: 62_627,
      username: "forjfrifmr",
      password: "391432974139"
    },

    "forjfrifmr:391432974139:8.8.105.8:62627": {
      host: "8.8.105.8",
      port: 62_627,
      username: "forjfrifmr",
      password: "391432974139"
    },

    "8.8.105.8:62627@forjfrifmr:391432974139": {
      host: "8.8.105.8",
      port: 62_627,
      username: "forjfrifmr",
      password: "391432974139"
    },

    "bank.ru:8080": {
      host: "bank.ru",
      port: 8080
    }
  };

  for (const [line, result] of Object.entries(toParse)) {
    test(`should parse "${line}"`, () =>
      expect(parse(line)).toStrictEqual(result));
  }

  test("should throw error if cant parse", () => {
    expect(() => parse("shit")).toThrow(/Invalid proxy format/);
  });

  const toStringify: Record<string, AnyProxyInfo> = {
    "proxy://bank.ru:8080": {
      host: "bank.ru",
      port: 8080
    },

    "socks5://pupa:lupa@[::]:300": {
      host: "[::]",
      port: 300,
      username: "pupa",
      password: "lupa",
      type: "socks5"
    }
  };

  for (const [url, proxy] of Object.entries(toStringify)) {
    test(`should stringify to "${url}"`, () =>
      expect(stringifyToUrl(proxy)).toStrictEqual(url));
  }
});
