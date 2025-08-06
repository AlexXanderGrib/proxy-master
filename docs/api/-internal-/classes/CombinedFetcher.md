[**Package**](../../README.md)

***

[Package](../../globals.md) / [\<internal\>](../README.md) / CombinedFetcher

# Class: CombinedFetcher

Defined in: [fetchers/combine.ts:25](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetchers/combine.ts#L25)

## Export

CombinedFetcher

## Template

## Extends

- [`ProxyFetcher`](../../classes/ProxyFetcher.md)\<`unknown`\>

## Constructors

### Constructor

> **new CombinedFetcher**(`options`): `CombinedFetcher`

Defined in: [fetchers/combine.ts:31](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetchers/combine.ts#L31)

Creates an instance of CombinedFetcher.

#### Parameters

##### options

[`CombinedFetcherOptions`](../type-aliases/CombinedFetcherOptions.md)

#### Returns

`CombinedFetcher`

#### Memberof

CombinedFetcher

#### Overrides

[`ProxyFetcher`](../../classes/ProxyFetcher.md).[`constructor`](../../classes/ProxyFetcher.md#constructor)

## Properties

### options

> `readonly` **options**: [`CombinedFetcherOptions`](../type-aliases/CombinedFetcherOptions.md)

Defined in: [fetchers/combine.ts:31](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetchers/combine.ts#L31)

## Methods

### \_fetch()

> `protected` **\_fetch**(): `Promise`\<`Map`\<[`Mutable`](../../type-aliases/Mutable.md)\<[`ProxyInfo`](../../type-aliases/ProxyInfo.md)\>, `unknown`\>\>

Defined in: [fetchers/combine.ts:42](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetchers/combine.ts#L42)

#### Returns

`Promise`\<`Map`\<[`Mutable`](../../type-aliases/Mutable.md)\<[`ProxyInfo`](../../type-aliases/ProxyInfo.md)\>, `unknown`\>\>

{Promise<Map<Mutable<ProxyInfo>, unknown>>}

#### Memberof

CombinedFetcher

#### Overrides

[`<internal>`](../README.md).[`_fetch`](../functions/fetch.md)

***

### fetch()

> **fetch**(): `Promise`\<`Map`\<[`Mutable`](../../type-aliases/Mutable.md)\<[`ProxyInfo`](../../type-aliases/ProxyInfo.md)\>, `unknown`\>\>

Defined in: [fetcher.ts:27](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetcher.ts#L27)

#### Returns

`Promise`\<`Map`\<[`Mutable`](../../type-aliases/Mutable.md)\<[`ProxyInfo`](../../type-aliases/ProxyInfo.md)\>, `unknown`\>\>

{Promise<Map<K, T>>}

#### Memberof

ProxyFetcher

#### Inherited from

[`<internal>`](../README.md).[`fetch`](../functions/fetch-2.md)

***

### get()

> **get**(`filter?`): `Map`\<[`Mutable`](../../type-aliases/Mutable.md)\<[`ProxyInfo`](../../type-aliases/ProxyInfo.md)\>, `unknown`\>

Defined in: [fetcher.ts:65](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetcher.ts#L65)

#### Parameters

##### filter?

[`ProxyType`](../../type-aliases/ProxyType.md) | (`proxy`, `info`) => `boolean`

#### Returns

`Map`\<[`Mutable`](../../type-aliases/Mutable.md)\<[`ProxyInfo`](../../type-aliases/ProxyInfo.md)\>, `unknown`\>

{Map<K, T>}

#### Memberof

ProxyFetcher

#### Inherited from

[`<internal>`](../README.md).[`get`](../functions/get.md)

***

### random()

> **random**(`filter?`): `undefined` \| \[[`Mutable`](../../type-aliases/Mutable.md)\<[`ProxyInfo`](../../type-aliases/ProxyInfo.md)\>, `unknown`\]

Defined in: [fetcher.ts:85](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetcher.ts#L85)

#### Parameters

##### filter?

[`ProxyType`](../../type-aliases/ProxyType.md) | (`proxy`, `info`) => `boolean`

#### Returns

`undefined` \| \[[`Mutable`](../../type-aliases/Mutable.md)\<[`ProxyInfo`](../../type-aliases/ProxyInfo.md)\>, `unknown`\]

{([K, T] | undefined)}

#### Memberof

ProxyFetcher

#### Inherited from

[`<internal>`](../README.md).[`random`](../functions/random.md)

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

[`<internal>`](../README.md).[`refetchOnInterval`](../functions/refetchOnInterval.md)

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

[`<internal>`](../README.md).[`toJSON`](../functions/toJSON.md)
