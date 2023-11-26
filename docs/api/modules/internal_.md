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
- [ParallelMapOptions](internal_.md#parallelmapoptions)
- [ProxyWithMeta](internal_.md#proxywithmeta)

## Type Aliases

### AnyProxy

Ƭ **AnyProxy**: `string` \| `URL` \| [`AnyProxyInfo`](../modules.md#anyproxyinfo)

#### Defined in

dist/fetchers/custom.d.ts:8

___

### CombinedFetcherOptions

Ƭ **CombinedFetcherOptions**: \{ `allowFetch?`: `boolean` ; `fetchers?`: [`ProxyFetcher`](../classes/ProxyFetcher.md)\<`unknown`\>[]  } & [`ParallelMapOptions`](internal_.md#parallelmapoptions)

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

### ParallelMapOptions

Ƭ **ParallelMapOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `parallel?` | `number` \| `boolean` | - `true` or undefined - automatically parallelize based on cpu count - `false` or 1, 0 - do not parallelize. Execute map sequentially - any other number - parallelize by this number |

#### Defined in

dist/parallel.d.ts:1

___

### ProxyWithMeta

Ƭ **ProxyWithMeta**\<`T`\>: [proxy: AnyProxy, info: T] \| \{ `info`: `T` ; `proxy`: [`AnyProxy`](internal_.md#anyproxy)  }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

dist/fetchers/custom.d.ts:9
