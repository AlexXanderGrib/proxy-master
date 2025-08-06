import { describe, test, expect } from "vitest";

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
    const promise = check(validUnknownSocks, { allowHeuristics: false });
    await expect(promise).rejects.toThrowErrorMatchingInlineSnapshot(
      `[Error: Proxy type is not defined. You can enable guessing by setting allowHeuristics to true]`
    );
  });

  test("Invalid", async () => {
    const promise = check(invalid, { parallel: false, timeout: 200 });
    await expect(promise).rejects.toThrowError();
  });

  test("Invalid (sequential check)", async () => {
    const promise = check(invalid, { parallel: false, timeout: 200 });
    await expect(promise).rejects.toThrowError();
  });
});
