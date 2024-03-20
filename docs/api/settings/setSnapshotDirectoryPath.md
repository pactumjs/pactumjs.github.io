---
tags:
  - snapshot directory path
  - snapshot
---
# setSnapshotDirectoryPath

sets snapshots directory path.

> Defaults to `.pactum/snapshots` path

## Syntax

```js
setSnapshotDirectoryPath(path)
```

## Usage

### ✅  Correct Usage

```js
settings.setSnapshotDirectoryPath('new/path')
```

## Arguments

#### > path (string)

Snapshot directory path.

## Examples

### Normal

```js
const { spec, settings } = require('pactum');

settings.setSnapshotDirectoryPath('new/path');

await spec()
  .name('snapshot directory test')
  .get('/api/users/1')
  .expectStatus(200)
  .expectJsonSnapshot();
```

## See Also

- [expectJsonSnapshot](/api/assertions/expectJsonSnapshot)