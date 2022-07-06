---
tags:
  - data
  - handler
---

# addDataFuncHandler

**Data Function Handlers** helps us to generate common dynamic data and use it across different tests.

- Use the data function in the tests or in the template, use `$F{<handler-name>}`.

## Syntax

```js
addDataFuncHandler(name, cb)
```

## Usage

### ✅  Correct Usage

```js
addDataFuncHandler('GetTimeStamp', () => {
  return Date.now();
});
```

```js
// using arguments
handler.addDataFuncHandler('GetFormattedDate', (ctx) => {
  const fmt = ctx.args[0];
  return moment.format(fmt);
});
```

## Arguments

#### > name *(string)*

Name of the data function handler

#### > cb *(function)*

Callback function. It will receive a `context` object that has **args** property.

## Examples

### Normal

```js
const { handler, spec } = require('pactum');

handler.addDataFuncHandler('GetTimeStamp', () => {
  return Date.now();
});
handler.addDataFuncHandler('GetAuthToken', () => {
  return 'Basic some-token';
});

await spec()
  .post('/api/order')
  .withHeaders('Authorization', '$F{GetAuthToken}')
  .withJson({
    'Item': 'Sword',
    'CreatedAt': '$F{GetTimeStamp}'
  });
```

### Custom Arguments

Data Function handlers can also accepts custom arguments.

- Pass them after `:` => `<handler_name>:arguments`
- Pass multiple arguments by using `,` separator => `<handler_name>:arg1,arg2`

```js
const { handler, spec } = require('pactum');
const moment = require('moment');

handler.addDataFuncHandler('GetFormattedDate', (ctx) => {
  const fmt = ctx.args[0];
  return moment.format(fmt);
});

handler.addDataFuncHandler('GetSum', (ctx) => {
  const a = parseInt(ctx.args[0]);
  const b = parseInt(ctx.args[1]);
  return a + b;
});

await spec()
  .post('/api/order')
  .withJson({
    'Item': 'Sword',
    'CreatedAt': '$F{GetFormattedDate:dddd}',
    'Qty': '$F{GetSum:5,10}'
  });
```