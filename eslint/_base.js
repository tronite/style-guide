// @ts-check
const { ECMA_VERSION, JAVASCRIPT_FILES } = require('./_constants');
const requirePackage = require('./_require-package');

requirePackage('eslint', 'eslint');

// See: https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import('eslint').ESLint} */
module.exports = {
  extends: ['eslint:recommended', 'plugin:import/recommended', 'prettier'],
  env: {
    [`es${ECMA_VERSION}`]: true,
  },
  // Report unused `eslint-disable` comments.
  reportUnusedDisableDirectives: true,
  // Global settings used by all overrides.
  settings: {
    // Use the Node resolver by default.
    'import/resolver': { node: {} },
  },
  // Global parser options.
  parserOptions: {
    ecmaVersion: ECMA_VERSION,
    sourceType: 'module',
  },
  overrides: [
    {
      files: JAVASCRIPT_FILES,
      parser: '@babel/eslint-parser',
      parserOptions: {
        requireConfigFile: false,
      },
      rules: {
        'import/order': 'off',
      },
    },
  ],
};
