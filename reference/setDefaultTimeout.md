# setDefaultTimeout

Sets the default timeout for all the HTTP requests.

> By default, request will timeout after **3000ms**.

## Syntax

```js
setDefaultTimeout(milliseconds)
```

## Usage

#### ✅  Correct Usage

```js 
request.setDefaultTimeout(5000);
```

## Arguments

#### > milliseconds (number)

Number of milliseconds to wait for a server to respond.

## Examples

```js 
const { spec, request } = require('pactum');

request.setDefaultTimeout(5000);

await spec()
  .get('https://reqres.in/api/users')
  .expectStatus(201);
```

## See Also

- [withRequestTimeout](reference/withRequestTimeout)