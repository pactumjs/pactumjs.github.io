# Quick Start

**PactumJS** is a Node.js project & available as an `npm` package.

## System Requirements

- Node.js 10 and above - <a href="https://nodejs.org/en/download/" target="_blank">Download NodeJS</a>

Before getting started, one needs to have a basic understanding of Node.js & any testing framework in it.

- Learn [Node.js](https://www.youtube.com/watch?v=TlB_eWDSMt4)
- Learn [Mocha](https://www.youtube.com/watch?v=MLTRHc5dk6s) or [Cucumber](https://cucumber.io/docs/cucumber/)

## Installation

Install **pactum** via `npm`.

<!-- tabs:start -->

#### ** Basic **

```shell
# install pactum
npm install pactum
```

#### ** New Project **

```shell
# create new folder
mkdir pactum-api-testing
cd pactum-api-testing

# initialize npm
npm init -y

# install pactum as a dev dependency
npm install --save-dev pactum
```

#### ** Existing Project **

```shell
# move to project folder
cd <existing-project-folder>

# install pactum as a dev dependency
npm install --save-dev pactum
```

<!-- tabs:end -->

This will install **pactum** locally as a dependency for your project.

## Running Tests

!> **pactum** is not a test runner. It needs to be used alongside with a test runner like **mocha**, **jest**, **jasmine** or **cucumber**.

Install a test runner that supports *promises*.

<!-- tabs:start -->

#### **Mocha**

```shell
# install a test runner
npm install mocha -g
```

Create a JS file & copy the below code.

```js
// test.js
const pactum = require('pactum');

it('should be a teapot', async () => {
  await pactum.spec()
    .get('http://httpbin.org/status/418')
    .expectStatus(418);
});
```

Running the test.

```shell
# mocha is a test framework to execute test cases
mocha test.js
```

#### **Cucumber**

```shell
# install a test runner
npm install @cucumber/cucumber -g
```

Create a feature file & copy the below code.

```gherkin
Scenario: Check Tea Pot
  Given I make a GET request to "http://httpbin.org/status/418"
  When I receive a response
  Then response should have a status 418
```

Create a JS file & copy the below code.

```js
// steps.js
const pactum = require('pactum');
const { Given, When, Then, Before } = require('cucumber');

let spec = pactum.spec();

Before(() => { spec = pactum.spec(); });

Given('I make a GET request to {string}', function (url) {
  spec.get(url);
});

When('I receive a response', async function () {
  await spec.toss();
});

Then('response should have a status {int}', async function (code) {
  spec.response().should.have.status(code);
});
```

Running the test.

```shell
cucumber-js
```

<!-- tabs:end -->

## Mock Server

**pactum** can also be used as a standalone mock server or a service virtualization tool to mock external dependencies.

<!-- tabs:start -->

#### ** server.js **

```js
const { mock } = require('pactum');   // import mock

mock.addInteraction({
  request: {
    method: 'GET',
    path: '/api/health'
  },
  response: {
    status: 200,
    body: 'OK'
  }
});

mock.start(3000);                     // start mock server on port 3000
```

<!-- tabs:end -->

Running the mock server.

```shell
node server.js
```

Interacting with mock server.

```shell
curl http://localhost:3000/api/health
```

----

<a href="#/pactum" >
  <img src="https://img.shields.io/badge/PREV-Home-orange" alt="Home" align="left" style="display: inline;" />
</a>
<a href="#/api-testing" >
  <img src="https://img.shields.io/badge/NEXT-API%20Testing-blue" alt="API Testing" align="right" style="display: inline;" />
</a>
