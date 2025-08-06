[**Package**](../README.md)

***

[Package](../globals.md) / FileFetcher

# Class: FileFetcher

Defined in: [fetchers/file.ts:49](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/fetchers/file.ts#L49)

## Export

FileFetcher

## Extends

- [`CustomFetcher`](CustomFetcher.md)\<[`FileInfo`](../type-aliases/FileInfo.md)\>

## Constructors

### Constructor

> **new FileFetcher**(`options`): `FileFetcher`

Defined in: [fetchers/file.ts:55](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/fetchers/file.ts#L55)

Creates an instance of FileFetcher.

#### Parameters

##### options

[`FileFetcherOptions`](../type-aliases/FileFetcherOptions.md)

#### Returns

`FileFetcher`

#### Memberof

FileFetcher

#### Overrides

[`CustomFetcher`](CustomFetcher.md).[`constructor`](CustomFetcher.md#constructor)

## Properties

### events

> `readonly` **events**: `EventEmitter`\<[`CustomFetcherEvents`](../type-aliases/CustomFetcherEvents.md), `any`\>

Defined in: [fetchers/custom.ts:80](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/fetchers/custom.ts#L80)

#### Inherited from

[`CustomFetcher`](CustomFetcher.md).[`events`](CustomFetcher.md#events)

***

### options

> `readonly` **options**: [`FileFetcherOptions`](../type-aliases/FileFetcherOptions.md)

Defined in: [fetchers/file.ts:55](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/fetchers/file.ts#L55)

#### Inherited from

[`CustomFetcher`](CustomFetcher.md).[`options`](CustomFetcher.md#options)

## Methods

### \_fetch()

> `protected` **\_fetch**(): `AsyncIterable`\<\[[`Mutable`](../type-aliases/Mutable.md)\<[`ProxyInfo`](../type-aliases/ProxyInfo.md)\>, [`FileInfo`](../type-aliases/FileInfo.md)\]\>

Defined in: [fetchers/custom.ts:143](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/fetchers/custom.ts#L143)

#### Returns

`AsyncIterable`\<\[[`Mutable`](../type-aliases/Mutable.md)\<[`ProxyInfo`](../type-aliases/ProxyInfo.md)\>, [`FileInfo`](../type-aliases/FileInfo.md)\]\>

{Promise<Map<Mutable<ProxyInfo>, T>>}

#### Memberof

CustomFetcher

#### Inherited from

[`<internal>`](../-internal-/README.md).[`_fetch`](../-internal-/functions/fetch-1.md)

***

### \_getFile()

> `private` **\_getFile**(`path`): `Promise`\<`string`\>

Defined in: [fetchers/file.ts:94](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/fetchers/file.ts#L94)

#### Parameters

##### path

`PathLike`

#### Returns

`Promise`\<`string`\>

{Promise<string>}

#### Memberof

FileFetcher

***

### fetch()

> **fetch**(): `Promise`\<`Map`\<[`Mutable`](../type-aliases/Mutable.md)\<[`ProxyInfo`](../type-aliases/ProxyInfo.md)\>, [`FileInfo`](../type-aliases/FileInfo.md)\>\>

Defined in: [fetcher.ts:27](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/fetcher.ts#L27)

#### Returns

`Promise`\<`Map`\<[`Mutable`](../type-aliases/Mutable.md)\<[`ProxyInfo`](../type-aliases/ProxyInfo.md)\>, [`FileInfo`](../type-aliases/FileInfo.md)\>\>

{Promise<Map<K, T>>}

#### Memberof

ProxyFetcher

#### Inherited from

[`<internal>`](../-internal-/README.md).[`fetch`](../-internal-/functions/fetch-2.md)

***

### get()

> **get**(`filter?`): `Map`\<[`Mutable`](../type-aliases/Mutable.md)\<[`ProxyInfo`](../type-aliases/ProxyInfo.md)\>, [`FileInfo`](../type-aliases/FileInfo.md)\>

Defined in: [fetcher.ts:65](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/fetcher.ts#L65)

#### Parameters

##### filter?

[`ProxyType`](../type-aliases/ProxyType.md) | (`proxy`, `info`) => `boolean`

#### Returns

`Map`\<[`Mutable`](../type-aliases/Mutable.md)\<[`ProxyInfo`](../type-aliases/ProxyInfo.md)\>, [`FileInfo`](../type-aliases/FileInfo.md)\>

{Map<K, T>}

#### Memberof

ProxyFetcher

#### Inherited from

[`<internal>`](../-internal-/README.md).[`get`](../-internal-/functions/get.md)

***

### random()

> **random**(`filter?`): `undefined` \| \[[`Mutable`](../type-aliases/Mutable.md)\<[`ProxyInfo`](../type-aliases/ProxyInfo.md)\>, [`FileInfo`](../type-aliases/FileInfo.md)\]

Defined in: [fetcher.ts:85](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/fetcher.ts#L85)

#### Parameters

##### filter?

[`ProxyType`](../type-aliases/ProxyType.md) | (`proxy`, `info`) => `boolean`

#### Returns

`undefined` \| \[[`Mutable`](../type-aliases/Mutable.md)\<[`ProxyInfo`](../type-aliases/ProxyInfo.md)\>, [`FileInfo`](../type-aliases/FileInfo.md)\]

{([K, T] | undefined)}

#### Memberof

ProxyFetcher

#### Inherited from

[`<internal>`](../-internal-/README.md).[`random`](../-internal-/functions/random.md)

***

### refetchOnInterval()

> **refetchOnInterval**(`timeout`, `signal?`): () => `void`

Defined in: [fetcher.ts:47](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/fetcher.ts#L47)

#### Parameters

##### timeout

`number`

##### signal?

`AbortSignal`

#### Returns

> (): `void`

##### Returns

`void`

#### Memberof

ProxyFetcher

#### Inherited from

[`<internal>`](../-internal-/README.md).[`refetchOnInterval`](../-internal-/functions/refetchOnInterval.md)

***

### toJSON()

> **toJSON**(): `object`

Defined in: [fetcher.ts:98](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/fetcher.ts#L98)

#### Returns

`object`

##### proxies

> **proxies**: `object`[]

##### type

> **type**: `string`

#### Memberof

ProxyFetcher

#### Inherited from

[`<internal>`](../-internal-/README.md).[`toJSON`](../-internal-/functions/toJSON.md)
