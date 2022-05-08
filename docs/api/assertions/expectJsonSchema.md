---
tags:
  - json
  - assert json
  - schema
---

# expectJsonSchema

Assert based on JSON schema.

- See [json-schema](https://json-schema.org/learn/) for more usage details.
- Pactum internally uses [@exodus/schemasafe](https://www.npmjs.com/package/@exodus/schemasafe) to validate the JSON schema.

## Syntax

```js
expectJsonSchema(schema)
expectJsonSchema(path, schema)
```

## Usage

### ✅  Correct Usage

```js 
await spec()
  .get('api/users/1')
  .expectJsonSchema({
    "type": "object"
  });
```

## Arguments

#### > schema (object)

Json schema.

#### > path (string)

Json path. See [json-query](https://www.npmjs.com/package/json-query) for more usage details.

## Examples

### Normal

```js
const { spec } = require('pactum');
const { like } = require('pactum-matchers');

await spec()
  .get('https://reqres.in/api/users/1')
  .expectJsonSchema({
    "type": "object"
  });
```

### Using json path

```js
const { spec } = require('pactum');

await spec()
  .get('https://reqres.in/api/users/1')
  .expectJsonMatch('data', {
    "type": "object"
  });
```