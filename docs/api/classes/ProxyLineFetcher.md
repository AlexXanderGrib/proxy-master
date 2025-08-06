[**Package**](../README.md)

***

[Package](../globals.md) / ProxyLineFetcher

# Class: ProxyLineFetcher

Defined in: [fetchers/proxyline.ts:111](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetchers/proxyline.ts#L111)

## Export

ProxyLineFetcher

## Extends

- [`ProxyFetcher`](ProxyFetcher.md)\<[`ProxyLineInfo`](../type-aliases/ProxyLineInfo.md), [`ProxyPair`](ProxyPair.md)\>

## Constructors

### Constructor

> **new ProxyLineFetcher**(`options`): `ProxyLineFetcher`

Defined in: [fetchers/proxyline.ts:119](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetchers/proxyline.ts#L119)

Creates an instance of ProxyLineFetcher.

#### Parameters

##### options

[`ProxyLineFetcherOptions`](../type-aliases/ProxyLineFetcherOptions.md)

#### Returns

`ProxyLineFetcher`

#### Memberof

ProxyLineFetcher

#### Overrides

[`ProxyFetcher`](ProxyFetcher.md).[`constructor`](ProxyFetcher.md#constructor)

## Properties

### \_axios

> `private` `readonly` **\_axios**: `Axios`

Defined in: [fetchers/proxyline.ts:112](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetchers/proxyline.ts#L112)

***

### options

> `readonly` **options**: [`ProxyLineFetcherOptions`](../type-aliases/ProxyLineFetcherOptions.md)

Defined in: [fetchers/proxyline.ts:119](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetchers/proxyline.ts#L119)

## Methods

### \_fetch()

> `protected` **\_fetch**(): `Promise`\<`Map`\<[`ProxyPair`](ProxyPair.md), [`ProxyLineInfo`](../type-aliases/ProxyLineInfo.md)\>\>

Defined in: [fetchers/proxyline.ts:148](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetchers/proxyline.ts#L148)

#### Returns

`Promise`\<`Map`\<[`ProxyPair`](ProxyPair.md), [`ProxyLineInfo`](../type-aliases/ProxyLineInfo.md)\>\>

{Promise<Map<ProxyPair, ProxyLineInfo>>}

#### Memberof

ProxyLineFetcher

#### Overrides

[`<internal>`](../-internal-/README.md).[`_fetch`](../-internal-/functions/fetch.md)

***

### fetch()

> **fetch**(): `Promise`\<`Map`\<[`ProxyPair`](ProxyPair.md), [`ProxyLineInfo`](../type-aliases/ProxyLineInfo.md)\>\>

Defined in: [fetcher.ts:27](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetcher.ts#L27)

#### Returns

`Promise`\<`Map`\<[`ProxyPair`](ProxyPair.md), [`ProxyLineInfo`](../type-aliases/ProxyLineInfo.md)\>\>

{Promise<Map<K, T>>}

#### Memberof

ProxyFetcher

#### Inherited from

[`<internal>`](../-internal-/README.md).[`fetch`](../-internal-/functions/fetch-2.md)

***

### get()

> **get**(`filter?`): `Map`\<[`ProxyPair`](ProxyPair.md), [`ProxyLineInfo`](../type-aliases/ProxyLineInfo.md)\>

Defined in: [fetcher.ts:65](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetcher.ts#L65)

#### Parameters

##### filter?

[`ProxyType`](../type-aliases/ProxyType.md) | (`proxy`, `info`) => `boolean`

#### Returns

`Map`\<[`ProxyPair`](ProxyPair.md), [`ProxyLineInfo`](../type-aliases/ProxyLineInfo.md)\>

{Map<K, T>}

#### Memberof

ProxyFetcher

#### Inherited from

[`<internal>`](../-internal-/README.md).[`get`](../-internal-/functions/get.md)

***

### getBalance()

> **getBalance**(): `Promise`\<[`ProxyLineGetBalanceResult`](../type-aliases/ProxyLineGetBalanceResult.md)\>

Defined in: [fetchers/proxyline.ts:203](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetchers/proxyline.ts#L203)

#### Returns

`Promise`\<[`ProxyLineGetBalanceResult`](../type-aliases/ProxyLineGetBalanceResult.md)\>

#### Memberof

ProxyLineFetcher

***

### order()

> **order**(`parameters`): `Promise`\<`void`\>

Defined in: [fetchers/proxyline.ts:228](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetchers/proxyline.ts#L228)

#### Parameters

##### parameters

[`ProxyLineOrderParameters`](../type-aliases/ProxyLineOrderParameters.md)

#### Returns

`Promise`\<`void`\>

#### Memberof

ProxyLineFetcher

***

### random()

> **random**(`filter?`): `undefined` \| \[[`ProxyPair`](ProxyPair.md), [`ProxyLineInfo`](../type-aliases/ProxyLineInfo.md)\]

Defined in: [fetcher.ts:85](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetcher.ts#L85)

#### Parameters

##### filter?

[`ProxyType`](../type-aliases/ProxyType.md) | (`proxy`, `info`) => `boolean`

#### Returns

`undefined` \| \[[`ProxyPair`](ProxyPair.md), [`ProxyLineInfo`](../type-aliases/ProxyLineInfo.md)\]

{([K, T] | undefined)}

#### Memberof

ProxyFetcher

#### Inherited from

[`<internal>`](../-internal-/README.md).[`random`](../-internal-/functions/random.md)

***

### refetchOnInterval()

> **refetchOnInterval**(`timeout`, `signal?`): () => `void`

Defined in: [fetcher.ts:47](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetcher.ts#L47)

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

### renew()

> **renew**(`parameters`): `Promise`\<`void`\>

Defined in: [fetchers/proxyline.ts:216](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetchers/proxyline.ts#L216)

#### Parameters

##### parameters

[`ProxyLineRenewParameters`](../type-aliases/ProxyLineRenewParameters.md)

#### Returns

`Promise`\<`void`\>

{Promise<void>}

#### Memberof

ProxyLineFetcher

***

### toJSON()

> **toJSON**(): `object`

Defined in: [fetcher.ts:98](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetcher.ts#L98)

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
