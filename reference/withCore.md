# withCore

To further customize the request, pactum allows us directly set the [core options](https://nodejs.org/api/http.html#http_http_request_url_options_callback) of the request.

## Syntax

```js
withCore(options)
```

## Usage

#### ✅  Correct Usage

```js 
await spec()
  .get('/api/users')
  .withCore({
    agent: myAgent
  })
  .expectStatus(200);
```

## Arguments

#### > options (object)

Core options - [see](https://nodejs.org/api/http.html#http_http_request_url_options_callback)

## See Also

- [withAuth](reference/withAuth)