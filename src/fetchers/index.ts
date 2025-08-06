import { ProxyFetcher } from "../fetcher";
import { type CombinedFetcherOptions, CombinedFetcher } from "./combine";
import {
  CustomFetcher,
  type CustomFetcherFetch,
  type CustomFetcherOptions
} from "./custom";
import { FileFetcher, type FileFetcherOptions } from "./file";
import { Proxy6Fetcher, type Proxy6FetcherOptions } from "./proxy6";
import { ProxyLineFetcher, type ProxyLineFetcherOptions } from "./proxyline";

/**
 *
 *
 * @param {string[]} urls
 * @return {*}
 */
function urls(urls: (string | ProxyFetcher<unknown>)[]) {
  return new CombinedFetcher({
    fetchers: urls.map((url) =>
      url instanceof ProxyFetcher ? url : new FileFetcher({ path: url })
    )
  });
}

export const fetchers = Object.freeze({
  file: (options: FileFetcherOptions) => new FileFetcher(options),
  proxyLine: (options: ProxyLineFetcherOptions) =>
    new ProxyLineFetcher(options),
  proxy6: (options: Proxy6FetcherOptions) => new Proxy6Fetcher(options),
  combine: (options: CombinedFetcherOptions) => new CombinedFetcher(options),
  custom: <T = never>(
    fetch: CustomFetcherFetch<T>,
    options?: CustomFetcherOptions
  ) => new CustomFetcher(fetch, options),

  urls,
  freeFromGithub: (options: CustomFetcherOptions = {}) =>
    new CombinedFetcher({
      fetchers: [
        fetchers.file({
          path: [
            "https://github.com/im-razvan/proxy_list/raw/main/http.txt",
            "https://github.com/casals-ar/proxy-list/raw/main/http",
            "https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt",
            "https://github.com/elliottophellia/yakumo/raw/master/results/http/global/http_checked.txt",
            "https://github.com/prxchk/proxy-list/raw/main/http.txt",
            "https://github.com/proxifly/free-proxy-list/raw/main/proxies/protocols/http/data.txt",
            "https://github.com/mmpx12/proxy-list/raw/master/http.txt",
            "https://github.com/proxy4parsing/proxy-list/raw/main/http.txt",
            "https://github.com/casals-ar/proxy-list/raw/main/https",
            "https://github.com/mmpx12/proxy-list/raw/master/https.txt"
          ],
          defaultProxyType: "http",
          ...options
        }),
        fetchers.file({
          path: [
            "https://github.com/casals-ar/proxy-list/raw/main/socks5",
            "https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/socks5.txt",
            "https://github.com/elliottophellia/yakumo/raw/master/results/socks5/global/socks5_checked.txt",
            "https://github.com/prxchk/proxy-list/raw/main/socks5.txt",
            "https://github.com/proxifly/free-proxy-list/raw/main/proxies/protocols/socks5/data.txt",
            "https://github.com/mmpx12/proxy-list/raw/master/socks5.txt"
          ],
          defaultProxyType: "socks5",
          ...options
        }),
        fetchers.file({
          path: [
            "https://github.com/casals-ar/proxy-list/raw/main/socks4",
            "https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/socks4.txt",
            "https://github.com/elliottophellia/yakumo/raw/master/results/socks4/global/socks4_checked.txt",
            "https://github.com/prxchk/proxy-list/raw/main/socks4.txt",
            "https://github.com/proxifly/free-proxy-list/raw/main/proxies/protocols/socks4/data.txt",
            "https://github.com/mmpx12/proxy-list/raw/master/socks4.txt"
          ],
          defaultProxyType: "socks4",
          ...options
        })
      ]
    })
});
