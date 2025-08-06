[**Package**](../README.md)

***

[Package](../globals.md) / parallelMap

# Function: parallelMap()

> **parallelMap**\<`A`, `B`\>(`data`, `map`, `options?`): `Promise`\<`PromiseSettledResult`\<`B`\>[]\>

Defined in: [parallel.ts:44](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/parallel.ts#L44)

## Type Parameters

### A

`A`

### B

`B`

## Parameters

### data

`Iterable`\<`A`\>

### map

(`value`) => `B` \| `PromiseLike`\<`B`\>

### options?

[`ParallelMapOptions`](../type-aliases/ParallelMapOptions.md) = `{}`

## Returns

`Promise`\<`PromiseSettledResult`\<`B`\>[]\>

## Export
