[**Package**](../README.md)

***

[Package](../globals.md) / ParallelMapOptions

# Type Alias: ParallelMapOptions

> **ParallelMapOptions** = `object`

Defined in: [parallel.ts:6](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/parallel.ts#L6)

## Properties

### parallel?

> `optional` **parallel**: `number` \| `boolean`

Defined in: [parallel.ts:12](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/parallel.ts#L12)

- `true` or undefined - automatically parallelize based on cpu count
- `false` or 1, 0 - do not parallelize. Execute map sequentially
- any other number - parallelize by this number
