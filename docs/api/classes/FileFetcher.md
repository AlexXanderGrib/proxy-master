[Package](../README.md) / [Exports](../modules.md) / FileFetcher

# Class: FileFetcher

**`Export`**

## Hierarchy

- [`CustomFetcher`](CustomFetcher.md)\<[`FileInfo`](../modules.md#fileinfo)\>

  ↳ **`FileFetcher`**

## Table of contents

### Constructors

- [constructor](FileFetcher.md#constructor)

### Properties

- [$\_infoType](FileFetcher.md#$_infotype)
- [$\_proxyType](FileFetcher.md#$_proxytype)
- [\_getFile](FileFetcher.md#_getfile)
- [events](FileFetcher.md#events)
- [options](FileFetcher.md#options)

### Methods

- [\_fetch](FileFetcher.md#_fetch)
- [fetch](FileFetcher.md#fetch)
- [get](FileFetcher.md#get)
- [random](FileFetcher.md#random)
- [refetchOnInterval](FileFetcher.md#refetchoninterval)
- [toJSON](FileFetcher.md#tojson)

## Constructors

### constructor

• **new FileFetcher**(`options`): [`FileFetcher`](FileFetcher.md)

Creates an instance of FileFetcher.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FileFetcherOptions`](../modules.md#filefetcheroptions) |

#### Returns

[`FileFetcher`](FileFetcher.md)

**`Memberof`**

FileFetcher

#### Overrides

[CustomFetcher](CustomFetcher.md).[constructor](CustomFetcher.md#constructor)

#### Defined in

dist/fetchers/file.d.ts:28

## Properties

### $\_infoType

• `Protected` **$\_infoType**: [`FileInfo`](../modules.md#fileinfo)

#### Inherited from

[CustomFetcher](CustomFetcher.md).[$_infoType](CustomFetcher.md#$_infotype)

#### Defined in

dist/fetcher.d.ts:13

___

### $\_proxyType

• `Protected` **$\_proxyType**: [`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>

#### Inherited from

[CustomFetcher](CustomFetcher.md).[$_proxyType](CustomFetcher.md#$_proxytype)

#### Defined in

dist/fetcher.d.ts:14

___

### \_getFile

• `Private` **\_getFile**: `any`

**`Memberof`**

FileFetcher

#### Defined in

dist/fetchers/file.d.ts:36

___

### events

• `Readonly` **events**: `EventEmitter`\<[`CustomFetcherEvents`](../modules.md#customfetcherevents), `any`\>

#### Inherited from

[CustomFetcher](CustomFetcher.md).[events](CustomFetcher.md#events)

#### Defined in

dist/fetchers/custom.d.ts:38

___

### options

• `Readonly` **options**: [`FileFetcherOptions`](../modules.md#filefetcheroptions)

#### Overrides

[CustomFetcher](CustomFetcher.md).[options](CustomFetcher.md#options)

#### Defined in

dist/fetchers/file.d.ts:22

## Methods

### \_fetch

▸ **_fetch**(): `AsyncIterable`\<[[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, [`FileInfo`](../modules.md#fileinfo)]\>

#### Returns

`AsyncIterable`\<[[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, [`FileInfo`](../modules.md#fileinfo)]\>

{Promise<Map<Mutable<ProxyInfo>, T>>}

**`Memberof`**

CustomFetcher

#### Inherited from

[CustomFetcher](CustomFetcher.md).[_fetch](CustomFetcher.md#_fetch)

#### Defined in

dist/fetchers/custom.d.ts:62

___

### fetch

▸ **fetch**(): `Promise`\<`Map`\<[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, [`FileInfo`](../modules.md#fileinfo)\>\>

#### Returns

`Promise`\<`Map`\<[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, [`FileInfo`](../modules.md#fileinfo)\>\>

{Promise<Map<K, T>>}

**`Memberof`**

ProxyFetcher

#### Inherited from

[CustomFetcher](CustomFetcher.md).[fetch](CustomFetcher.md#fetch)

#### Defined in

dist/fetcher.d.ts:23

___

### get

▸ **get**(): `Map`\<[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, [`FileInfo`](../modules.md#fileinfo)\>

#### Returns

`Map`\<[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, [`FileInfo`](../modules.md#fileinfo)\>

{Map<K, T>}

**`Memberof`**

ProxyFetcher

#### Inherited from

[CustomFetcher](CustomFetcher.md).[get](CustomFetcher.md#get)

#### Defined in

dist/fetcher.d.ts:39

___

### random

▸ **random**(): `undefined` \| [[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, [`FileInfo`](../modules.md#fileinfo)]

#### Returns

`undefined` \| [[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, [`FileInfo`](../modules.md#fileinfo)]

{([K, T] | undefined)}

**`Memberof`**

ProxyFetcher

#### Inherited from

[CustomFetcher](CustomFetcher.md).[random](CustomFetcher.md#random)

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

[CustomFetcher](CustomFetcher.md).[refetchOnInterval](CustomFetcher.md#refetchoninterval)

#### Defined in

dist/fetcher.d.ts:32

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `proxies` | \{ `info`: [`FileInfo`](../modules.md#fileinfo) ; `proxy`: [`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>  }[] |
| `type` | `string` |

**`Memberof`**

ProxyFetcher

#### Inherited from

[CustomFetcher](CustomFetcher.md).[toJSON](CustomFetcher.md#tojson)

#### Defined in

dist/fetcher.d.ts:53
