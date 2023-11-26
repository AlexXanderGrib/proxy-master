[Package](../README.md) / [Exports](../modules.md) / ProxyLineFetcher

# Class: ProxyLineFetcher

**`Export`**

## Hierarchy

- [`ProxyFetcher`](ProxyFetcher.md)\<[`ProxyLineInfo`](../modules.md#proxylineinfo), [`ProxyPair`](ProxyPair.md)\>

  ↳ **`ProxyLineFetcher`**

## Table of contents

### Constructors

- [constructor](ProxyLineFetcher.md#constructor)

### Properties

- [$\_infoType](ProxyLineFetcher.md#$_infotype)
- [$\_proxyType](ProxyLineFetcher.md#$_proxytype)
- [\_axios](ProxyLineFetcher.md#_axios)
- [options](ProxyLineFetcher.md#options)

### Methods

- [\_fetch](ProxyLineFetcher.md#_fetch)
- [fetch](ProxyLineFetcher.md#fetch)
- [get](ProxyLineFetcher.md#get)
- [getBalance](ProxyLineFetcher.md#getbalance)
- [order](ProxyLineFetcher.md#order)
- [random](ProxyLineFetcher.md#random)
- [refetchOnInterval](ProxyLineFetcher.md#refetchoninterval)
- [renew](ProxyLineFetcher.md#renew)
- [toJSON](ProxyLineFetcher.md#tojson)

## Constructors

### constructor

• **new ProxyLineFetcher**(`options`): [`ProxyLineFetcher`](ProxyLineFetcher.md)

Creates an instance of ProxyLineFetcher.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ProxyLineFetcherOptions`](../modules.md#proxylinefetcheroptions) |

#### Returns

[`ProxyLineFetcher`](ProxyLineFetcher.md)

**`Memberof`**

ProxyLineFetcher

#### Overrides

[ProxyFetcher](ProxyFetcher.md).[constructor](ProxyFetcher.md#constructor)

#### Defined in

dist/fetchers/proxyline.d.ts:86

## Properties

### $\_infoType

• `Protected` **$\_infoType**: [`ProxyLineInfo`](../modules.md#proxylineinfo)

#### Inherited from

[ProxyFetcher](ProxyFetcher.md).[$_infoType](ProxyFetcher.md#$_infotype)

#### Defined in

dist/fetcher.d.ts:13

___

### $\_proxyType

• `Protected` **$\_proxyType**: [`ProxyPair`](ProxyPair.md)

#### Inherited from

[ProxyFetcher](ProxyFetcher.md).[$_proxyType](ProxyFetcher.md#$_proxytype)

#### Defined in

dist/fetcher.d.ts:14

___

### \_axios

• `Private` `Readonly` **\_axios**: `any`

#### Defined in

dist/fetchers/proxyline.d.ts:80

___

### options

• `Readonly` **options**: [`ProxyLineFetcherOptions`](../modules.md#proxylinefetcheroptions)

#### Defined in

dist/fetchers/proxyline.d.ts:79

## Methods

### \_fetch

▸ **_fetch**(): `Promise`\<`Map`\<[`ProxyPair`](ProxyPair.md), [`ProxyLineInfo`](../modules.md#proxylineinfo)\>\>

#### Returns

`Promise`\<`Map`\<[`ProxyPair`](ProxyPair.md), [`ProxyLineInfo`](../modules.md#proxylineinfo)\>\>

{Promise<Map<ProxyPair, ProxyLineInfo>>}

**`Memberof`**

ProxyLineFetcher

#### Overrides

[ProxyFetcher](ProxyFetcher.md).[_fetch](ProxyFetcher.md#_fetch)

#### Defined in

dist/fetchers/proxyline.d.ts:94

___

### fetch

▸ **fetch**(): `Promise`\<`Map`\<[`ProxyPair`](ProxyPair.md), [`ProxyLineInfo`](../modules.md#proxylineinfo)\>\>

#### Returns

`Promise`\<`Map`\<[`ProxyPair`](ProxyPair.md), [`ProxyLineInfo`](../modules.md#proxylineinfo)\>\>

{Promise<Map<K, T>>}

**`Memberof`**

ProxyFetcher

#### Inherited from

[ProxyFetcher](ProxyFetcher.md).[fetch](ProxyFetcher.md#fetch)

#### Defined in

dist/fetcher.d.ts:23

___

### get

▸ **get**(): `Map`\<[`ProxyPair`](ProxyPair.md), [`ProxyLineInfo`](../modules.md#proxylineinfo)\>

#### Returns

`Map`\<[`ProxyPair`](ProxyPair.md), [`ProxyLineInfo`](../modules.md#proxylineinfo)\>

{Map<K, T>}

**`Memberof`**

ProxyFetcher

#### Inherited from

[ProxyFetcher](ProxyFetcher.md).[get](ProxyFetcher.md#get)

#### Defined in

dist/fetcher.d.ts:39

___

### getBalance

▸ **getBalance**(): `Promise`\<[`ProxyLineGetBalanceResult`](../modules.md#proxylinegetbalanceresult)\>

#### Returns

`Promise`\<[`ProxyLineGetBalanceResult`](../modules.md#proxylinegetbalanceresult)\>

**`Memberof`**

ProxyLineFetcher

#### Defined in

dist/fetchers/proxyline.d.ts:101

___

### order

▸ **order**(`parameters`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`ProxyLineOrderParameters`](../modules.md#proxylineorderparameters) |

#### Returns

`Promise`\<`void`\>

**`Memberof`**

ProxyLineFetcher

#### Defined in

dist/fetchers/proxyline.d.ts:117

___

### random

▸ **random**(): `undefined` \| [[`ProxyPair`](ProxyPair.md), [`ProxyLineInfo`](../modules.md#proxylineinfo)]

#### Returns

`undefined` \| [[`ProxyPair`](ProxyPair.md), [`ProxyLineInfo`](../modules.md#proxylineinfo)]

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

### renew

▸ **renew**(`parameters`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`ProxyLineRenewParameters`](../modules.md#proxylinerenewparameters) |

#### Returns

`Promise`\<`void`\>

{Promise<void>}

**`Memberof`**

ProxyLineFetcher

#### Defined in

dist/fetchers/proxyline.d.ts:109

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `proxies` | \{ `info`: [`ProxyLineInfo`](../modules.md#proxylineinfo) ; `proxy`: [`ProxyPair`](ProxyPair.md)  }[] |
| `type` | `string` |

**`Memberof`**

ProxyFetcher

#### Inherited from

[ProxyFetcher](ProxyFetcher.md).[toJSON](ProxyFetcher.md#tojson)

#### Defined in

dist/fetcher.d.ts:53
