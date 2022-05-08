---
tags:
  - json
  - assert json
  - snapshot
---

# expectJsonSnapshot

Snapshot testing is a type of **output comparison** which will be very useful whenever we want to make sure our API does not change unexpectedly.

A typical snapshot test in pactum will fetch the api response, then compares it to a reference snapshot file stored alongside the test. The test will fail if the two snapshots do not match: either the change is unexpected, or the reference snapshot needs to be updated to the new version of the API response.

If you are running the test for the first time, pactum will save the api response body at `./pactum/snapshots` directory. For the next test runs, pactum will compare the actual response with the local reference file. 

> A snapshot needs a unique name & it can be defined through `spec().name("<unique name>")`.

::: warning
- It is mandatory to commit the snapshot files to the version control system.

- There are high chances that our server will return response containing dynamic data like `ids` or `dates`. Not to fail the snapshot at every run, pactum provides matchers for any property in the JSON. See [Matching](/guides/matching) for more usage details
:::

## Syntax

```js
expectJsonSnapshot()
expectJsonSnapshot(matchers)
```

## Usage

### ✅  Correct Usage

```js 
await spec()
  .name('unique-test-name')
  .get('api/users/1')
  .expectJsonSnapshot({
    "type": "object"
  });
```

```js
// using matchers
await spec()
  .name('unique-test-name')
  .get('api/users/1')
  .expectJsonSnapshot({
    "id": like("A123")
  });
```

## Arguments

#### > matchers (object)

Json matchers.

## Examples

### Normal

```js
const { spec } = require('pactum');

await spec()
  .get('https://reqres.in/api/users/1')
  .expectJsonSnapshot();
```

### Using matchers

```js
const { spec } = require('pactum');
const { like } = require('pactum-matchers');

await spec()
  .get('https://reqres.in/api/users/1')
  .expectJsonSnapshot({
    "data": {
      "id": like(1)
    }
  });
```