/** @type {import('eslint').ESLint} */
module.exports = {
  extends: ['./eslint/node'],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
  },
};
