[Package](../README.md) / [Exports](../modules.md) / FileFetcher

# Class: FileFetcher

**`Export`**

## Hierarchy

- [`ProxyFetcher`](ProxyFetcher.md)\<[`FileInfo`](../modules.md#fileinfo)\>

  ↳ **`FileFetcher`**

## Table of contents

### Constructors

- [constructor](FileFetcher.md#constructor)

### Properties

- [$\_infoType](FileFetcher.md#$_infotype)
- [$\_proxyType](FileFetcher.md#$_proxytype)
- [\_events](FileFetcher.md#_events)
- [\_getFile](FileFetcher.md#_getfile)
- [\_invalid](FileFetcher.md#_invalid)
- [\_valid](FileFetcher.md#_valid)
- [options](FileFetcher.md#options)

### Accessors

- [events](FileFetcher.md#events)

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

[ProxyFetcher](ProxyFetcher.md).[constructor](ProxyFetcher.md#constructor)

#### Defined in

dist/fetchers/file.d.ts:48

## Properties

### $\_infoType

• `Protected` **$\_infoType**: [`FileInfo`](../modules.md#fileinfo)

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

### \_events

• `Private` `Readonly` **\_events**: `any`

#### Defined in

dist/fetchers/file.d.ts:34

___

### \_getFile

• `Private` **\_getFile**: `any`

**`Memberof`**

FileFetcher

#### Defined in

dist/fetchers/file.d.ts:58

___

### \_invalid

• `Private` `Readonly` **\_invalid**: `any`

#### Defined in

dist/fetchers/file.d.ts:49

___

### \_valid

• `Private` `Readonly` **\_valid**: `any`

#### Defined in

dist/fetchers/file.d.ts:50

___

### options

• `Readonly` **options**: [`FileFetcherOptions`](../modules.md#filefetcheroptions)

#### Defined in

dist/fetchers/file.d.ts:33

## Accessors

### events

• `get` **events**(): `EventEmitter`\<[`FileFetcherEvents`](../modules.md#filefetcherevents), `any`\>

#### Returns

`EventEmitter`\<[`FileFetcherEvents`](../modules.md#filefetcherevents), `any`\>

**`Memberof`**

FileFetcher

#### Defined in

dist/fetchers/file.d.ts:42

## Methods

### \_fetch

▸ **_fetch**(): `Promise`\<`Map`\<[`ProxyInfo`](../modules.md#proxyinfo), [`FileInfo`](../modules.md#fileinfo)\>\>

#### Returns

`Promise`\<`Map`\<[`ProxyInfo`](../modules.md#proxyinfo), [`FileInfo`](../modules.md#fileinfo)\>\>

{Promise<Map<ProxyInfo, FileInfo>>}

**`Memberof`**

FileFetcher

#### Overrides

[ProxyFetcher](ProxyFetcher.md).[_fetch](ProxyFetcher.md#_fetch)

#### Defined in

dist/fetchers/file.d.ts:66

___

### fetch

▸ **fetch**(): `Promise`\<`Map`\<[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, [`FileInfo`](../modules.md#fileinfo)\>\>

#### Returns

`Promise`\<`Map`\<[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, [`FileInfo`](../modules.md#fileinfo)\>\>

{Promise<Map<K, T>>}

**`Memberof`**

ProxyFetcher

#### Inherited from

[ProxyFetcher](ProxyFetcher.md).[fetch](ProxyFetcher.md#fetch)

#### Defined in

dist/fetcher.d.ts:22

___

### get

▸ **get**(): `Map`\<[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, [`FileInfo`](../modules.md#fileinfo)\>

#### Returns

`Map`\<[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, [`FileInfo`](../modules.md#fileinfo)\>

{Map<K, T>}

**`Memberof`**

ProxyFetcher

#### Inherited from

[ProxyFetcher](ProxyFetcher.md).[get](ProxyFetcher.md#get)

#### Defined in

dist/fetcher.d.ts:38

___

### random

▸ **random**(): `undefined` \| [[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, [`FileInfo`](../modules.md#fileinfo)]

#### Returns

`undefined` \| [[`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>, [`FileInfo`](../modules.md#fileinfo)]

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
| `proxies` | \{ `info`: [`FileInfo`](../modules.md#fileinfo) ; `proxy`: [`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>  }[] |
| `type` | `string` |

**`Memberof`**

ProxyFetcher

#### Inherited from

[ProxyFetcher](ProxyFetcher.md).[toJSON](ProxyFetcher.md#tojson)

#### Defined in

dist/fetcher.d.ts:52
