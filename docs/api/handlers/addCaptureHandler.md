# addCaptureHandler

**Capture Handlers** helps us to capture data from the response. Use this inside [returns](/api/requests/returns)

- Handler name will be prefixed with `#` while using in json.

::: danger NOTE
Strings starting with `#` will be automatically treated as a Capture Handler.
:::

## Syntax

```js
addCaptureHandler(name, cb)
```

## Usage

### ✅  Correct Usage

```js
addCaptureHandler('firstPostId', (ctx) => {
  return ctx.res.json[0].id;
});
```

## Arguments

#### > name *(string)*

Name of the capture handler

#### > cb *(function)*

Callback function. It will receive a `context` object that has request **(req)** and response **(res)** as properties.

## Examples

### returns

```js
const { handler, spec } = require('pactum');

handler.addCaptureHandler('firstPostId', (ctx) => {
  return ctx.res.json[0].id;
});

const postID = await pactum.spec()
  .get('http://jsonplaceholder.typicode.com/posts')
  .expectStatus(200)
  .returns('#firstPostId');

await pactum.spec()
.get(`http://jsonplaceholder.typicode.com/posts/${postID}/comments`)
.expectStatus(200);
```
