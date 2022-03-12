# withPath

Sends a request to the given url/path.

## Syntax

```js
withPath(url)
```

## Usage

#### ✅  Correct Usage

```js
await spec()
  .withMethod('GET')
  .withPath('https://reqres.in/api/users') // specify full URL if baseUrl is null or domain is different from baseUrl
  .expectStatus(200);

await spec()
  .withMethod('GET')
  .withPath('/api/users') // specify just the path if baseUrl is defined
  .expectStatus(200);
```

#### ❗ Incorrect Usage

```js
// it will result in an error as there is no HTTP method specified
await spec()
  .withPath('/api/users')
  .expectStatus(200);
```

## Arguments

#### > url (string)

The URL to send request.

PactumJS will prefix the url with configured `baseUrl`. 


## Examples

### Without BaseUrl

```js
const { spec } = require('pactum');

await spec()
  .withMethod('GET')
  .withPath('https://reqres.in/api/users/1')
  .expectStatus(200);
```

### With BaseUrl

```js
const { spec, request } = require('pactum');

request.setBaseUrl('https://reqres.in');

await spec()
  .withMethod('GET')
  .withPath('/api/users/1')
  .expectStatus(200);
```

## Yields

Returns an object of spec which contains all the methods for making a request and validating the response.

## Alternatives

- `spec().get('<url>')`
- `spec().post('<url>')`
- `spec().patch('<url>')`
- `spec().put('<url>')`
- `spec().delete('<url>')`

## See Also

- [withMethod](reference/withMethod)