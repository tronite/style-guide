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

# If you use pmpm
pnpm add --save-dev @tronite/style-guide
```

## ESLint

This package provides the following ESLint configurations:

- `@tronite/style-guide/eslint/browser` - for browser projects
- `@tronite/style-guide/eslint/node` - for Node.js and [ESM](https://nodejs.org/api/esm.html) projects

- `@tronite/style-guide/eslint/nestjs` - for [NestJS](https://nestjs.com/) projects
- `@tronite/style-guide/eslint/nextjs` - for [Next.js](https://nextjs.org/) projects
- `@tronite/style-guide/eslint/react` - for [React](https://reactjs.org/) projects

## Prettier

This package provides a single Prettier configuration:

- `@tronite/style-guide/prettier`

[Prettier](https://prettier.io/) is a peer dependency of this package, so you will need to install it separately:

```sh
# If you use npm
npm install --save-dev prettier

# If you use yarn
yarn add --dev prettier

# If you use pmpm
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
- `@tronite/style-guide/typescript/nestjs` - for [NestJS](https://nestjs.com/) projects
- `@tronite/style-guide/typescript/nextjs` - for [Next.js](https://nextjs.org/) projects
- `@tronite/style-guide/typescript/react.es5` - for [React](https://reactjs.org/) projects that target ES5
- `@tronite/style-guide/typescript/react.es2020` - for [React](https://reactjs.org/) projects that target ES2020

[TypeScript](https://typescriptlang.org/) is a peer dependency of this package, so you will need to install it separately:

```sh
# If you use npm
npm install --save-dev typescript

# If you use yarn
yarn add --dev typescript

# If you use pmpm
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

To use one of these configurations, replace `<config>` with the desired configuration name, such as `nextjs`. Don't forget to update the `include` and `exclude` arrays with the appropriate source file paths. Each configuration has its own default `include` and `exclude` paths, so make sure to extend them from the chosen configuration.

## Credits

This package was heavily inspired by [@vercel/style-guide](https://github.com/vercel/style-guide) and as such, it uses the same license. See the [LICENSE](LICENSE) file for more information. Vercel's style guide was a little bit too opinionated for our needs, so we decided to create a more flexible alternative.
