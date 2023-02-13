---
tags:
  - json
  - assert json
  - snapshot
---

# updateSnapshot

When there is an intentional change in the API response, our snapshot test fails because the snapshot for our updated API no longer matches the snapshot artifact for this test case. To resolve this, we will need to update our snapshot artifacts. Use `updateSnapshot` method in the test case & run the test to update the snapshot.

::: danger NOTE
Remove `updateSnapshot` method from the test case after the snapshot is updated.
:::

## Syntax

```js
updateSnapshot()
```
## Usage

### ✅  Correct Usage

```js 
await spec()
  .name('unique-test-name')
  .get('api/users/1')
  .expectJsonSnapshot({
    "type": "object"
  })
  .updateSnapshot();
```

## Examples

```js
const { spec } = require('pactum');
const { like } = require('pactum-matchers');

await spec()
  .name('GET_User_Mark')
  .get('https://some-api/user/{username}')
  .withPathParams('username', 'Mark')
  .expectStatus(200)
  .expectJsonSnapshot({
    id: like(123)
  })
  .updateSnapshot();
```