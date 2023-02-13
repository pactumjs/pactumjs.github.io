# Test Style

Tests in **pactum** are clear and comprehensive. It uses numerous descriptive methods to build your requests and expectations.

Write tests in two styles

- Chaining the request & expectations (Builder Style)
- Breaking the request & expectations (BDD Style)

## Builder Style

All request and assertion methods are chained together.

```js
const { spec } = require('pactum');

it('should get first post', async () => {
  await spec()
    .get('http://jsonplaceholder.typicode.com/posts/1')
    .expectStatus(200)
    .expectJsonLike({
      "userId": 1,
      "id": 1
    })
});
```

## BDD Style

Request and assertion methods are invoked in different statements to make them more readable.

```js
const { spec } = require('pactum');

describe('Posts', () => {

  const _spec = spec();

  it('should make a request to json-placeholder', async () => {
    _spec.get('http://jsonplaceholder.typicode.com/posts/{id}');
  });

  it('should get first post', async () => {
    _spec.withPathParams('id', '1');
  });

  it('should receive a response', async () => {
    await _spec.toss();
  });

  it('should have a status code of 200', async () => {
    _spec.response().to.have.status(200);
  });

  it('should have a user id of 1', async () => {
    _spec.response().to.have.json('userId', 1);
  });

});
```

::: tip TIP
Normal assertion methods like `expectStatus` or `expectJson` will only work if called before the `toss` method.
:::