---
tags:
  - compression
  - gzip
  - deflate
  - brotli
---

# withCompression

Enables compression of **gzip**, **deflate** and **brotli**(*br*) encoded data.

## Syntax

```js
withCompression()
```

## Usage

#### ✅  Correct Usage

```js
await spec()
  .get('/api/file')
  .withCompression()
  .expectStatus(200);
```

## Examples

#### Brotli Compression

```js
const { spec } = require('pactum');

await spec()
  .get('https://httpbin.org/brotli')
  .withCompression()
  .expectStatus(200);
```

#### Deflate Compression

```js
const { spec } = require('pactum');

await spec()
  .get('https://httpbin.org/deflate')
  .withCompression()
  .expectStatus(200);
```

#### GZip Compression

```js
const { spec } = require('pactum');

await spec()
  .get('https://httpbin.org/gzip')
  .withCompression()
  .expectStatus(200);
```