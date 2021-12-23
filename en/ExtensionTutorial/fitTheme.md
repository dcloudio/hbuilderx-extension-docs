# How to unify the theme style

> This article applies to webview, custom editor

HBuilderX supports creating views and custom editors to build user interfaces.

How to create a beautiful and unified theme?

## Get theme data of HBuilderX

The following javascript code (can be saved as a js file) is used to obtain the following data:

- Themes in settings and user-defined theme colors
- Editor font
- Editor font size

```js
const hx = require('hbuilderx');

/**
 * @description Is an object?
 * @param {Object} object
 */
function isObj(object){
    return object && typeof (object) == 'object' && Object.prototype.toString.call(object).toLowerCase() == "[object object]";
};

/**
 * @description Get the color matching the theme
 *   - fontFamily           
 *   - fontSize             
 *   - background           
 *   - fontColor           
 *   - liHoverBackground    
 *   - inputBgColor         
 *   - inputLineColor       
 *   - lineColor           
 *   - scrollbarColor  
 * @param {String} area - In the HBuilderX, when area=undefinded, it returns the background color of the editor area; when area=siderBar, it returns the background color of the project manager
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

    // Get editor font size
    let fontSize = config.get('editor.fontSize');
    if (fontSize == undefined) {
        fontSize = 14;
    };

    // Get editor font family
    let fontFamily = config.get("editor.fontFamily");
    if (fontFamily) {
        fontFamily = "Monaco"
    };

    // Get current color theme
    if (colorScheme == undefined) {
        colorScheme = 'Default';
    };

    // Get custom color
    let customColors = {};
    try{
        customColors = colorcustomColorsizations[`[${colorScheme}]`];
        if (!isObj(customColors)) {
            customColors = {};
        };
    }catch(e){};

    // According to the parameters, return to the editor or project manager background color
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

## Monitor theme setting

HBuilder will notify the view when it finds that the values of `editor.colorScheme`, `editor.fontSize`, and `editor.fontFamily` have changed.

```js
//Call above javascript code
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
