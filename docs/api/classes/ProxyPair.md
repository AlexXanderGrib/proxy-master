[Package](../README.md) / [Exports](../modules.md) / ProxyPair

# Class: ProxyPair

**`Export`**

## Implements

- [`ProxyInfo`](../modules.md#proxyinfo)

## Table of contents

### Constructors

- [constructor](ProxyPair.md#constructor)

### Properties

- [\_browserProxy](ProxyPair.md#_browserproxy)
- [\_browserUrl](ProxyPair.md#_browserurl)
- [\_httpAgent](ProxyPair.md#_httpagent)
- [\_socksAgent](ProxyPair.md#_socksagent)
- [http](ProxyPair.md#http)
- [primaryType](ProxyPair.md#primarytype)
- [socks](ProxyPair.md#socks)

### Accessors

- [\_primaryAgent](ProxyPair.md#_primaryagent)
- [host](ProxyPair.md#host)
- [password](ProxyPair.md#password)
- [port](ProxyPair.md#port)
- [primary](ProxyPair.md#primary)
- [type](ProxyPair.md#type)
- [username](ProxyPair.md#username)

### Methods

- [closeBrowserUrl](ProxyPair.md#closebrowserurl)
- [createAgent](ProxyPair.md#createagent)
- [createHttpAgent](ProxyPair.md#createhttpagent)
- [createSocksAgent](ProxyPair.md#createsocksagent)
- [createSocksSocket](ProxyPair.md#createsockssocket)
- [getAgent](ProxyPair.md#getagent)
- [getBrowserUrl](ProxyPair.md#getbrowserurl)
- [getHttpAgent](ProxyPair.md#gethttpagent)
- [getSocksAgent](ProxyPair.md#getsocksagent)

## Constructors

### constructor

• **new ProxyPair**(`http`, `socks`, `primaryType?`): [`ProxyPair`](ProxyPair.md)

Creates an instance of ProxyPair.

#### Parameters

| Name | Type |
| :------ | :------ |
| `http` | [`HttpLikeProxy`](../modules.md#httplikeproxy) |
| `socks` | [`SocksProxy`](../modules.md#socksproxy) |
| `primaryType?` | ``"http"`` \| ``"socks"`` |

#### Returns

[`ProxyPair`](ProxyPair.md)

**`Memberof`**

ProxyPair

#### Defined in

dist/pair.d.ts:22

## Properties

### \_browserProxy

• `Private` **\_browserProxy**: `any`

#### Defined in

dist/pair.d.ts:71

___

### \_browserUrl

• `Private` **\_browserUrl**: `any`

#### Defined in

dist/pair.d.ts:72

___

### \_httpAgent

• `Private` **\_httpAgent**: `any`

#### Defined in

dist/pair.d.ts:74

___

### \_socksAgent

• `Private` **\_socksAgent**: `any`

#### Defined in

dist/pair.d.ts:73

___

### http

• `Readonly` **http**: [`HttpLikeProxy`](../modules.md#httplikeproxy)

#### Defined in

dist/pair.d.ts:13

___

### primaryType

• `Readonly` **primaryType**: ``"http"`` \| ``"socks"``

#### Defined in

dist/pair.d.ts:15

___

### socks

• `Readonly` **socks**: [`SocksProxy`](../modules.md#socksproxy)

#### Defined in

dist/pair.d.ts:14

## Accessors

### \_primaryAgent

• `get` **_primaryAgent**(): `any`

#### Returns

`any`

**`Memberof`**

ProxyPair

#### Defined in

dist/pair.d.ts:82

___

### host

• `get` **host**(): `string`

#### Returns

`string`

**`Memberof`**

ProxyPair

#### Implementation of

ProxyInfo.host

#### Defined in

dist/pair.d.ts:38

___

### password

• `get` **password**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

**`Memberof`**

ProxyPair

#### Implementation of

ProxyInfo.password

#### Defined in

dist/pair.d.ts:62

___

### port

• `get` **port**(): `number`

#### Returns

`number`

**`Memberof`**

ProxyPair

#### Implementation of

ProxyInfo.port

#### Defined in

dist/pair.d.ts:46

___

### primary

• `get` **primary**(): [`ProxyInfo`](../modules.md#proxyinfo)

#### Returns

[`ProxyInfo`](../modules.md#proxyinfo)

**`Memberof`**

ProxyPair

#### Defined in

dist/pair.d.ts:70

___

### type

• `get` **type**(): [`ProxyType`](../modules.md#proxytype)

#### Returns

[`ProxyType`](../modules.md#proxytype)

**`Memberof`**

ProxyPair

#### Implementation of

ProxyInfo.type

#### Defined in

dist/pair.d.ts:30

___

### username

• `get` **username**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

**`Memberof`**

ProxyPair

#### Implementation of

ProxyInfo.username

#### Defined in

dist/pair.d.ts:54

## Methods

### closeBrowserUrl

▸ **closeBrowserUrl**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

**`Memberof`**

ProxyPair

#### Defined in

dist/pair.d.ts:146

___

### createAgent

▸ **createAgent**(): `Agent`

#### Returns

`Agent`

{Agent}

**`Memberof`**

ProxyPair

#### Defined in

dist/pair.d.ts:89

___

### createHttpAgent

▸ **createHttpAgent**(): `Agent`

#### Returns

`Agent`

{Agent}

**`Memberof`**

ProxyPair

#### Defined in

dist/pair.d.ts:117

___

### createSocksAgent

▸ **createSocksAgent**(): `Agent`

#### Returns

`Agent`

{Agent}

**`Memberof`**

ProxyPair

#### Defined in

dist/pair.d.ts:124

___

### createSocksSocket

▸ **createSocksSocket**(`host`, `port`): `Promise`\<`Socket`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `port` | `number` |

#### Returns

`Promise`\<`Socket`\>

{Promise<Socket>}

**`Memberof`**

ProxyPair

#### Defined in

dist/pair.d.ts:133

___

### getAgent

▸ **getAgent**(): `Agent`

#### Returns

`Agent`

{Agent}

**`Memberof`**

ProxyPair

#### Defined in

dist/pair.d.ts:96

___

### getBrowserUrl

▸ **getBrowserUrl**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

**`Memberof`**

ProxyPair

#### Defined in

dist/pair.d.ts:140

___

### getHttpAgent

▸ **getHttpAgent**(): `Agent`

#### Returns

`Agent`

{Agent}

**`Memberof`**

ProxyPair

#### Defined in

dist/pair.d.ts:103

___

### getSocksAgent

▸ **getSocksAgent**(): `Agent`

#### Returns

`Agent`

{Agent}

**`Memberof`**

ProxyPair

#### Defined in

dist/pair.d.ts:110
