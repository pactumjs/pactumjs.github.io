# addWaitHandler

**Wait Handlers** helps us to wait for background tasks to complete before moving to the next test case or API call.

## Syntax

```js
addWaitHandler(name, cb)
```

## Usage

### ✅  Correct Usage

```js
addWaitHandler('WaitForJob', async (ctx) => {
  const { req, res, data, rootData } = ctx;
  // custom code
});
```

## Arguments

#### > name *(string)*

Name of the wait handler

#### > cb *(function)*

Callback function. It will receive a `context` object that has **req**, **res**, **data** and **rootData** properties.

## Examples

### Normal

```js
const { handler, spec } = require('pactum');

handler.addWaitHandler('WaitForJob', async (ctx) => {
  const { res } = ctx;

  await spec()
    .get('/api/job/progress')
    .withQueryPrams('id', res.json.id)
    .expectJson({ status: 'completed' })
    .retry(5, 100)

});

await spec()
  .post('/trigger/background/job')
  .expectStatus(200)
  .expectJsonLike({
    id: /\w+/
  })
  .wait('WaitForJob');
```