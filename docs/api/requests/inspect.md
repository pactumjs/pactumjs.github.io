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
inspect(path)
inspect(enable)
```

- `path` (**string**) - json path. *Visit [json-query](https://www.npmjs.com/package/json-query) for more usage details.*
- `enable` (**boolean**) - enable request & response printing. *Default: `true`*

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

```js
// disable inspection
await spec()
  .get('/api/users/1')
  .inspect(false);
```