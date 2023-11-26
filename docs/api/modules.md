[Package](README.md) / Exports

# Package

## Table of contents

### Modules

- [\<internal\>](modules/internal_.md)

### Classes

- [CustomFetcher](classes/CustomFetcher.md)
- [FileFetcher](classes/FileFetcher.md)
- [Proxy6Fetcher](classes/Proxy6Fetcher.md)
- [ProxyFetcher](classes/ProxyFetcher.md)
- [ProxyLineFetcher](classes/ProxyLineFetcher.md)
- [ProxyPair](classes/ProxyPair.md)

### Type Aliases

- [AnyProxyInfo](modules.md#anyproxyinfo)
- [CheckedProxy](modules.md#checkedproxy)
- [CheckerOptions](modules.md#checkeroptions)
- [CustomFetcherEvents](modules.md#customfetcherevents)
- [CustomFetcherFetch](modules.md#customfetcherfetch)
- [CustomFetcherOptions](modules.md#customfetcheroptions)
- [FileFetcherOptions](modules.md#filefetcheroptions)
- [FileInfo](modules.md#fileinfo)
- [HttpLikeProxy](modules.md#httplikeproxy)
- [HttpProxy](modules.md#httpproxy)
- [HttpsProxy](modules.md#httpsproxy)
- [Mutable](modules.md#mutable)
- [Proxy6FetcherOptions](modules.md#proxy6fetcheroptions)
- [Proxy6Info](modules.md#proxy6info)
- [Proxy6Proxy](modules.md#proxy6proxy)
- [Proxy6Response](modules.md#proxy6response)
- [ProxyInfo](modules.md#proxyinfo)
- [ProxyLineFetcherOptions](modules.md#proxylinefetcheroptions)
- [ProxyLineGetBalanceResult](modules.md#proxylinegetbalanceresult)
- [ProxyLineInfo](modules.md#proxylineinfo)
- [ProxyLineOrderParameters](modules.md#proxylineorderparameters)
- [ProxyLinePeriodDays](modules.md#proxylineperioddays)
- [ProxyLineProxy](modules.md#proxylineproxy)
- [ProxyLineRenewParameters](modules.md#proxylinerenewparameters)
- [ProxyLineResponse](modules.md#proxylineresponse)
- [ProxyType](modules.md#proxytype)
- [Socks4Proxy](modules.md#socks4proxy)
- [Socks5Proxy](modules.md#socks5proxy)
- [SocksProxy](modules.md#socksproxy)

### Variables

- [fetchers](modules.md#fetchers)

### Functions

- [anonymizeProxy](modules.md#anonymizeproxy)
- [check](modules.md#check)
- [closeAnonymizedProxy](modules.md#closeanonymizedproxy)
- [createSocksSocket](modules.md#createsockssocket)
- [getAgent](modules.md#getagent)
- [getAgents](modules.md#getagents)
- [getDispatcher](modules.md#getdispatcher)
- [isHttp](modules.md#ishttp)
- [isHttpLike](modules.md#ishttplike)
- [isHttps](modules.md#ishttps)
- [isSocks](modules.md#issocks)
- [isSocks4](modules.md#issocks4)
- [isSocks5](modules.md#issocks5)
- [isTyped](modules.md#istyped)
- [parse](modules.md#parse)
- [parseRequireType](modules.md#parserequiretype)
- [stringifyToUrl](modules.md#stringifytourl)

## Type Aliases

### AnyProxyInfo

Ƭ **AnyProxyInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `password?` | `string` |
| `port` | `number` |
| `type?` | [`ProxyType`](modules.md#proxytype) |
| `username?` | `string` |

#### Defined in

dist/parser.d.ts:3

___

### CheckedProxy

Ƭ **CheckedProxy**: [`Mutable`](modules.md#mutable)\<[`ProxyInfo`](modules.md#proxyinfo)\> & \{ `timeout`: `number`  }

#### Defined in

dist/checker.d.ts:4

___

### CheckerOptions

Ƭ **CheckerOptions**: \{ `allowHeuristics?`: `boolean` ; `signal?`: `AbortSignal` ; `timeout?`: `number` ; `url?`: `string`  } & [`ParallelMapOptions`](modules/internal_.md#parallelmapoptions)

#### Defined in

dist/checker.d.ts:7

___

### CustomFetcherEvents

Ƭ **CustomFetcherEvents**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `checked:failed` | (`line`: `string`, `error`: `unknown`) => `void` |
| `checked:valid` | (`proxy`: [`CheckedProxy`](modules.md#checkedproxy)) => `void` |
| `fetch:failed` | (`error`: `unknown`) => `void` |

#### Defined in

dist/fetchers/custom.d.ts:19

___

### CustomFetcherFetch

Ƭ **CustomFetcherFetch**\<`T`\>: () => [`MaybePromiseLike`](modules/internal_.md#maybepromiselike)\<[`MaybeAsyncIterable`](modules/internal_.md#maybeasynciterable)\<`T` extends `never` ? [`AnyProxy`](modules/internal_.md#anyproxy) : [`ProxyWithMeta`](modules/internal_.md#proxywithmeta)\<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (): [`MaybePromiseLike`](modules/internal_.md#maybepromiselike)\<[`MaybeAsyncIterable`](modules/internal_.md#maybeasynciterable)\<`T` extends `never` ? [`AnyProxy`](modules/internal_.md#anyproxy) : [`ProxyWithMeta`](modules/internal_.md#proxywithmeta)\<`T`\>\>\>

##### Returns

[`MaybePromiseLike`](modules/internal_.md#maybepromiselike)\<[`MaybeAsyncIterable`](modules/internal_.md#maybeasynciterable)\<`T` extends `never` ? [`AnyProxy`](modules/internal_.md#anyproxy) : [`ProxyWithMeta`](modules/internal_.md#proxywithmeta)\<`T`\>\>\>

#### Defined in

dist/fetchers/custom.d.ts:24

___

### CustomFetcherOptions

Ƭ **CustomFetcherOptions**: \{ `check?`: `boolean` ; `checkTimeout?`: `number` ; `checkUrl?`: `string` ; `defaultProxyType?`: [`ProxyType`](modules.md#proxytype)  } & [`ParallelMapOptions`](modules/internal_.md#parallelmapoptions)

#### Defined in

dist/fetchers/custom.d.ts:13

___

### FileFetcherOptions

Ƭ **FileFetcherOptions**: `Omit`\<[`CustomFetcherOptions`](modules.md#customfetcheroptions), ``"fetch"``\> & \{ `fileEncoding?`: `BufferEncoding` ; `path`: `PathLike` ; `proxy?`: [`ProxyInfo`](modules.md#proxyinfo)  }

#### Defined in

dist/fetchers/file.d.ts:6

___

### FileInfo

Ƭ **FileInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `line` | `string` |

#### Defined in

dist/fetchers/file.d.ts:11

___

### HttpLikeProxy

Ƭ **HttpLikeProxy**: [`HttpProxy`](modules.md#httpproxy) \| [`HttpsProxy`](modules.md#httpsproxy)

#### Defined in

dist/parser.d.ts:15

___

### HttpProxy

Ƭ **HttpProxy**: [`ProxyInfo`](modules.md#proxyinfo)\<``"http"``\>

#### Defined in

dist/parser.d.ts:13

___

### HttpsProxy

Ƭ **HttpsProxy**: [`ProxyInfo`](modules.md#proxyinfo)\<``"https"``\>

#### Defined in

dist/parser.d.ts:14

___

### Mutable

Ƭ **Mutable**\<`T`\>: \{ -readonly [P in keyof T]: T[P] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Defined in

dist/parser.d.ts:19

___

### Proxy6FetcherOptions

Ƭ **Proxy6FetcherOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `apiKey` | `string` |
| `description?` | `string` |
| `limit?` | `number` |
| `page?` | `number` |
| `proxy?` | [`ProxyInfo`](modules.md#proxyinfo) |
| `state?` | ``"active"`` \| ``"expired"`` \| ``"expiring"`` \| ``"all"`` |

#### Defined in

dist/fetchers/proxy6.d.ts:11

___

### Proxy6Info

Ƭ **Proxy6Info**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `country` | `string` |
| `description?` | `string` |
| `expiryDate` | `Date` |
| `id` | `string` |
| `ip?` | `string` |
| `purchaseDate` | `Date` |

#### Defined in

dist/fetchers/proxy6.d.ts:3

___

### Proxy6Proxy

Ƭ **Proxy6Proxy**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active` | `string` |
| `country` | `string` |
| `date` | `string` |
| `date_end` | `string` |
| `descr` | `string` |
| `host` | `string` |
| `id` | `string` |
| `ip` | `string` |
| `pass` | `string` |
| `port` | `string` |
| `type` | ``"socks"`` \| ``"http"`` |
| `unixtime` | `number` |
| `unixtime_end` | `number` |
| `user` | `string` |
| `version` | `string` |

#### Defined in

dist/fetchers/proxy6.d.ts:29

___

### Proxy6Response

Ƭ **Proxy6Response**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `balance` | `string` |
| `currency` | `string` |
| `date_mod` | `string` |
| `list` | [`Proxy6Proxy`](modules.md#proxy6proxy)[] |
| `list_count` | `number` |
| `page` | `number` |
| `status` | `string` |
| `user_id` | `string` |

#### Defined in

dist/fetchers/proxy6.d.ts:19

___

### ProxyInfo

Ƭ **ProxyInfo**\<`T`\>: [`AnyProxyInfo`](modules.md#anyproxyinfo) & \{ `type`: `T`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ProxyType`](modules.md#proxytype) = [`ProxyType`](modules.md#proxytype) |

#### Defined in

dist/parser.d.ts:10

___

### ProxyLineFetcherOptions

Ƭ **ProxyLineFetcherOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `apiKey` | `string` |
| `country?` | `string`[] |
| `expiryDateAfter?` | `Date` |
| `expiryDateBefore?` | `Date` |
| `ipVersion?` | ``4`` \| ``6`` |
| `limit?` | `number` |
| `offset?` | `number` |
| `orderId?` | `number`[] |
| `proxy?` | [`ProxyInfo`](modules.md#proxyinfo) |
| `purchaseDateAfter?` | `Date` |
| `purchaseDateBefore?` | `Date` |
| `status?` | ``"active"`` \| ``"expired"`` \| ``"deleted"`` |
| `type?` | ``"dedicated"`` \| ``"shared"`` |

#### Defined in

dist/fetchers/proxyline.d.ts:4

___

### ProxyLineGetBalanceResult

Ƭ **ProxyLineGetBalanceResult**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `balance` | `number` | in USD |
| `partnerBalance` | `number` | in USD |

#### Defined in

dist/fetchers/proxyline.d.ts:51

___

### ProxyLineInfo

Ƭ **ProxyLineInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `country` | `string` |
| `expiryDate` | `Date` |
| `id` | `number` |
| `orderId` | `number` |
| `purchaseDate` | `Date` |
| `tags` | `string`[] |

#### Defined in

dist/fetchers/proxyline.d.ts:19

___

### ProxyLineOrderParameters

Ƭ **ProxyLineOrderParameters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `country` | [`ProxyLineFetcherOptions`](modules.md#proxylinefetcheroptions)[``"country"``] |
| `coupon?` | `string` |
| `ipVersion` | [`ProxyLineFetcherOptions`](modules.md#proxylinefetcheroptions)[``"ipVersion"``] |
| `ips?` | `string`[] |
| `period` | [`ProxyLinePeriodDays`](modules.md#proxylineperioddays) |
| `quantity` | `number` |
| `type` | [`ProxyLineFetcherOptions`](modules.md#proxylinefetcheroptions)[``"type"``] |

#### Defined in

dist/fetchers/proxyline.d.ts:63

___

### ProxyLinePeriodDays

Ƭ **ProxyLinePeriodDays**: ``5`` \| ``10`` \| ``20`` \| ``30`` \| ``60`` \| ``90`` \| ``120`` \| ``150`` \| ``180`` \| ``210`` \| ``240`` \| ``270`` \| ``300`` \| ``330`` \| ``360``

#### Defined in

dist/fetchers/proxyline.d.ts:57

___

### ProxyLineProxy

Ƭ **ProxyLineProxy**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `access_ips` | `any`[] |
| `country` | `string` |
| `date` | `string` |
| `date_end` | `string` |
| `id` | `number` |
| `internal_ip` | ``null`` |
| `ip` | `string` |
| `ip_version` | `number` |
| `order_id` | `number` |
| `password` | `string` |
| `port_http` | `number` |
| `port_socks5` | `number` |
| `tags` | `any`[] |
| `type` | `string` |
| `user` | `string` |
| `username` | `string` |

#### Defined in

dist/fetchers/proxyline.d.ts:33

___

### ProxyLineRenewParameters

Ƭ **ProxyLineRenewParameters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `coupon?` | `string` |
| `period` | [`ProxyLinePeriodDays`](modules.md#proxylineperioddays) |
| `proxies` | `number`[] |

#### Defined in

dist/fetchers/proxyline.d.ts:58

___

### ProxyLineResponse

Ƭ **ProxyLineResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `count` | `number` |
| `next` | `number` |
| `previous` | `number` |
| `results` | [`ProxyLineProxy`](modules.md#proxylineproxy)[] |

#### Defined in

dist/fetchers/proxyline.d.ts:27

___

### ProxyType

Ƭ **ProxyType**: ``"http"`` \| ``"https"`` \| ``"socks4"`` \| ``"socks5"``

#### Defined in

dist/parser.d.ts:2

___

### Socks4Proxy

Ƭ **Socks4Proxy**: [`ProxyInfo`](modules.md#proxyinfo)\<``"socks4"``\>

#### Defined in

dist/parser.d.ts:17

___

### Socks5Proxy

Ƭ **Socks5Proxy**: [`ProxyInfo`](modules.md#proxyinfo)\<``"socks5"``\>

#### Defined in

dist/parser.d.ts:16

___

### SocksProxy

Ƭ **SocksProxy**: [`Socks4Proxy`](modules.md#socks4proxy) \| [`Socks5Proxy`](modules.md#socks5proxy)

#### Defined in

dist/parser.d.ts:18

## Variables

### fetchers

• `Const` **fetchers**: `Readonly`\<\{ `combine`: (`options`: [`CombinedFetcherOptions`](modules/internal_.md#combinedfetcheroptions)) => [`CombinedFetcher`](classes/internal_.CombinedFetcher.md) ; `custom`: \<T\>(`fetch`: [`CustomFetcherFetch`](modules.md#customfetcherfetch)\<`T`\>, `options?`: [`CustomFetcherOptions`](modules.md#customfetcheroptions)) => [`CustomFetcher`](classes/CustomFetcher.md)\<`T`\> ; `file`: (`options`: [`FileFetcherOptions`](modules.md#filefetcheroptions)) => [`FileFetcher`](classes/FileFetcher.md) ; `proxy6`: (`options`: [`Proxy6FetcherOptions`](modules.md#proxy6fetcheroptions)) => [`Proxy6Fetcher`](classes/Proxy6Fetcher.md) ; `proxyLine`: (`options`: [`ProxyLineFetcherOptions`](modules.md#proxylinefetcheroptions)) => [`ProxyLineFetcher`](classes/ProxyLineFetcher.md)  }\>

#### Defined in

dist/fetchers/index.d.ts:6

## Functions

### anonymizeProxy

▸ **anonymizeProxy**(`proxy`, `options?`): `Promise`\<[`HttpLikeProxy`](modules.md#httplikeproxy)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `proxy` | [`HttpLikeProxy`](modules.md#httplikeproxy) |
| `options?` | `Object` |
| `options.localPort?` | `number` |

#### Returns

`Promise`\<[`HttpLikeProxy`](modules.md#httplikeproxy)\>

#### Defined in

dist/anonymize.d.ts:8

___

### check

▸ **check**(`proxy`, `options?`): `Promise`\<[`CheckedProxy`](modules.md#checkedproxy)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `proxy` | [`AnyProxyInfo`](modules.md#anyproxyinfo) |
| `options?` | [`CheckerOptions`](modules.md#checkeroptions) |

#### Returns

`Promise`\<[`CheckedProxy`](modules.md#checkedproxy)\>

#### Defined in

dist/checker.d.ts:19

___

### closeAnonymizedProxy

▸ **closeAnonymizedProxy**(`proxy`, `options?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `proxy` | [`HttpLikeProxy`](modules.md#httplikeproxy) |
| `options?` | `Object` |
| `options.closeConnections?` | `boolean` |

#### Returns

`Promise`\<`void`\>

{Promise<void>}

**`Export`**

#### Defined in

dist/anonymize.d.ts:19

___

### createSocksSocket

▸ **createSocksSocket**(`proxy`, `host`, `port`, `options?`): `Promise`\<`Socket`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `proxy` | [`SocksProxy`](modules.md#socksproxy) |
| `host` | `string` |
| `port` | `number` |
| `options?` | `Partial`\<`SocksClientOptions`\> |

#### Returns

`Promise`\<`Socket`\>

{Promise<Socket>}

**`Export`**

#### Defined in

dist/socks.d.ts:15

___

### getAgent

▸ **getAgent**(`proxy`): `Agent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `proxy` | [`ProxyInfo`](modules.md#proxyinfo) |

#### Returns

`Agent`

#### Defined in

dist/agent.d.ts:23

___

### getAgents

▸ **getAgents**(`proxy`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `proxy` | [`ProxyInfo`](modules.md#proxyinfo) |

#### Returns

`Object`

{{
  httpsAgent: Agent;
  httpAgent: Agent;
}}

| Name | Type |
| :------ | :------ |
| `httpAgent` | `Agent` |
| `httpsAgent` | `Agent` |

**`Export`**

#### Defined in

dist/agent.d.ts:14

___

### getDispatcher

▸ **getDispatcher**(`proxy`, `connectorOptions?`): `Dispatcher`

#### Parameters

| Name | Type |
| :------ | :------ |
| `proxy` | [`ProxyInfo`](modules.md#proxyinfo) |
| `connectorOptions?` | `BuildOptions` |

#### Returns

`Dispatcher`

{Dispatcher}

**`Export`**

#### Defined in

dist/undici.d.ts:11

___

### isHttp

▸ **isHttp**(`proxy`): proxy is HttpProxy

#### Parameters

| Name | Type |
| :------ | :------ |
| `proxy` | [`AnyProxyInfo`](modules.md#anyproxyinfo) |

#### Returns

proxy is HttpProxy

#### Defined in

dist/parser.d.ts:39

___

### isHttpLike

▸ **isHttpLike**(`proxy`): proxy is HttpLikeProxy

#### Parameters

| Name | Type |
| :------ | :------ |
| `proxy` | [`AnyProxyInfo`](modules.md#anyproxyinfo) |

#### Returns

proxy is HttpLikeProxy

{proxy is HttpLikeProxy}

**`Export`**

#### Defined in

dist/parser.d.ts:67

___

### isHttps

▸ **isHttps**(`proxy`): proxy is HttpsProxy

#### Parameters

| Name | Type |
| :------ | :------ |
| `proxy` | [`AnyProxyInfo`](modules.md#anyproxyinfo) |

#### Returns

proxy is HttpsProxy

{proxy is HttpsProxy}

**`Export`**

#### Defined in

dist/parser.d.ts:59

___

### isSocks

▸ **isSocks**(`proxy`): proxy is SocksProxy

#### Parameters

| Name | Type |
| :------ | :------ |
| `proxy` | [`AnyProxyInfo`](modules.md#anyproxyinfo) |

#### Returns

proxy is SocksProxy

#### Defined in

dist/parser.d.ts:73

___

### isSocks4

▸ **isSocks4**(`proxy`): proxy is Socks4Proxy

#### Parameters

| Name | Type |
| :------ | :------ |
| `proxy` | [`AnyProxyInfo`](modules.md#anyproxyinfo) |

#### Returns

proxy is Socks4Proxy

#### Defined in

dist/parser.d.ts:51

___

### isSocks5

▸ **isSocks5**(`proxy`): proxy is Socks5Proxy

#### Parameters

| Name | Type |
| :------ | :------ |
| `proxy` | [`AnyProxyInfo`](modules.md#anyproxyinfo) |

#### Returns

proxy is Socks5Proxy

#### Defined in

dist/parser.d.ts:45

___

### isTyped

▸ **isTyped**(`proxy`): proxy is ProxyInfo\<ProxyType\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `proxy` | [`AnyProxyInfo`](modules.md#anyproxyinfo) |

#### Returns

proxy is ProxyInfo\<ProxyType\>

{proxy is ProxyInfo}

**`Export`**

#### Defined in

dist/parser.d.ts:81

___

### parse

▸ **parse**(`line`): [`Mutable`](modules.md#mutable)\<[`AnyProxyInfo`](modules.md#anyproxyinfo)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | `string` \| `URL` |

#### Returns

[`Mutable`](modules.md#mutable)\<[`AnyProxyInfo`](modules.md#anyproxyinfo)\>

#### Defined in

dist/parser.d.ts:27

___

### parseRequireType

▸ **parseRequireType**(`line`, `defaultType?`): [`Mutable`](modules.md#mutable)\<[`ProxyInfo`](modules.md#proxyinfo)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | `string` \| `URL` |
| `defaultType?` | [`ProxyType`](modules.md#proxytype) |

#### Returns

[`Mutable`](modules.md#mutable)\<[`ProxyInfo`](modules.md#proxyinfo)\>

{Mutable<ProxyInfo>}

**`Export`**

#### Defined in

dist/parser.d.ts:90

___

### stringifyToUrl

▸ **stringifyToUrl**(`proxy`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `proxy` | [`AnyProxyInfo`](modules.md#anyproxyinfo) |

#### Returns

`string`

URL

#### Defined in

dist/parser.d.ts:33
