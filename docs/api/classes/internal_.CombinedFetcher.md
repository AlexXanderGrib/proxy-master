[Package](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / CombinedFetcher

# Class: CombinedFetcher

[\<internal\>](../modules/internal_.md).CombinedFetcher

**`Export`**

**`Template`**

## Hierarchy

- [`ProxyFetcher`](ProxyFetcher.md)\<`unknown`\>

  ↳ **`CombinedFetcher`**

## Table of contents

### Constructors

- [constructor](internal_.CombinedFetcher.md#constructor)

### Properties

- [$\_infoType](internal_.CombinedFetcher.md#$_infotype)
- [$\_proxyType](internal_.CombinedFetcher.md#$_proxytype)
- [options](internal_.CombinedFetcher.md#options)

### Methods

- [\_fetch](internal_.CombinedFetcher.md#_fetch)
- [fetch](internal_.CombinedFetcher.md#fetch)
- [get](internal_.CombinedFetcher.md#get)
- [random](internal_.CombinedFetcher.md#random)
- [refetchOnInterval](internal_.CombinedFetcher.md#refetchoninterval)
- [toJSON](internal_.CombinedFetcher.md#tojson)

## Constructors

### constructor

• **new CombinedFetcher**(`options`): [`CombinedFetcher`](internal_.CombinedFetcher.md)

Creates an instance of CombinedFetcher.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CombinedFetcherOptions`](../modules/internal_.md#combinedfetcheroptions) |

#### Returns

[`CombinedFetcher`](internal_.CombinedFetcher.md)

**`Memberof`**

CombinedFetcher

#### Overrides

[ProxyFetcher](ProxyFetcher.md).[constructor](ProxyFetcher.md#constructor)

#### Defined in

dist/fetchers/combine.d.ts:29

## Properties

### $\_infoType

• `Protected` **$\_infoType**: `unknown`

#### Inherited from

[ProxyFetcher](ProxyFetcher.md).[$_infoType](ProxyFetcher.md#$_infotype)

#### Defined in

dist/fetcher.d.ts:12

___

### $\_proxyType

• `Protected` **$\_proxyType**: [`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>

#### Inherited from

[ProxyFetcher](ProxyFetcher.md).[$_proxyType](ProxyFetcher.md#$_proxytype)

#### Defined in

dist/fetcher.d.ts:13

___

### options

• `Readonly` **options**: [`CombinedFetcherOptions`](../modules/internal_.md#combinedfetcheroptions)

#### Defined in

dist/fetchers/combine.d.ts:23

## Methods

### \_fetch

▸ **_fetch**(): `Promise`\<`Map`\<[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, `unknown`\>\>

#### Returns

`Promise`\<`Map`\<[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, `unknown`\>\>

{Promise<Map<Mutable<ProxyInfo>, unknown>>}

**`Memberof`**

CombinedFetcher

#### Overrides

[ProxyFetcher](ProxyFetcher.md).[_fetch](ProxyFetcher.md#_fetch)

#### Defined in

dist/fetchers/combine.d.ts:37

___

### fetch

▸ **fetch**(): `Promise`\<`Map`\<[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, `unknown`\>\>

#### Returns

`Promise`\<`Map`\<[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, `unknown`\>\>

{Promise<Map<K, T>>}

**`Memberof`**

ProxyFetcher

#### Inherited from

[ProxyFetcher](ProxyFetcher.md).[fetch](ProxyFetcher.md#fetch)

#### Defined in

dist/fetcher.d.ts:22

___

### get

▸ **get**(): `Map`\<[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, `unknown`\>

#### Returns

`Map`\<[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, `unknown`\>

{Map<K, T>}

**`Memberof`**

ProxyFetcher

#### Inherited from

[ProxyFetcher](ProxyFetcher.md).[get](ProxyFetcher.md#get)

#### Defined in

dist/fetcher.d.ts:38

___

### random

▸ **random**(): `undefined` \| [[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, `unknown`]

#### Returns

`undefined` \| [[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, `unknown`]

{([K, T] | undefined)}

**`Memberof`**

ProxyFetcher

#### Inherited from

[ProxyFetcher](ProxyFetcher.md).[random](ProxyFetcher.md#random)

#### Defined in

dist/fetcher.d.ts:45

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

dist/fetcher.d.ts:31

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `proxies` | \{ `info`: `unknown` ; `proxy`: [`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>  }[] |
| `type` | `string` |

**`Memberof`**

ProxyFetcher

#### Inherited from

[ProxyFetcher](ProxyFetcher.md).[toJSON](ProxyFetcher.md#tojson)

#### Defined in

dist/fetcher.d.ts:52
