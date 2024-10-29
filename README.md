# @just-web-tech/get-set

Type safe get and set properties using dot notation

<a href="https://www.npmjs.com/package/@just-web-tech/get-set">
  <img alt="npm version" src="https://img.shields.io/npm/v/%40just-web-tech%2Fget-set" />
</a>
<a href="https://www.npmjs.com/package/@just-web-tech/get-set">
  <img alt="npm downloads" src="https://img.shields.io/npm/dw/%40just-web-tech%2Fget-set" />
</a>
<a href="https://github.com/just-web-tech/get-set/blob/master/LICENSE">
  <img alt="npm license" src="https://img.shields.io/npm/l/%40just-web-tech%2Fget-set" />
</a>
<a href="https://github.com/just-web-tech/get-set">
  <img alt="npm stars" src="https://img.shields.io/github/stars/just-web-tech/get-set?style=flat" />
</a>

## Features

- 🔑 Type safe
- ⚡️ No dependencies
- 📦 Tree shakeable
- 🔥 < 1 kb size (gzip)

## Install

```sh
npm i @just-web-tech/get-set
```

## Usage

Safely getting and setting properties via dot notation

```ts
const project: Project = {
  name: '@just-web-tech/get-set',
  created: new Date(),
  test: {
    framework: 'vitest',
  },
  files: [{ folder: 'dist' }]
};

const file = getValue(project, 'files.0.folder'); // 'dist'
setValue(project, 'files.0.folder', 'build'); // project.files is equal to ['build']
```

## Utility types

### `Path<T>`

Returns a string representation of the paths for all properties

```ts
type Paths = Path<Project>;
// "name" | "created" | "test" | "files"
// "test.framework" | `files.${number}` | `files.${number}.folder`
```

### `PathValue<T, P>`

Returns the type of the property at the specified path

```ts
type Created = PathValue<Project, 'created'>; // Date
```
