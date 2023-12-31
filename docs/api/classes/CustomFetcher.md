[Package](../README.md) / [Exports](../modules.md) / CustomFetcher

# Class: CustomFetcher\<T\>

**`Export`**

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `never` |

## Hierarchy

- [`ProxyFetcher`](ProxyFetcher.md)\<`T`\>

  ↳ **`CustomFetcher`**

  ↳↳ [`FileFetcher`](FileFetcher.md)

## Table of contents

### Constructors

- [constructor](CustomFetcher.md#constructor)

### Properties

- [$\_infoType](CustomFetcher.md#$_infotype)
- [$\_proxyType](CustomFetcher.md#$_proxytype)
- [\_customFetch](CustomFetcher.md#_customfetch)
- [\_prefetch](CustomFetcher.md#_prefetch)
- [events](CustomFetcher.md#events)
- [options](CustomFetcher.md#options)

### Methods

- [\_fetch](CustomFetcher.md#_fetch)
- [fetch](CustomFetcher.md#fetch)
- [get](CustomFetcher.md#get)
- [random](CustomFetcher.md#random)
- [refetchOnInterval](CustomFetcher.md#refetchoninterval)
- [toJSON](CustomFetcher.md#tojson)

## Constructors

### constructor

• **new CustomFetcher**\<`T`\>(`fetch`, `options?`): [`CustomFetcher`](CustomFetcher.md)\<`T`\>

Creates an instance of CustomFetcher.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fetch` | [`CustomFetcherFetch`](../modules.md#customfetcherfetch)\<`T`\> |
| `options?` | [`CustomFetcherOptions`](../modules.md#customfetcheroptions) |

#### Returns

[`CustomFetcher`](CustomFetcher.md)\<`T`\>

**`Memberof`**

CustomFetcher

#### Overrides

[ProxyFetcher](ProxyFetcher.md).[constructor](ProxyFetcher.md#constructor)

#### Defined in

dist/fetchers/custom.d.ts:44

## Properties

### $\_infoType

• `Protected` **$\_infoType**: `T`

#### Inherited from

[ProxyFetcher](ProxyFetcher.md).[$_infoType](ProxyFetcher.md#$_infotype)

#### Defined in

dist/fetcher.d.ts:13

___

### $\_proxyType

• `Protected` **$\_proxyType**: [`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>

#### Inherited from

[ProxyFetcher](ProxyFetcher.md).[$_proxyType](ProxyFetcher.md#$_proxytype)

#### Defined in

dist/fetcher.d.ts:14

___

### \_customFetch

• `Private` `Readonly` **\_customFetch**: `any`

#### Defined in

dist/fetchers/custom.d.ts:36

___

### \_prefetch

• `Private` **\_prefetch**: `any`

**`Memberof`**

CustomFetcher

#### Defined in

dist/fetchers/custom.d.ts:52

___

### events

• `Readonly` **events**: `EventEmitter`\<[`CustomFetcherEvents`](../modules.md#customfetcherevents), `any`\>

#### Defined in

dist/fetchers/custom.d.ts:37

___

### options

• `Readonly` **options**: [`CustomFetcherOptions`](../modules.md#customfetcheroptions)

#### Defined in

dist/fetchers/custom.d.ts:35

## Methods

### \_fetch

▸ **_fetch**(): `AsyncIterable`\<[[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, `T`]\>

#### Returns

`AsyncIterable`\<[[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, `T`]\>

{Promise<Map<Mutable<ProxyInfo>, T>>}

**`Memberof`**

CustomFetcher

#### Overrides

[ProxyFetcher](ProxyFetcher.md).[_fetch](ProxyFetcher.md#_fetch)

#### Defined in

dist/fetchers/custom.d.ts:60

___

### fetch

▸ **fetch**(): `Promise`\<`Map`\<[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, `T`\>\>

#### Returns

`Promise`\<`Map`\<[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, `T`\>\>

{Promise<Map<K, T>>}

**`Memberof`**

ProxyFetcher

#### Inherited from

[ProxyFetcher](ProxyFetcher.md).[fetch](ProxyFetcher.md#fetch)

#### Defined in

dist/fetcher.d.ts:23

___

### get

▸ **get**(`filter?`): `Map`\<[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, `T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | [`ProxyType`](../modules.md#proxytype) \| (`proxy`: [`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, `info`: `T`) => `boolean` |

#### Returns

`Map`\<[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, `T`\>

{Map<K, T>}

**`Memberof`**

ProxyFetcher

#### Inherited from

[ProxyFetcher](ProxyFetcher.md).[get](ProxyFetcher.md#get)

#### Defined in

dist/fetcher.d.ts:39

___

### random

▸ **random**(`filter?`): `undefined` \| [[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, `T`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | [`ProxyType`](../modules.md#proxytype) \| (`proxy`: [`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, `info`: `T`) => `boolean` |

#### Returns

`undefined` \| [[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, `T`]

{([K, T] | undefined)}

**`Memberof`**

ProxyFetcher

#### Inherited from

[ProxyFetcher](ProxyFetcher.md).[random](ProxyFetcher.md#random)

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

#### Inherited from

[ProxyFetcher](ProxyFetcher.md).[refetchOnInterval](ProxyFetcher.md#refetchoninterval)

#### Defined in

dist/fetcher.d.ts:32

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `proxies` | \{ `info`: `T` ; `proxy`: [`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>  }[] |
| `type` | `string` |

**`Memberof`**

ProxyFetcher

#### Inherited from

[ProxyFetcher](ProxyFetcher.md).[toJSON](ProxyFetcher.md#tojson)

#### Defined in

dist/fetcher.d.ts:53
