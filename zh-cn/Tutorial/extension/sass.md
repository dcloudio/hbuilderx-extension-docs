### Scss/sass简介@about

Scss/Sass 是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了变量 (variables)、嵌套 (nested rules)、混合 (mixins)、导入 (inline imports) 等高级功能，这些拓展令 CSS 更加强大与优雅。

使用 Scss/Sass 以及 Scss/Sass 的样式库（如 Compass）有助于更好地组织管理样式文件，以及更高效地开发项目。

[scss/sass中文文档](https://www.sass.hk/docs/)

### 安装compile-node-sass插件@install

compile-node-sass插件，编译sass/scss为css。

在HBuilderX中，使用`scss/sass`是需要安装`compile-node-sass编译插件`的。

安装sass插件，需要到[插件市场](https://ext.dcloud.net.cn/plugin?id=2046)安装。

### 插件使用@use
- uni-app项目，会自动编译使用sass的文件。
- 单独编译sass文件。选中sass文件，点击右键菜单 -> 外部命令 -> sass -> 编译scss/sass。

<img src="/static/snapshots/tutorial/sass_1.jpeg" />

### 配置文件@config

compile-node-sass的配置文件为package.json。

点击菜单【工具 -> 插件配置 -> compile-node-sass -> package.json】，即可打开package.json文件。

<img src="/static/snapshots/tutorial/sass_2.png" />

### 快捷键@shortcut

点击菜单【工具 -> 插件配置 -> compile-node-sass -> package.json】，即可打开配置文件文件。

打开package.json, 修改key值，即可配置快捷键；可通过此快捷键直接运行此外部命令。
比如：`"key": "ctrl + alt + C"`
  
### 保存立即编译@onDidSaveExecution
  
点击菜单【工具 -> 插件配置 -> compile-node-sass -> package.json】，即可打开配置文件文件。

配置文件中`onDidSaveExecution`，表示保存的时候是否触发编译，默认为false。

修改`onDidSaveExecution`为`true`即可。