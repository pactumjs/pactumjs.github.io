# addSpecHandler

**Spec Handlers** helps us to reuse similar kind of request making & response validation across different test cases.

## Syntax

```js
addSpecHandler(name, cb)
```

## Usage

### ✅  Correct Usage

```js
addSpecHandler('get users', (ctx) => {
  const { spec } = ctx;
  spec.get('/api/users');
  spec.expectStatus(200);
});
```

## Arguments

#### > name *(string)*

Name of the spec handler

#### > cb *(function)*

Callback function. It will receive a `context` object that has **spec** and **data** properties.

## Examples

### Normal

```js
const { handler, spec } = require('pactum');

handler.addSpecHandler('get random user', (ctx) => {
  const { spec } = ctx;
  spec.get('https://randomuser.me/api');
  spec.expectStatus(200);
});

await spec('get random user')
  .expectJsonLike({
    "results": [
      {
        "dob": {
          "age": '$V > 0'
        }
      }
    ]
  });
```

### Custom Data

```js
const { handler, spec } = require('pactum');

handler.addSpecHandler('get random users', (ctx) => {
  // data contains '2' or '3'
  const { spec, data } = ctx;
  spec.get('https://randomuser.me/api');
  spec.withQueryParams('results', data);
  spec.expectStatus(200);
});

await spec('get random users', 2)
  .expectJsonLike({
    "results": "$V.length === 2"
  });

await spec('get random users', 3)
  .expectJsonLike({
    "results": "$V.length === 3"
  });
```

## See Also

- [spec](/api/requests/spec)