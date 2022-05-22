# setCaptureHandlerStrategy

Changes the way capture handlers are identified.

## Syntax

```js
setCaptureHandlerStrategy(strategy)
```

## Usage

### ✅  Correct Usage

```js 
setCaptureHandlerStrategy({ starts: '##' });
```

## Arguments

#### > strategy (object)

strategy object.

## Examples

```js
const { handler, spec, settings } = require('pactum');

settings.setCaptureHandlerStrategy({ starts: '##' });

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