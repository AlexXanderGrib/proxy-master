[**Package**](../README.md)

***

[Package](../globals.md) / CustomFetcherEvents

# Type Alias: CustomFetcherEvents

> **CustomFetcherEvents** = `object`

Defined in: [fetchers/custom.ts:29](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetchers/custom.ts#L29)

## Properties

### checked:failed()

> **checked:failed**: (`line`, `error`) => `void`

Defined in: [fetchers/custom.ts:32](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetchers/custom.ts#L32)

#### Parameters

##### line

`string`

##### error

`unknown`

#### Returns

`void`

***

### checked:failed:dedupe()

> **checked:failed:dedupe**: (`line`, `error`) => `void`

Defined in: [fetchers/custom.ts:33](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetchers/custom.ts#L33)

#### Parameters

##### line

`string`

##### error

`unknown`

#### Returns

`void`

***

### checked:valid()

> **checked:valid**: (`proxy`, `line`) => `void`

Defined in: [fetchers/custom.ts:30](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetchers/custom.ts#L30)

#### Parameters

##### proxy

[`CheckedProxy`](CheckedProxy.md)

##### line

`string`

#### Returns

`void`

***

### checked:valid:dedupe()

> **checked:valid:dedupe**: (`proxy`, `line`) => `void`

Defined in: [fetchers/custom.ts:31](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetchers/custom.ts#L31)

#### Parameters

##### proxy

[`CheckedProxy`](CheckedProxy.md)

##### line

`string`

#### Returns

`void`

***

### fetch:failed()

> **fetch:failed**: (`error`) => `void`

Defined in: [fetchers/custom.ts:34](https://github.com/AlexXanderGrib/proxy-master/blob/ca5aa337e3a3c6ac87453a9ce0f2477b801f4bc9/src/fetchers/custom.ts#L34)

#### Parameters

##### error

`unknown`

#### Returns

`void`
