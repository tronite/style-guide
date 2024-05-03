// @ts-check
/** @type {import('eslint').ESLint} */
module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/react',
    'prettier',
    require.resolve('./rules/react'),
    require.resolve('./rules/jsx-a11y'),
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'import/order': 'off',
  },
};
