插件擴展分爲2個部分，分別爲`插件API`和`配置擴展點`。
### 插件API說明
HBuilderX的插件是運行在單獨的node.js進程的。除了調用HBuilderX提供的API列表外，node.js支持的API也能調用。當前開放的插件API列表參考[這裏](/ExtensionDocs/Api/README.md)。

### 配置擴展點說明
`配置擴展點`是通過在插件描述文件`package.json`下的`contributes`節點下注冊的配置。這裏有完整的[配置擴展點](/ExtensionDocs/ContributionPoints/README.md)列表。
#### 爲什麼引入`配置擴展點`的概念？
HBuilderX對性能要求很高，`配置擴展點`也是出於性能考慮。 用戶在安裝插件時，每多安裝一個插件都會額外增加主程序的啓動加載時間，HBuilderX爲了不影響主程序的啓動時間，增加了插件`懶加載`的機制，即HBuilderX啓動時不會自動激活已安裝的插件，而只是解析插件的配置文件package.json裏面的`配置擴展點`，通過`配置擴展點`添加插件想要註冊的`菜單`、`命令`、`配置`等。當用戶真正激活某個`菜單`或者`命令`時再通過onXXX事件去激活對應的插件。這樣即滿足了插件擴展的能力，又能減少對主程序性能的影響。關於懶加載的詳細說明請參考[插件激活機制](/ExtensionDocs/activation_event.md)
