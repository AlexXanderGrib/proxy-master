[**Package**](../README.md)

***

[Package](../globals.md) / CustomFetcher

# Class: CustomFetcher\<T\>

Defined in: [fetchers/custom.ts:76](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetchers/custom.ts#L76)

## Export

CustomFetcher

## Extends

- [`ProxyFetcher`](ProxyFetcher.md)\<`T`\>

## Extended by

- [`FileFetcher`](FileFetcher.md)

## Type Parameters

### T

`T` = `never`

## Constructors

### Constructor

> **new CustomFetcher**\<`T`\>(`fetch`, `options`): `CustomFetcher`\<`T`\>

Defined in: [fetchers/custom.ts:88](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetchers/custom.ts#L88)

Creates an instance of CustomFetcher.

#### Parameters

##### fetch

[`CustomFetcherFetch`](../type-aliases/CustomFetcherFetch.md)\<`T`\>

##### options

[`CustomFetcherOptions`](../type-aliases/CustomFetcherOptions.md) = `{}`

#### Returns

`CustomFetcher`\<`T`\>

#### Memberof

CustomFetcher

#### Overrides

[`ProxyFetcher`](ProxyFetcher.md).[`constructor`](ProxyFetcher.md#constructor)

## Properties

### \_customFetch

> `private` `readonly` **\_customFetch**: [`CustomFetcherFetch`](../type-aliases/CustomFetcherFetch.md)\<`T`\>

Defined in: [fetchers/custom.ts:77](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetchers/custom.ts#L77)

***

### \_invalid

> `private` `readonly` **\_invalid**: `Set`\<`string`\>

Defined in: [fetchers/custom.ts:79](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetchers/custom.ts#L79)

***

### \_valid

> `private` `readonly` **\_valid**: `Set`\<`string`\>

Defined in: [fetchers/custom.ts:78](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetchers/custom.ts#L78)

***

### events

> `readonly` **events**: `EventEmitter`\<[`CustomFetcherEvents`](../type-aliases/CustomFetcherEvents.md), `any`\>

Defined in: [fetchers/custom.ts:80](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetchers/custom.ts#L80)

***

### options

> `readonly` **options**: [`CustomFetcherOptions`](../type-aliases/CustomFetcherOptions.md) = `{}`

Defined in: [fetchers/custom.ts:90](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetchers/custom.ts#L90)

## Methods

### \_fetch()

> `protected` **\_fetch**(): `AsyncIterable`\<\[[`Mutable`](../type-aliases/Mutable.md)\<[`ProxyInfo`](../type-aliases/ProxyInfo.md)\>, `T`\]\>

Defined in: [fetchers/custom.ts:143](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetchers/custom.ts#L143)

#### Returns

`AsyncIterable`\<\[[`Mutable`](../type-aliases/Mutable.md)\<[`ProxyInfo`](../type-aliases/ProxyInfo.md)\>, `T`\]\>

{Promise<Map<Mutable<ProxyInfo>, T>>}

#### Memberof

CustomFetcher

#### Overrides

[`<internal>`](../-internal-/README.md).[`_fetch`](../-internal-/functions/fetch.md)

***

### \_prefetch()

> `private` **\_prefetch**(): `AsyncIterable`\<\[`string`, `T`\]\>

Defined in: [fetchers/custom.ts:103](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetchers/custom.ts#L103)

#### Returns

`AsyncIterable`\<\[`string`, `T`\]\>

{AsyncIterable<[AnyProxyInfo, T]>}

#### Memberof

CustomFetcher

***

### fetch()

> **fetch**(): `Promise`\<`Map`\<[`Mutable`](../type-aliases/Mutable.md)\<[`ProxyInfo`](../type-aliases/ProxyInfo.md)\>, `T`\>\>

Defined in: [fetcher.ts:27](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetcher.ts#L27)

#### Returns

`Promise`\<`Map`\<[`Mutable`](../type-aliases/Mutable.md)\<[`ProxyInfo`](../type-aliases/ProxyInfo.md)\>, `T`\>\>

{Promise<Map<K, T>>}

#### Memberof

ProxyFetcher

#### Inherited from

[`<internal>`](../-internal-/README.md).[`fetch`](../-internal-/functions/fetch-2.md)

***

### get()

> **get**(`filter?`): `Map`\<[`Mutable`](../type-aliases/Mutable.md)\<[`ProxyInfo`](../type-aliases/ProxyInfo.md)\>, `T`\>

Defined in: [fetcher.ts:65](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetcher.ts#L65)

#### Parameters

##### filter?

[`ProxyType`](../type-aliases/ProxyType.md) | (`proxy`, `info`) => `boolean`

#### Returns

`Map`\<[`Mutable`](../type-aliases/Mutable.md)\<[`ProxyInfo`](../type-aliases/ProxyInfo.md)\>, `T`\>

{Map<K, T>}

#### Memberof

ProxyFetcher

#### Inherited from

[`<internal>`](../-internal-/README.md).[`get`](../-internal-/functions/get.md)

***

### random()

> **random**(`filter?`): `undefined` \| \[[`Mutable`](../type-aliases/Mutable.md)\<[`ProxyInfo`](../type-aliases/ProxyInfo.md)\>, `T`\]

Defined in: [fetcher.ts:85](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetcher.ts#L85)

#### Parameters

##### filter?

[`ProxyType`](../type-aliases/ProxyType.md) | (`proxy`, `info`) => `boolean`

#### Returns

`undefined` \| \[[`Mutable`](../type-aliases/Mutable.md)\<[`ProxyInfo`](../type-aliases/ProxyInfo.md)\>, `T`\]

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
