# save

Saves data from response to the file system.

## Syntax

```js
save(path)
```

## Usage

### ✅  Correct Usage

```js
await spec()
  .get('/api/file')
  .save('smile.png');
```

## Arguments

#### > path (string)

Path to save the file

## Examples

```js
const { spec } = require('pactum');

await spec()
  .get('https://httpbin.org/image/png')
  .save('pig.png')
  .expectStatus(200);
```