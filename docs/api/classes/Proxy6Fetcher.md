[Package](../README.md) / [Exports](../modules.md) / Proxy6Fetcher

# Class: Proxy6Fetcher

**`Export`**

## Hierarchy

- [`ProxyFetcher`](ProxyFetcher.md)\<[`Proxy6Info`](../modules.md#proxy6info)\>

  ↳ **`Proxy6Fetcher`**

## Table of contents

### Constructors

- [constructor](Proxy6Fetcher.md#constructor)

### Properties

- [$\_infoType](Proxy6Fetcher.md#$_infotype)
- [$\_proxyType](Proxy6Fetcher.md#$_proxytype)
- [\_axios](Proxy6Fetcher.md#_axios)
- [options](Proxy6Fetcher.md#options)

### Methods

- [\_fetch](Proxy6Fetcher.md#_fetch)
- [fetch](Proxy6Fetcher.md#fetch)
- [get](Proxy6Fetcher.md#get)
- [random](Proxy6Fetcher.md#random)
- [refetchOnInterval](Proxy6Fetcher.md#refetchoninterval)
- [setType](Proxy6Fetcher.md#settype)
- [toJSON](Proxy6Fetcher.md#tojson)

## Constructors

### constructor

• **new Proxy6Fetcher**(`options`): [`Proxy6Fetcher`](Proxy6Fetcher.md)

Creates an instance of Proxy6Fetcher.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Proxy6FetcherOptions`](../modules.md#proxy6fetcheroptions) |

#### Returns

[`Proxy6Fetcher`](Proxy6Fetcher.md)

**`Memberof`**

Proxy6Fetcher

#### Overrides

[ProxyFetcher](ProxyFetcher.md).[constructor](ProxyFetcher.md#constructor)

#### Defined in

dist/fetchers/proxy6.d.ts:63

## Properties

### $\_infoType

• `Protected` **$\_infoType**: [`Proxy6Info`](../modules.md#proxy6info)

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

### \_axios

• `Private` `Readonly` **\_axios**: `any`

#### Defined in

dist/fetchers/proxy6.d.ts:57

___

### options

• `Readonly` **options**: [`Proxy6FetcherOptions`](../modules.md#proxy6fetcheroptions)

#### Defined in

dist/fetchers/proxy6.d.ts:56

## Methods

### \_fetch

▸ **_fetch**(): `Promise`\<`Map`\<[`ProxyInfo`](../modules.md#proxyinfo), [`Proxy6Info`](../modules.md#proxy6info)\>\>

#### Returns

`Promise`\<`Map`\<[`ProxyInfo`](../modules.md#proxyinfo), [`Proxy6Info`](../modules.md#proxy6info)\>\>

{Promise<Map<ProxyInfo, Proxy6Info>>}

**`Memberof`**

Proxy6Fetcher

#### Overrides

[ProxyFetcher](ProxyFetcher.md).[_fetch](ProxyFetcher.md#_fetch)

#### Defined in

dist/fetchers/proxy6.d.ts:71

___

### fetch

▸ **fetch**(): `Promise`\<`Map`\<[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, [`Proxy6Info`](../modules.md#proxy6info)\>\>

#### Returns

`Promise`\<`Map`\<[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, [`Proxy6Info`](../modules.md#proxy6info)\>\>

{Promise<Map<K, T>>}

**`Memberof`**

ProxyFetcher

#### Inherited from

[ProxyFetcher](ProxyFetcher.md).[fetch](ProxyFetcher.md#fetch)

#### Defined in

dist/fetcher.d.ts:23

___

### get

▸ **get**(`filter?`): `Map`\<[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, [`Proxy6Info`](../modules.md#proxy6info)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | [`ProxyType`](../modules.md#proxytype) \| (`proxy`: [`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, `info`: [`Proxy6Info`](../modules.md#proxy6info)) => `boolean` |

#### Returns

`Map`\<[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, [`Proxy6Info`](../modules.md#proxy6info)\>

{Map<K, T>}

**`Memberof`**

ProxyFetcher

#### Inherited from

[ProxyFetcher](ProxyFetcher.md).[get](ProxyFetcher.md#get)

#### Defined in

dist/fetcher.d.ts:39

___

### random

▸ **random**(`filter?`): `undefined` \| [[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, [`Proxy6Info`](../modules.md#proxy6info)]

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | [`ProxyType`](../modules.md#proxytype) \| (`proxy`: [`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, `info`: [`Proxy6Info`](../modules.md#proxy6info)) => `boolean` |

#### Returns

`undefined` \| [[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, [`Proxy6Info`](../modules.md#proxy6info)]

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

### setType

▸ **setType**(`type`, `ids`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"http"`` \| ``"socks"`` |
| `ids` | `string`[] |

#### Returns

`Promise`\<`void`\>

{Promise<void>}

**`Memberof`**

Proxy6Fetcher

#### Defined in

dist/fetchers/proxy6.d.ts:80

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `proxies` | \{ `info`: [`Proxy6Info`](../modules.md#proxy6info) ; `proxy`: [`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>  }[] |
| `type` | `string` |

**`Memberof`**

ProxyFetcher

#### Inherited from

[ProxyFetcher](ProxyFetcher.md).[toJSON](ProxyFetcher.md#tojson)

#### Defined in

dist/fetcher.d.ts:53
