# expectJsonMatch

Assert a JSON using a set of matchers.

> See [Matching](matching) for more usage details.

## Syntax

```js
expectJsonMatch(json)
expectJsonMatch(path, json)
```

## Usage

#### ✅  Correct Usage

```js 
await spec()
  .get('api/users/1')
  .expectJsonMatch({ 
    id: like(1)
  });
```

## Arguments

#### > json (object)

Response json body.

#### > path (string)

Json path. See [json-query](https://www.npmjs.com/package/json-query) for more usage details.

## Examples

### Partial deep equal 

```js
const { spec } = require('pactum');
const { like } = require('pactum-matchers');

await spec()
  .get('https://reqres.in/api/users/1')
  .expectJsonMatch({
    "data": {
      "first_name": like("George"),
      "last_name": "Bluth"
    }
  });
```

### Using json path

```js
const { spec } = require('pactum');

await spec()
  .get('https://reqres.in/api/users/1')
  .expectJsonMatch('data.first_name', like('George'));
```

## Yields

Returns an object of spec which contains all the methods for making a request and validating the response.