# expectError

Assert network errors.

## Syntax

```js
expectError()
expectError(text)
expectError(error_object)
```

## Usage

#### ✅  Correct Usage

```js
// expect any error
await spec()>
  .get('/posts/5')
  .expectError();

// expect ECONNREFUSED error text in the response
await pactum.spec()
  .get('/api/users/5')
  .expectError('ECONNREFUSED');

// expect error object
await pactum.spec()
  .get('/api/users/5')
  .expectError({ code: 'ECONNREFUSED' });
```

## Arguments

#### > text (string)

Error text

#### > error_object (object)

Error object

## Examples

```js
const { spec } = require('pactum');

await spec()
  .get('https://unkowndomain.fake/api/users/1')
  .expectError()
  .expectError('ENOTFOUND')
  .expectError({ code: 'ENOTFOUND' });
```