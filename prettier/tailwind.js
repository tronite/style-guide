const base = require('./index');

module.exports = {
  ...base,
  plugins: [...base.plugins, 'prettier-plugin-tailwindcss'],
};
