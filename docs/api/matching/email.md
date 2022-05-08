---
tags:
  - matching
  - pattern matching
---

# email

Checks if actual value follows email pattern.

## Syntax

```js
email()
email(input)
```

## Usage

### ✅  Correct Usage

```js
// without input
email();
```

```js
// with custom input
email('mom@family.com');
```

## Arguments

#### > input *(any)*

Input to return while using in contract testing. It can be anything.


## Examples

### Assertions

In this example, we are asserting the response from `random-user` api. The results from the server are dynamic, so we are using the `email` matcher in `expectJsonMatch` to validate email.

- `email` should be a valid email.


```js
const { spec } = require('pactum');
const { email } = require('pactum-matchers');

await spec()
  .get('https://randomuser.me/api')
  .expectJsonMatch({
    "results": [
      {
        "email": email()
      }
    ]
  });
```