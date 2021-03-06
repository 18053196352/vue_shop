module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    // '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-multi-spaces": 0,
    "quotes": 0,
    "vue/no-unused-vars": 0,
    "no-unused-vars": 0,
    "prefer-promise-reject-errors": 0,
    "quote-props": 0,
    "operator-linebreak": 0,
    "semi": 0,
    "no-useless-escape": 0,
    "vue/no-use-v-if-with-v-for": 0,
    "comma-dangle": 0,
    "eol-last": 0,
    "no-multiple-empty-lines": 0,
    "quotes": 0,
    "comma-dangle": 0,
    "semi": 0,
    "eol-last": 0,
    "import/no-duplicates": 0,
    "space-before-function-paren": 0,
    "eqeqeq": 0,
    'space-before-function-paren': 0,
    "no- trailing-spaces": 0,
    "no-trailing-spaces": 0,
    "spaced-comment": 0,
    "curly": 0,
    "vue/no-dupe-keys": 0,
    "vue/valid-template-root": 0
  }
}
