<p align="center">
  <h1 align="center">@tronite/style-guide</h1>
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/%40tronite%2Fstyle-guide" />
  <img src="https://img.shields.io/github/actions/workflow/status/tronite/style-guide/release.yaml" />
  <img src="https://img.shields.io/github/license/tronite/style-guide" />
</p>

This package provides flexible [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), and [TypeScript](https://typescriptlang.org/) configurations for use in both browser and Node.js projects.

## Installation

To install this package, run the following command:

```sh
# If you use npm
npm install --save-dev @tronite/style-guide

# If you use yarn
yarn add --dev @tronite/style-guide

# If you use pnpm
pnpm add --save-dev @tronite/style-guide
```

## ESLint

This ESLint config is designed to be composable.

The following base configs are available. You can use one or both of these
configs, but they should always be first in `extends`:

- `@tronite/style-guide/eslint/browser`
- `@tronite/style-guide/eslint/node`

Note that you can scope configs, so that configs only target specific files.
For more information, see: [Scoped configuration with `overrides`](#scoped-configuration-with-overrides).

The following additional configs are available:

- `@tronite/style-guide/eslint/next` (requires `@next/eslint-plugin-next` to be installed at the same version as `next`)
- `@tronite/style-guide/eslint/react`
- `@tronite/style-guide/eslint/typescript` (requires `typescript` to be installed and [additional configuration](#configuring-eslint-for-typescript))
- `@tronite/style-guide/eslint/vitest`

> You'll need to use `require.resolve` to provide ESLint with absolute paths,
> due to an issue around ESLint config resolution (see
> [eslint/eslint#9188](https://github.com/eslint/eslint/issues/9188)).

For example, use the shared ESLint config(s) in a Next.js project, set the
following in `.eslintrc.js`.

```js
module.exports = {
  extends: [
    require.resolve('@tronite/style-guide/eslint/browser'),
    require.resolve('@tronite/style-guide/eslint/react'),
    require.resolve('@tronite/style-guide/eslint/next'),
  ],
};
```

### Configuring ESLint for TypeScript

Some of the rules enabled in the TypeScript config require additional type
information, you'll need to provide the path to your `tsconfig.json`.

For more information, see: https://typescript-eslint.io/docs/linting/type-linting

```js
const { resolve } = require('path');

const project = resolve(__dirname, 'tsconfig.json');

module.exports = {
  root: true,
  extends: [
    require.resolve('@tronite/style-guide/eslint/node'),
    require.resolve('@tronite/style-guide/eslint/typescript'),
  ],
  parserOptions: {
    project,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
};
```

### Configuring custom components for `jsx-a11y`

It's common practice for React apps to have shared components like `Button`,
which wrap native elements. You can pass this information along to `jsx-a11y`
via the `components` setting.

The below list is not exhaustive.

```js
module.exports = {
  root: true,
  extends: [require.resolve('@tronite/style-guide/eslint/react')],
  settings: {
    'jsx-a11y': {
      components: {
        Article: 'article',
        Button: 'button',
        Image: 'img',
        Input: 'input',
        Link: 'a',
        Video: 'video',
      },
    },
  },
};
```

### Scoped configuration with `overrides`

ESLint configs can be scoped to include/exclude specific paths. This ensures
that rules don't "leak" into places where those rules don't apply.

In this example, Jest rules are only being applied to files matching Jest's
default test match pattern.

```js
module.exports = {
  extends: [require.resolve('@tronite/style-guide/eslint/node')],
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: [require.resolve('@tronite/style-guide/eslint/jest')],
    },
  ],
};
```

#### A note on file extensions

By default, all TypeScript rules are scoped to files ending with `.ts` and
`.tsx`.

However, when using overrides, file extensions must be included or ESLint will
only include `.js` files.

```js
module.exports = {
  overrides: [{ files: [`directory/**/*.[jt]s?(x)`], rules: { 'my-rule': 'off' } }],
};
```

## Prettier

This package provides a single Prettier configuration:

- `@tronite/style-guide/prettier`

[Prettier](https://prettier.io/) is a peer dependency of this package, so you will need to install it separately:

```sh
# If you use npm
npm install --save-dev prettier

# If you use yarn
yarn add --dev prettier

# If you use pnpm
pnpm add --save-dev prettier
```

To use this configuration, create a `.prettierrc.js` file in the root of your project and add the following:

```js
module.exports = require('@tronite/style-guide/prettier');
```

Alternatively, you can add the following to your `package.json` file:

```json
{
  "prettier": "@tronite/style-guide/prettier"
}
```

## TypeScript

This package provides the following TypeScript configurations:

- `@tronite/style-guide/typescript/esm` - for [ESM](https://nodejs.org/api/esm.html) projects
- `@tronite/style-guide/typescript/next` - for [Next.js](https://nextjs.org/) projects
- `@tronite/style-guide/typescript/node` - for [Node.js](https://nodejs.org/)
- `@tronite/style-guide/typescript/react.es5` - for [React](https://reactjs.org/) projects that target ES5
- `@tronite/style-guide/typescript/react.es2020` - for [React](https://reactjs.org/) projects that target ES2020

[TypeScript](https://typescriptlang.org/) is a peer dependency of this package, so you will need to install it separately:

```sh
# If you use npm
npm install --save-dev typescript

# If you use yarn
yarn add --dev typescript

# If you use pnpm
pnpm add --save-dev typescript
```

To use one of these configurations, create a `tsconfig.json` file in the root of your project and add the following:

```json
{
  "extends": "@tronite/style-guide/typescript/<config>",
  "include": ...,
  "exclude": ...
}
```

To use one of these configurations, replace `<config>` with the desired configuration name, such as `next`. Don't forget to update the `include` and `exclude` arrays with the appropriate source file paths. Each configuration has its own default `include` and `exclude` paths, so make sure to extend them from the chosen configuration.

## Credits

This package was heavily inspired by [@vercel/style-guide](https://github.com/vercel/style-guide) and as such, it uses the same license. See the [LICENSE](LICENSE) file for more information. Vercel's style guide was a little bit too opinionated for our needs, so we decided to create a more flexible alternative.
