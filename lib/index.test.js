const { deepStrictEqual } = require('assert')

const actual = require('.')

const expected = [
  '**/*.min.js',
  '**/bundle.js',
  'coverage/**',
  'node_modules/**',
  'vendor/**'
]

deepStrictEqual(actual, expected)
