[**Package**](../README.md)

***

[Package](../globals.md) / Proxy6Fetcher

# Class: Proxy6Fetcher

Defined in: [fetchers/proxy6.ts:64](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/fetchers/proxy6.ts#L64)

## Export

Proxy6Fetcher

## Extends

- [`ProxyFetcher`](ProxyFetcher.md)\<[`Proxy6Info`](../type-aliases/Proxy6Info.md)\>

## Constructors

### Constructor

> **new Proxy6Fetcher**(`options`): `Proxy6Fetcher`

Defined in: [fetchers/proxy6.ts:72](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/fetchers/proxy6.ts#L72)

Creates an instance of Proxy6Fetcher.

#### Parameters

##### options

[`Proxy6FetcherOptions`](../type-aliases/Proxy6FetcherOptions.md)

#### Returns

`Proxy6Fetcher`

#### Memberof

Proxy6Fetcher

#### Overrides

[`ProxyFetcher`](ProxyFetcher.md).[`constructor`](ProxyFetcher.md#constructor)

## Properties

### \_axios

> `private` `readonly` **\_axios**: `Axios`

Defined in: [fetchers/proxy6.ts:65](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/fetchers/proxy6.ts#L65)

***

### options

> `readonly` **options**: [`Proxy6FetcherOptions`](../type-aliases/Proxy6FetcherOptions.md)

Defined in: [fetchers/proxy6.ts:72](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/fetchers/proxy6.ts#L72)

## Methods

### \_fetch()

> `protected` **\_fetch**(): `Promise`\<`Map`\<[`ProxyInfo`](../type-aliases/ProxyInfo.md), [`Proxy6Info`](../type-aliases/Proxy6Info.md)\>\>

Defined in: [fetchers/proxy6.ts:90](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/fetchers/proxy6.ts#L90)

#### Returns

`Promise`\<`Map`\<[`ProxyInfo`](../type-aliases/ProxyInfo.md), [`Proxy6Info`](../type-aliases/Proxy6Info.md)\>\>

{Promise<Map<ProxyInfo, Proxy6Info>>}

#### Memberof

Proxy6Fetcher

#### Overrides

[`<internal>`](../-internal-/README.md).[`_fetch`](../-internal-/functions/fetch.md)

***

### fetch()

> **fetch**(): `Promise`\<`Map`\<[`Mutable`](../type-aliases/Mutable.md)\<[`ProxyInfo`](../type-aliases/ProxyInfo.md)\>, [`Proxy6Info`](../type-aliases/Proxy6Info.md)\>\>

Defined in: [fetcher.ts:27](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/fetcher.ts#L27)

#### Returns

`Promise`\<`Map`\<[`Mutable`](../type-aliases/Mutable.md)\<[`ProxyInfo`](../type-aliases/ProxyInfo.md)\>, [`Proxy6Info`](../type-aliases/Proxy6Info.md)\>\>

{Promise<Map<K, T>>}

#### Memberof

ProxyFetcher

#### Inherited from

[`<internal>`](../-internal-/README.md).[`fetch`](../-internal-/functions/fetch-2.md)

***

### get()

> **get**(`filter?`): `Map`\<[`Mutable`](../type-aliases/Mutable.md)\<[`ProxyInfo`](../type-aliases/ProxyInfo.md)\>, [`Proxy6Info`](../type-aliases/Proxy6Info.md)\>

Defined in: [fetcher.ts:65](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/fetcher.ts#L65)

#### Parameters

##### filter?

[`ProxyType`](../type-aliases/ProxyType.md) | (`proxy`, `info`) => `boolean`

#### Returns

`Map`\<[`Mutable`](../type-aliases/Mutable.md)\<[`ProxyInfo`](../type-aliases/ProxyInfo.md)\>, [`Proxy6Info`](../type-aliases/Proxy6Info.md)\>

{Map<K, T>}

#### Memberof

ProxyFetcher

#### Inherited from

[`<internal>`](../-internal-/README.md).[`get`](../-internal-/functions/get.md)

***

### random()

> **random**(`filter?`): `undefined` \| \[[`Mutable`](../type-aliases/Mutable.md)\<[`ProxyInfo`](../type-aliases/ProxyInfo.md)\>, [`Proxy6Info`](../type-aliases/Proxy6Info.md)\]

Defined in: [fetcher.ts:85](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/fetcher.ts#L85)

#### Parameters

##### filter?

[`ProxyType`](../type-aliases/ProxyType.md) | (`proxy`, `info`) => `boolean`

#### Returns

`undefined` \| \[[`Mutable`](../type-aliases/Mutable.md)\<[`ProxyInfo`](../type-aliases/ProxyInfo.md)\>, [`Proxy6Info`](../type-aliases/Proxy6Info.md)\]

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

### setType()

> **setType**(`type`, `ids`): `Promise`\<`void`\>

Defined in: [fetchers/proxy6.ts:132](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/fetchers/proxy6.ts#L132)

#### Parameters

##### type

`"http"` | `"socks"`

##### ids

`string`[]

#### Returns

`Promise`\<`void`\>

{Promise<void>}

#### Memberof

Proxy6Fetcher

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
