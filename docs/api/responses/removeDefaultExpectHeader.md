# removeDefaultExpectHeader

Remove a default expect header. Helps in removing a specific default expect headers.

## Syntax

```js
removeDefaultExpectHeader(key);
```

- `key` (**string**) - header key.

## Usage

### ✅  Correct Usage

```js
response.removeDefaultExpectHeaders('content-type');
```

## Examples

### Normal

```js
const { spec, response } = require('pactum');

response.setDefaultExpectHeaders({ 'content-type': 'text/html', 'connection': 'keep-alive' })


// below setting allows to remove a particular header when needed / per test
response.removeDefaultExpectHeader('content-type');

await spec()
  .get('https://randomuser.me/api')
  .expectHeader('content-type', 'application/json')
  .expectStatus(200);
```

## See Also

- [setDefaultExpectHeaders](/api/responses/setDefaultExpectHeaders)