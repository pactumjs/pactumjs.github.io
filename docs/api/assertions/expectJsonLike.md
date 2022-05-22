---
tags:
  - json
  - assert json
  - assert expressions
  - expressions
---

# expectJsonLike

Performs partial equal of JSON objects.

- Allows Regular Expressions.
- Allows Assert Expressions and Handlers.
- Order of items in an array doesn't matter.

## Syntax

```js
expectJsonLike(json)
expectJsonLike(path, json)
```

## Usage

### ✅  Correct Usage

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

::: danger NOTE
String containing **$V** will be automatically treated as a Assert Expression.
:::

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

### Using json path

```js
const { spec } = require('pactum');

await spec()
  .get('https://reqres.in/api/users/1')
  .expectJsonLike('data.first_name', 'George');
```

## See Also

- [Assert Handlers](/api/handlers/addAssertHandler)