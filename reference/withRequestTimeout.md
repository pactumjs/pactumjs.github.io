# withRequestTimeout

Set the request timeout for the current `spec`.

> By default, request will timeout after **3000ms**.

!> Make sure to increase the test runners timeout as well

## Syntax

```js
withRequestTimeout(milliseconds)
```

## Usage

#### ✅  Correct Usage

```js 
await spec()
  .get('/api/users')
  .withRequestTimeout(5000)
  .expectStatus(200);
```

## Arguments

#### > milliseconds (number)

Number of milliseconds to wait for a server to respond.

## See Also

- [setDefaultTimeout](reference/setDefaultTimeout)