# Quick Start

**PactumJS** is a Node.js project & available as an `npm` package under the name [pactum](https://www.npmjs.com/package/pactum).

::: tip TIP
**PactumJS** is not a test runner. It needs to be used alongside with a test runner like **mocha**, **jest**, **jasmine**, **cucumber** or build your own if your heart desires, pactum should work out of the box.
:::

## System Requirements

Node.js 10 and above - <a href="https://nodejs.org/en/download/" target="_blank">Download NodeJS</a>

To write better maintainable tests -

- Learn [Node.js](https://www.youtube.com/watch?v=TlB_eWDSMt4)
- Learn [Mocha](https://www.youtube.com/watch?v=MLTRHc5dk6s), [Jest](https://www.youtube.com/watch?v=7r4xVDI2vho) or [Cucumber](https://cucumber.io/docs/cucumber/)

## Installation

- Install **pactum** via `npm`.

```shell
# install pactum
npm install -D pactum

# install a test runner
npm install -D mocha
```

- Install **pactum** via `npx`.

```shell
npx pactum-init
```

## Writing Tests

Sample pactum test with mocha.

```js
// test.js
const { spec } = require('pactum');

it('should get a response with status code 200', async () => {
  await spec()
    .get('http://httpbin.org/status/200')
    .expectStatus(200);
});
```

## Running Tests

Update the scripts in package.json

```json
{
  "scripts": {
    "test": "mocha test.js"
  }
}
```

Now run the following command in terminal.

```shell
npm run test
```

## Cucumber

Cucumber is a popular option in many organizations to write tests.

- [pactum-cucumber-boilerplate](https://github.com/pactumjs/pactum-cucumber-boilerplate)


<iframe height="315px" width="100%" src="https://www.youtube.com/embed/ISAjES_Gklc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>
