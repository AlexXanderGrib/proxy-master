[Package](../README.md) / [Exports](../modules.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Classes

- [CombinedFetcher](../classes/internal_.CombinedFetcher.md)

### Type Aliases

- [AnyProxy](internal_.md#anyproxy)
- [CombinedFetcherOptions](internal_.md#combinedfetcheroptions)
- [MaybeAsyncIterable](internal_.md#maybeasynciterable)
- [MaybePromiseLike](internal_.md#maybepromiselike)
- [ProxyWithMeta](internal_.md#proxywithmeta)

### Functions

- [urls](internal_.md#urls)

## Type Aliases

### AnyProxy

Ƭ **AnyProxy**: `string` \| `URL` \| [`AnyProxyInfo`](../modules.md#anyproxyinfo)

#### Defined in

dist/fetchers/custom.d.ts:8

___

### CombinedFetcherOptions

Ƭ **CombinedFetcherOptions**: \{ `allowFetch?`: `boolean` ; `fetchers?`: [`ProxyFetcher`](../classes/ProxyFetcher.md)\<`unknown`\>[]  } & [`ParallelMapOptions`](../modules.md#parallelmapoptions)

#### Defined in

dist/fetchers/combine.d.ts:4

___

### MaybeAsyncIterable

Ƭ **MaybeAsyncIterable**\<`T`\>: `Iterable`\<`T`\> \| `AsyncIterable`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

dist/types.d.ts:1

___

### MaybePromiseLike

Ƭ **MaybePromiseLike**\<`T`\>: `T` \| `PromiseLike`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

dist/types.d.ts:2

___

### ProxyWithMeta

Ƭ **ProxyWithMeta**\<`T`\>: [proxy: AnyProxy, info: T] \| \{ `info`: `T` ; `proxy`: [`AnyProxy`](internal_.md#anyproxy)  }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

dist/fetchers/custom.d.ts:9

## Functions

### urls

▸ **urls**(`urls`): [`CombinedFetcher`](../classes/internal_.CombinedFetcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `urls` | (`string` \| [`ProxyFetcher`](../classes/ProxyFetcher.md)\<`unknown`, [`Mutable`](../modules.md#mutable)\<[`ProxyInfo`](../modules.md#proxyinfo)\>\>)[] |

#### Returns

[`CombinedFetcher`](../classes/internal_.CombinedFetcher.md)

#### Defined in

dist/fetchers/index.d.ts:13
