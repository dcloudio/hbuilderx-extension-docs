# 如何適配主題

> 本文適用於webview、自定義編輯器

HBuilderX支持創建視圖、自定義編輯器，來構建用戶界面。

如何創建一個`好看`、`風格統一`的UI？

## 獲取HBuilderX主題數據

下面的js代碼(可以保存爲js文件)，主要用來獲取如下數據：

- 設置中的主題、以及用戶自定義的主題顏色
- 編輯器字體
- 編輯器字體大小

```js
const hx = require('hbuilderx');

/**
 * @description 判斷是否是object
 * @param {Object} object
 */
function isObj(object){
    return object && typeof (object) == 'object' && Object.prototype.toString.call(object).toLowerCase() == "[object object]";
};

/**
 * @description 獲取跟主題相匹配的顏色
 *   - fontFamily           字體
 *   - fontSize             字號
 *   - background           背景色
 *   - fontColor            字體顏色
 *   - liHoverBackground    li類元素，懸停背景色
 *   - inputBgColor         輸入框背景色
 *   - inputLineColor       輸入框線條顏色
 *   - lineColor            其它線條顏色
 *   - scrollbarColor       滾動條顏色
 * @param {String} area - HBuilderX區域，當area=undefinded，返回編輯器區域的背景色；當area=siderBar時，返回項目管理器背景色
 * @return {Object}
 */
function getHBuilderXThemeData(area) {
    let background;
    let fontColor;
    let liHoverBackground;
    let inputBgColor;
    let inputLineColor;
    let lineColor;
    let scrollbarColor;

    let config = hx.workspace.getConfiguration();
    let colorScheme = config.get('editor.colorScheme');
    let colorcustomColorsizations = config.get('workbench.colorCustomizations');

    // 獲取HBuilderX編輯器字體大小
    let fontSize = config.get('editor.fontSize');
    if (fontSize == undefined) {
        fontSize = 14;
    };

    // 獲取HBuilderX編輯器字體
    let fontFamily = config.get("editor.fontFamily");
    if (fontFamily) {
        fontFamily = "Monaco"
    };

    // 獲取當前主題
    if (colorScheme == undefined) {
        colorScheme = 'Default';
    };

    // 處理用戶自定義的顏色
    let customColors = {};
    try{
        customColors = colorcustomColorsizations[`[${colorScheme}]`];
        if (!isObj(customColors)) {
            customColors = {};
        };
    }catch(e){};

    // 根據參數，返回編輯器、或項目管理器背景色
    let viewBackgroundOptionName = area == 'siderBar' ? 'sideBar.background' : 'editor.background';
    let viewFontOptionName = area == 'siderBar' ? 'list.foreground' : undefined;
    let viewLiHoverBgOptionName = area == 'siderBar' ? 'list.hoverBackground' : 'list.hoverBackground';

    switch (colorScheme){
        case "Monokai":
            background = 'rgb(39,40,34)';
            fontColor = 'rgb(179,182,166)';
            liHoverBackground = 'rgb(78,80,73)';
            inputBgColor = '#2E2E2E';
            inputLineColor = 'rgb(81,140,255)';
            lineColor = 'rgb(23,23,23)';
            scrollbarColor = '#6F6F6F';
            break;
        case "Atom One Dark":
            background = 'rgb(40,44,53)';
            fontColor = 'rgb(171,178,191)';
            liHoverBackground = 'rgb(44,47,55)';
            inputBgColor = '#2E2E2E';
            inputLineColor = 'rgb(81,140,255)';
            lineColor = 'rgb(33,37,43)';
            scrollbarColor = '#6F6F6F';
            break;
        default:
            background = 'rgb(255,250,232)';
            fontColor = '#243237';
            liHoverBackground = 'rgb(224,237,211)';
            inputBgColor = 'rgb(255,254,250)';
            inputLineColor = 'rgb(65,168,99)';
            lineColor = 'rgb(225,212,178)';
            scrollbarColor = 'rgb(207,181,106)';
            break;
    };

    if (customColors != undefined) {
        if (customColors[viewBackgroundOptionName] && viewBackgroundOptionName in customColors) {
            background = customColors[viewBackgroundOptionName];
        };
        if (customColors[viewFontOptionName] && viewFontOptionName in customColors) {
            fontColor = customColors[viewFontOptionName];
        };
        if (customColors[viewLiHoverBgOptionName] && viewLiHoverBgOptionName in customColors) {
            liHoverBackground = customColors[viewLiHoverBgOptionName];
        };
    };

    return {
        fontFamily,
        fontSize,
        background,
        fontColor,
        liHoverBackground,
        inputLineColor,
        inputBgColor,
        lineColor,
        scrollbarColor
    };
};

module.exports = {
    getHBuilderXThemeData
};

```

## 監聽主題切換

監聽設置項`editor.colorScheme`、`editor.fontSize`、`editor.fontFamily`，當值改變後，發送消息（含主題數據）到視圖。

```js
// 引用上面的js代碼
let configurationChangeDisplose = hx.workspace.onDidChangeConfiguration(function(event){
    if(event.affectsConfiguration("editor.colorScheme") || event.affectsConfiguration("editor.fontSize") || event.affectsConfiguration("editor.fontFamily") ){
        let ThemeColorData = getHBuilderXThemeData();
        webView.postMessage({
            "command": "themeColor",
            "data": ThemeColorData
        });
    };
});
```