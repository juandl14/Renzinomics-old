# Turmeric Template

This template provides a minimal setup to get Foundry woriking with Vite and React. It includes:

- React working in Vite with HMR and some ESLint rules.
- A basic setup for TypeScript.
- Chackra UI for styling.
- WAGMI and Rainbow Kit libraries for interacting with the wallet.

## Getting Started

1. Clone this repository and `cd` into it
2. Install dependencies with `bun install`
3. Start the development blockchain with `bun chain`
4. Deploy the contracts with `bun run deploy`
5. Start the development server with `bun dev`

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list