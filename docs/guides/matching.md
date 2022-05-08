# Matching

In real world applications, sometimes it is hard to match an expected request/response with actual request/response - timestamps and generated IDs are two examples. To overcome such issues, pactum provides a mechanism for request & response matching.

Matching is used in

- mock server interactions - *request matching*
- contract testing - *request & response matching*
- response validation - `expectJsonMatch` & `expectJsonMatchStrict`

## Type Matching

Often, you will not care what the exact value is at a particular path is, you just care that a value is present and that it is of the expected type.

### like

Type matching for primitive data types - `string/number/boolean`

```js
const { like } = require('pactum-matchers');

// matches if it is a JSON object
// & it has 'id' & 'name' properties 
// & where 'id' is of 'number' type & 'name' equal to 'jon'
const actual = {
  id: like(1),
  name: 'jon'
}
```

### eachLike

**eachLike** is similar to like but applies to `arrays`.

```js
const { eachLike } = require('pactum-matchers');

// matches if it is an array 
// & each item in the array is an object
// & each object should have quantity, active, product properties
// & quantity, active, product should be of types number, boolean & object
// & product has a name property with string type
// & product has a colors property with array of strings
const actual = eachLike({
  quantity: 2,
  active: true,
  product: like({
    name: 'car',
    colors: eachLike('blue')
  })
});

// actual === exp -> True
const exp = [
  {
    quantity: 1,
    active: false,
    product: {
      name: 'car',
      colors: [ 'red' ]
    }
  },
  {
    quantity: 10,
    active: true,
    product: {
      name: 'bus',
      colors: [ 'red', 'black' ]
    }
  }
];
```

## Regex Matching

Sometimes you will have keys in a request or response with values that are hard to know beforehand - timestamps and generated IDs are two examples. What you need is a way to say *"I expect something matching this regular expression, but I don't care what the actual value is"*.

### regex

```js
const { regex } = require('pactum-matchers');

const actual = {
  name: 'Jon'
  birthDate: regex('01/01/2020', /\d{2}\/\d{2}\/\d{4}/)
}

// actual === exp -> True
const exp = {
  name: 'Jon',
  birthDate: '02/02/2020'
}
```

## See Also

- [like](/api/matching/like)
- [email](/api/matching/email)
- [lte](/api/matching/lte)