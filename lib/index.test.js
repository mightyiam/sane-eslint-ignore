const { deepStrictEqual } = require('assert')

const actual = require('.')

const expected = [
  '**/*.min.js',
  '**/bundle.js',
  'coverage/**',
  'vendor/**'
]

deepStrictEqual(actual, expected)
