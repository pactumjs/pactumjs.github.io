---
tags:
  - json
  - assert json
---

# expectJson

Performs deep equal of JSON objects.

## Syntax

```js
expectJson(json)
expectJson(template-name)
expectJson(file-path)
expectJson(file-name)
expectJson(json-path, json)
```

## Usage

### ✅  Correct Usage

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

#### > template-name (string)

name of the data template to use.

#### > file-name (string)

name of the json file to use.

#### > json-path (string)

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

### Using data template

```js
const { spec, stash } = require('pactum');

stash.addDataTemplate({
  'FIRST_USER': {
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
  }
});

await spec()
  .get('https://reqres.in/api/users/1')
  .expectJson('FIRST_USER');
```

### Using file path

```js
const { spec } = require('pactum');

await spec()
  .get('https://reqres.in/api/users/1')
  .expectJson('./data/user.json');
```

#### Using file name

```js
const { spec } = require('pactum');

await spec()
  .get('https://reqres.in/api/users/1')
  .expectJson('user.json') // searches for the file inside the data folder
  .expectStatus(201);
```

## See Also

- [setDataDirectory](/api/settings/setDataDirectory)