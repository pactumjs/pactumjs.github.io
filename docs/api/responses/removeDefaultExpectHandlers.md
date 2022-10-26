# removeDefaultExpectHandlers

Removes all default expect handlers.

## Syntax

```js
removeDefaultExpectHandlers();
```

## Usage

### ✅  Correct Usage

```js
response.removeDefaultExpectHandlers();
```

## Examples

### Normal

```js
const { spec, response } = require('pactum');

response.removeDefaultExpectHandlers();

await spec()
  .get('https://randomuser.me/api')
  .expectStatus(200);
```

## See Also

- [setDefaultExpectHandlers](/api/responses/setDefaultExpectHandlers)