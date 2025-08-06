[**Package**](../README.md)

***

[Package](../globals.md) / threadedMap

# Function: threadedMap()

> **threadedMap**\<`A`, `B`\>(`input`, `map`, `options?`): `AsyncIterable`\<`B`\>

Defined in: [parallel.ts:103](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/parallel.ts#L103)

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
