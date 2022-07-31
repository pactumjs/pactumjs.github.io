# loadData

Loads data templates and data maps from file system.

- Group your templates & maps inside `templates` & `maps` folders.
- If not placed under above mentioned folders, add `.template` or `.map` as a suffix to the json files based on their type.

```stylus
- data/
  - maps/
    - User.json
  - templates/
    - Address.json
  - Bank.template.json
  - Army.map.json
```

## Syntax

```js
loadData()
loadData(folder_path)
```

## Usage

### ✅  Correct Usage

```js
// use default path `./data`
stash.loadData();
```

```js
stash.loadData('./templates');
```

## Arguments

#### > folder_path *(string)*

Path of the folder to load templates and maps.

> Defaults to `./data`

## Examples

```js
const { stash, spec } = require('pactum');

stash.loadData();

await spec()
  .post('https://reqres.in/api/users')
  .withJson({
    "name": "$M{User.name}",
    "job": "$M{User.job}"
  });
```