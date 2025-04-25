### Scss/sass簡介

Scss/Sass 是一款強化 CSS 的輔助工具，它在 CSS 語法的基礎上增加了變量 (variables)、嵌套 (nested rules)、混合 (mixins)、導入 (inline imports) 等高級功能，這些拓展令 CSS 更加強大與優雅。

使用 Scss/Sass 以及 Scss/Sass 的樣式庫（如 Compass）有助於更好地組織管理樣式文件，以及更高效地開發項目。

[scss/sass中文文檔](https://www.sass.hk/docs/)

### 插件安裝

compile-node-sass插件，編譯sass/scss爲css。

在HBuilderX中，使用`scss/sass`是需要安裝`compile-node-sass編譯插件`的。

安裝sass插件，需要到[插件市場](https://ext.dcloud.net.cn/plugin?id=2046)安裝。

### 插件使用
- uni-app項目，會自動編譯使用sass的文件。
- 單獨編譯sass文件。選中sass文件，點擊右鍵菜單 -> 外部命令 -> sass -> 編譯scss/sass。

<img src="/static/snapshots/tutorial/plugins/sass/sass_1.jpeg" />

### 配置文件

compile-node-sass的配置文件爲package.json。

點擊菜單【工具 -> 插件配置 -> compile-node-sass -> package.json】，即可打開package.json文件。

<img src="/static/snapshots/tutorial/plugins/sass/sass_2.png" />

### 快捷鍵

點擊菜單【工具 -> 插件配置 -> compile-node-sass -> package.json】，即可打開配置文件文件。

打開package.json, 修改key值，即可配置快捷鍵；可通過此快捷鍵直接運行此外部命令。
比如：`"key": "ctrl + alt + C"`
  
### 保存立即編譯
  
點擊菜單【工具 -> 插件配置 -> compile-node-sass -> package.json】，即可打開配置文件文件。

配置文件中`onDidSaveExecution`，表示保存的時候是否觸發編譯，默認爲false。

修改`onDidSaveExecution`爲`true`即可。