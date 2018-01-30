var isProd = process.env.NODE_ENV === 'production'

module.exports = {
  defaultSeverity: 'warning',
  rules: {
    'array-type': [ true, 'array' ],
    'ban-types': {
      serverity: 'error',
      options: [
        [ 'Object', 'Avoid using the `Object` type. Did you mean `object`?' ],
        [ 'Function', 'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.' ],
        [ 'Boolean', 'Avoid using the `Boolean` type. Did you mean `boolean`?' ],
        [ 'Number', 'Avoid using the `Number` type. Did you mean `number`?' ],
        [ 'String', 'Avoid using the `String` type. Did you mean `string`?' ],
        [ 'Symbol', 'Avoid using the `Symbol` type. Did you mean `symbol`?' ],
      ],
    },
    curly: { serverity: 'error' },
    indent: [ true, 'space', 2 ],
    'interface-over-type-literal': false,
    'max-line-length': false,
    'no-arg': false,
    'no-bitwise': false,
    'no-console': isProd ? true : false,
    'no-debugger': isProd ? { serverity: 'error' } : false,
    'no-empty': false,
    'no-empty-interface': false,
    'no-eval': { serverity: 'error' },
    'no-internal-module': { serverity: 'error' },
    'no-misused-new': { serverity: 'error' },
    'no-reference': { serverity: 'error' },
    'no-reference-import': { serverity: 'error' },
    'no-shadowed-variable': false,
    'no-string-literal': true,
    'no-string-throw': { serverity: 'error' },
    'no-var-keyword': { serverity: 'error' },
    'no-var-requires': { serverity: 'error' },
    'object-literal-key-quotes': [ true, 'as-needed' ],
    'object-literal-sort-keys': false,
    'one-variable-per-declaration': false,
    'ordered-imports': false,
    quotemark: [
      true,
      'single',
      'avoid-escape',
      'jsx-double',
    ],
    semicolon: [ true, 'never' ],
    'space-before-function-paren': [ true, 'always' ],
    'triple-equals': { serverity: 'error' },
  },
}
