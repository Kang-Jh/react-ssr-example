# React SSR Example

React SSR using Express.js and React-Router-DOM

## Why React SSR is hard without SSR Framework?

When you use CRA(Create React App) to bootstrap react app, It uses also webpack too.
So you can use import 'style.css' and import image from 'image.svg' etc. even these are not a feature of JS itself.
But vanilla javascript cannot handle images or CSSs import statments(or require calls).
If your components import some image or css, you may occur errors.

There is 3 choices to make SSR possible.

1. Use SSR frameworks such as Next.js
2. Remove your CSSs and images import statements from your code.
3. Configure babel to transpile without CSSs and images import statements
   (no need Webpack because Node.js can handle modules without bundling)

This module chose No.3 to get SSR worked.

The key point is add babel plugin that removes CSSs and images import statements when you transplie react components.
Be aware that without Typescript, when you babel your files, you might change your original js files to transpiled.

I wrote custom remover plugin, but you can use
[babel-plugin-transform-require-ignore](https://github.com/morlay/babel-plugin-transform-require-ignore)
or other plugins. (I cannot find other modules)

## How To Set SSR

Setting is simpler than ejecting

### Babel and Typescript setting

First create server directory and create index.tsx files in server directory.
This directory contains server-side codes.

### Babel setting

1. Install @babel/core, @babel/cli as development dependencies
2. Create babel.config.json on the root directory (where package.json is)
3. Install babel plugins and presets what you need.
4. Configure babel config file to use plugins and presets.
5. (Optional) If you use my custom remover, you must use it before transpiling import statements to require calls.
6. Set script "compile": "yarn babel server -d server -x .tsx && yarn babel src -d src -x .tsx" (you can see in the package.json)

### Typescript setting

If you are not using typescript you can ignore this settings

1. Add ts-node (I use nodemon too) as development dependencies
2. Create tsconfig.json on the root directory (where package.json is). If you use CRA typescript, template you may have already
3. Create tsconfig.json file in the server directory that extends root directory's tsconfig
4. (Optional)If you use ts-node, In development, Root tsconfig must have allowJs: false to run in ts-node (https://github.com/TypeStrong/ts-node/issues/693)
5. Set script to run ts-node files (check in the package.json)

## Running "dev" Caution

When you run with command `npm run dev` or `yarn dev`,
You should always build first Because all files in the build directory is sent, not in the src directory
