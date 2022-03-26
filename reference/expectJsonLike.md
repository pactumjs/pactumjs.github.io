# expectJsonLike

Performs partial equal of JSON objects.

> Allows Regular Expressions.

> Allows Assert Expressions and Handlers.

> Order of items in an array doesn't matter.

## Syntax

```js
expectJsonLike(json)
expectJsonLike(path, json)
```

## Usage

#### ✅  Correct Usage

```js 
await spec()
  .get('api/health')
  .expectJsonLike({ 
    message: 'OK'
  });
```

## Arguments

#### > json (object)

Response json body.

#### > path (string)

Json path. See [json-query](https://www.npmjs.com/package/json-query) for more usage details.

## Examples

### Partial Deep Equal

```js
const { spec } = require('pactum');

// actual response body has more fields
await spec()
  .get('https://reqres.in/api/users/1')
  .expectJsonLike({
    "data": {
      "first_name": "George",
      "last_name": "Bluth"
    }
  });
```

### Regular Expressions

```js
const { spec } = require('pactum');

await spec()
  .get('https://reqres.in/api/users/1')
  .expectJsonLike({
    "data": {
      "id": /\d+/,
      "first_name": "George",
      "last_name": "Bluth"
    }
  });
```

### Assert Expressions

Assert Expressions helps to run custom JavaScript code on a JSON that performs user defined assertions. 

- Expression should contain `$V` to represent current value.
- Expression should be a valid JavaScript code.
- Expression should return a *boolean*.

!> String containing **$V** will be automatically treated as a Assert Expression.

```js
const { spec } = require('pactum');

await spec()
  .get('https://reqres.in/api/users/1')
  .expectJsonLike({
    "data": {
      "id": "typeof $V === 'string'",
      "first_name": "George",
      "last_name": "Bluth"
    }
  });

await spec()
  .get('https://reqres.in/api/users')
  .expectJsonLike({
    "data": "$V.length === 6"
  });
```

?> You are also allowed to change the default value `$V` to some other string based on your usage. *Be cautious that all the strings containing the new value will be treated as assert expressions and pactum will try to evaluate it as a javascript code*.

### Assert Handlers

Assert Handlers helps us to reuse the custom JavaScript assertion code on a JSON. With this we can easily extend the capabilities of `expectJsonLike` to solve complex assertions.

- Handler name will be prefixed with `#`.
- Handler function should return a *boolean*.

!> String starting with **#** will be automatically treated as a Assert Handler.

```js
const { spec, handler } = require('pactum');

handler.addAssertHandler('integer', (ctx) => {
  return typeof ctx.data === 'number';
});

await spec()
  .get('https://reqres.in/api/users/1')
  .expectJsonLike({
    "data": {
      "id": "#integer",
      "first_name": "George",
      "last_name": "Bluth"
    }
  });
```

?> You are also allowed to change the default assert handler prefix value `#` to some other string based on your usage. *Be cautious that all the strings starting with the new value will be treated as assert handlers*.

### Assert Handlers with arguments

Assert handlers also accepts custom arguments.

- Pass them after `:` - handler_name <b>:</b> arguments
- Pass multiple arguments by using `,` separator - handler_name <b>:</b> arg1 <b>,</b> arg2

```js
const { spec, handler } = require('pactum');

handler.addAssertHandler('type', (ctx) => {
  return return typeof ctx.data === ctx.args[0];
});

await spec()
  .get('https://reqres.in/api/users/1')
  .expectJsonLike({
    "data": {
      "id": "#type:number",
      "first_name": "George",
      "last_name": "Bluth"
    }
  });
```

### Using json path

```js
const { spec } = require('pactum');

await spec()
  .get('https://reqres.in/api/users/1')
  .expectJsonLike('data.first_name', 'George');
```

## Yields

Returns an object of spec which contains all the methods for making a request and validating the response.