HBuilderX 2.7+版本起，开放了插件扩展机制。开发者可以通过`JavaScript`语言编写HBuilderX的插件，自定义和增强HBuilderX，打造更趁手的利器。

### 插件扩展能做什么？
HBuilderX的插件是基于nodejs的，所有nodejs api都可以使用，如文件操作、调用其他node命令。

除此之外，HBuilderX提供了大量的js API（与vscode兼容），可以定制很多HBuilderX的功能和界面，比如

- 添加新的`菜单`
- 添加新的`命令`及快捷键
- 扩展新的`代码块`
- 添加新的view`视图`，比如在界面左侧项目管理器旁边新增加一个“TODO”视图
- 对文档进行各种编辑，增删改文字内容、操作光标和选区
- 对文档进行校验
- 在控制台打印日志、操作状态栏消息、弹出各种提示框和选择框

> 注意：插件是运行在单独的`插件进程`内的，`插件进程`是一个node.js进程，通过进程间rpc通信和HBuilderX进行接口调用。因此插件可以使用node本身所有的api。目前集成的node版本为：v8.10.0。

### 如何开发一个插件？
- [快速开始](/ExtensionTutorial/firstExtension.md) 章节将告诉你怎么新建和运行一个插件。
- [开发指南](/ExtensionTutorial/extension.md) 章节包括详细的插件能力教程
- [插件发布](/ExtensionTutorial/HowToPublish.md) 告诉你如何将开发好的插件发布到插件市场
- [参考文档](/ExtensionDocs/Api/README.md) 包含最新的插件API和配置扩展点列表

