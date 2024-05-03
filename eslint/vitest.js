// @ts-check
/** @type {import('eslint').ESLint} */
module.exports = {
  extends: ['plugin:vitest/recommended', require.resolve('./rules/vitest')],
};
