---
tags:
  - matching
  - null
---

# notNull

Checks if actual value is not a null.

## Syntax

```js
notNull(input)
```

## Usage

### ✅  Correct Usage

```js
notNull()
```

## Arguments

#### > input *(any)*

Value could be anything.

## Examples

### Single property

```js
const { spec } = require('pactum');
const { notNull } = require('pactum-matchers');

await spec()
  .get('https://randomuser.me/api')
  .expectJsonMatch({
    "results": [
      {
        "name": notNull(),
      }
    ]
  });
```