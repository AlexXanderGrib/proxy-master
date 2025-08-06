[**Package**](../README.md)

***

[Package](../globals.md) / CustomFetcherOptions

# Type Alias: CustomFetcherOptions

> **CustomFetcherOptions** = `object` & [`ParallelMapOptions`](ParallelMapOptions.md)

Defined in: [fetchers/custom.ts:21](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetchers/custom.ts#L21)

## Type declaration

### check?

> `optional` **check**: `boolean`

### checkTimeout?

> `optional` **checkTimeout**: `number`

### checkUrl?

> `optional` **checkUrl**: `string`

### defaultProxyType?

> `optional` **defaultProxyType**: [`ProxyType`](ProxyType.md)

### filter()?

> `optional` **filter**: (`proxy`) => `boolean`

#### Parameters

##### proxy

[`AnyProxyInfo`](AnyProxyInfo.md)

#### Returns

`boolean`
