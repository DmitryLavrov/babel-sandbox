# babel-sandbox
### Init
```shell
mkdir babel-sandbox
cd babel-sandbox/

npm init -y

git init
```
### Babel
Install [@babel/cli](https://babeljs.io/docs/en/babel-cli) 
```shell
npm install --save-dev @babel/core @babel/cli
```
Start Babel:
```shell
npx babel src --out-dir build
```
or
```shell
npx babel src -d build
```

### Plugins
Install [@babel/plugin-transform-template-literals](https://babeljs.io/docs/en/babel-plugin-transform-template-literals) \
Install [@babel/plugin-transform-classes](https://babeljs.io/docs/en/babel-plugin-transform-classes) \
Install [@babel/plugin-transform-block-scoping](https://babeljs.io/docs/en/babel-plugin-transform-block-scoping)
```shell
npm install --save-dev @babel/plugin-transform-template-literals
npm install --save-dev @babel/plugin-transform-classes @babel/plugin-transform-block-scoping
```
Start Babel with plugins:
```shell
npx babel src --out-dir build --plugins=@babel/plugin-transform-template-literals,@babel/plugin-transform-classes,@babel/plugin-transform-block-scoping
```
Config file `.babelrc`:
```json
{
  "plugins": [
    "@babel/plugin-transform-template-literals",
    "@babel/plugin-transform-classes",
    "@babel/plugin-transform-block-scoping"
  ]
}
```
### Presets 
Install [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)
```shell
npm install --save-dev @babel/preset-env
```
Config file `.babelrc`:
```json
{
  "presets": [[
    "@babel/env",
    {
      "targets": {
        "edge": 88,
        "chrome": 88
      }
    }
  ]]
}
```
Useful sites:  
* [__Can I use__](https://caniuse.com/) 
* [__Browserslist__](https://github.com/browserslist/browserslist) 

Config file `.babelrc` with `"debug": true`:
```json
{
  "presets": [[
    "@babel/env",
    {
      "debug": true,
      "targets": [
        "last 10 edge versions",
        "last 10 chrome versions"
      ]
    }
  ]]
}
```
### Browserlist
Use browserslist in 
* .babelrc --> targets
* package.json --> browserslist
* .browserslistrs

Show browserslist:
```shell
npx browserslist
```
### Polyfills
```shell
npm i core-js
```
`useBuiltIns`: "usage" | "entry" | false, defaults to false. \
This option configures how @babel/preset-env handles polyfills.
Config file `.babelrc` with `useBuiltIns: "usage"`:
```json
{
  "presets": [[
    "@babel/env",
    {
      "corejs": 3,
      "useBuiltIns": "usage",
      "modules": false,
      "debug": true,
      "targets": [ ... ]
    }
  ]]
}
```
`"modules": false` - so that `import` do not transform into `require`

### JSX
```shell
npm i react react-dom
npm i -D  @babel/preset-react
```
Config file `.babelrc` with preset `@babel/preset-react`:
```json
{
  "presets": [[
    "@babel/env",
    { ... }
  ],
    "@babel/react"
  ]
}
```
