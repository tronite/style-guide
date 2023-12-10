// @ts-check
const { TYPESCRIPT_FILES } = require('./_constants');
const requirePackage = require('./_require-package');

requirePackage('typescript', 'typescript');

/** @type {import('eslint').ESLint} */
module.exports = {
  overrides: [
    {
      files: TYPESCRIPT_FILES,
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript', 'prettier'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
      },
    },
  ],
};
