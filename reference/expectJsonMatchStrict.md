# expectJsonMatchStrict

Assert a JSON strictly using a set of matchers.

> See [Matching](matching) for more usage details.

## Syntax

```js
expectJsonMatchStrict(json)
expectJsonMatchStrict(path, json)
```

## Usage

#### ✅  Correct Usage

```js 
await spec()
  .get('api/users/1')
  .expectJsonMatchStrict({ 
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
  .expectJsonMatchStrict({
    "data": {
      "id": like(1),
      "email": "george.bluth@reqres.in",
      "first_name": "George",
      "last_name": "Bluth",
      "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    "support": {
      "url": "https://reqres.in/#support-heading",
      "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
  });
```

### Using json path

```js
const { spec } = require('pactum');

await spec()
  .get('https://reqres.in/api/users/1')
  .expectJsonMatchStrict('data.first_name', like('George'));
```

## Yields

Returns an object of spec which contains all the methods for making a request and validating the response.