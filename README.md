[![Build Status](https://travis-ci.org/pelevesque/have-minimum-occurrences.svg?branch=master)](https://travis-ci.org/pelevesque/have-minimum-occurrences)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/have-minimum-occurrences/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/have-minimum-occurrences?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# have-minimum-occurrences

Checks if substrings occur a minimum number of times in a string.

@see https://www.npmjs.com/package/@pelevesque/have-minimum-density for minimum density.

## Node Repository

https://www.npmjs.com/package/@pelevesque/have-minimum-occurrences

## Installation

`npm install @pelevesque/have-minimum-occurrences`

## Tests

### Standard Style & Unit Tests

`npm test`

### Unit Tests & Coverage

`npm run cover`

## Usage

```js
const haveMinimumOccurrences = require('@pelevesque/have-minimum-occurrences')
```

```js
const str = 'A little string.'
const checks = [['i', 2]]
const result = haveMinimumOccurrences(str, checks)
// result === true
```

```js
const str = 'A little string.'
const checks = [['i', 3]]
const result = haveMinimumOccurrences(str, checks)
// result === false
```

```js
const str = 'A little string.'
const checks = [['i', 2], ['t', 3], [' ', 2]]
const result = haveMinimumOccurrences(str, checks)
// result === true
```

```js
const str = 'A little string.'
const checks = [['i', 5], ['t', 3], [' ', 2]]
const result = haveMinimumOccurrences(str, checks)
// result === false
```

```js
const str = 'aab111111aab'
const checks = [['aab', 2]]
const result = haveMinimumOccurrences(str, checks)
// result === true
```
