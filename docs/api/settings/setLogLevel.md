---
tags:
  - log level
  - debug
---

# setLogLevel

Sets the internal log level of PactumJS.

> The default log level is **INFO**

## Syntax

```js
setLogLevel(level)
```

## Usage

### ✅  Correct Usage

```js
settings.setLogLevel('ERROR');
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
const { settings } = require('pactum');

settings.setLogLevel('ERROR');
```

## See Also

- [useLogLevel](/api/requests/useLogLevel)