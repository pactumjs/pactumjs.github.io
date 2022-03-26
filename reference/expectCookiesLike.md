# expectCookiesLike

Performs partial match on cookies in the response. Pass either key-value pair or JSON object or raw cookies string. 

> PactumJS uses [lightcookie](https://www.npmjs.com/package/lightcookie) internally to parse.

## Syntax

```js
expectCookiesLike(key, value)
expectCookiesLike(cookies)
expectCookiesLike(raw-cookie)
```

## Usage

#### ✅  Correct Usage

```js 
// key-value pair
await spec()
  .get('some-url')
  .expectCookiesLike('Expires', 'Thu, 21 Oct 2021 07:28:00 GMT');

// object
await spec()
  .get('some-url')
  .expectCookiesLike({ 
    'Expires': 'Thu, 21 Oct 2021 07:28:00 GMT',
    'httpOnly': null
  });

// raw string
await spec()
  .get('some-url')
  .expectCookiesLike('Expires=Thu, 31 Oct 2021 07:28:00 GMT; httpOnly;');
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

## Yields

Returns an object of spec which contains all the methods for making a request and validating the response.

## See Also

- [expectCookies](reference/expectCookies)