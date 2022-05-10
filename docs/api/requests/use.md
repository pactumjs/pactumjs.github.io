# use

Runs the spec handler to set request and response details.

## Syntax

```js
use(handler-name)
```

## Usage

### ✅  Correct Usage

```js
await spec()
  .use('get user')
  .expectJson('data.first_name', 'George');
```

## Arguments

#### > handler-name (string)

Name of the spec handler to use.

## Examples

```js
const { spec, handler } = require('pactum');

handler.addSpecHandler('get user', () => {
  const { spec, data } = ctx;
  spec.get('https://reqres.in/api/users/{id}');
  spec.withPathParams('id', data || 1)
  spec.expectStatus(200);
});

await spec().use('get user').expectJson('data.first_name', 'George');
await spec().use('get user', 2).expectJson('data.first_name', 'Janet');
```

## See Also

- [Spec Handlers](/api/handlers/addSpecHandler)