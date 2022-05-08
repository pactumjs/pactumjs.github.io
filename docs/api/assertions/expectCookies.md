---
tags:
  - cookies
  - assert cookies
---

# expectCookies

Performs exact match on cookies in the response. Pass either key-value pair or JSON object or raw cookies string. 

> PactumJS uses [lightcookie](https://www.npmjs.com/package/lightcookie) internally to parse.

## Syntax

```js
expectCookies(key, value)
expectCookies(cookies)
expectCookies(raw-cookie)
```

## Usage

### ✅  Correct Usage

```js 
// key-value pair
await spec()
  .get('/api/users')
  .expectCookies('Expires', 'Thu, 21 Oct 2021 07:28:00 GMT');
```

```js
// object
await spec()
  .get('/api/users')
  .expectCookies({ 
    'Expires': 'Thu, 21 Oct 2021 07:28:00 GMT',
    'httpOnly': null
  });
```

```js
// raw string
await spec()
  .get('/api/users')
  .expectCookies('Expires=Thu, 31 Oct 2021 07:28:00 GMT; httpOnly;');
```

```js
// bdd style
const _spec = await spec().get('/api/users');
_spec.response().to.have.cookies('Expires=Thu, 31 Oct 2021 07:28:00 GMT; httpOnly;');
```

## Arguments

#### > key (string)

Cookie key.

#### > value (string)

Cookie value.

#### > cookies (object)

Cookie object with key-value pairs. Use format from [lightcookie](https://www.npmjs.com/package/lightcookie).

#### > raw-cookie (string)

Cookie in raw format.