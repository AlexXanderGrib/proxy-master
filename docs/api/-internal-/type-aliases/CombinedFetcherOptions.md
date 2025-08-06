[**Package**](../../README.md)

***

[Package](../../globals.md) / [\<internal\>](../README.md) / CombinedFetcherOptions

# Type Alias: CombinedFetcherOptions

> **CombinedFetcherOptions** = `object` & [`ParallelMapOptions`](../../type-aliases/ParallelMapOptions.md)

Defined in: [fetchers/combine.ts:5](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/fetchers/combine.ts#L5)

## Type declaration

### allowFetch?

> `readonly` `optional` **allowFetch**: `boolean`

- `true` - use fetcher.fetch() - to fetch proxies
- `false` - use fetcher.get() - to get only cached proxies

#### Default

```ts
true
```

### fetchers?

> `readonly` `optional` **fetchers**: [`ProxyFetcher`](../../classes/ProxyFetcher.md)\<`unknown`\>[]
