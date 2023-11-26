[Package](../README.md) / [Exports](../modules.md) / ProxyFetcher

# Class: ProxyFetcher\<T, K\>

**`Export`**

**`Abstract`**

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends [`AnyProxyInfo`](../modules.md#anyproxyinfo) = [`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\> |

## Hierarchy

- **`ProxyFetcher`**

  ↳ [`Proxy6Fetcher`](Proxy6Fetcher.md)

  ↳ [`ProxyLineFetcher`](ProxyLineFetcher.md)

  ↳ [`CustomFetcher`](CustomFetcher.md)

  ↳ [`CombinedFetcher`](internal_.CombinedFetcher.md)

## Table of contents

### Constructors

- [constructor](ProxyFetcher.md#constructor)

### Properties

- [$\_infoType](ProxyFetcher.md#$_infotype)
- [$\_proxyType](ProxyFetcher.md#$_proxytype)
- [\_proxies](ProxyFetcher.md#_proxies)

### Methods

- [\_fetch](ProxyFetcher.md#_fetch)
- [fetch](ProxyFetcher.md#fetch)
- [get](ProxyFetcher.md#get)
- [random](ProxyFetcher.md#random)
- [refetchOnInterval](ProxyFetcher.md#refetchoninterval)
- [toJSON](ProxyFetcher.md#tojson)

## Constructors

### constructor

• **new ProxyFetcher**\<`T`, `K`\>(): [`ProxyFetcher`](ProxyFetcher.md)\<`T`, `K`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends [`AnyProxyInfo`](../modules.md#anyproxyinfo) = [`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\> |

#### Returns

[`ProxyFetcher`](ProxyFetcher.md)\<`T`, `K`\>

## Properties

### $\_infoType

• `Protected` **$\_infoType**: `T`

#### Defined in

dist/fetcher.d.ts:13

___

### $\_proxyType

• `Protected` **$\_proxyType**: `K`

#### Defined in

dist/fetcher.d.ts:14

___

### \_proxies

• `Private` **\_proxies**: `any`

#### Defined in

dist/fetcher.d.ts:15

## Methods

### \_fetch

▸ **_fetch**(): [`MaybePromiseLike`](../modules/internal_.md#maybepromiselike)\<[`MaybeAsyncIterable`](../modules/internal_.md#maybeasynciterable)\<[proxy: K, info: T]\>\>

#### Returns

[`MaybePromiseLike`](../modules/internal_.md#maybepromiselike)\<[`MaybeAsyncIterable`](../modules/internal_.md#maybeasynciterable)\<[proxy: K, info: T]\>\>

#### Defined in

dist/fetcher.d.ts:16

___

### fetch

▸ **fetch**(): `Promise`\<`Map`\<`K`, `T`\>\>

#### Returns

`Promise`\<`Map`\<`K`, `T`\>\>

{Promise<Map<K, T>>}

**`Memberof`**

ProxyFetcher

#### Defined in

dist/fetcher.d.ts:23

___

### get

▸ **get**(): `Map`\<`K`, `T`\>

#### Returns

`Map`\<`K`, `T`\>

{Map<K, T>}

**`Memberof`**

ProxyFetcher

#### Defined in

dist/fetcher.d.ts:39

___

### random

▸ **random**(): `undefined` \| [`K`, `T`]

#### Returns

`undefined` \| [`K`, `T`]

{([K, T] | undefined)}

**`Memberof`**

ProxyFetcher

#### Defined in

dist/fetcher.d.ts:46

___

### refetchOnInterval

▸ **refetchOnInterval**(`timeout`, `signal?`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeout` | `number` |
| `signal?` | `AbortSignal` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

**`Memberof`**

ProxyFetcher

**`Memberof`**

ProxyFetcher

#### Defined in

dist/fetcher.d.ts:32

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `proxies` | \{ `info`: `T` ; `proxy`: `K`  }[] |
| `type` | `string` |

**`Memberof`**

ProxyFetcher

#### Defined in

dist/fetcher.d.ts:53
