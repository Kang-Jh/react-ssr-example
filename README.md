# React SSR Example

React SSR using Express.js and React-Router-DOM

## How To Set SSR

Setting is simpler than ejecting

### Babel and Typescript setting

1. First create server directory and create index.tsx files in server directory
2. Create tsconfig.json file in the server directory that extends root directory's tsconfig
3. In development, Root tsconfig must have allowJs: false to run in ts-node (https://github.com/TypeStrong/ts-node/issues/693)
4. Install devDependencies in the package.json file(You can see in package.json)
5. Create babel.config.json file and configure it (You can see config file)
6. Set scripts to compile files (check in the package.json)

### nodemon and ts-node setting

Check scripts in the package setting

## Running Scripts Caution

1. You should always build first, because all files in the build directory is send, not in the src directory
