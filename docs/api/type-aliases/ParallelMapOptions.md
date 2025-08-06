[**Package**](../README.md)

***

[Package](../globals.md) / ParallelMapOptions

# Type Alias: ParallelMapOptions

> **ParallelMapOptions** = `object`

Defined in: [parallel.ts:6](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/parallel.ts#L6)

## Properties

### parallel?

> `optional` **parallel**: `number` \| `boolean`

Defined in: [parallel.ts:12](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/parallel.ts#L12)

- `true` or undefined - automatically parallelize based on cpu count
- `false` or 1, 0 - do not parallelize. Execute map sequentially
- any other number - parallelize by this number
