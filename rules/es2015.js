/* eslint-disable */
module.exports = {
  "extends": [
    "eslint-config-airbnb-base"
  ],
  "parser": "babel-eslint",
  "rules": {
    "arrow-body-style": 0,
    "consistent-this": ["error", "thiz"],
    "comma-dangle": 0,
    "global-require": 0,
    "no-unused-vars": ["error", { "vars": "all", "args": "none" }],
    "no-use-before-define": 0,
    "prefer-destructuring": 0,
    "prefer-const": [2, {
      "destructuring": "any",
      "ignoreReadBeforeAssign": true
    }],
    "space-before-function-paren": 0,
    "strict": 0
  },
  "plugins": [
    "json"
  ]
}
