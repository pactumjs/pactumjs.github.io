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
await spec()
  .get('/api/users')                    // url is updated to '/api/users?gender=male'
  .withQueryParams('gender', 'male')
  .expectStatus(200);

await spec()
  .get('/api/users')                    // url is updated to '/api/users?gender=male&country=IND'
  .withQueryParams('gender', 'male')
  .withQueryParams('country', 'IND')
  .expectStatus(200);

await spec()
  .get('/api/users')                    // url is updated to '/api/users?gender=male&country=IND'
  .withQueryParams({
    'gender', 'male',
    'country': 'IND'
  })
  .expectStatus(200);
```

#### ❗ Incorrect Usage

```js
await spec()
  .get('/api/users?gender=male')    // don't pass query params as part of the url
  .expectStatus(200);


await spec()
  .get('/api/users')                // don't use both overridden methods in same spec
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

await spec()
  .get('https://randomuser.me/api')
  .withQueryParams({
    'gender', 'male',
    'nat': 'AU'
  })
  .expectStatus(200);
```

## Yields

Returns an object of spec which contains all the methods for making a request and validating the response.