# API Testing

API Testing in general can improve the efficiency of our testing strategy, helping us to deliver software faster than ever. It has many aspects but generally consists of making a request & validating the response. 

This tool is packed with a rich set of features for making HTTP requests & validating the server responses. Head over to [Requests](/api/requests/spec) and [Assertions](/api/assertions/expectStatus) for more details.

## Request Making

In general, the first step in API testing is to make a request to the server. There are different ways available in **PactumJS** that allows us to send a request.

::: tip
`spec()` method will return an instance of spec object that exposes all methods to build a request.
:::

Example for making a request to fetch list of random users. Use `.get(<url>)` method to make a **HTTP GET** request on the provided url.

```js
const { spec } = require('pactum');

it('should get random users', async () => {
  await spec()
    .get('https://randomuser.me/api');
});
```

Chain multiple methods from the `spec` object to perform complex requests with *parameters*, *headers*, *cookies*, *body*, *files* etc.

Example for passing query params to fetch all male users. Use `.withQueryParams(key, value)` method to attach query params to the request.

```js
const { spec } = require('pactum');

it('should get random male users', async () => {
  await spec()
    .get('https://randomuser.me/api')
    .withQueryParams('gender', 'male');
});
```

::: warning
Always remember to place `await` statement before `spec()` method to run the test case.
:::

## Response Validation

Once a request is made, the backend server sends a response back to the client. For validating the response, pactum provides a wide range of assertion functions to solve complex needs.

For example, use `expectStatus(code)` method to verify status code from the response.

```js
const { spec } = require('pactum');

it('should get random male users', async () => {
  await spec()
    .get('https://randomuser.me/api')
    .withQueryParams('gender', 'male')
    .expectStatus(200);
});
```

Chain multiple expectation methods from the `spec` object to perform complex assertions.

Example for expecting a json response consisting *gender* as *male*.

```js
const { spec } = require('pactum');

it('should get random male users', async () => {
  await spec()
    .get('https://randomuser.me/api')
    .withQueryParams('gender', 'male')
    .expectStatus(200)
    .expectJsonLike({
      "results": [
        {
          "gender": "male"
        }
      ]
    });
});
```

## See Also

- [Requests](/api/requests/spec)
- [Assertions](/api/assertions/expectStatus)