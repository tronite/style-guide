// @ts-check
/** @type {import('eslint').ESLint} */
module.exports = {
  extends: ['plugin:vitest/recommended'],
  rules: {
    'vitest/no-duplicate-hooks': 'error',
    'vitest/prefer-lowercase-title': 'warn',
  },
};
