# eslint-config-restorecommerce

The eslint configs used for Restore Commerce.
The ruleset is just a slightly modified version of
[eslint-config-airbnb-base](https://github.com/airbnb/javascript).

## Usage

Add it as a dev-dependency:

```js
"devDependencies": {
  "eslint-config-restorecommerce": "restorecommerce/eslint-config-restorecommerce",
  ...
}
```

Add a script `lint` like so:

```js
"scripts": {
  "lint": "eslint *.json *.js lib/**",
  ...
}
```

Have a file `.eslintrc` and add:

```js
{
  "extends": "eslint-config-restorecommerce"
}
```
