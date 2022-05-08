---
tags:
  - query params
---

# withQueryParams

Query parameters are a defined set of parameters attached to the end of a url. They are extensions of the URL that are used to help define specific content or actions based on the data being passed.

## Syntax

```js
withQueryParams(name, value)      // key-value pair
withQueryParams(query-params)     // key-value pairs as object
```

## Usage

#### ✅  Correct Usage

```js
// single query param
// url is updated to '/api/users?gender=male'
await spec()
  .get('/api/users')
  .withQueryParams('gender', 'male')
  .expectStatus(200);
```

```js
// multiple query params
// url is updated to '/api/users?gender=male&country=IND'
await spec()
  .get('/api/users')                   
  .withQueryParams('gender', 'male')
  .withQueryParams('country', 'IND')
  .expectStatus(200);
```

```js
// multiple query params as object
// url is updated to '/api/users?gender=male&country=IND'
await spec()
  .get('/api/users')
  .withQueryParams({
    'gender', 'male',
    'country': 'IND'
  })
  .expectStatus(200);
```

#### ❗ Incorrect Usage

```js
// don't pass query params as part of the url
await spec()
  .get('/api/users?gender=male')
  .expectStatus(200);
```

```js
// don't use both overridden methods in same spec
await spec()
  .get('/api/users')
  .withQueryParams('gender', 'male')
  .withQueryParams({
    'country': 'IND'
  })
  .expectStatus(200);
```

## Arguments

#### > name (string)

Name of the query param.

#### > value (string)

Value of the query param.

#### > query-params (object)

key-value pairs of query params.

## Examples

#### Single query param

```js
const { spec } = require('pactum');

await spec()
  .get('https://randomuser.me/api')
  .withQueryParams('gender', 'male')
  .expectStatus(200);
```

#### Multiple query params

```js
const { spec } = require('pactum');

await spec()
  .get('https://randomuser.me/api')
  .withQueryParams('gender', 'male')
  .withQueryParams('nat', 'AU')
  .expectStatus(200);

// or

await spec()
  .get('https://randomuser.me/api')
  .withQueryParams({
    'gender', 'male',
    'nat': 'AU'
  })
  .expectStatus(200);
```