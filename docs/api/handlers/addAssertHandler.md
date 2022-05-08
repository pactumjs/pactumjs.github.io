# addAssertHandler

**Assert Handlers** helps us to reuse the custom JavaScript assertion code on a JSON. With this we can easily extend the capabilities of [expectJsonLike](/api/assertions/expectJsonLike) to solve complex assertions.

- Handler name will be prefixed with `#` while using in json.
- Handler function should return a boolean.

::: danger
Strings starting with `#` will be automatically treated as a Assert Handler.
:::

## Syntax

```js
addAssertHandler(name, cb)
```

## Usage

### ✅  Correct Usage

```js
addAssertHandler('number', (ctx) => {
  return typeof ctx.data === 'number';
});
```

```js
// using arguments
addAssertHandler('type', (ctx) => {
  return typeof ctx.data === ctx.args[0];
});
```

## Arguments

#### > name *(string)*

Name of the assert handler

#### > cb *(function)*

Callback function. It will receive a `context` object that has **data** and **args** as properties.

## Examples

### Normal

```js
const { handler, spec } = require('pactum');

handler.addAssertHandler('number', (ctx) => {
  return typeof ctx.data === 'number';
});

await spec()
  .get('https://randomuser.me/api')
  .expectJsonLike({
    "results": [
      {
        "dob": {
          "age": '#number'
        }
      }
    ]
  });
```

### Custom Arguments

Assert handlers also accepts custom arguments.

- Pass them after `:` => `<handler_name>:arguments`
- Pass multiple arguments by using `,` separator => `<handler_name>:arg1,arg2`

```js
const { handler, spec } = require('pactum');

handler.addAssertHandler('type', (ctx) => {
  return typeof ctx.data === ctx.args[0];
});

await spec()
  .get('https://randomuser.me/api')
  .expectJsonLike({
    "results": [
      {
        "dob": {
          "age": '#type:number'
        }
      }
    ]
  });
```
