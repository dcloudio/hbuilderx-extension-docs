插件激活是通過[插件規範](/ExtensionDocs/manifest.md)`package.json`文件中的`activationEvents`字段控制的。當`activationEvents`配置的事件發生時將會激活插件。如果`activationEvents`爲空，則HBuilderX啓動時將會自動激活該插件。
> **我們強烈建議你一定要配置`activationEvents`,啓動時就激活插件將會降低HBuilderX的啓動性能。**

以下列出目前可用的激活事件：
- **onCommand**
- **onView**
- **workspaceContains**
- **onUri**
- ** \* **

### onCommand
該激活事件將在某個插件`命令`即將要觸發時產生。

``` json
"activationEvents": [
    "onCommand:extension.firstExtension"
]
```

### onView
該激活事件將在某個擴展視圖(view)即將打開顯示的時候觸發，通常是通過菜單【視圖】-【顯示擴展視圖】選擇某個擴展視圖時觸發。

``` json
"activationEvents": [
    "onView:extension.demoview"
]
```

### workspaceContains
當某個項目下包含指定文件時會觸發該激活事件，文件的路徑是相對於項目的相對路徑。
> 注意：該類事件目前只在HBuilderX啓動時觸發，HBuilderX啓動後再新建對應的文件不會觸發此類事件。

``` json
"activationEvents": [
    //當項目管理器下的某個項目下存在.ftp/ftp.json文件時會觸發該事件。
    "workspaceContains:.ftp/ftp.json"
]
```
### onUri
聲明可以響應scheme協議請求，當某個scheme指定要請求某個插件時，如果插件聲明後onUri事件，則會自動激活該插件，否則不會激活。插件處理自定義scheme的API參考[這裏](/ExtensionDocs/Api/windows/registerUriHandler)

``` json
"activationEvents": [
    //聲明可以響應scheme協議請求
    "onUri"
]
```

### onCustomEditor
聲明可以激活插件的自定義編輯器類型，當用戶打開文件並匹配成功某一類型時，插件會自動激活。自定義編輯器擴展點參考[這裏](/ExtensionDocs\ContributionPoints\README.md#customEditors)

``` json
"activationEvents": [
    //打開catEdit.catScratch類型的自定義編輯器時發送該激活事件
    "onCustomEditor:catEdit.catScratch"
]
```

### *
事件`*`代表該插件將在HBuilderX啓動時就立即激活，作用和不配置`activationEvents`一樣。
> 最佳實踐是隻監聽需要監聽的事件，儘量讓插件`懶加載`