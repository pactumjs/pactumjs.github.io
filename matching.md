# Matching

In real world applications, sometimes it is hard to match an expected request/response with actual request/response. To overcome such issues, **pactum** provides a mechanism for request & response matching.

## Table of Contents

* [Supported Matchers](#supported-matchers)
* [Type Matching](#type-matching)
  * [like](#like)
  * [eachLike](#eachLike)
* [Regex Matching](#regex-matching)
  * [regex](#regex)
* [Misc](#misc)
  * [oneOf](#oneof)
  * [expression](#expression)
  * [string](#string)
  * [email](#email)
* [Number Matchers](#number-matchers)
  * [int](#int)
  * [float](#float)
  * [gt](#gt)
  * [gte](#gte)
  * [lt](#lt)
  * [lte](#lte)

## Supported Matchers

It supports following matchers

- `like` - matches with the type
- `eachLike` - matches all the elements in the array with the specified type
- `regex` - matches with the regular expression
- `includes` - checks if actual value includes a specified value in it
- `oneOf` - checks if actual value is one of the expected value
- `expression` - checks if actual value satisfies the expected expression
- `string` - checks for non empty string
- `email` - checks for email pattern
- `uuid` - checks for uuid pattern
- `int` - checks for numbers without decimals
- `float` - checks for numbers with decimals
- `gt` - checks for greater than a given number
- `gte` - checks for greater than or equal to a given number
- `lt` - checks for less than a given number
- `lte` - checks for less than or equal to a given number


Matchers are applied on JSON
  
- during response validation - [expectJsonMatch](api-testing#expectJsonMatch)
- during request matching for interactions in [Mock Server](mock-server)
- during request and response matching for [Contract Testing](contract-testing)

## Type Matching

Often, you will not care what the exact value is at a particular path is, you just care that a value is present and that it is of the expected type.

- `like`
- `eachLike`

### like

Type matching for primitive data types - *string*/*number*/*boolean*

#### Type Matching single property in a JSON

```js
const { like } = require('pactum-matchers');

// matches if it is a JSON object
// & it has 'id' & 'name' properties 
// & where 'id' is of 'number' type & 'name' equal to 'jon'
const actual = {
  id: like(1),
  name: 'jon'
}

// actual === exp1 -> True
const exp1 = {
  id: 100987,
  name: 'jon'
}

// actual === exp2 -> True
const exp2 = {
  id: 100987,
  name: 'jon',
  active: true
}

// actual === exp3 -> False
const exp3 = {
  id: "C17",
  name: 'jon'
}
```

#### Type Matching whole JSON

```js
const { like } = require('pactum-matchers');

// matches if it is a JSON object
// & it has 'id' & 'name' properties 
// & where 'id' is of 'number' type & 'name' is of 'string' type
const actual = like({
  id: 1,
  name: 'jon'
})

// actual === exp1 -> True
const exp1 = {
  id: 100987,
  name: 'snow'
}

// actual === exp2 -> False
const exp2 = {
  id: 'C17',
  name: 'jon'
}
```

#### Type Matching Nested Objects in JSON

```js
const { like } = require('pactum-matchers');

// matches if it is a JSON object
// & it has quantity, active & item properties 
// & with number, bool & object types respectively
// & item has name & brand properties with 'car' & 'v40' values respectively
const actual = like({
  quantity: 2,
  active: true,
  item: {
    name: 'car',
    brand: 'v40'
  }
});

// actual === exp1 -> True
const exp1 = {
  quantity: 1,
  active: false,
  item: {
    name: 'car',
    brand: 'v40'
  }
}

// actual === exp2 -> False
const exp2 = {
  quantity: 1,
  active: false,
  item: {
    name: 'bus',
    brand: 'v40'
  }
}
```

To match nested objects with type, we need apply `like()` explicitly to nested objects

```js
const { like } = require('pactum-matchers');

// matches if it is a JSON object
// & it has quantity, active & item properties 
// & with number, bool & object types respectively
// & item has name & brand properties with string types
const actual = like({
  quantity: 2,
  active: true,
  item: like({
    name: 'car',
    brand: 'v40'
  })
});

// actual === exp1 -> True
const exp1 = {
  quantity: 1,
  active: false,
  item: {
    name: 'car',
    brand: 'v40'
  }
}

// actual === exp2 -> True
const exp2 = {
  quantity: 1,
  active: false,
  item: {
    name: 'bus',
    brand: 'v40'
  }
}

// actual === exp3 -> False
const exp3 = {
  quantity: 1,
  active: false,
  item: {
    name: 'bus'
  }
}
```

### eachLike

*eachLike* is similar to *like* but applies to arrays.

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

// actual === exp1 -> True
const exp1 = [
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

// actual === exp2 -> False
const exp2 = [
  {
    quantity: 1,
    active: false,
    product: {
      name: 'car',
      colors: []
    }
  },
  {
    quantity: 10,
    active: true,
    product: {
      name: 'bus',
      colors: [ 1, 2 ]
    }
  }
];
```

#### Return multiple items

By default `eachLike` returns an array with length `1`. To return multiple elements use the `items` property.

```js

const actual = eachLike(1, { items: [ 5, 7 ]});

// actual === exp1 -> True
const exp1 = [3, 4]
```

## Regex Matching

Sometimes you will have keys in a request or response with values that are hard to know beforehand - timestamps and generated IDs are two examples.

What you need is a way to say "I expect something matching this regular expression, but I don't care what the actual value is".

### regex

```js
const { regex } = require('pactum-matchers');

const actual = {
  name: 'Jon'
  birthDate: regex(/\d{2}\/\d{2}\/\d{4}/)
}

// actual === exp1 -> True
const exp1 = {
  name: 'Jon',
  birthDate: '02/02/2020'
}

// actual === exp2 -> False
const exp1 = {
  name: 'Jon',
  birthDate: '2/2/2020'
}
```

## Misc

### oneOf

Checks if actual value is one of the expected value.

- `oneOf` method accepts array as an argument. Actual value should be equal to one of the value in the given array.

```js
const { oneOf } = require('pactum-matchers');

const actual = {
  name: 'Jon'
  gender: oneOf(['M', 'F'])
}

// actual === exp1 -> True
const exp1 = {
  name: 'Jon',
  gender: 'M'
}

// actual === exp2 -> False
const exp1 = {
  name: 'Jon',
  gender: 'Male'
}
```

### expression

Checks if actual value satisfies the expected expression.

- `expression` method accepts two arguments.
- First argument represents the value that satisfies the expression. *This is used in interactions response & required for contract testing.*
- Second argument represents the expression.
  - Expression should contain `$V` to represent current value.
  - Expression should be a valid JavaScript code.
  - Expression should return a `boolean`.

```js
const { expression } = require('pactum-matchers');

const actual = {
  name: 'Jon'
  age: expression(10, '$V > 0')
}

// actual === exp1 -> True
const exp1 = {
  name: 'Jon',
  age: 3  // evaluated expression =>  3 > 0  => true
}

// actual === exp2 -> False
const exp1 = {
  name: 'Jon',
  age: 0  // evaluated expression =>  0 > 0  => false
}
```

### string

Checks if actual value is a non empty string.

- `string` method accepts optional string value. *This is used in interactions response & required for contract testing.*

```js
const { string } = require('pactum-matchers');

const actual = {
  name: 'Jon'
  gender: string()
}

// actual === exp1 -> True
const exp1 = {
  name: 'Jon',
  gender: 'M'
}

// actual === exp2 -> False
const exp2 = {
  name: 'Jon',
  gender: ''
}

// actual === exp3 -> False
const exp3 = {
  name: 'Jon',
  gender: 1
}
```

### email

Checks if actual value follows email pattern.

- `email` method accepts optional string value. *This is used in interactions response & required for contract testing.*

```js
const { string } = require('pactum-matchers');

const email = {
  name: 'Jon'
  mail: email()
}

// actual === exp1 -> True
const exp1 = {
  name: 'Jon',
  mail: 'some@one.com'
}

// actual === exp2 -> False
const exp2 = {
  name: 'Jon',
  mail: 'some'
}
```

## Number Matchers

### int

Checks if actual value is an integer number.

- `int` method accepts an optional interger number. Actual value should be a number without decimals.

```js
const { int } = require('pactum-matchers');

const actual = {
  name: 'Jon'
  gender: int(23)
}

// actual === exp1 -> True
const exp1 = {
  name: 'Jon',
  age: 30
}

// actual === exp2 -> False
const exp2 = {
  name: 'Jon',
  age: 20.5
}

// actual === exp3 -> False
const exp3 = {
  name: 'Jon',
  age: '30'
}
```

### float

Checks if actual value is a float number.

- `float` method accepts an optional floating-point number. Actual value should be a number with decimals.

```js
const { float } = require('pactum-matchers');

const actual = {
  name: 'Jon'
  height: float(5.7)
}

// actual === exp1 -> True
const exp1 = {
  name: 'Jon',
  height: 5.10
}

// actual === exp2 -> False
const exp2 = {
  name: 'Jon',
  height: '6.2'
}

// actual === exp3 -> False
const exp3 = {
  name: 'Jon',
  height: 5
}
```

### gt

Checks if actual value is greater than a given number.

- `gt` method accepts a number. Actual value should be greater than the given number.

```js
const { gt } = require('pactum-matchers');

const actual = {
  name: 'Jon'
  height: gt(5)
}

// actual === exp1 -> True
const exp1 = {
  name: 'Jon',
  height: 6
}

// actual === exp2 -> False
const exp2 = {
  name: 'Jon',
  height: 4.7
}
```

### gte

Checks if actual value is greater than or equal to a given number.

- `gte` method accepts a number. Actual value should be greater than or equal to the given number.

```js
const { gte } = require('pactum-matchers');

const actual = {
  name: 'Jon'
  height: gte(5)
}

// actual === exp1 -> True
const exp1 = {
  name: 'Jon',
  height: 5
}

// actual === exp2 -> True
const exp2 = {
  name: 'Jon',
  height: 5.7
}

// actual === exp3 -> False
const exp3 = {
  name: 'Jon',
  height: 4.7
}
```

### lt

Checks if actual value is less than a given number.

- `lt` method accepts a number. Actual value should be less than the given number.

```js
const { lt } = require('pactum-matchers');

const actual = {
  name: 'Jon'
  height: lt(5)
}

// actual === exp1 -> True
const exp1 = {
  name: 'Jon',
  height: 4.11
}

// actual === exp2 -> False
const exp2 = {
  name: 'Jon',
  height: 5.7
}
```

### lte

Checks if actual value is less than or equal to a given number.

- `lte` method accepts a number. Actual value should be less than or equal to the given number.

```js
const { lte } = require('pactum-matchers');

const actual = {
  name: 'Jon'
  height: lte(5)
}

// actual === exp1 -> True
const exp1 = {
  name: 'Jon',
  height: 4.11
}

// actual === exp2 -> True
const exp2 = {
  name: 'Jon',
  height: 5
}

// actual === exp3 -> False
const exp3 = {
  name: 'Jon',
  height: 5.7
}
```