# React SSR Example

React SSR using Express.js and React-Router-DOM

## How To Set SSR

### Babel and Typescript setting

1. First create server directory and create index.tsx file in server directory(which uses tsx for server-side rendering)
2. Create tsconfig.json file inside the server directory which extends root tsconfig
3. Root tsconfig must have allowJs: false
4. Install devDependencies in the package.json file(You can see in package.json)
5. Create babel.config.json file and set the options
6. Add import 'ignore-styles' on top of the server/index.tsx
7. Set scripts to compile files (check in the package.json)

### nodemon and ts-node setting

- Check scripts in the package setting
