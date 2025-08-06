[**Package**](../README.md)

***

[Package](../globals.md) / ProxyPair

# Class: ProxyPair

Defined in: [pair.ts:20](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/pair.ts#L20)

## Export

ProxyPair

## Implements

- [`ProxyInfo`](../type-aliases/ProxyInfo.md)

## Constructors

### Constructor

> **new ProxyPair**(`http`, `socks`, `primaryType`): `ProxyPair`

Defined in: [pair.ts:27](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/pair.ts#L27)

Creates an instance of ProxyPair.

#### Parameters

##### http

[`HttpLikeProxy`](../type-aliases/HttpLikeProxy.md)

##### socks

[`SocksProxy`](../type-aliases/SocksProxy.md)

##### primaryType

`"http"` | `"socks"`

#### Returns

`ProxyPair`

#### Memberof

ProxyPair

## Properties

### \_browserProxy

> `private` **\_browserProxy**: `undefined` \| [`HttpLikeProxy`](../type-aliases/HttpLikeProxy.md)

Defined in: [pair.ts:96](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/pair.ts#L96)

***

### \_browserUrl

> `private` **\_browserUrl**: `undefined` \| `string`

Defined in: [pair.ts:97](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/pair.ts#L97)

***

### \_httpAgent

> `private` **\_httpAgent**: `undefined` \| `Agent`

Defined in: [pair.ts:100](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/pair.ts#L100)

***

### \_socksAgent

> `private` **\_socksAgent**: `undefined` \| `Agent`

Defined in: [pair.ts:99](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/pair.ts#L99)

***

### http

> `readonly` **http**: [`HttpLikeProxy`](../type-aliases/HttpLikeProxy.md)

Defined in: [pair.ts:28](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/pair.ts#L28)

***

### primaryType

> `readonly` **primaryType**: `"http"` \| `"socks"` = `"http"`

Defined in: [pair.ts:30](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/pair.ts#L30)

***

### socks

> `readonly` **socks**: [`SocksProxy`](../type-aliases/SocksProxy.md)

Defined in: [pair.ts:29](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/pair.ts#L29)

## Accessors

### \_primaryAgent

#### Get Signature

> **get** `private` **\_primaryAgent**(): `undefined` \| `Agent`

Defined in: [pair.ts:109](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/pair.ts#L109)

##### Memberof

ProxyPair

##### Returns

`undefined` \| `Agent`

***

### host

#### Get Signature

> **get** **host**(): `string`

Defined in: [pair.ts:50](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/pair.ts#L50)

##### Memberof

ProxyPair

##### Returns

`string`

#### Implementation of

`ProxyInfo.host`

***

### password

#### Get Signature

> **get** **password**(): `undefined` \| `string`

Defined in: [pair.ts:81](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/pair.ts#L81)

##### Memberof

ProxyPair

##### Returns

`undefined` \| `string`

#### Implementation of

`ProxyInfo.password`

***

### port

#### Get Signature

> **get** **port**(): `number`

Defined in: [pair.ts:60](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/pair.ts#L60)

##### Memberof

ProxyPair

##### Returns

`number`

#### Implementation of

`ProxyInfo.port`

***

### primary

#### Get Signature

> **get** **primary**(): [`ProxyInfo`](../type-aliases/ProxyInfo.md)

Defined in: [pair.ts:92](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/pair.ts#L92)

##### Memberof

ProxyPair

##### Returns

[`ProxyInfo`](../type-aliases/ProxyInfo.md)

***

### type

#### Get Signature

> **get** **type**(): [`ProxyType`](../type-aliases/ProxyType.md)

Defined in: [pair.ts:40](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/pair.ts#L40)

##### Memberof

ProxyPair

##### Returns

[`ProxyType`](../type-aliases/ProxyType.md)

#### Implementation of

[`AnyProxyInfo`](../type-aliases/AnyProxyInfo.md).[`type`](../type-aliases/AnyProxyInfo.md#type)

***

### username

#### Get Signature

> **get** **username**(): `undefined` \| `string`

Defined in: [pair.ts:70](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/pair.ts#L70)

##### Memberof

ProxyPair

##### Returns

`undefined` \| `string`

#### Implementation of

`ProxyInfo.username`

## Methods

### closeBrowserUrl()

> **closeBrowserUrl**(): `Promise`\<`void`\>

Defined in: [pair.ts:215](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/pair.ts#L215)

#### Returns

`Promise`\<`void`\>

#### Memberof

ProxyPair

***

### createAgent()

> **createAgent**(): `Agent`

Defined in: [pair.ts:119](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/pair.ts#L119)

#### Returns

`Agent`

{Agent}

#### Memberof

ProxyPair

***

### createHttpAgent()

> **createHttpAgent**(): `Agent`

Defined in: [pair.ts:161](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/pair.ts#L161)

#### Returns

`Agent`

{Agent}

#### Memberof

ProxyPair

***

### createSocksAgent()

> **createSocksAgent**(): `Agent`

Defined in: [pair.ts:174](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/pair.ts#L174)

#### Returns

`Agent`

{Agent}

#### Memberof

ProxyPair

***

### createSocksSocket()

> **createSocksSocket**(`host`, `port`): `Promise`\<`Socket`\>

Defined in: [pair.ts:189](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/pair.ts#L189)

#### Parameters

##### host

`string`

##### port

`number`

#### Returns

`Promise`\<`Socket`\>

{Promise<Socket>}

#### Memberof

ProxyPair

***

### getAgent()

> **getAgent**(): `Agent`

Defined in: [pair.ts:131](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/pair.ts#L131)

#### Returns

`Agent`

{Agent}

#### Memberof

ProxyPair

***

### getBrowserUrl()

> **getBrowserUrl**(): `Promise`\<`string`\>

Defined in: [pair.ts:199](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/pair.ts#L199)

#### Returns

`Promise`\<`string`\>

#### Memberof

ProxyPair

***

### getHttpAgent()

> **getHttpAgent**(): `Agent`

Defined in: [pair.ts:141](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/pair.ts#L141)

#### Returns

`Agent`

{Agent}

#### Memberof

ProxyPair

***

### getSocksAgent()

> **getSocksAgent**(): `Agent`

Defined in: [pair.ts:151](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/pair.ts#L151)

#### Returns

`Agent`

{Agent}

#### Memberof

ProxyPair
