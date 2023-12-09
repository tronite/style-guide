// @ts-check
const { TYPESCRIPT_FILES } = require('./_constants');
const requirePackage = require('../_require-package');

requirePackage('typescript', 'typescript');

/** @type {import('eslint').ESLint} */
module.exports = {
  overrides: [
    {
      files: TYPESCRIPT_FILES,
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript', 'prettier'],
    },
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-duplicate-enum-values': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
};
