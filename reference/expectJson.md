# expectJson

Performs deep equal of JSON objects.

## Syntax

```js
expectJson(json)
expectJson(path, json)
```

## Usage

#### ✅  Correct Usage

```js 
await spec()
  .get('api/health')
  .expectJson({ 
    message: 'OK'
  });
```

## Arguments

#### > json (object)

Response json body.

#### > path (string)

Json path. See [json-query](https://www.npmjs.com/package/json-query) for more usage details.

## Examples

### Strict Deep Equal

```js
const { spec } = require('pactum');

await spec()
  .get('https://reqres.in/api/users/1')
  .expectJson({
    "data": {
      "id": 1,
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
  .expectJson('data.first_name', 'George')
  .expectJson('data.last_name', 'Bluth');
```

## Yields

Returns an object of spec which contains all the methods for making a request and validating the response.