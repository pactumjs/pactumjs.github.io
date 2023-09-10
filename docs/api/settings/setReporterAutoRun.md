---
tags:
  - reporter autorun
  - reporter
---
# setReporterAutoRun

sets reporter auto run option. Allows to disable reporter run after spec toss.

> Defaults to `true`

## Syntax

```js
setReporterAutoRun(boolean)
```

## Usage

### ✅  Correct Usage

```js
settings.setReporterAutoRun(false)
```

## Arguments

#### > option (boolean)

Reporter auto run toggle.

## Examples

### Normal

```js
const { spec, request } = require('pactum');

settings.setReporterAutoRun(false);

await spec()
  .get('/api/users/1')
  .expectStatus(200);
```