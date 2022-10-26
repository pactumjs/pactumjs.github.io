# setDefaultExpectResponseTime

set default expect response time (ms) for all the response assertions.

## Syntax

```js
setDefaultExpectResponseTime(timeInMs)
```
- `timeInMs` (**number**) - response time value in milliseconds


## Usage

### ✅  Correct Usage

```js
response.setDefaultExpectResponseTime(2000)
```

## Examples

### Normal

```js
const { spec, response } = require('pactum');

response.setDefaultExpectResponseTime(2000)

await spec()
  .get('https://randomuser.me/api')
  .expectStatus(200);
```

## See Also

- [expectResponseTime](/api/assertions/expectResponseTime)
