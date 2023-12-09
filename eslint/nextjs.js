// @ts-check
const { JAVASCRIPT_FILES } = require('./_constants');
const requirePackage = require('./_require-package');

requirePackage('next', '@next/eslint-plugin-next');

const babelOptions = {
  presets: (() => {
    try {
      require.resolve('next/babel');
      return ['next/babel'];
    } catch (e) {
      return [];
    }
  })(),
};

/** @type {import('eslint').ESLint} */
module.exports = {
  extends: ['plugin:@next/next/recommended'],
  overrides: [
    {
      files: JAVASCRIPT_FILES,
      parserOptions: { babelOptions },
    },
  ],
};
