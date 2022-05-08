---
tags:
  - copy
---

# clone

Deep clones a source input recursively and copies its values — instead of references to its values — into a new instance of that input. The result is a structurally equivalent clone that operates independently of the original source and controls its own values.

## Syntax

```js
clone(input)
```

## Usage

### ✅  Correct Usage

```js
const copy_obj = clone({ name: "mom" }); // clones object
const copy_arr = clone([{ name: "mom" }, { name: "dad" }]); // clones array
```

## Arguments

#### > input (any)

Input could by anything.

## Examples

```js
const { spec, clone } = require('pactum');

const user = { name: "mom",  age: 50 };

await spec()
  .post('/api/users')
  .withJson(user)
  .expectStatus(200);

const user_two = clone(user);
user_two.name = "dad";

await spec()
  .post('/api/users')
  .withJson(user_two)
  .expectStatus(200);
```

## Yields

Returns a copy of the input.

## Notes

It internally uses [klona](https://www.npmjs.com/package/klona) package to perform cloning.