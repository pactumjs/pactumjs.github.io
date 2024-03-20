---
tags:
  - data directory path
  - data folder path
---

# setDataDirectory

sets data directory path.

> Defaults to `./data` path

## Syntax

```js
setDataDirectory(path)
```

## Usage

### ✅  Correct Usage

```js
settings.setDataDirectory('new/path')
```

## Arguments

#### > path (string)

Data directory path.

## Examples

### Normal

```js
const { settings } = require('pactum');

settings.setDataDirectory('new/path');
```

## See Also

- [withJson](/api/requests/withJson)