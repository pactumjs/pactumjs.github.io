# Quick Start

To get started we need to have NodeJS (>=10) installed in our system. <a href="https://nodejs.org/en/download/" target="_blank">Download NodeJS</a>.

Before getting started, we need to have a basic understanding of NodeJS & any test framework in it.

- [Learn NodeJS](https://www.youtube.com/watch?v=TlB_eWDSMt4)
- [Learn mocha](https://www.youtube.com/watch?v=MLTRHc5dk6s)

## Installation

**pactum** is a NodeJS project & available as an npm package. Add it as a dependency to a project.

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

## Running Testing

!> **pactum** is not a test runner. It needs to be used alongside with a test runner like **mocha**, **jest**, **jasmine** or **cucumber**.

Install a test runner that supports *promises*.

```shell
# install a test runner
npm install mocha -g
```

Create a JS file & copy the below code

<!-- tabs:start -->

#### ** test.js **

```javascript
const pactum = require('pactum');

it('should be a teapot', async () => {
  await pactum.spec()
    .get('http://httpbin.org/status/418')
    .expectStatus(418);
});
```

<!-- tabs:end -->

Running the test

```shell
# mocha is a test framework to execute test cases
mocha test.js
```

## Mock Server

**pactum** can also be used as a standalone mock server or a service virtualization tool to mock external dependencies.

<!-- tabs:start -->

#### ** server.js **

```js
const { mock } = require('pactum');   // import mock
mock.start(3000);                     // start mock server on port 3000
```

<!-- tabs:end -->

Running the mock server

```shell
node server.js
```

Behavior to mock server is added through interactions. Learn more about it at [Mock Server](mock-server.md)

----

<a href="#/pactum" >
  <img src="https://img.shields.io/badge/PREV-Home-orange" alt="Home" align="left" style="display: inline;" />
</a>
<a href="#/api-testing" >
  <img src="https://img.shields.io/badge/NEXT-API%20Testing-blue" alt="API Testing" align="right" style="display: inline;" />
</a>
