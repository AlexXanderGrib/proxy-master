import "dotenv/config";
import { check } from "../checker";
import { ProxyInfo, parse } from "../parser";

describe("Proxy checker", () => {
  const validHttp = parse(process.env.VALID_HTTP_PROXY!);
  const validSocks = parse(process.env.VALID_SOCKS_PROXY!);
  const validUnknownSocks = parse(process.env.VALID_SOCKS_PROXY!);
  delete validUnknownSocks.type;

  const invalid: ProxyInfo = { host: "undefined", port: 3 };

  test("Valid HTTP", async () => {
    const result = await check(validHttp);
    expect(result).toHaveProperty("timeout");
  });

  test("Valid SOCKS", async () => {
    const result = await check(validSocks);
    expect(result).toHaveProperty("timeout");
  });

  test("Valid unknown", async () => {
    const result = await check(validUnknownSocks);
    expect(result).toHaveProperty("timeout");
    expect(result.type).toBe("socks5");
  });

  test("Valid unknown (sequential check)", async () => {
    const result = await check(validUnknownSocks, { allowParallel: false });
    expect(result).toHaveProperty("timeout");
    expect(result.type).toBe("socks5");
  });

  test("Valid unknown (no heuristics)", async () => {
    try {
      await check(validUnknownSocks, { allowHeuristics: false });
      fail("Expected to fail with error");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(String(error)).toContain("allowHeuristics");
    }
  });

  test("Invalid", async () => {
    try {
      await check(invalid, { allowParallel: false, timeout: 200 });
      fail("Expected to fail with error");
    } catch {
      // expected to fail
    }
  });

  test("Invalid (sequential check)", async () => {
    try {
      await check(invalid, { allowParallel: false, timeout: 200 });
      fail("Expected to fail with error");
    } catch {
      // expected to fail
    }
  });
});
