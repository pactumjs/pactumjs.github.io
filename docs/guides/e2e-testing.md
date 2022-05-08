# End To End Testing

End-To-End testing is a software testing method that validates entire software from starting to end along with its integration with external interfaces.

During e2e testing, most likely we will be running our tests against a real application in an actual environment. We might need features like initialization or running clean up functions to keep the environment healthy.

**Pactum** is packed with features that helps us to write better e2e tests.

## E2E

`e2e(<name>)` method creates a new instance of End-To-End test case. Use this instance to create test steps and cleanup steps.

```js
const { e2e } = require('pactum');

const test_case = e2e('Add User');
```

## Step

`step(<name>)` method creates a new instance of End-To-End test step. It contains `spec()` method to perform request and to validate response.

```js
const { e2e } = require('pactum');

const test_case = e2e('Add User');

const step1 = test_case.step('Post User');

await step1.spec()
  .post('/api/users')
  .withJson({
    "name": "snow"
  })
  .expectStatus(200);
```

## Cleanup

`step` method can optionally register cleanup methods to run at the end. `clean()` method inherits the `spec()` instance, so use it make request and validate response. 

`cleanup()` method runs all registered cleanup methods for successful steps in **LIFO** order. It also notifies the pactum that the current e2e test case has finished its execution. It is mandatory to invoke this function at the end.

```js
const { e2e } = require('pactum');

const test_case = e2e('Add User');

const step1 = test_case.step('Post User');

await step1.spec()
  .post('/api/users')
  .withJson({
    "name": "snow"
  })
  .expectStatus(200)
  .clean()
  .delete('/api/users/snow')
  .expectStatus(200);

await test_case.cleanup(); // runs delete user request here
```

## Examples

### Simple Test

- Create a new user.
- Validate the newly created user.
- Delete the user at the end.

```js
const { e2e } = require('pactum');

describe('AddUser_ReadUser', () => {

  let test_case = e2e('Add User');

  it('create user', async () => {
    await test_case.step('Post User')
      .spec()
      .post('/api/users')
      .withJson({
        "name": "snow"
      })
      .expectStatus(200)
      .clean()
      .delete('/api/users/snow')
      .expectStatus(200);
  });

  it('get user', async () => {
    await test_case.step('Get User')
      .spec()
      .get('/api/users/snow')
      .expectStatus(200)
      .expectJson({
        "name": "snow"
      });
  });

  it('clean up', async () => {
    // runs all registered cleanup methods in LIFO order
    await test_case.cleanup();
  });

});
```

### Scenarios

Lets look at some scenarios to understand how pactum will run e2e tests.

#### Scenario 1

All steps are passed.

- Post User ✔️
- Get User ✔️
- Clean Up ✔️

#### Scenario 2

Get User Fails.

- Post User ✔️
- Get User ❌
- Clean Up ✔️ - *Clean up will delete the created user "snow"*

#### Scenario 3

Post User Fails.

- Post User ❌
- Get User ⚠️ - *This step will be skipped as one of the previous step is failed.*
- Clean Up ✔️ - *No Clean up steps will be executed.*