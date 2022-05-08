---
tags:
  - cookies
---

# withCookies

Request cookies.

## Syntax

```js
withCookies(raw-cookie)  // raw cookie string
withCookies(name, value) // key-value pair
withCookies(cookies)     // key-value pairs as object
```

## Usage

### ✅  Correct Usage

```js
await spec()
  .get('/api/users')
  .withCookies('name=foo')
  .expectStatus(200);
```

```js
await spec()
  .get('/api/users')
  .withCookies('age', '23')
  .expectStatus(200);
```

```js
await spec()
  .get('/api/users')
  .withCookies({
    foo: 'bar',
    http: null 
  })
  .expectStatus(200);
```

## Arguments

#### > raw-cookie (string)

Raw value of the cookie.

#### > name (string)

Name of the cookie value.

#### > value (string)

Value of the cookie.

#### > cookies (object)

key-value pairs of cookies which will be parsed as a string.

## Examples

### Key - Value Cookies

```js
const { spec } = require('pactum');

await spec()
  .get('https://httpbin.org/cookies')
  .withCookies('user', 'pass')
  .expectStatus(200);
```

## Notes

It internally uses [lightcookie](https://www.npmjs.com/package/lightcookie) for parsing and serialization.