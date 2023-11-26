import { check } from "../checker";
import { validHttp, validSocks, validUnknownSocks, invalid } from "./proxies";

describe("Proxy checker", () => {
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
    const result = await check(validUnknownSocks, { parallel: false });
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
      await check(invalid, { parallel: false, timeout: 200 });
      fail("Expected to fail with error");
    } catch {
      // expected to fail
    }
  });

  test("Invalid (sequential check)", async () => {
    try {
      await check(invalid, { parallel: false, timeout: 200 });
      fail("Expected to fail with error");
    } catch {
      // expected to fail
    }
  });
});
