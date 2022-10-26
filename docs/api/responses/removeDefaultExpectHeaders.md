# removeDefaultExpectHeaders

Removes all default expect headers. Helps in removing/clearing all default expect headers.

## Syntax

```js
removeDefaultExpectHeaders();
```

## Usage

### ✅  Correct Usage

```js
response.removeDefaultExpectHeaders();
```

## Examples

### Normal

```js
const { spec, response } = require('pactum');

response.removeDefaultExpectHeaders();

await spec()
  .get('https://randomuser.me/api')
  .expectStatus(200);
```

## See Also

- [setDefaultExpectHeaders](/api/responses/setDefaultExpectHeaders)