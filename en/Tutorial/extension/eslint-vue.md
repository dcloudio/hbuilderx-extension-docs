# About eslint-vue

This plugin is used for Vue syntax verification. [eslint-vue installation](https://ext.dcloud.net.cn/plugin?id=2005)

It needs to be used with eslint-js, [eslint-js installation](https://ext.dcloud.net.cn/plugin?id=2037)

## Error Highlight

As shown in the figure below, when an error is detected, a red wavy line will appear.

<img src="/static/snapshots/tutorial/plugins/eslint-vue-error.png" class="hd-img" />

## Plugin Configuration

Click the menu [Tools] [Settings -> Plugin] [eslint-vue], you can see the eslint-vue  configuration.

<img src="/static/snapshots/tutorial/plugins/settings_eslint_en.png" class="hd-img"/>

**Real-time verification and automatic modification

> Only supports HBuilderX 2.6.8+ version

1. To use this function, you must install [eslint-js](https://ext.dcloud.net.cn/plugin?id=2037) and [eslint-vue](https://ext.dcloud.net.cn /plugin?id=2005) plugin.
2. The `vue-cli` project needs to install the eslint library and configure the eslint rules.
3. If the above conditions are met, when the code is written and saved, if there is an error in the code, it will be automatically repaired.
4. Real-time verification function, not enabled by default, you have to manually enable this function.

## HBuilderX eslint-vue configuration files

The configuration file of eslint-vue is `.eslintrc.js`.

Click on the menu Tools -> Settings -> Plugins -> eslint-vue -> .eslintrc.js to open the `.eslintrc.js` file.

The configuration file is as follows：

```
  module.exports = {
      "extends": "plugin:vue/essential",
      "parserOptions": {},
      "rules": {}
  };
```

More configuration instructions can refer to [options](http://eslint.org/docs/user-guide/configuring)


## How to add rules？

[rules list](https://github.com/vuejs/eslint-plugin-vue#gear-configs)

Rule Settings:

- "off" or 0 - turn the rule off
- "warn" or 1 - turn the rule on as a warning (doesn't affect the program to exit)
- "error" or 2 - turn the rule on as an error (the program will exit when triggered)


Modify the .eslintrc.js file and add rules, such as:

```js
{
  //Disable asynchronous actions in computed properties
  'vue/no-async-in-computed-properties': 'error',
  //no duplicate keys
  'vue/no-dupe-keys': 'error',
  //no duplicate attributes
  'vue/no-duplicate-attributes': 'error',
  //In <template> Parsing errors are not allowed under the label
  'vue/no-parsing-error': ['error',{
      'x-invalid-end-tag': false,
  }],
  //Overriding reserved keywords is not allowed
  'vue/no-reserved-keys': 'error',
  //Mandatory data must be a function with a return value
  // 'vue/no-shared-component-data': 'error',
  //Side effects are not allowed in computed properties.
  'vue/no-side-effects-in-computed-properties': 'error',
  //<template>No key attributes
  'vue/no-template-key': 'error',
  //In <textarea> not mustaches
  'vue/no-textarea-mustache': 'error',
  //Unused variable definitions are not allowed in v-for or attributes in the scope
  'vue/no-unused-vars': 'error',
  //<component>Label required v-bind:is
  'vue/require-component-is': 'error',
  // The render function must have a return value
  'vue/require-render-return': 'error',
  // Ensure that v-bind:key and v-for instructions appear in pairs
  'vue/require-v-for-key': 'error',
  // Check whether the default prop value is valid
  'vue/require-valid-default-prop': 'error',
  // Ensure that there is a return statement in the computed attribute
  'vue/return-in-computed-property': 'error',
  // Mandatory verification of template root node
  'vue/valid-template-root': 'error',
  // Mandatory verification of v-bind command
  'vue/valid-v-bind': 'error',
  // Mandatory verification of v-cloak command
  'vue/valid-v-cloak': 'error',
  // Mandatory verification of v-else-if command
  'vue/valid-v-else-if': 'error',
  // Mandatory verification of v-else command
  'vue/valid-v-else': 'error',
  // Mandatory verification of v-for command
  'vue/valid-v-for': 'error',
  // Mandatory verification of v-html commands
  'vue/valid-v-html': 'error',
  // Mandatory verification of v-if commands
  'vue/valid-v-if': 'error',
  // Mandatory verification of v-model commands
  'vue/valid-v-model': 'error',
  // Mandatory verification of v-on commands
  'vue/valid-v-on': 'error',
  // Mandatory verification of v-once commands
  'vue/valid-v-once': 'error',
  // Mandatory verification of v-pre commands
  'vue/valid-v-pre': 'error',
  // Mandatory verification of v-show commands
  'vue/valid-v-show': 'error',
  // Mandatory verification of v-text commands
  'vue/valid-v-text': 'error'
}

```

## Example：uni-app project

- You have to install `eslint-vue` plugin, [plugin address](https://ext.dcloud.net.cn/plugin?id=2005) to verify vue syntax.
- To configure validation rules, you must config rules in the `eslint-vue` plugin.
- Menu [Tools] [Settings] [Plugins] [eslint-vue] [.eslintrc.js], edit the `.eslintrc.js` file


Example: eslint automatically fixes double quotes to single quotes

<img src="/static/snapshots/tutorial/eslint/eslint-uniapp-example-en.gif" style="zoom: 90%; border: 1px solid #eee;" />


## Example: vue-cli project

For the vue-cli project, if you use the configuration rules under the project, you need to install the relevant libraries and create the `.eslintrc.js` file in the project root directory.

Note:
1. The `eslint rules` of a project will override the rules in the HBuilderX editor `eslint plugin`
2. You have to install `eslint-vue` plugin, [plugin address](https://ext.dcloud.net.cn/plugin?id=2005) to verify vue syntax.

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
		'ecmaVersion': "latest",
		'sourceType': 'module',
		'ecmaFeatures': {
			'jsx': true
		},
		'allowImportExportEverywhere': false
	},
    rules: {
        "no-alert": 0,
        "no-multi-spaces": "error",
        "semi": [2, "always"] ,
        "quotes": ["error", "single"]          //enforce the consistent use of either backticks, double, or single quotes
    }
}
```

**Example: Use eslint to automatically add semicolons**

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200317/911ea4cac9f2c4d80ec502b1384e7a58.gif)
