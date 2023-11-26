import { FileFetcher, FileFetcherOptions } from "./file";
import { Proxy6Fetcher, Proxy6FetcherOptions } from "./proxy6";
import { ProxyLineFetcher, ProxyLineFetcherOptions } from "./proxyline";

export const fetchers = Object.freeze({
  file: (options: FileFetcherOptions) => new FileFetcher(options),
  proxyLine: (options: ProxyLineFetcherOptions) =>
    new ProxyLineFetcher(options),
  proxy6: (options: Proxy6FetcherOptions) => new Proxy6Fetcher(options)
});
