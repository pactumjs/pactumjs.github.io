---
tags:
  - methods
  - request methods
  - HTTP methods
---

# withMethod

Defines the HTTP method to use in the request. PactumJS provides built-in methods of most popular HTTP methods for performing CRUD operations.  For custom uses cases where non-CRUD HTTP methods are to be used, `withMethod` will help us fulfilling the requirement.

## Syntax

```js
withMethod(method-name)
```

## Usage

### ✅  Correct Usage

```js
// always use `withPath` along with `withMethod`
await spec()
  .withMethod('GET')
  .withPath('/api/users/1')
  .expectStatus(200);
```

### ❗ Incorrect Usage

```js
// it will result in an error as there is no url specified
await spec()
  .withMethod('GET')
  .expectStatus(200);
```

## Arguments

#### > method-name (string)

Name of the HTTP method. Get the list of available HTTP methods from [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

## Examples

```js
const { spec } = require('pactum');

await spec()
  .withMethod('GET')
  .withPath('https://reqres.in/api/users/1')
  .expectStatus(200);
```

## Alternatives

- `spec().get('<url>')`
- `spec().post('<url>')`
- `spec().patch('<url>')`
- `spec().put('<url>')`
- `spec().delete('<url>')`


## See Also

- [withPath](/api/requests/withPath)