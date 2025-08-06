[**Package**](../README.md)

***

[Package](../globals.md) / ProxyFetcher

# Abstract Class: ProxyFetcher\<T, K\>

Defined in: [fetcher.ts:12](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetcher.ts#L12)

## Export

ProxyFetcher

## Extended by

- [`Proxy6Fetcher`](Proxy6Fetcher.md)
- [`ProxyLineFetcher`](ProxyLineFetcher.md)
- [`CustomFetcher`](CustomFetcher.md)
- [`CombinedFetcher`](../-internal-/classes/CombinedFetcher.md)

## Type Parameters

### T

`T`

### K

`K` *extends* [`AnyProxyInfo`](../type-aliases/AnyProxyInfo.md) = [`Mutable`](../type-aliases/Mutable.md)\<[`ProxyInfo`](../type-aliases/ProxyInfo.md)\>

## Constructors

### Constructor

> **new ProxyFetcher**\<`T`, `K`\>(): `ProxyFetcher`\<`T`, `K`\>

#### Returns

`ProxyFetcher`\<`T`, `K`\>

## Properties

### \_proxies

> `private` **\_proxies**: `Map`\<`K`, `T`\>

Defined in: [fetcher.ts:16](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetcher.ts#L16)

## Methods

### \_fetch()

> `abstract` `protected` **\_fetch**(): [`MaybePromiseLike`](../-internal-/type-aliases/MaybePromiseLike.md)\<[`MaybeAsyncIterable`](../-internal-/type-aliases/MaybeAsyncIterable.md)\<\[`K`, `T`\]\>\>

Defined in: [fetcher.ts:17](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetcher.ts#L17)

#### Returns

[`MaybePromiseLike`](../-internal-/type-aliases/MaybePromiseLike.md)\<[`MaybeAsyncIterable`](../-internal-/type-aliases/MaybeAsyncIterable.md)\<\[`K`, `T`\]\>\>

***

### fetch()

> **fetch**(): `Promise`\<`Map`\<`K`, `T`\>\>

Defined in: [fetcher.ts:27](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetcher.ts#L27)

#### Returns

`Promise`\<`Map`\<`K`, `T`\>\>

{Promise<Map<K, T>>}

#### Memberof

ProxyFetcher

***

### get()

> **get**(`filter?`): `Map`\<`K`, `T`\>

Defined in: [fetcher.ts:65](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetcher.ts#L65)

#### Parameters

##### filter?

[`ProxyType`](../type-aliases/ProxyType.md) | (`proxy`, `info`) => `boolean`

#### Returns

`Map`\<`K`, `T`\>

{Map<K, T>}

#### Memberof

ProxyFetcher

***

### random()

> **random**(`filter?`): `undefined` \| \[`K`, `T`\]

Defined in: [fetcher.ts:85](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetcher.ts#L85)

#### Parameters

##### filter?

[`ProxyType`](../type-aliases/ProxyType.md) | (`proxy`, `info`) => `boolean`

#### Returns

`undefined` \| \[`K`, `T`\]

{([K, T] | undefined)}

#### Memberof

ProxyFetcher

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
