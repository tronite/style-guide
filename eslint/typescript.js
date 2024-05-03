// @ts-check
const { TYPESCRIPT_FILES } = require('./_constants');
const requirePackage = require('./_require-package');

requirePackage('typescript', 'typescript');

/** @type {import('eslint').ESLint} */
module.exports = {
  overrides: [
    {
      files: TYPESCRIPT_FILES,
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'prettier',
        require.resolve('./rules/typescript'),
        require.resolve('./rules/tsdoc'),
      ],
      rules: {
        'import/order': 'off',
      },
    },
  ],
};
