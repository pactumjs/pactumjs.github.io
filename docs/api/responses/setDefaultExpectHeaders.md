# setDefaultExpectHeaders

set default expect headers for all response assertions.

## Syntax

```js
setDefaultExpectHeaders(key, value)
setDefaultExpectHeaders(pair)
```
- `key` (**string**) - key of the header
- `value` (**string**) - value of the header
- `pair` (**object**) - key value pair/object of headers

## Usage

### ✅  Correct Usage

```js
// key-value pair
response.setDefaultExpectHeaders('content-type', 'application/json')
```

```js
// key-value pair object
response.setDefaultExpectHeaders({ 'content-type': 'application/json', 'connection': 'keep-alive' })
```

## Examples

### Normal

```js
const { spec, response } = require('pactum');

response.setDefaultExpectHeaders('content-type', 'application/json')

await spec()
  .get('https://randomuser.me/api')
  .expectStatus(200);
```

```js
const { spec, response } = require('pactum');

response.setDefaultExpectHeaders({ 'content-type': 'application/json', 'connection': 'keep-alive' })

await spec()
  .get('https://randomuser.me/api')
  .expectStatus(200);
```

## See Also

- [expectHeader](/api/assertions/expectHeader)
- [expectHeaderContains](/api/assertions/expectHeaderContains)
