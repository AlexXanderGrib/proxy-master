[**Package**](../README.md)

***

[Package](../globals.md) / parallelMap

# Function: parallelMap()

> **parallelMap**\<`A`, `B`\>(`data`, `map`, `options?`): `Promise`\<`PromiseSettledResult`\<`B`\>[]\>

Defined in: [parallel.ts:44](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/parallel.ts#L44)

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
