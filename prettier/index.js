// @ts-check
const requirePackage = require('../eslint/_require-package');

requirePackage('prettier', 'prettier');

module.exports = {
  printWidth: 120,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: 'all',
  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-packagejson'],
  importOrder: ['<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'],
  importOrderParserPlugins: ['typescript', 'jsx', 'classProperties', 'decorators-legacy'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
