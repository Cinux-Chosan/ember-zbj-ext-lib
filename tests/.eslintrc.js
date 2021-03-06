module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    browser: true,
    es6: true
  },
  parser: 'babel-eslint',
  rules: {
    "no-console": "off",
    "no-unused-vars": ["error", { "vars": "local" }]
  }
};
