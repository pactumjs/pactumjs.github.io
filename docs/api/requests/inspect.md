---
tags:
  - debug
  - print
  - log
---

# inspect

Prints request & response details to the console.

::: tip TIP
- Use it for debugging purpose.
- By default, request and response are printed to the terminal when a test case fails.
:::

## Syntax

```js
inspect()
inspect('path')
```

- `path` (**string**) - json path. *Visit [json-query](https://www.npmjs.com/package/json-query) for more usage details.*

## Usage

### ✅  Correct Usage

```js
await spec()
  .get('/api/users/1')
  .inspect();
```

```js
await spec()
  .get('/api/users/1')
  .inspect('name')
  .inspect('age');
```