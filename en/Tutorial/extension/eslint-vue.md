# eslint-vue

This plugin is used for Vue syntax verification. [eslint-vue install](https://ext.dcloud.net.cn/plugin?id=2005)

It needs to be used with eslint-js, [eslint-js plug-in installation address](https://ext.dcloud.net.cn/plugin?id=2037)

## Error message

As shown in the figure below, when an error is detected, a red wavy line will appear.

<img src="/static/snapshots/tutorial/plugins/eslint-vue-error.png" class="hd-img" />

## Plugin configuration

Click the menu [Tools] [Settings -> Plugin] [eslint-vue], you can see the eslint-vue related configuration.

<img src="/static/snapshots/tutorial/plugins/settings_eslint_en.png" class="hd-img"/>

**Real-time verification and automatically fixable**

> Only supports HBuilderX 2.6.8+ version

1. To use this function, you must install [eslint-js](https://ext.dcloud.net.cn/plugin?id=2037) and [eslint-vue](https://ext.dcloud.net.cn /plugin?id=2005) plugin
2. The `vue-cli` project needs to install the eslint library and configure the eslint rules.
3. If the above conditions are met, when the code is written and saved, if there is an error in the code, it will be automatically repaired;
4. Real-time verification function, not enabled by default, you need to manually enable this function

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


## how to add rules？

[rules list](https://github.com/vuejs/eslint-plugin-vue#gear-configs)

ESLint comes with a large number of built-in rules and you can add more rules through plugins. You can modify which rules your project uses either using configuration comments or configuration files. To change a rule setting, you must set the rule ID equal to one of these values:

- "off" or 0 - turn the rule off
- "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
- "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)


Modify the .eslintrc.js file and add rules, such as:

```js
{
  //在computed properties中禁用异步actions
  'vue/no-async-in-computed-properties': 'error',
  //不允许重复的keys
  'vue/no-dupe-keys': 'error',
  //不允许重复的attributes
  'vue/no-duplicate-attributes': 'error',
  //在 <template> 标签下不允许解析错误
  'vue/no-parsing-error': ['error',{
      'x-invalid-end-tag': false,
  }],
  //不允许覆盖保留关键字
  'vue/no-reserved-keys': 'error',
  //强制data必须是一个带返回值的函数
  // 'vue/no-shared-component-data': 'error',
  //不允许在computed properties中出现副作用。
  'vue/no-side-effects-in-computed-properties': 'error',
  //<template>不允许key属性
  'vue/no-template-key': 'error',
  //在 <textarea> 中不允许mustaches
  'vue/no-textarea-mustache': 'error',
  //不允许在v-for或者范围内的属性出现未使用的变量定义
  'vue/no-unused-vars': 'error',
  //<component>标签需要v-bind:is属性
  'vue/require-component-is': 'error',
  // render 函数必须有一个返回值
  'vue/require-render-return': 'error',
  //保证 v-bind:key 和 v-for 指令成对出现
  'vue/require-v-for-key': 'error',
  // 检查默认的prop值是否有效
  'vue/require-valid-default-prop': 'error',
  // 保证computed属性中有return语句 
  'vue/return-in-computed-property': 'error',
  // 强制校验 template 根节点
  'vue/valid-template-root': 'error',
  // 强制校验 v-bind 指令
  'vue/valid-v-bind': 'error',
  // 强制校验 v-cloak 指令
  'vue/valid-v-cloak': 'error',
  // 强制校验 v-else-if 指令
  'vue/valid-v-else-if': 'error',
  // 强制校验 v-else 指令 
  'vue/valid-v-else': 'error',
  // 强制校验 v-for 指令
  'vue/valid-v-for': 'error',
  // 强制校验 v-html 指令
  'vue/valid-v-html': 'error',
  // 强制校验 v-if 指令
  'vue/valid-v-if': 'error',
  // 强制校验 v-model 指令
  'vue/valid-v-model': 'error',
  // 强制校验 v-on 指令
  'vue/valid-v-on': 'error',
  // 强制校验 v-once 指令
  'vue/valid-v-once': 'error',
  // 强制校验 v-pre 指令
  'vue/valid-v-pre': 'error',
  // 强制校验 v-show 指令
  'vue/valid-v-show': 'error',
  // 强制校验 v-text 指令
  'vue/valid-v-text': 'error'
}

```


## Example: uni-app project


- vue file, verify vue syntax, need to install `eslint-vue` plugin, [plugin address](https://ext.dcloud.net.cn/plugin?id=2005)
- The vue file, the verification rules, need to be configured from the `eslint-vue` plugin.
- Menu [Tools] [Settings] [Plugins] [eslint-vue] [.eslintrc.js], edit the `.eslintrc.js` file


Example: eslint automatically fixes double quotes to single quotes

<img src="/static/snapshots/tutorial/eslint-uniapp-example.gif" style="zoom: 90%; border: 1px solid #eee;" />


## Example: vue-cli project

1. For the vue-cli project, if you use the configuration rules under the project, you need to install the relevant libraries and create the `.eslintrc.js` file in the project root directory
2.The `eslint rules` under the project will override the rules in the HBuilderX editor `eslint plugin`
3. vue file, verify vue syntax, need to install `eslint-vue` plugin, [plugin address](https://ext.dcloud.net.cn/plugin?id=2005)

```shell
npm install --save eslint eslint-plugin-vue eslint-plugin-html eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard
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
        "no-multi-spaces": "error", 
        "semi": [2, "always"] ,
        "quotes": ["error", "single"]          //enforce the consistent use of either backticks, double, or single quotes
    }
}
```

**Example: Use eslint to automatically add semicolons**

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200317/911ea4cac9f2c4d80ec502b1384e7a58.gif)