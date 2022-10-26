# setDefaultExpectHeaders

set default expect headers for all response assertions.

## Syntax

```js
setDefaultExpectHeaders(key, value)
setDefaultExpectHeaders(pair)
```

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

## Arguments

#### > key (string)

header key

#### > value (string)

header value

#### > pair (object)

header key-value pair object

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
