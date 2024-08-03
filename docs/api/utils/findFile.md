---
tags:
  - file
  - find file
  - search file
---

# findFile

Finds a file recursively in a given path.


## Syntax

```js
findFile(name);
findFile(name, path);
```

## Usage

### ✅  Correct Usage

```js
findFile('file.txt');
findFile('file.txt', 'path/to/the/dir');
```

## Arguments

#### > name (string)

Name of the file to find.

#### > path (string)

Path to the directory to search in. Defaults to data directory - `data`.

## Examples

### Reading a JSON File

```js
const { utils } = require('pactum');

const user = JSON.parse(utils.findFile('user.json'));
```

## See Also

- [setDataDirectory](/api/settings/setDataDirectory)