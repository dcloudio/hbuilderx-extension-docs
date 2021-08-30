## eslint-vue簡介

此插件用於vue語法校驗。[eslint-vue插件安裝地址](https://ext.dcloud.net.cn/plugin?id=2005)

和eslint-js搭配使用，[eslint-js插件安裝地址](https://ext.dcloud.net.cn/plugin?id=2037)

## 錯誤提示

如下圖所示，編寫完代碼，保存文件，當檢查到錯誤時，會出現紅色波浪線

<img src="/static/snapshots/tutorial/eslint-error.png" />

## 插件配置

點擊菜單【工具】【插件配置】【eslint-vue】，即可看到eslint-vue相關配置。

<img src="/static/snapshots/tutorial/eslint-js.png" />

**實時校驗、自動修復**

> HBuilderX 2.6.8+版本起，新增eslint 實時校驗、自動修復錯誤的功能。注意：此功能不適用於2.6.8之前的版本

1. 使用此功能，必須安裝[eslint-js](https://ext.dcloud.net.cn/plugin?id=2037)和[eslint-vue](https://ext.dcloud.net.cn/plugin?id=2005)插件
2. `vue-cli`項目，需要安裝eslint庫，並配置eslint規則.
3. 若滿足上述條件，當編寫完代碼，保存時，若代碼中存在錯誤，自動修復; 
4. 實時校驗功能，默認未開啓，需要手動開啓此功能

## 配置文件

eslint-vue的配置文件爲.eslintrc.js。

點擊菜單工具 -> 設置 -> 插件配置 -> eslint-vue -> .eslintrc.js，即可打開.eslintrc.js文件。

選項對應說明如下：

```
  module.exports = {
      "extends": "plugin:vue/essential",
      "parserOptions": {},    
      "rules": {}             //規則
  };
```
  
更多配置說明可以參考[options](http://eslint.org/docs/user-guide/configuring)


## 如何增加規則？

[官方規則列表](https://github.com/vuejs/eslint-plugin-vue#gear-configs)

規則設置：
- "off" 或 0 - 關閉規則
- "warn" 或 1 - 開啓規則，使用警告級別的錯誤：warn (不會導致程序退出)
- "error" 或 2 - 開啓規則，使用錯誤級別的錯誤：error (當被觸發的時候，程序會退出)

修改.eslintrc.js文件，添加規則，比如: 

```js
{
  //在computed properties中禁用異步actions
  'vue/no-async-in-computed-properties': 'error',
  //不允許重複的keys
  'vue/no-dupe-keys': 'error',
  //不允許重複的attributes
  'vue/no-duplicate-attributes': 'error',
  //在 <template> 標籤下不允許解析錯誤
  'vue/no-parsing-error': ['error',{
      'x-invalid-end-tag': false,
  }],
  //不允許覆蓋保留關鍵字
  'vue/no-reserved-keys': 'error',
  //強制data必須是一個帶返回值的函數
  // 'vue/no-shared-component-data': 'error',
  //不允許在computed properties中出現副作用。
  'vue/no-side-effects-in-computed-properties': 'error',
  //<template>不允許key屬性
  'vue/no-template-key': 'error',
  //在 <textarea> 中不允許mustaches
  'vue/no-textarea-mustache': 'error',
  //不允許在v-for或者範圍內的屬性出現未使用的變量定義
  'vue/no-unused-vars': 'error',
  //<component>標籤需要v-bind:is屬性
  'vue/require-component-is': 'error',
  // render 函數必須有一個返回值
  'vue/require-render-return': 'error',
  //保證 v-bind:key 和 v-for 指令成對出現
  'vue/require-v-for-key': 'error',
  // 檢查默認的prop值是否有效
  'vue/require-valid-default-prop': 'error',
  // 保證computed屬性中有return語句 
  'vue/return-in-computed-property': 'error',
  // 強制校驗 template 根節點
  'vue/valid-template-root': 'error',
  // 強制校驗 v-bind 指令
  'vue/valid-v-bind': 'error',
  // 強制校驗 v-cloak 指令
  'vue/valid-v-cloak': 'error',
  // 強制校驗 v-else-if 指令
  'vue/valid-v-else-if': 'error',
  // 強制校驗 v-else 指令 
  'vue/valid-v-else': 'error',
  // 強制校驗 v-for 指令
  'vue/valid-v-for': 'error',
  // 強制校驗 v-html 指令
  'vue/valid-v-html': 'error',
  // 強制校驗 v-if 指令
  'vue/valid-v-if': 'error',
  // 強制校驗 v-model 指令
  'vue/valid-v-model': 'error',
  // 強制校驗 v-on 指令
  'vue/valid-v-on': 'error',
  // 強制校驗 v-once 指令
  'vue/valid-v-once': 'error',
  // 強制校驗 v-pre 指令
  'vue/valid-v-pre': 'error',
  // 強制校驗 v-show 指令
  'vue/valid-v-show': 'error',
  // 強制校驗 v-text 指令
  'vue/valid-v-text': 'error'
}

```


## 示例：uni-app項目

特別說明：
- vue文件，校驗vue語法，需要安裝`eslint-vue`插件，[插件地址](https://ext.dcloud.net.cn/plugin?id=2005)
- vue文件, 校驗規則，需要從`eslint-vue`插件中配置。
- 菜單【工具】【設置】【插件配置】【eslint-vue】【.eslintrc.js】,編輯`.eslintrc.js`文件


【示例】eslint自動修復雙引號爲單引號，如下：

<img src="/static/snapshots/tutorial/eslint-uniapp-example.gif" style="zoom: 90%; border: 1px solid #eee;" />


## 示例：cli項目

vue-cli項目，如果使用項目下的配置規則，需要安裝相關庫、並在項目根目錄創建`.eslintrc.js`文件

備註：
1. 注意：項目下`eslint規則`會覆蓋HBuilderX編輯器`eslint插件中的規則`
2. 校驗vue語法，需要安裝`eslint-vue`插件，[插件地址](https://ext.dcloud.net.cn/plugin?id=2005)

```shell
npm install --save eslint eslint-plugin-vue eslint-plugin-html eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard
```


.eslintrc.js配置文件示例

```js
module.exports = {
    extends: [
        'plugin:vue/recommended'
    ],
    rules: {
        "no-alert": 0,
        "no-multi-spaces": "error", // 禁止多個空格 
        "semi": [2, "always"] ,// 自動補充分號
       "quotes": ["error", "single"] // 使用單引號
    }
}
```

示例：使用eslint, 自動補充分號

![](https://img-cdn-qiniu.dcloud.net.cn/uploads/article/20200317/911ea4cac9f2c4d80ec502b1384e7a58.gif)