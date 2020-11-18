HBuilderX API根对象可以通过require('hbuilderx')引入。
```javascript
const hx = require('hbuilderx')
```
以下列出目前可用的API列表

## commands
commands二级模块对象，用于处理和`命令`相关的逻辑。`命令`包含2部分：唯一ID和自定义的function，可以通过registerCommand或registerTextEditorCommand注册。`命令`可以通过以下方式触发：
- 菜单：将命令通过`menus`扩展点关联到某个菜单。
    1. 通过commands扩展点声明一个command，然后关联到`menus`上
``` json
{
    "contributes":{
        "commands":[
            {
                "command":"extension.firstExtension",
                "title":"My First Extension"
            }
        ],
        "menus":{
            "editor/context":[
                {
                    "command": "extension.firstExtension",
                    "group": "z_commands",
                    "when": "editorTextFocus"
                }
            ]
        }
    }
}
```
    2. 在插件的激活回调(`activate`)中注册该command
``` javascript
    hx.commands.registerCommand('extension.firstExtension',()=>{
        hx.window.showInformationMessage("Hello My First Extension.");
    });
```

- 用户自定义快捷键：使用插件的用户可以通过得知`命令`的ID（一般在package.json中有声明），然后通过`自定义快捷键`配置一个快捷键。
```json
// Keybindings.json;
[
    {
		"key":"ctrl+shift+0",
		"command":"extension.firstExtension"
	}
]
```

### executeCommand
执行指定id的`命令`。除了插件扩展的`命令`外，还可以执行HBuilderX内置的`命令`，完整的内置`命令`列表可以通过HBuilderX的顶部菜单`工具`-`自定义快捷键`，然后在打开的配置文件左侧部分找到所有列出的`command`字段，如下图：

<img src="/static/snapshots/commands@2x.png" style="zoom:50%" />

#### 参数说明

|参数名称	    |参数类型	    |描述			|
|--			|--			|--				|
|command	|String		|要执行的`命令`id	|

#### 返回值
|返回类型	|描述		|
|--			|--			|
|Promise	|Promise对象|


#### 示例
``` javascript
//执行插件扩展的命令
hx.commands.executeCommand('extension.firstExtension')
//执行内置的命令（关闭所有打开的编辑器）
hx.commands.executeCommand('workbench.action.closeAllEditors')
```

### registerCommand
注册一个指定id的`命令`，并关联一个自定义的函数
#### 参数说明

|参数名称	|参数类型	|描述					|
|--			|--			|--						|
|commandId	|String		|`命令`id				|
|handler	|Function	|`命令`触发时执行的函数	|

#### 返回值
|返回类型					|描述																									|
|--							|--																										|
|[Disposable](#Disposable)	|该`命令`的销毁器,可将该对象放置到插件的context.subscriptions数组内，插件卸载时，将会自动注销该`命令`	|


#### 示例
``` javascript
    let disposable = hx.commands.registerCommand('extension.firstExtension',()=>{
        hx.window.showInformationMessage("Hello My First Extension.");
    });
    context.subscriptions.push(disposable);
```

### registerTextEditorCommand
注册一个指定id的编辑器`命令`
#### 参数说明

|参数名称	|参数类型				|描述					|
|--			|--						|--						|
|commandId	|String					|`命令`id				|
|handler	|Function([TextEditor](#TextEditor))	|`命令`触发时执行的函数	|

#### 返回值
|返回类型	|描述				|
|--			|--				|
|[Disposable](#Disposable)	|该`命令`的销毁器,可将该对象放置到插件的context.subscriptions数组内，插件卸载时，将会自动注销该`命令`|


#### 示例
``` javascript
    let disposable = hx.commands.registerTextEditorCommand('extension.firstExtension',(editor)=>{
        hx.window.showInformationMessage(editor.document.fileName);
    });
    context.subscriptions.push(disposable);
```
## languages
languages二级模块对象，用于处理和编程语言相关的逻辑，目前仅支持校验文档时创建问题列表。

### createDiagnosticCollection
创建一个问题列表，可用于文档校验时在文档出错区域显示波浪线标识问题。
#### 参数说明

|参数名称	|参数类型	|描述			|
|--			|--			|--				|
|name		|String		|问题列表名称，当鼠标移至波浪线上时会显示在tooltips中|

#### 返回值
|返回类型										|描述			|
|--												|--				|
|[DiagnosticCollection](#DiagnosticCollection)	|创建的问题列表	|


#### 示例
``` javascript
    let activeEditor = hx.window.getActiveTextEditor();
    activeEditor.then(function(editor) {
        // 获取文件路径
        let file_url = editor.document.uri.fsPath;
        // 通过editor.document可以获取文档对象进行校验
        // 创建一个测试问题集合
        let collections = [{
                column: 0,
                line: 3,
                message: "error for test",
                severity: 'error'
            }
        ];
        let diagnostics = hx.languages.createDiagnosticCollection('eslint');
        diagnostics.set(file_url, collections);
    });
```

## window
window二级模块对象，用于处理主窗口相关的逻辑。
### setStatusBarMessage
设置HBuilderX底部状态栏消息
#### 参数说明

|参数名称			|参数类型	|描述															|
|--					|--			|--																|
|text				|String		|消息内容														|
|hideAfterTimeout	|Number		|[可选] 多长时间后自动隐藏,单位ms，默认值是0：不自动隐藏		|
|level				|String		|[可选] 消息级别,取值有['warn'，'info'，'error'],默认值：'info'	|

#### 返回值
|返回类型					|描述									|
|--							|--										|
|[Disposable](#Disposable)	|销毁器,可调用dispose方法清理状态栏消息	|


#### 示例
``` javascript
    hx.window.setStatusBarMessage('正在校验xxx文档...',600,'info');
```

### clearStatusBarMessage
清空状态栏消息
#### 参数说明
无

#### 返回值
无

#### 示例
``` javascript
    hx.window.clearStatusBarMessage();
```

### showErrorMessage
在窗口右下角显示错误通知框
#### 参数说明

|参数名称	|参数类型			|描述					|
|--			|--					|--						|
|message	|String				|消息内容,支持html标签	|
|buttons	|Array&lt;String&gt;|通知框中的按钮组		|

#### 返回值
|返回类型				|描述									|
|--						|--										|
|Promise&lt;String&gt;	|如果设置了按钮，返回用户点击了哪个按钮	|

#### 示例
``` javascript
    let resultPromise = hx.window.showErrorMessage('是否删除该文件?',['是','否']);
    resultPromise.then((result)=>{
        if(result == '是'){
            console.log("选择了是");
        }else if(result === '否'){
            console.log("选择了否");
        }
    });
```

### showInformationMessage
在窗口右下角显示消息通知框
#### 参数说明

|参数名称	|参数类型			|描述					|
|--			|--					|--						|
|message	|String				|消息内容,支持html标签	|
|buttons	|Array&lt;String&gt;|通知框中的按钮组		|

#### 返回值
|返回类型				|描述									|
|--						|--										|
|Promise&lt;String&gt;	|如果设置了按钮，返回用户点击了哪个按钮	|

#### 示例
``` javascript
    hx.window.showInformationMessage('详情可访问<a href="http://www.dcloud.io">参考文档</a>');
```
效果如下：

<img src="/static/snapshots/info.jpg" style="zoom:50%" />

### showWarningMessage
在窗口右下角显示警告消息通知框
#### 参数说明

|参数名称	|参数类型			|描述					|
|--			|--					|--						|
|message	|String				|消息内容,支持html标签	|
|buttons	|Array&lt;String&gt;|通知框中的按钮组		|

#### 返回值
|返回类型				|描述									|
|--						|--										|
|Promise&lt;String&gt;	|如果设置了按钮，返回用户点击了哪个按钮	|

#### 示例
``` javascript
    let resultPromise = hx.window.showWarningMessage('是否删除该文件?',['是','否']);
    resultPromise.then((result)=>{
        if(result == '是'){
            console.log("选择了是");
        }else if(result === '否'){
            console.log("选择了否");
        }
    });
```

### showQuickPick
在窗口中间弹出一个可搜索的建议选择列表
#### 参数说明

|参数名称	|参数类型										|描述			|
|--			|--												|--				|
|items		|Array&lt;[QuickPickItem](#QuickPickItem)&gt;	|建议选择项列表	|
|options	|[QuickPickOptions](#QuickPickOptions)			|设置			|

#### 返回值
|返回类型				|描述									|
|--						|--										|
|Promise&lt;[QuickPickItem](#QuickPickItem)&gt;	|返回用户选择得某个列表项|

#### 示例
``` javascript
    const pickResult = hx.window.showQuickPick([
      {
        label: '../',
        description: '回到上一级目录',
        backPath: 'foo/bar'
      }
    ], {placeHolder: '请选择一个目录或者文件'});
    
    pickResult.then(function(result) {
      if (!result) {
        return;
      }
      let backPath = result.backPath;
      //do something with result
    })
```

### getActiveTextEditor
获取当前激活的编辑器,如果没有打开的编辑器返回undefined
#### 参数说明
无

#### 返回值

|返回类型				|描述									|
|--						|--										|
|Promise&lt;[TextEditor](#TextEditor)&gt;	|返回当前激活的编辑器|

#### 示例
``` javascript
    let activeEditor = hx.window.getActiveTextEditor();
    activeEditor.then(function(editor){
    	console.log(editor.document.fileName);
    });
```

### showInputBox
在窗口中间居中弹出一个输入框，获取用户输入。类似于浏览器的prompt方法。
#### 参数说明

|参数名称	|参数类型							|描述			|
|--			|--									|--				|
|options	|[InputBoxOptions](#InputBoxOptions)|输入框设置	|

#### 返回值
|返回类型				|描述			|
|--						|--				|
|Promise&lt;String&gt;	|用户输入的结果	|

#### 示例
```javascript
    let inputPromise = hx.window.showInputBox({
        prompt:"请输入密码",
        password:true
    });
    inputPromise.then((result)=>{
        console.log("输入的密码为：",result);
    });
```

### createOutputChannel
创建一个输出控制台通道，可用于在控制台输出文本内容。
#### 参数说明

|参数名称	|参数类型	|描述																								|
|--			|--			|--																									|
|channel	|String		|控制台通道名称，在添加内容到控制台时，会将该名称作为前缀输出，eg:[${channel}] 这是要输出的内容。	|

#### 返回值
|返回类型						|描述		|
|--								|--			|
|[OutputChannel](#OutputChannel)|控制台通道	|

#### 示例
``` javascript
    let outputChannel = hx.window.createOutputChannel("foo");
    outputChannel.show();
    outputChannel.appendLine("Hello World");
```

### createTreeView
> `从HBuilderX 2.7.12及以上版本开始支持`

创建指定viewId的视图，在窗体左侧区域创建一个和`项目管理器`同级的tab项。tab的内容区为一个树控件，可自行装载节点。

viewId需要在package.json文件内的配置扩展点[views](/ExtensionDocs/ContributionPoints/README.md#views)中声明，完整的扩展视图流程参考[如何注册一个新的视图？](/views.md)

#### 参数说明
|参数名称	|参数类型							|描述										|
|--			|--									|--											|
|viewId		|String								|视图Id，需要首先在配置扩展点`views`中声明。|
|options	|[TreeViewOptions](#TreeViewOptions)|创建TreeView时需要的设置项。				|

#### 返回值
无

#### 示例
``` javascript
    class DemoTreeDataProvider extends hx.TreeDataProvider{
        constructor(demoData) {
            super();
            this._demoData = demoData;
        }
        getChildren(element) {
            let demoData = this._demoData;
            return new Promise(resolve => {
            	if (!element) {
            	    resolve(demoData);
            	} else {
            	    resolve(element.children);
            	}
            });
        }
    
        getTreeItem(element) {
            return {
                label:element.name,
                collapsibleState:element.children ? 1 : 0,
                command:{
                    command:element.children ? "":"extension.helloWorld",
                    arguments:[
                        element.name
                    ]
                }
            }
        }
    }
    let demoData = [
        {
            name:"Root1",
            children:[
                {
                    name:"child1"
                },
                {
                    name:"child2"
                }
            ]
        },
        {
            name:"Root2",
            children:[
                {
                    name:"child3",
                },
                {
                    name:"child4"
                }
            ]
        }
    ]
    hx.commands.registerCommand("extension.helloWorld",function(param){
        hx.window.showInformationMessage("选中了TreeItem:" + param[0]);
    });
    hx.window.createTreeView("extensions.treedemo",{
        showCollapseAll:true,
        treeDataProvider:new DemoTreeDataProvider(demoData);
    });
```

### createWebView
> `从HBuilderX 2.8.1及以上版本开始支持`

创建指定viewId的WebView控件视图，在窗体左侧或右侧区域创建一个tab项。tab内容为webview，webview里可装载html页面，可以较灵活的渲染自定义的内容。

viewId需要在package.json文件内的配置扩展点[views](/ExtensionDocs/ContributionPoints/README.md#views)中声明，完整的扩展视图流程参考[如何注册一个新的视图？](/views.md)

#### 参数说明

|参数名称	|参数类型					|描述											|
|--		|--							|--												|
|viewId	|String	|视图Id，需要首先在配置扩展点`views`中声明。									|
|options|[WebViewOptions](#WebViewOptions)			|WebView属性	|

#### 返回值
|返回类型	|描述	|																										|
|--			|--		| --																										|
|WebViewPanel|[WebViewPanel](#WebViewPanel)|WebViewPanel属性|
#### 示例
```Javascript
    let webviewPanel = hx.window.createWebView("viewId",{
        enableScripts:true
    });
    let webview = webviewPanel.webView;
    webview.html = `
        <script>
            hbuilderx.onDidReceiveMessage((msg)=>{
                
            });
            hbuiderx.postMessage({
                command: 'alert',
                text: 'HelloWorld'
            });
        </script>
        <img src="xxxx">
    `;
    webview.postMessage({
        command:"test"
    });
    webview.onDidReceiveMessage((msg)=>{
        if(msg.command == 'alert'){
            hx.window.showInformationMessage(msg.text);
        }
    });
```


### registerUriHandler
`从HBuilderX 2.8.1及以上版本开始支持`

注册一个依赖hbuilderx协议的自定义网络请求处理器(schema)，格式为：
```
hbuilderx://requestExtension/exampleid/examplerequest/example?example1=example2&...
\________/  \_____________/ \________/ \__________________________________________/
    |              |             |                  ｜
   协议     自定义插件请求的标记  插件id          任意的自定义信息
```

当在浏览器地址栏中输入以上格式的url时或者跳转到以上格式的url，已安装了HBuilderX的系统将会把该请求转入HBuilderX, 由HBuilderX识别该请求并检测对应插件(如上例子中名为exampleid的插件)的配置信息(package.json)中是否声明了
[onUri](#/ExtensionDocs/activation_event.md#onUri), 此时如果当前的插件并没有激活，那么HBuilderX会先激活该插件并把对应请求转发到由registerUriHandler方法注册的处理器中。

如果exampleid对应插件并未安装，则HBuilderX会弹框提示是否安装该插件。

#### 适用的场景
- 需要通过浏览器等外部应用启动HBuilderX，然后通过指定插件响应请求

#### 参数说明
|参数名称	|参数类型					|描述											|
|--			|--							|--												|
|handler	|[UriHandler](#UriHandler)	|scheme的处理器									|
|context	|ExtensionContext			|插件激活方法activate中传入的(context)参数对象	|

#### 返回值
|返回类型	|描述																											|
|--			|--																												|
|Disposable	|注册的UriHandler的销毁器，可将该对象放置到插件的context.subscriptions数组内，插件卸载时，将会自动注销该handler	|


#### 示例

```javascript
    hx.window.registerUriHandler({
        handleUri:function(uri){
            //处理scheme请求
            let path = uri.path;
            let params = uri.query;
            hx.window.showInformationMessage(uri.toString());
        }
    }, context);
```
上面的示例中，假设插件id为foo，则在浏览器地址栏中输入hbuilderx://requestExtension/foo?param=abc时，将自动激活该插件，并执行handleUri函数，uri的值即为地址栏中输入的地址，示例中uri.query的值为param=abc。

### registerCustomEditorProvider
`从HBuilderX 2.9.2及以上版本开始支持`

注册指定类型的CustomEditorProvider，当用户打开匹配的文件时，在编辑器区域创建自定义编辑器标签卡。自定义编辑器使用webview提供视图显示。

#### 参数说明

|参数名称	|参数类型					|描述											|
|--		|--							|--												|
|type	|String	|自定义编辑器类型，需要首先在配置扩展点`customEditors`中声明。	|
|provider|CustomEditorProvider |用户自定义CustomEditorProvider|


#### 示例
```javascript
    hx.window.registerCustomEditorProvider("catEdit.catScratch", new CatCustomEditorProvider());
```

## workspace
workspace二级模块对象，用于处理和工作空间以及文档事件有关的逻辑

### getWorkspaceFolders
`从HBuilderX 2.7.12及以上版本开始支持`

获取项目管理器下所有的项目对象（不包含已关闭项目）
#### 参数说明
无

#### 返回值
|返回类型														|描述					|
|--																|--						|
|Promise&lt;Array&lt;[WorkspaceFolder](#WorkspaceFolder)&gt;&gt;|项目管理器下所有的项目	|

#### 示例
``` javascript
    var wsPromise = hx.workspace.getWorkspaceFolders();
	wsPromise.then(function(wsFolders) {
		console.log("项目管理器包含的项目数量：",wsFolders.length);
	});
```

### getWorkspaceFolder
`从HBuilderX 2.7.12及以上版本开始支持`

获取某个文件所在的项目
#### 参数说明
|参数名称	|参数类型	|描述					|
|--			|--			|--						|
|uri		|String或Uri|文件绝对路径或者文件Uri|

#### 返回值
|返回类型														|描述					|
|--																|--						|
|Promise&lt;[WorkspaceFolder](#WorkspaceFolder)&gt;|文件所在的项目	|

#### 示例
``` javascript
    var wsPromise = hx.workspace.getWorkspaceFolder("%fsPath%");
	wsPromise.then(function(wsFolder) {
		console.log("文件所在项目：",wsFolder.name);
	});
```

### openTextDocument
通过指定的uri打开一个文档文件
#### 参数说明

|参数名称	|参数类型			|描述		|
|--			|--					|--			|
|uri		|String或[Uri](#Uri)|文档地址	|

#### 返回值
|返回类型										|描述			|
|--												|--				|
|Promise&lt;[TextDocument](#TextDocument)&gt;	|返回打开的文档	|

#### 示例
``` javascript
    var documentPromise = hx.workspace.openTextDocument("foo/bar.js");
	documentPromise.then(function(document) {
		console.log("打开了文档:",document.fileName);
	});
```

### onDidChangeConfiguration
`从HBuilderX 2.7.10及以上版本开始支持`

全局配置改变事件，比如"editor.fontSize"改变，或者通过插件扩展的配置项改变。

#### 参数说明
|参数名称	|参数类型															|描述		|
|--			|--																	|--			|
|listener	|Function([ConfigurationChangeEvent](#ConfigurationChangeEvent))	|配置修改事件回调	|

#### 返回值
|返回类型	|描述				|
|--			|--					|
|[Disposable](#Disposable)	|该事件回调的销毁器，可将该对象放置到插件的context.subscriptions数组内，插件卸载时，将会自动注销该`事件回调`	|

#### 示例
``` javascript
    let configurationChangeDisplose = hx.workspace.onDidChangeConfiguration(function(event){
        if(event.affectsConfiguration("editor.fontSize")){
            console.log("修改了字体大小");
        }
    });
```

### onDidChangeWorkspaceFolders
`从HBuilderX 2.7.10及以上版本开始支持`

项目管理器内的项目新增或者移除时产生的事件

#### 参数说明
|参数名称	|参数类型															|描述		|
|--			|--																	|--			|
|listener	|Function([WorkspaceFoldersChangeEvent](#WorkspaceFoldersChangeEvent))	|项目新增或者移除的事件回调	|

#### 返回值
|返回类型	|描述				|
|--			|--					|
|[Disposable](#Disposable)	|该事件回调的销毁器，可将该对象放置到插件的context.subscriptions数组内，插件卸载时，将会自动注销该`事件回调`	|

#### 示例
``` javascript
    let wsFoldersChangeDisplose = hx.workspace.onDidChangeWorkspaceFolders(function(event){
        if(event.added){
            event.added.forEach(item=>console.log("新增了项目:",item.name));
        }
        if(event.removed){
            event.removed.forEach(item=>console.log("移除了项目:",item.name));
        }
    });
```

### onWillSaveTextDocument
文档即将要保存的事件,注意该事件是同步调用,会阻塞用户界面,为了避免长时间阻塞界面，目前设置了超时机制，超时时间为2s。
> 注意你在该事件回调中执行的逻辑不应该占用太长的时间，如果超时将会出现一些不可预测的问题。

#### 参数说明

|参数名称	|参数类型															|描述		|
|--			|--																	|--			|
|listener	|Function([TextDocumentWillSaveEvent](#TextDocumentWillSaveEvent))	|事件回调	|

#### 返回值
|返回类型	|描述				|
|--			|--					|
|[Disposable](#Disposable)	|该事件回调的销毁器，可将该对象放置到插件的context.subscriptions数组内，插件卸载时，将会自动注销该`事件回调`	|

#### 示例
``` javascript
    let willSaveTextDocumentEventDispose = hx.workspace.onWillSaveTextDocument(function(event){
        let document = event.document;
        //do something with document.
    });
```

### onDidChangeTextDocument
文档被修改时的事件
#### 参数说明

|参数名称	|参数类型															|描述		|
|--			|--																	|--			|
|listener	|Function([TextDocumentChangeEvent](#TextDocumentChangeEvent))	|事件回调	|

#### 返回值
|返回类型	|描述				|
|--			|--					|
|[Disposable](#Disposable)	|该事件回调的销毁器，可将该对象放置到插件的context.subscriptions数组内，插件卸载时，将会自动注销该`事件回调`	|

#### 示例
``` javascript
    let onDidChangeTextDocumentEventDispose = hx.workspace.onDidChangeTextDocument(function(event){
        let document = event.document;
        //do something with document.
    });
```

### onDidSaveTextDocument
文档被保存时的事件
#### 参数说明

|参数名称	|参数类型								|描述		|
|--			|--										|--			|
|listener	|Function([TextDocument](#TextDocument))|事件回调	|

#### 返回值
|返回类型	|描述				|
|--			|--					|
|[Disposable](#Disposable)	|该事件回调的销毁器，可将该对象放置到插件的context.subscriptions数组内，插件卸载时，将会自动注销该`事件回调`	|

#### 示例
``` javascript
    let onDidSaveTextDocumentEventDispose = hx.workspace.onDidSaveTextDocument(function(document){
        //do something with document.
    });
```

### onDidOpenTextDocument
`从HBuilderX 2.7.6及以上版本开始支持`

文档打开时的事件

#### 参数说明

|参数名称	|参数类型								|描述		|
|--			|--										|--			|
|listener	|Function([TextDocument](#TextDocument))|事件回调	|

#### 返回值
|返回类型	|描述				|
|--			|--					|
|[Disposable](#Disposable)	|该事件回调的销毁器，可将该对象放置到插件的context.subscriptions数组内，插件卸载时，将会自动注销该`事件回调`	|

#### 示例
``` javascript
    let onDidOpenTextDocumentEventDispose = hx.workspace.onDidOpenTextDocument(function(document){
        //do something with document.
    });
    context.subscriptions.push(onDidOpenTextDocumentEventDispose);
```

### applyEdit
根据指定的WorkspaceEdit对象编辑文档。WorkspaceEdit对象内要设定被修改文档的uri和要执行修改的TextEdit操作对象。
#### 参数说明

|参数名称	|参数类型									|描述			|
|--			|--											|--				|
|edit		|[WorkspaceEdit](#WorkspaceEdit)	|文档编辑操作	|

#### 返回值
|返回类型	|描述	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

#### 示例
``` javascript
    let editorPromise = hx.window.getActiveTextEditor();
    editorPromise.then((editor)=>{
        let workspaceEdit = new hx.WorkspaceEdit();
        let edits = [];
        edits.push(new hx.TextEdit({
        	start: 0,
        	end: 0
        }, "foo"));
        
        workspaceEdit.set(editor.document.uri,edits);
        hx.workspace.applyEdit(workspaceEdit);
    });
```

### getConfiguration
根据指定的section获取对应的配置
#### 参数说明

|参数名称	|参数类型	|描述			|
|--			|--			|--				|
|section	|String		|配置项分类名称	|

#### 返回值
|返回类型						|描述		|
|--								|--			|
|[Configuration](#Configuration)|返回配置	|

#### 示例
``` javascript
    let config = hx.workspace.getConfiguration()
    let fontSize = config.get("editor.fontSize");
    //或者也可以这样
    let config = hx.workspace.getConfiguration("editor")
    let fontSize = config.get("fontSize");
```

## env
`从HBuilderX 2.7.6及以上版本开始支持`

env二级模块对象，包含运行环境信息和系统交互相关的方法
### 属性列表
|属性名		|属性类型				|描述																	|
|--			|--						|--																		|
|appName	|String					|应用程序名称：HBuilder X												|
|appVersion	|String					|应用程序主版本号，可在菜单【帮助】-【关于】中查看						|
|appRoot	|String					|应用程序安装路径														|
|appData	|String					|应用程序数据存放路径													|
|clipboard	|[Clipboard](#Clipboard)|剪切板对象，可用于读取剪切板内容和写入内容到剪切板，目前仅支持文本格式	|

### openExternal
打开一个外部链接，比如`https://www.dcloud.io`、`mailto:ide@dcloud.io`
#### 参数说明

|参数名称	|参数类型	|描述			|
|--			|--			|--				|
|uri		|String		|外部链接地址	|

#### 返回值
|返回类型				|描述				|
|--						|--					|
|Promise&lt;Boolean&gt;	|返回是否打开成功	|

#### 示例
``` javascript
    var openPromise = hx.env.openExternal("https://www.dcloud.io");
	openPromise.then(function(success) {
		console.log("打开链接结果：",success);
	});
```

## Clipboard
`从HBuilderX 2.7.6及以上版本开始支持`

剪切板对象，可用于读取剪切板内容和写入内容到剪切板，目前仅支持文本格式	
### readText
读取剪切板内容
#### 参数说明
无

#### 返回值
|返回类型				|描述			|
|--						|--				|
|Promise&lt;String&gt;	|返回剪切板内容	|

#### 示例
``` javascript
    var readPromise = hx.env.clipboard.readText();
	readPromise.then(function(text) {
		console.log("读取剪切板内容：",text);
	});
```

### writeText
写入剪切板内容
#### 参数说明

|参数名称	|参数类型	|描述			|
|--			|--			|--				|
|value		|String		|要写入剪切板的字符串|

#### 返回值
|返回类型			|描述	|
|--					|--		|
|Promise&lt;void&gt;|Promise|

#### 示例
``` javascript
    hx.env.clipboard.writeText("Hello Clipboard.");
```

## ConfigurationChangeEvent
配置改变产生的事件

### affectsConfiguration
判断该事件该变了哪个配置项值

#### 参数说明

|参数名称	|参数类型	|描述								|
|--			|--			|--									|
|section	|String		|配置项的key，比如:"editor.fontSize"|

#### 返回值
|返回类型	|描述												|
|--			|--													|
|Boolean	|`true`表示配置项被修改，`false`表示配置项没有被修改|

#### 示例
``` javascript
    let configurationChangeDisplose = hx.workspace.onDidChangeConfiguration(function(event){
        if(event.affectsConfiguration("editor.fontSize")){
            console.log("修改了字体大小");
        }
    });
```

## WorkspaceFoldersChangeEvent
项目管理器中新增或者移除项目时产生的事件类型

### 属性列表
|属性名	|属性类型											|描述			|
|--		|--													|--				|
|added	| Array&lt;[WorkspaceFolder](#WorkspaceFolder)&gt;	|新增的项目列表	|
|removed| Array&lt;[WorkspaceFolder](#WorkspaceFolder)&gt;	|移除的项目列表	|

#### 示例
``` javascript
    let wsFoldersChangeDisplose = hx.workspace.onDidChangeWorkspaceFolders(function(event){
        if(event.added){
            event.added.forEach(item=>console.log("新增了项目:",item.name));
        }
        if(event.removed){
            event.removed.forEach(item=>console.log("移除了项目:",item.name));
        }
    });
```

## TextDocumentWillSaveEvent
文档即将保存的事件
### 属性列表
|属性名		|属性类型										|描述						|
|--			|--												|--							|
|document	|[TextDocument](#TextDocument)					|该事件关联的文档			|

## TextDocumentChangeEvent
文档被修改时的事件
### 属性列表
|属性名		|属性类型						|描述				|
|--			|--								|--					|
|document	|[TextDocument](#TextDocument)	|该事件关联的文档	|

## TextEditor
文本编辑器对象
### 属性列表
|属性名		|属性类型										|描述						|
|--			|--												|--							|
|document	|[TextDocument](#TextDocument)					|该编辑器关联的文档			|
|selection	|[TextSelection](#TextSelection)				|当前光标选中的位置			|
|selections	|Array&lt;[TextSelection](#TextSelection)&gt;	|当前多光标选中的位置集合	|
|options	|[TextEditorOptions](#TextEditorOptions)		|该编辑器的设置项			|

### edit
修改当前编辑器打开的文档
#### 参数说明

|参数名称	|参数类型									|描述			|
|--			|--											|--				|
|callback		|Function([TextEditorEdit](#TextEditorEdit))	|文档编辑操作回调	|

#### 返回值
|返回类型	|描述	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

#### 示例
``` javascript
    let editorPromise = hx.window.getActiveTextEditor();
    editorPromise.then(function(editor) {
        let selection = editor.selection;
        let document = editor.document;
        let word = document.getText(selection);
        let reversed = word.split('').reverse().join('');
        editor.edit(editBuilder => {
            editBuilder.replace(selection, reversed);
        });
    });
```

### setSelection
设置主选择区域，该API会首先清除原来的光标选择，如果要使用多光标，请使用[addSelection](#addSelection)方法
#### 参数说明

|参数名称	|参数类型	|描述		|
|--			|--			|--			|
|active		|Number		|选择区域中带光标的一侧，详情见下图|
|anchor		|Number		|选择区域中不带光标的一侧，详情见下图	|

<img src="/static/snapshots/anchor_active.jpg" style="zoom:50%" />

#### 返回值
|返回类型	|描述	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

#### 示例
``` javascript
let editor = hx.window.getActiveTextEditor();
editor.then((editor)=>{
    editor.setSelection(10,12);
})
```

### addSelection
增加新的选择区域，调用后会在编辑器内追加一个新一个光标。
#### 参数说明

|参数名称	|参数类型	|描述		|
|--			|--			|--			|
|active		|Number		|选择区域中带光标的一侧，详情见下图|
|anchor		|Number		|选择区域中不带光标的一侧，详情见下图	|

<img src="/static/snapshots/anchor_active.jpg" style="zoom:50%" />

#### 返回值
|返回类型	|描述	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

#### 示例
``` javascript
let editorPromise = hx.window.getActiveTextEditor();
editorPromise.then((editor)=>{
    editor.setSelection(10,12).then(()=>{
        editor.addSelection(16,18);
    });
})
```

## TextDocument
编辑器打开的文档文件
### 属性列表
|属性名			|属性类型							|描述														|
|--				|--									|--															|
|fileName		|String								|文件名称													|
|isDirty		|Boolean							|是否是修改状态												|
|isUntitled		|Boolean							| 是否是无标题文件											|
|lineCount		|Number								|文档总行数													|
|uri			|[Uri](#Uri)						|文档的uri，如果是本地文件，可通过uri.fsPath获取本地文件路径|
|languageId|String|编程语言Id，如'javascript','html'等，完整id列表参见[这里](/ExtensionDocs/Api/README.md#languageId)									|
|workspaceFolder|[WorkspaceFolder](#WorkspaceFolder)|该文档文件所属的项目对象									|

### getText
获取指定区域内的文本

|参数名称	|参数类型		|描述													|
|--			|--				|--														|
|range		|[Range](#Range)|[可选]文本区域，如果不传该参数，则获取整个文档的内容	|

#### 返回值
|返回类型	|描述		|
|--			|--			|
|String		|文本字符串	|


### lineAt
获取指定行号的行信息

|参数名称	|参数类型	|描述			|
|--			|--			|--				|
|lineno		|Number		|行号，从0开始	|

#### 返回值
|返回类型								|描述		|
|--										|--			|
| Promise&lt;[TextLine](#TextLine)&gt;	|文本行对象	|

### lineFromPosition
根据光标位置获取光标所在行。

|参数名称	|参数类型	|描述		|
|--			|--			|--			|
|pos		|Number		|光标位置	|

#### 返回值
|返回类型								|描述		|
|--										|--			|
|Promise&lt;[TextLine](#TextLine)&gt;	|文本行对象	|

#### languageId
以下是目前支持的编程语言Id列表：

- txt
- actionscript
- ada
- asm
- asp
- autoit
- baanc
- bash
- batch
- c
- cs
- cmake
- cpp
- css
- caml
- cobol
- coffeescript
- d
- dart
- ejs
- fortran
- fortran77
- html
- html_es6
- handlebars
- haskell
- inno
- json
- json_tm
- java
- javascript
- javascriptreact
- javascript_es6
- kix
- less
- lisp
- lua
- markdown
- matlab
- njs
- nml
- nsis
- nss
- objc
- php
- pascal
- perl
- postscript
- powershell
- python
- r
- rc
- ruby
- sql
- sass
- scheme
- scss
- smalltalk
- stylus
- swift
- tcl
- typescript
- typescriptreact
- ux
- vb
- vhdl
- verilog
- vue
- wxml
- xml
- yaml
- pug

## TextLine
文档中的某一行
### 属性列表
|属性名	|属性类型	|描述						|
|--		|--			|--							|
|start	|Number		|行起始位置					|
|end	|Number		|行结束位置，不计算换行符	|
|text	|String		|行内容，不包含换行符		|

## Range
文本区域
### 属性列表
|属性名	|属性类型	|描述		|
|--		|--			|--			|
|start	|Number		|起始位置	|
|end	|Number		|结束位置	|

## OutputChannel
输出通道，在添加内容到控制台时，会将通道名称作为前缀输出，eg:[${channel}] 这是要输出的内容。	
### 属性列表
|属性名	|属性类型	|描述		|
|--		|--			|--			|
|name	|String		|通道名称	|

### appendLine
#### 参数说明

|参数名称	|参数类型	|描述				|
|--			|--			|--					|
|line		|String		|输出到控制台的内容	|

#### 返回值
|返回类型	|描述	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

#### 示例
``` javascript
    let outputChannel = hx.window.createOutputChannel("foo");
    outputChannel.show();
    outputChannel.appendLine("Hello World");
```
### show
#### 参数说明
无

#### 返回值
|返回类型	|描述	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

#### 示例
``` javascript
    let outputChannel = hx.window.createOutputChannel("foo");
    outputChannel.show();
    outputChannel.appendLine("Hello World");
```

## Configuration
全局配置
### get
#### 参数说明

|参数名称		|参数类型	|描述		|
|--				|--			|--			|
|section		|String		|配置项的key|
|defaultValue	|Any		|默认值，当key不存在时返回该值|

#### 返回值
|返回类型	|描述		|
|--			|--			|
|Any		|配置项的值	|

#### 示例
``` javascript
    let eslintConfig = hx.workspace.getConfiguration("eslint-js")
    let validateOnDocumentChanged = eslintConfig.get("validateOnDocumentChanged",false);
```
### update
#### 参数说明

|参数名称	|参数类型	|描述		|
|--			|--			|--			|
|section	|String		|配置项的key|
|value		|Any		|配置项的值	|

#### 返回值
|返回类型	|描述	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

#### 示例
``` javascript
    let eslintConfig = hx.workspace.getConfiguration("eslint-js")
    eslintConfig.update("validateOnDocumentChanged",true).then(()=>{
        console.log("更新配置成功。");
    });
```
## DiagnosticCollection
问题集合
### 属性列表
|属性名	|属性类型	|描述		|
|--		|--			|--			|
|name	|String		|问题集合名称	|
### set
#### 参数说明

|参数名称	|参数类型										|描述		|
|--			|--												|--			|
|uri		|String或Uri									|文档地址	|
|diagnostics|Array&lt;[DiagnosticItem](#DiagnosticItem)&gt;	|问题集合	|

#### 返回值
|返回类型	|描述	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

#### 示例
``` javascript
    let diagnositics = hx.languages.createDiagnosticCollection('eslint');
    diagnositics.set("foo.js",[
        {
            column: 0,
            line: 0,
            message: 'a error message.'
        }
    ]);
```
## DiagnosticItem
问题项
### 属性列表
|属性名		|属性类型	|描述												|
|--			|--			|--													|
|line		|String		|在文档第几行										|
|column		|String		|在文档第几列										|
|message	|String		|问题详细信息										|
|severity	|String		|问题级别，取值范围:'error'，'warn'. 默认值是'error'|
## WorkspaceEdit
工作空间的一组编辑操作
### set
#### 参数说明

|参数名称	|参数类型							|描述			|
|--			|--									|--				|
|uri		|String或Uri						|文档地址		|
|edits		|Array&lt;[TextEdit](#TextEdit)&gt;	|编辑操作数组	|

#### 返回值
|返回类型	|描述	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

#### 示例
``` javascript
    let workspaceEdit = new hx.WorkspaceEdit();
    let edits = [];
    edits.push(new hx.TextEdit({
        start: 0,
        end: 0
    }, "foo"));
    workspaceEdit.set(doc.uri, edits);
    hx.workspace.applyEdit(workspaceEdit);
```
## TextEdit
文档编辑
### 属性列表
|属性名	|属性类型			|描述			|
|--		|--					|--				|
|range	|[Range](#Range)	|要修改的区域	|
|newText|String				|要插入的新内容	|
### replace **static**
#### 参数说明

|参数名称	|参数类型			|描述			|
|--			|--					|--				|
|range		|[Range](#Range)	|要修改的区域	|
|newText	|String				|要插入的新内容	|

#### 返回值
|返回类型	|描述	|
|--			|--		|
|[TextEdit](#TextEdit)|	文档编辑对象|
## WorkspaceFolder
工作空间下的项目目录,在左侧项目管理器内的每一个项目表示一个WorkspaceFolder
### 属性列表
|属性名	|属性类型			|描述			|
|--		|--					|--				|
|uri	|String或[Uri](#Uri)|项目目录地址	|
|name	|String				|项目目录名称	|
|nature	|String				|项目类型		|
|id		|String				|项目唯一id		|

## InputBoxOptions
输入框设置
### 属性列表
|属性名		|属性类型	|描述						|
|--			|--			|--							|
|prompt		|String		|输入框的描述				|
|value		|String		|输入框的默认值				|
|placeHolder|String		|输入框内容为空时的占位内容	|
|password	|Boolean	|是否是密码框				|

## QuickPickOptions
快速选择框设置
### 属性列表
|属性名		|属性类型	|描述									|
|--			|--			|--										|
|placeHolder|String		|快速选择框上的搜索框为空时的占位文本	|

## QuickPickItem
快速选择候选项
### 属性列表
|属性名		|属性类型	|描述		|
|--			|--			|--			|
|label		|String		|候选项名称	|
|description|String		|候选项描述	|

> 如果要传递额外的数据，可以追加自定义的属性，当用户选择该项后，会通过回调返回选择了哪个候选项

## TreeViewOptions
创建TreeView需要的配置项
### 属性列表
|属性名				|属性类型								|描述															|
|--					|--										|--																|
|showCollapseAll	|Boolean								|是否显示折叠所有												|
|treeDataProvider	|[TreeDataProvider](#TreeDataProvider)	|TreeView树控件获取数据的接口，需要自己写一个子类实现该接口。	|

## WebViewOptions
`从HBuilderX 2.8.1及以上版本开始支持`

调用[createWebView](#createWebView)创建[WebView](#WebView)时需要的配置项
### 属性列表
|属性名				|属性类型								|描述															|
|--					|--										|--																|
|enableScripts 	|Boolean								|是否启用JavaScript脚本支持												|

## WebViewPanel
`从HBuilderX 2.8.1及以上版本开始支持`

调用[createWebView](#createWebView)返回的WebViewPanel对象
### 属性列表
|参数名称	|参数类型	|描述				|
|--			|--			|--			|
|webView	|[WebView](#WebView)	|WebView 关联的WebView对象|
|dispose()  |dispose方法  |调用关闭该扩展视图    |

## WebView
`从HBuilderX 2.8.1及以上版本开始支持`

调用[createWebView](#createWebView)创建WebView对象
### 属性列表
|参数名称	|参数类型	|描述				|
|--			|--			|--			|
|options	|[WebViewOptions](#WebViewOptions)	|调用[createWebView](#createWebView)创建WebView时传入的options参数|
|html |     String | WebView中要显示的html内容 |

### onDidReceiveMessage
收到hbuilderx.postMessage发出的消息时调用回调函数。
#### 参数说明
|参数名称	|参数类型	|描述		|
|--			|--																	|--			|
|callback	|Function	|响应收到消息的回调|
#### 返回值
|返回类型	|
|--	|
|无 | 

#### 示例
``` javascript
    webview.onDidReceiveMessage((message)=>{ console.log(message) });
```
### asWebviewUri
将本地资源转换成可在WebView中加载的uri。
#### 参数说明
|参数名称	|参数类型	|描述		|
|--			|--																	|--			|
|localResource	|[Uri](#Uri)	|统一资源访问符|
#### 返回值
|返回类型	|描述	|
|--			|--		|
|[Uri](#Uri)|可在[WebView](#WebView)中加载的uri|
### postMessage(message: any): Thenable
在WebView中发送消息
#### 参数说明
|参数名称	|参数类型	|描述		|
|--			|--	|--			|
|message	|Any	| 消息内容|
#### 返回值
|返回类型	|描述	|
|--			|--		|
|Thenable| Javascript异步延迟后执行|


## TreeDataProvider
TreeView树控件获取数据的接口，不可直接实例化该对象，需要自己写一个子类实现该接口，每个自定义的treeDataProvider都需要实现该接口下列出的方法
### getChildren
获取某个节点的下的子节点，如果参数为空，则表示要获取根节点
#### 参数说明

|参数名称	|参数类型	|描述															|
|--			|--			|--																|
|element	|Any?		|获取该节点下的子节点列表，如果参数为空，则是要获取根节点列表	|

#### 返回值
|返回类型	|描述	|
|--			|--		|
|Promise&lt;Any[]&gt;	|Promise	|

### getTreeItem
获取用于显示自定义数据element(通过getChildren获取的对象)的TreeItem对象
#### 参数说明

|参数名称	|参数类型	|描述									|
|--			|--			|--										|
|element	|Any?		|通过getChildren获取的列表对象中某一项	|

#### 返回值
|返回类型	|描述				|
|--			|--					|
|[TreeItem](#TreeItem)	|保存有节点的显示信息	|

## TreeItem
保存有节点的显示信息
### 属性列表
|属性名				|属性类型	|描述																																					|
|--					|--			|--																																						|
|collapsibleState	|Number		|是否可展开，目前取值有：0：不可展开；1：可展开																											|
|label				|String		|该item的显示名称																																		|
|contextValue		|String		|该item的上下文信息，在通过`menus`扩展点的`view/item/context`类别注册右键菜单时，用when表达式中的`viewItem`变量控制菜单显示。举例：`viewItem == 'test'`	|
|command			|[CommandInfo](#CommandInfo)|当选中该item时要执行的`命令`																															|
|tooltip			|String		|鼠标悬浮到该item上的tooltip提示消息																													|

## CommandInfo
配置一个`命令`需要的信息对象
### 属性列表
|属性名		|属性类型	|描述						|
|--			|--			|--							|
|command	|String		|要执行的`命令`id			|
|arguments	|any[]		|执行该`命令`时传递的参数	|

## Disposable
资源释放接口，HBuilderX开放的部分API返回了该对象，将该对象添加到插件激活时的参数`context.subscriptions`数组内，插件卸载时将自动释放对应的资源。
### dispose
#### 参数说明
无

#### 返回值
无

## UriHandler
uri处理器接口
### handleUri
#### 参数说明
|参数名称	|参数类型	|描述																		|
|--			|--			|--																			|
|uri		|Uri		|scheme请求对应的uri，eg：hbuilderx://requestExtension/extensionId?foo=bar	|

#### 返回值
无

## Uri
统一资源访问符
### 属性列表
|属性名		|属性类型	|描述				|
|--			|--			|--					|
|fsPath		|String		|本地文件地址		|
|authority	|String		|Uri中的authority	|
|fragment	|String		|Uri中的fragment	|
|path		|String		|Uri中的path		|
|query		|String		|Uri中的query		|
|scheme		|String		|Uri中的scheme		|


## CustomDocument
自定义文档，用户可以继承。
### 属性列表
|属性名		|属性类型	|描述				|
|--			|--			|--					|
|uri		|String		|本地文件地址（file:///C:/abc/test.txt），通过构造函数初始化 |

## CustomEditorProvider
自定义编辑器数据提供接口，用户需要继承。

### 属性列表
|属性名		|属性类型	|描述				|
|--			|--			|--					|
|onDidChangeCustomDocument | HBuilderX内置的EventEmitter	| 用于触发文件变化事件，编辑器置为未保存状态 |

#### 代码示例
``` javascript
    provider.onDidChangeCustomDocument.fire(new CustomDocumentEditEvent(document));
```
[CustomDocumentEditEvent](#CustomDocumentEditEvent)

### openCustomDocument
当用户用户打开匹配的文件时，由HBuilderX调用，开发者创建并返回CustomDocument。HBuilderX在这之后会创建WebViewPanel，并调用[resolveCustomEditor](#resolveCustomEditor)。

#### 参数说明
|参数名称	    |参数类型	    |描述			|
|--			|--			|--				|
|uri	|String		|本地文件地址（file:///C:/abc/test.txt） |

#### 返回值
|返回类型	|描述		|
|--			|--			|
|Promise&lt;[CustomDocument](#CustomDocument)&gt;	|Promise对象|

### resolveCustomEditor
HBuilderX使用WebViewPanel来作为自定义编辑器的视图，创建WebViewPanel并与document关联后，调用该方法。[WebViewPanel](#WebViewPanel)的用法也可以参考[视图扩展](/views.md#WebView)中部分示例。

#### 参数说明
|参数名称	    |参数类型	    |描述			|
|--			|--			|--				|
|document	|[CustomDocument](#CustomDocument)		|由开发者创建的CustomDocument|
|webViewPanel	|[WebViewPanel](#WebViewPanel)		|与document关联的WebViewPanel|

### saveCustomDocument
用户执行“保存”操作时，HBuilderX调用该方法。

#### 参数说明
|参数名称	    |参数类型	    |描述			|
|--			|--			|--				|
|document	|[CustomDocument](#CustomDocument)		| 保存操作对应的CustomDocument |

#### 返回值
|返回类型	|描述		|
|--			|--			|
|Promise&lt;boolean&gt; 或 boolean	|true表示成功，编辑器标签卡会移除dirty状态|

### saveCustomDocumentAs
用户执行“另存为”操作，选择目标文件后，HBuilderX调用该方法。成功后，HBuilderX会重新关联document与目标文件。

#### 参数说明
|参数名称	    |参数类型	    |描述			|
|--			|--			|--				|
|document	|[CustomDocument](#CustomDocument)		| 保存操作对应的CustomDocument |
|destination	|String		| 目标文件地址（例如：file:///C:/abc/test.txt） |

#### 返回值
|返回类型	|描述		|
|--			|--			|
|Promise&lt;boolean&gt; 或 boolean	|true表示成功，编辑器标签卡会移除dirty状态|


### CustomDocumentEditEvent
用[CustomDocument](#CustomDocument)构造CustomDocumentEditEvent对象。[CustomEditorProvider](#CustomEditorProvider)可以向HBuilderX发送该事件，编辑器标签卡会置为未保存状态。

## authorize
authorize二级模块对象，用于处理插件授权登录，获取HBuilderX当前登录用户的信息授权。

### login

#### 参数说明

|参数名称	|参数类型	|描述			|
|--			|--			|--				|
|params		| Object	|授权登录必要的信息|

参数属性说明

|属性名		|属性类型	|描述									|
|--			|--			|--										|
|appid |String		|  在[DCloud开发者开放开台](#)添加授权插件后创建的appid |
|scopes |Array&lt;String&gt;		| 授权范围列表, 取值范围：basic, email, phone。basic必填|

#### 返回值

|返回类型										|描述			|
|--												|--				|
|Promise&lt;Object&gt;	| Promise对象	|

返回值属性说明

|属性名		|属性类型	|描述									|
|--			|--			|--										|
|code |String		| CODE码，有效期5分钟。用于插件作者服务器端换取accessToken，通过accessToken换取授权的基本信息 |
|error |Number		| code获取失败时的错误码 |

#### 示例
``` javascript
    let prom = hx.authorize.login({ appId: "yourappid", scopes: ['basic', 'email','phone'] });
    prom.then(function (param) {
		// param['code']
		// param['error']
	});
```

#### 主要错误码信息
|错误码		| 描述									|
|--			|--										|
|0	| 无错误 |
|1	| 当前没有登录用户 |
|2	| 用户取消了授权 |
|3	| 上一次授权的CODE码还未过期（有效期5分钟） |
|4	| 插件状态异常 |
|1002	| 服务器参数错误 |
|2001	| 应用信息不存在，在[DCloud开发者开放开台](#)检查appid与插件id是否错误或匹配，插件规范参考[这里](/ExtensionDocs/manifest)。|
|3004	| 超时 |
|3203	| 404 |
|		|     |

*关于错误码2001，开发者在创建HBuilderX插件项目，会以填写的项目名称作为插件目录和插件id。插件开发过程中，在[DCloud开发者开放开台](#)新增授权申请时需要填写此插件id，与生成的appid绑定。最终在提交至插件市场时，如果更换了新的插件id，为保证本地正常开发，需要修改插件目录为新的id，并在[DCloud开发者开放开台](#)重新提交申请。*


### onUserLogin
用户登录事件

#### 参数说明

|参数名称	|参数类型	|描述			|
|--			|--			|--				|
|callback		|Function		|用户登录时的回调函数，无参数|

#### 返回值
|返回类型		|描述			|
|--				|--				|
|[Disposable](#Disposable)	| Disposable	|


#### 示例
``` javascript
    hx.authorize.onUserLogin(function(){
        // do something
    });
```

### onUserLogout
当前登录用户退出事件

#### 参数说明

|参数名称	|参数类型	|描述			|
|--			|--			|--				|
|callback		|Function		|当前登录用户退出时的回调函数，无参数|

#### 返回值
|返回类型	|描述			|
|--			|--				|
|[Disposable](#Disposable)	| Disposable对象	|

#### 示例
``` javascript
    hx.authorize.onUserLogout(function(){
        // do something
    });
```