## eslint-js簡介

eslint-js, 用於校驗js和html中的js代碼

[eslint-js插件安裝地址](https://ext.dcloud.net.cn/plugin?id=2037)

## 錯誤提示

如下圖所示，當檢查到錯誤時，會出現紅色波浪線

<img src="/static/snapshots/tutorial/plugins/eslint-js-error.png" class="hd-img" />

## 插件配置

點擊菜單【工具】【設置 -> 插件配置】【eslint-js】，即可看到eslint-js相關配置。

<img src="/static/snapshots/tutorial/eslint/eslint-js.png" />

**實時校驗、自動修復**

> HBuilderX 2.6.8+版本起，新增eslint 實時校驗、自動修復錯誤的功能。注意：此功能不適用於2.6.8之前的版本

1. 使用此功能，必須安裝[eslint-js](https://ext.dcloud.net.cn/plugin?id=2037)插件
2. `vue-cli`項目，需要安裝eslint庫，並配置eslint規則.
3. 若滿足上述條件，當編寫完代碼，保存時，若代碼中存在錯誤，自動修復;
4. 實時校驗功能，默認未開啓，需要手動開啓此功能


## eslint-js插件配置文件

eslint-js的配置文件爲.eslintrc.js。
點擊菜單工具 -> 插件配置 -> eslint-js -> .eslintrc.js，即可打開.eslintrc.js文件。

選項對應說明如下：

```js
module.exports = {
    "plugins": [],          //插件
    "env": {
        "browser": true,
        "node": true
    },
    "parser": "esprima",    //指定解析器
    "parserOptions": {},
    "rules": {}             //規則
}
```

更多配置說明可以參考[options](https://cn.eslint.org/docs/user-guide/configuring)

## 如何增加規則?

[官方規則列表https://cn.eslint.org/docs/rules/](https://cn.eslint.org/docs/rules/)

規則設置：
- "off" 或 0 - 關閉規則
- "warn" 或 1 - 開啓規則，使用警告級別的錯誤：warn (不會導致程序退出)
- "error" 或 2 - 開啓規則，使用錯誤級別的錯誤：error (當被觸發的時候，程序會退出)

規則示例
```js
"rules": {
  "camelcase": 2,           //強制駝峯法命名,
  "indent": [2, 4],         //縮進風格
  "id-match": 0,            //命名檢測
  "init-declarations": 1,   //聲明時必須賦初值
  "no-undef": 1,            //不能有未定義的變量
}
```


## 示例：普通web項目

使用eslint, 校驗多餘的空格，並自動修復

<img src="/static/snapshots/tutorial/plugins/eslint-html-example.gif" style="zoom: 90%; border: 1px solid #eee;" />

配置文件

```js
module.exports = {
    "plugins": [
        "html"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
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

## 示例：uni-app項目

特別說明：
- vue文件，校驗vue語法，需要安裝`eslint-vue`插件，[插件地址](https://ext.dcloud.net.cn/plugin?id=2005)
- vue文件, 校驗規則，需要從`eslint-vue`插件中配置。
- 菜單【工具】->【設置 -> 插件配置 -> eslint-vue -> .eslintrc.js】,編輯`.eslintrc.js`文件

【示例】eslint自動修復雙引號爲單引號，如下：

<img src="/static/snapshots/tutorial/eslint/eslint-uniapp-example.gif" style="zoom: 90%; border: 1px solid #eee;" />


## 示例：vue-cli項目

vue-cli項目，如果使用項目下的配置規則，需要安裝`相關庫`、並在項目根目錄創建`.eslintrc.js`文件

備註：
1. 注意：項目下`eslint規則`會覆蓋HBuilderX編輯器`eslint插件中的規則`
2. 校驗vue語法，需要安裝`eslint-vue`插件，[插件地址](https://ext.dcloud.net.cn/plugin?id=2005)

```shell
npm install --save eslint eslint-plugin-vue eslint-plugin-html eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard babel-eslint
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
