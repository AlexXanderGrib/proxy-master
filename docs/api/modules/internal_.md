[Package](../README.md) / [Exports](../modules.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Classes

- [CombinedFetcher](../classes/internal_.CombinedFetcher.md)

### Type Aliases

- [CheckerOptions](internal_.md#checkeroptions)
- [CombinedFetcherOptions](internal_.md#combinedfetcheroptions)
- [ParallelMapOptions](internal_.md#parallelmapoptions)

## Type Aliases

### CheckerOptions

Ƭ **CheckerOptions**: \{ `allowHeuristics?`: `boolean` ; `signal?`: `AbortSignal` ; `timeout?`: `number` ; `url?`: `string`  } & [`ParallelMapOptions`](internal_.md#parallelmapoptions)

#### Defined in

dist/checker.d.ts:7

___

### CombinedFetcherOptions

Ƭ **CombinedFetcherOptions**: \{ `allowFetch?`: `boolean` ; `fetchers?`: [`ProxyFetcher`](../classes/ProxyFetcher.md)\<`unknown`\>[]  } & [`ParallelMapOptions`](internal_.md#parallelmapoptions)

#### Defined in

dist/fetchers/combine.d.ts:4

___

### ParallelMapOptions

Ƭ **ParallelMapOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `parallel?` | `number` \| `boolean` | - `true` or undefined - automatically parallelize based on cpu count - `false` or 1, 0 - do not parallelize. Execute map sequentially - any other number - parallelize by this number |

#### Defined in

dist/parallel.d.ts:1
