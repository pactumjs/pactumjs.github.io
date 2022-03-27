# response

Returns chai like assertions. Used while running your tests in BDD mode.

!> This assertions will only work after the invocation of `toss` method.

## Syntax

```js
spec.response().to.have.status(200)
spec.response().to.have.header('connection', 'close')
spec.response().should.have.json({ "name": "jon" })
```

## Usage

#### ✅  Correct Usage

```js
const spec = spec();
spec.get('/api/users');
await spec.toss();
// use after 'spec.toss()' statement 
spec.response().to.have.status(200);
```

#### ❗ Incorrect Usage

```js
const spec = spec();
spec.get('/api/users');
// don't use before 'spec.toss()' statement 
spec.response().to.have.status(200);
await spec.toss();
```

## Examples

```js
const { spec } = require('pactum');

const _spec = spec();
_spec.get('https://reqres.in/api/users/1')
await _spec.toss();
_spec.response().to.have.status(200);
```

## Alternatives

`pactum.expect` also does similar functionality to implement chai like assertions. 

### Syntax

```js
expect(response).to.have.status(200)
expect(response).to.have.header('connection', 'close')
expect(response).should.have.json({ "name": "jon" })
```

### Arguments

#### > response (object)

Response object returned from `toss` method.

### Examples

```js
const { spec, expect } = require('pactum');

const _spec = spec();
_spec.get('https://reqres.in/api/users/1')
const response = await _spec.toss();
expect(response).to.have.status(200);
```

