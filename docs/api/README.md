Package / [Exports](modules.md)

# Proxy Master

> Node.JS proxy toolkit: Fetch, check, connect

[![Test Status](https://github.com/AlexXanderGrib/proxy-master/actions/workflows/test.yml/badge.svg)](https://github.com/AlexXanderGrib/proxy-master)
[![Downloads](https://img.shields.io/npm/dt/proxy-master.svg)](https://npmjs.com/package/proxy-master)
[![last commit](https://img.shields.io/github/last-commit/AlexXanderGrib/proxy-master.svg)](https://github.com/AlexXanderGrib/proxy-master)
[![codecov](https://img.shields.io/codecov/c/github/AlexXanderGrib/proxy-master/main.svg)](https://codecov.io/gh/AlexXanderGrib/proxy-master)
[![GitHub](https://img.shields.io/github/stars/AlexXanderGrib/proxy-master.svg)](https://github.com/AlexXanderGrib/proxy-master)
[![proxy-master](https://snyk.io/advisor/npm-package/proxy-master/badge.svg)](https://snyk.io/advisor/npm-package/proxy-master)
[![Known Vulnerabilities](https://snyk.io/test/npm/proxy-master/badge.svg)](https://snyk.io/test/npm/proxy-master)
[![Quality](https://img.shields.io/npms-io/quality-score/proxy-master.svg?label=quality%20%28npms.io%29&)](https://npms.io/search?q=proxy-master)
[![npm](https://img.shields.io/npm/v/proxy-master.svg)](https://npmjs.com/package/proxy-master)
[![license MIT](https://img.shields.io/npm/l/proxy-master.svg)](https://github.com/AlexXanderGrib/proxy-master/blob/main/LICENSE.txt)
[![Size](https://img.shields.io/bundlephobia/minzip/proxy-master)](https://bundlephobia.com/package/proxy-master)

## 📦 Installation

- **Using `npm`**
  ```shell
  npm i proxy-master
  ```
- **Using `Yarn`**
  ```shell
  yarn add proxy-master
  ```
- **Using `pnpm`**
  ```shell
  pnpm add proxy-master
  ```

## ⚙️ Usage

```javascript
import { fetchers, getAgent, isSocks, getDispatcher } from "proxy-master";

const fetcher = fetchers.combine({
  fetchers: [
    fetchers.file({ path: "./proxy.txt" }),

    // Get some free ones from github
    fetchers.file({ path: "https://raw.githubusercontent.com/proxifly/free-proxy-list/main/proxies/all/data.txt" }),
    fetchers.file({ path: "https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt", defaultProxyType: "http" }),
    fetchers.file({ path: "https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/socks4.txt", defaultProxyType: "socks4" }),
    fetchers.file({ path: "https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/socks5.txt", defaultProxyType: "socks5" }),
  ]
});

// fetch proxies initially
await fetcher.fetch();

// refetch every 5 minutes
fetcher.refetchOnInterval(300_000);

// get random proxy
const proxy = fetcher.random();

// create custom agent
const agent = getAgent(proxy);

{
  // fetch with native (node.js fetch/undici)
  await fetch("https://example.com", { dispatcher: getDispatcher(proxy) })
}

{
  // fetch directly (node-fetch)
  await fetch("https://example.com", { agent });
}

{
  // create new vk
  const vk = new VK({ agent });
}

{
  // use in minecraft bot
  // minecraft protocol is TCP based, to http proxies don't work

  if (!isSocks(proxy)) {
    return;
  }

  const bot = mineflayer.createBot({
    stream: await createSocksSocket(proxy, "play.dicraft.net", 25565)
  });
}
```
