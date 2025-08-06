[**Package**](../README.md)

***

[Package](../globals.md) / threadedMap

# Function: threadedMap()

> **threadedMap**\<`A`, `B`\>(`input`, `map`, `options?`): `AsyncIterable`\<`B`\>

Defined in: [parallel.ts:103](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/parallel.ts#L103)

## Type Parameters

### A

`A`

### B

`B`

## Parameters

### input

[`MaybeAsyncIterable`](../-internal-/type-aliases/MaybeAsyncIterable.md)\<`A`\>

### map

(`input`) => [`MaybePromiseLike`](../-internal-/type-aliases/MaybePromiseLike.md)\<`B`\>

### options?

[`ThreadedMapOptions`](../type-aliases/ThreadedMapOptions.md)\<`A`, `B`\> = `{}`

## Returns

`AsyncIterable`\<`B`\>

{AsyncIterable<B>}

## Export
