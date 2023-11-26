import undici from "undici";
import { getDispatcher } from "../undici";
import { validHttp, validSocks } from "./proxies";
import { getAgent, getAgents } from "../agent";
import axios from "axios";
import nodeFetch from "node-fetch";

const IP_URL = "https://ifconfig.me/ip";

describe("undici", () => {
  test("should connect through https", async () => {
    const dispatcher = getDispatcher(validHttp);

    const response = await undici.fetch(IP_URL, { dispatcher });
    const text = await response.text();

    expect(text).toBe(validHttp.host);
  });

  test("should connect through socks", async () => {
    const dispatcher = getDispatcher(validSocks);

    const response = await undici.fetch(IP_URL, { dispatcher });
    const text = await response.text();

    expect(text).toBe(validSocks.host);
  });
});

describe("axios", () => {
  test("should connect through https", async () => {
    const { data } = await axios.get(IP_URL, getAgents(validHttp));
    expect(data).toBe(validHttp.host);
  });

  test("should connect through socks", async () => {
    const { data } = await axios.get(IP_URL, getAgents(validSocks));
    expect(data).toBe(validSocks.host);
  });

  test("should connect through https (w/proxy-agent)", async () => {
    const { data } = await axios.get(IP_URL, {
      httpsAgent: getAgent(validHttp)
    });
    expect(data).toBe(validHttp.host);
  });

  test("should connect through socks (w/proxy-agent)", async () => {
    const { data } = await axios.get(IP_URL, {
      httpsAgent: getAgent(validHttp)
    });
    expect(data).toBe(validSocks.host);
  });
});

describe("node-fetch", () => {
  test("should connect through https", async () => {
    const response = await nodeFetch(IP_URL, { agent: getAgent(validHttp) });
    const text = await response.text();

    expect(text).toBe(validHttp.host);
  });

  test("should connect through socks", async () => {
    const response = await nodeFetch(IP_URL, { agent: getAgent(validSocks) });
    const text = await response.text();

    expect(text).toBe(validSocks.host);
  });
});

if (typeof fetch !== "undefined") {
  describe("node.js fetch", () => {
    test("should connect through https", async () => {
      const dispatcher = getDispatcher(validHttp);

      const response = await fetch(IP_URL, { dispatcher });
      const text = await response.text();

      expect(text).toBe(validHttp.host);
    });

    test("should connect through socks", async () => {
      const dispatcher = getDispatcher(validSocks);

      const response = await fetch(IP_URL, { dispatcher });
      const text = await response.text();

      expect(text).toBe(validSocks.host);
    });
  });
}
