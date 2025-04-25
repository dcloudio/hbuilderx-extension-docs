### 簡介

validate-stylelint, 用於校驗css、less、scss的exex語法。

此插件，需要到[插件市場](https://ext.dcloud.net.cn/plugin?name=validate-stylelint)安裝。

### 配置文件

菜單【設置】-> 【插件配置】-> 【stylelint】，點擊`.stylelintrc.js`, 即可打開配置文件。
  
<img src="/static/snapshots/tutorial/plugins/stylelint.png" />

## 規則配置格式

stylelint有上百條規則，可以分爲三類：
- 用於校對風格的規則 （主要針對空格（比如說冒號附近的空格）、換行、縮進等等）
- 用於判別代碼可維護性的規則 （判斷在CSS選擇器中是否有使用某個ID，或者在某條聲明當中是否應用了!important關鍵詞）
- 用於判斷代碼錯誤的規則 （檢測錯誤的HEX顏色寫法或者某條簡寫屬性是否會覆蓋其他的聲明語句）

規則屬性是一個對象，鍵是規則的名稱，值是規則配置。每個規則配置符合下列格式之一：
- 單個值（primary option）
- 一個有兩個值的數組（[primary option,secondary option]）
- null (關閉規則)

## 增加規則

修改.stylelintrc.js文件，添加選項，比如: 

```javascript

  module.exports = {
    "extends": "stylelint-config-recommended",
    "rules":{
        "unit-no-unknown": false,
        "indentation": "tab",       //縮進
        "unit-no-unknown": true,    //禁止未知單位
        "color-hex-case": [
          "lower", {
          "message": "Lowercase letters are easier to distinguish from numbers"
          }
        ],
        "max-empty-lines": 2,
        "unit-whitelist": ["em", "rem", "%", "s", "px", "upx"],
        "number-leading-zero": null
    }
  }

```

## 更多配置規則

詳細的配置說明可以參考
  - [stylelint官網](https://stylelint.io/user-guide/rules/)
  - [GitHub styleline](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/rules.md)