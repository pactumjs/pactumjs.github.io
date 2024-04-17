---
tags:
  - json
  - assert json
---

# expectJsonMatchStrict

Assert a JSON using a set of strict matchers.

> See [Matching](/guides/matching) for more usage details.

## Syntax

```js
expectJsonMatchStrict(json)
expectJson(template-name)
expectJson(file-path)
expectJson(file-name)
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
  .expectJsonMatchStrict('data.first_name', like('George'));
```

## See Also

- [Matching](/guides/matching)
- [setDataDirectory](/api/settings/setDataDirectory)