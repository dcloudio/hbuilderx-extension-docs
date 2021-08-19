插件激活是通过[插件规范](/ExtensionDocs/manifest.md)`package.json`文件中的`activationEvents`字段控制的。当`activationEvents`配置的事件发生时将会激活插件。如果`activationEvents`为空，则HBuilderX启动时将会自动激活该插件。
> **我们强烈建议你一定要配置`activationEvents`,启动时就激活插件将会降低HBuilderX的启动性能。**

以下列出目前可用的激活事件：
- **onCommand**
- **onView**
- **workspaceContains**
- **onUri**
- ** \* **

### onCommand
该激活事件将在某个插件`命令`即将要触发时产生。

``` json
"activationEvents": [
    "onCommand:extension.firstExtension"
]
```

### onView
该激活事件将在某个扩展视图(view)即将打开显示的时候触发，通常是通过菜单【视图】-【显示扩展视图】选择某个扩展视图时触发。

``` json
"activationEvents": [
    "onView:extension.demoview"
]
```

### workspaceContains
当某个项目下包含指定文件时会触发该激活事件，文件的路径是相对于项目的相对路径。
> 注意：该类事件目前只在HBuilderX启动时触发，HBuilderX启动后再新建对应的文件不会触发此类事件。

``` json
"activationEvents": [
    //当项目管理器下的某个项目下存在.ftp/ftp.json文件时会触发该事件。
    "workspaceContains:.ftp/ftp.json"
]
```
### onUri
声明可以响应scheme协议请求，当某个scheme指定要请求某个插件时，如果插件声明后onUri事件，则会自动激活该插件，否则不会激活。插件处理自定义scheme的API参考[这里](/ExtensionDocs/Api/README.md#registerUriHandler)

``` json
"activationEvents": [
    //声明可以响应scheme协议请求
    "onUri"
]
```

### onCustomEditor
声明可以激活插件的自定义编辑器类型，当用户打开文件并匹配成功某一类型时，插件会自动激活。自定义编辑器扩展点参考[这里](/ExtensionDocs\ContributionPoints\README.md#customEditors)

``` json
"activationEvents": [
    //打开catEdit.catScratch类型的自定义编辑器时发送该激活事件
    "onCustomEditor:catEdit.catScratch"
]
```

### *
事件`*`代表该插件将在HBuilderX启动时就立即激活，作用和不配置`activationEvents`一样。
> 最佳实践是只监听需要监听的事件，尽量让插件`懒加载`