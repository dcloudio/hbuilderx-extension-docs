## eslint-vue简介

此插件用于vue语法校验。[eslint-vue插件安装地址](https://ext.dcloud.net.cn/plugin?id=2005)

和eslint-js搭配使用，[eslint-js插件安装地址](https://ext.dcloud.net.cn/plugin?id=2037)

## 错误提示

如下图所示，编写完代码，保存文件，当检查到错误时，会出现红色波浪线

<img src="/static/snapshots/tutorial/plugins/eslint-vue-error.png" class="hd-img" />

## 插件配置

点击菜单【工具】【插件配置】【eslint-vue】，即可看到eslint-vue相关配置。

<img src="/static/snapshots/tutorial/eslint-js.png" />

**实时校验、自动修复**

> HBuilderX 2.6.8+版本起，新增eslint 实时校验、自动修复错误的功能。注意：此功能不适用于2.6.8之前的版本

1. 使用此功能，必须安装[eslint-js](https://ext.dcloud.net.cn/plugin?id=2037)和[eslint-vue](https://ext.dcloud.net.cn/plugin?id=2005)插件
2. `vue-cli`项目，需要安装eslint库，并配置eslint规则.
3. 若满足上述条件，当编写完代码，保存时，若代码中存在错误，自动修复; 
4. 实时校验功能，默认未开启，需要手动开启此功能

## 配置文件

eslint-vue的配置文件为.eslintrc.js。

点击菜单工具 -> 设置 -> 插件配置 -> eslint-vue -> .eslintrc.js，即可打开.eslintrc.js文件。

选项对应说明如下：

```
  module.exports = {
      "extends": "plugin:vue/essential",
      "parserOptions": {},    
      "rules": {}             //规则
  };
```
  
更多配置说明可以参考[options](http://eslint.org/docs/user-guide/configuring)


## 如何增加规则？

[官方规则列表](https://github.com/vuejs/eslint-plugin-vue#gear-configs)

规则设置：
- "off" 或 0 - 关闭规则
- "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
- "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)

修改.eslintrc.js文件，添加规则，比如: 

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


## 示例：uni-app项目

特别说明：
- vue文件，校验vue语法，需要安装`eslint-vue`插件，[插件地址](https://ext.dcloud.net.cn/plugin?id=2005)
- vue文件, 校验规则，需要从`eslint-vue`插件中配置。
- 菜单【工具】【设置】【插件配置】【eslint-vue】【.eslintrc.js】,编辑`.eslintrc.js`文件


【示例】eslint自动修复双引号为单引号，如下：

<img src="/static/snapshots/tutorial/eslint-uniapp-example.gif" style="zoom: 90%; border: 1px solid #eee;" />


## 示例：cli项目

vue-cli项目，如果使用项目下的配置规则，需要安装`eslint相关库`、并在项目根目录创建`.eslintrc.js`文件

备注：
1. 注意：项目下`eslint规则`会覆盖HBuilderX编辑器`eslint插件中的规则`
2. 校验vue语法，需要安装`eslint-vue`插件，[插件地址](https://ext.dcloud.net.cn/plugin?id=2005)

```shell
npm install --save eslint eslint-plugin-vue eslint-plugin-html eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard babel-eslint
```


.eslintrc.js配置文件示例

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
        "no-multi-spaces": "error", // 禁止多个空格 
        "semi": [2, "always"] ,// 自动补充分号
       "quotes": ["error", "single"] // 使用单引号
    }
}
```

示例：使用eslint, 自动补充分号

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200317/911ea4cac9f2c4d80ec502b1384e7a58.gif)