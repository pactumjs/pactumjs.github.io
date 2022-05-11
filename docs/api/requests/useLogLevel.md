---
tags:
  - log level
  - debug
---

# useLogLevel

Sets the internal log level of PactumJS for the current test case.

## Syntax

```js
useLogLevel(level)
```

## Usage

### ✅  Correct Usage

```js
await spec()
  .get('https://reqres.in/api/users/1')
  .expectStatus(200)
  .useLogLevel('DEBUG');
```

## Arguments

#### > level (string)

Available Log Levels

- `VERBOSE`
- `TRACE`
- `DEBUG`
- `INFO`
- `WARN`
- `ERROR`
- `SILENT`

## Examples

```js
const { spec } = require('pactum');

await spec()
  .get('https://reqres.in/api/users/1')
  .expectStatus(200)
  .useLogLevel('DEBUG');

// the below spec will have the default log level - 'INFO'
await spec()
  .get('https://reqres.in/api/users/1')
  .expectStatus(200);
```

## See Also

- [setLogLevel](/api/settings/setLogLevel)