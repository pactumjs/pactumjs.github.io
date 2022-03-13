# withCookies

Request cookies.

## Syntax

```js
withCookies(raw-cookie)  // raw cookie string
withCookies(name, value) // key-value pair
withCookies(cookies)     // key-value pairs as object
```

## Usage

```js
await spec()
  .get('/api/users')
  .withCookies('name=foo')
  .expectStatus(200);

await spec()
  .get('/api/users')
  .withCookies('age', '23')
  .expectStatus(200);

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

## Yields

Returns an object of spec which contains all the methods for making a request and validating the response.

## Notes

It internally uses [lightcookie](https://www.npmjs.com/package/lightcookie) for parsing and serialization.