HBuilderX 2.7+版本起，開放了插件擴展機制。開發者可以通過`JavaScript`語言編寫HBuilderX的插件，自定義和增強HBuilderX，打造更趁手的利器。

### 插件擴展能做什麼？
HBuilderX的插件是基於nodejs的，所有nodejs api都可以使用，如文件操作、調用其他node命令。

除此之外，HBuilderX提供了大量的js API（與vscode兼容），可以定製很多HBuilderX的功能和界面，比如

- 添加新的`菜單`
- 添加新的`命令`及快捷鍵
- 擴展新的`代碼塊`
- 添加新的view`視圖`，比如在界面左側項目管理器旁邊新增加一個“TODO”視圖
- 對文檔進行各種編輯，增刪改文字內容、操作光標和選區
- 對文檔進行校驗
- 在控制檯打印日誌、操作狀態欄消息、彈出各種提示框和選擇框

> 注意：插件是運行在單獨的`插件進程`內的，`插件進程`是一個node.js進程，通過進程間rpc通信和HBuilderX進行接口調用。因此插件可以使用node本身所有的api。目前集成的node版本爲：v12.22.1。

### 如何開發一個插件？
- [快速開始](/ExtensionTutorial/firstExtension.md) 章節將告訴你怎麼新建和運行一個插件。
- [開發指南](/ExtensionTutorial/extension.md) 章節包括詳細的插件能力教程
- [插件發佈](/ExtensionTutorial/HowToPublish.md) 告訴你如何將開發好的插件發佈到插件市場
- [參考文檔](/ExtensionDocs/Api/README.md) 包含最新的插件API和配置擴展點列表

