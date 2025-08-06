[**Package**](../README.md)

***

[Package](../globals.md) / ThreadedMapOptions

# Type Alias: ThreadedMapOptions\<A, B\>

> **ThreadedMapOptions**\<`A`, `B`\> = `object` & [`ParallelMapOptions`](ParallelMapOptions.md)

Defined in: [parallel.ts:86](https://github.com/AlexXanderGrib/proxy-master/blob/d9889b922817ac03c7a235b832a590a4ef34fb55/src/parallel.ts#L86)

## Type declaration

### key()?

> `optional` **key**: (`value`) => `unknown`

#### Parameters

##### value

`A`

#### Returns

`unknown`

### onError()?

> `optional` **onError**: (`error`, `input`) => `any`

#### Parameters

##### error

`unknown`

##### input

`A`

#### Returns

`any`

### onValue()?

> `optional` **onValue**: (`value`, `input`) => `any`

#### Parameters

##### value

`B`

##### input

`A`

#### Returns

`any`

## Type Parameters

### A

`A`

### B

`B`
