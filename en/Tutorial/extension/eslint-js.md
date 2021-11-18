## eslint-js

ESLint is an open source JavaScript linting utility.

[eslint-js Download](https://ext.dcloud.net.cn/plugin?id=2037)

## Error message

As shown in the figure below, when an error is detected, a red wavy line will appear.

<img src="/static/snapshots/tutorial/plugins/eslint-js-error.png" class="hd-img" />

## ESLint Plugin configuration

Click the menu [Tools] [Settings -> Plugin] [eslint-js], you can see the eslint-js related configuration.

<img src="/static/snapshots/tutorial/plugins/settings_eslint_en.png" class="hd-img"/>

**Real-time verification and automatically fixable**

> Only supports HBuilderX 2.6.8+ version

1. To use this function, you must install the [eslint-js](https://ext.dcloud.net.cn/plugin?id=2037) plugin
2. The `vue-cli` project needs to install the eslint library and configure the eslint rules.
3. If the above conditions are met, when the code is written and saved, if there is an error in the code, it will be automatically repaired;
4. Real-time verification function, not enabled by default, you need to manually enable this function


## HBuilderX eslint-js configuration files

The configuration file of eslint-js is `.eslintrc.js`.

Click on the menu Tools -> Plugins -> eslint-js -> .eslintrc.js to open the `.eslintrc.js` file.

The configuration file is as follows：

```js
module.exports = {
    "plugins": [],         
    "env": {
        "browser": true,
        "node": true
    },
    "parser": "esprima",   
    "parserOptions": {},    
    "rules": {}
}
```
  
More configuration instructions can refer to [options](https://eslint.org/docs/rules/)

## How to add rules?

[rules list: https://cn.eslint.org/docs/rules/](https://cn.eslint.org/docs/rules/)

ESLint comes with a large number of built-in rules and you can add more rules through plugins. You can modify which rules your project uses either using configuration comments or configuration files. To change a rule setting, you must set the rule ID equal to one of these values:

- "off" or 0 - turn the rule off
- "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
- "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)

Example:

```js
"rules": {
  "camelcase": 2,           //enforce camelcase naming convention,
  "indent": [2, 4],         //enforce consistent indentation
  "id-match": 0,            //require identifiers to match a specified regular expression
  "init-declarations": 1,   //require or disallow initialization in variable declarations
  "no-undef": 1,            //disallow the use of undeclared variables unless mentioned in /*global */ comments
}
```


## Exampl：Html Project

Use eslint to check extra spaces and fix them automatically.

<img src="/static/snapshots/tutorial/plugins/eslint-html-example-en.gif" style="zoom: 90%; border: 1px solid #eee;" />


```js
module.exports = {
    "plugins": [
        "html"
    ],
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        },
        "allowImportExportEverywhere": false
    },
    rules: {
        "no-alert": 0,
        "semi": [2, "always"],
        "no-multi-spaces": "error",
       "quotes": ["error", "single"]
    }
}
```

## Example：uni-app project

- vue file, verify vue syntax, need to install `eslint-vue` plugin, [plugin address](https://ext.dcloud.net.cn/plugin?id=2005)
- The vue file, the verification rules, need to be configured from the `eslint-vue` plugin.
- Menu [Tools] [Settings] [Plugins] [eslint-vue] [.eslintrc.js], edit the `.eslintrc.js` file


Example: eslint automatically fixes double quotes to single quotes

<img src="/static/snapshots/tutorial/eslint-uniapp-example.gif" style="zoom: 90%; border: 1px solid #eee;" />


## Example：vue-cli project

1. For the vue-cli project, if you use the configuration rules under the project, you need to install the relevant libraries and create the `.eslintrc.js` file in the project root directory
2. The `eslint rules` under the project will override the rules in the HBuilderX editor `eslint plugin`
3. vue file, verify vue syntax, need to install `eslint-vue` plugin, [plugin address](https://ext.dcloud.net.cn/plugin?id=2005)

```shell
npm install --save eslint eslint-plugin-vue eslint-plugin-html eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard babel-eslint
```


**.eslintrc.js configuration files**

```js
module.exports = {
    extends: [
        'plugin:vue/recommended'
    ],
	parserOptions: {
		'ecmaVersion': 2018,
		'sourceType': 'module',
		'ecmaFeatures': {
			'jsx': true
		},
		'allowImportExportEverywhere': false
	},
    rules: {
        "no-alert": 0,
        "no-multi-spaces": "error",         // disallow multiple spaces 
        "semi": [2, "always"] ,             // equire or disallow semicolons instead of ASI
        "quotes": ["error", "single"]        // enforce the consistent use of either backticks, double, or single quotes
    }
}
```

**Example: Use eslint to automatically add semicolons**

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200317/911ea4cac9f2c4d80ec502b1384e7a58.gif)