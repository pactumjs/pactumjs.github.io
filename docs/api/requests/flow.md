# flow

flow method is used to uniquely identify actual behavior of the application during contract testing. This method extends [spec](/api/requests/spec) object and has all the request and response validation methods.

```js
flow(flow-name)
```

## Usage

### ✅  Correct Usage

```js
await flow('get a user')
  .get('/api/users/1')
  .expectStatus(200);
```

## Arguments

#### > flow-name (string)

Unique name for the flow.

## Examples

### Normal

```js
const { flow } = require('pactum');

await flow('get a user')
  .get('https://reqres.in/api/users/1')
  .expectStatus(200);
```

## See Also

- [Contract Testing](/guides/contract-testing)
- [spec](/api/requests/spec)