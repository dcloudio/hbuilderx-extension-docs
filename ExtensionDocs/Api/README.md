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
执行指定id的`命令`。除了插件扩展的`命令`外，还可以执行HBuilderX内置的`命令`，完整的内置`命令`列表可以通过HBuilderX的顶部菜单`工具`-`自定义快捷键`，然后在打开的配置文件左侧部门找到所有列出的`command`字段。
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
设置状态栏消息
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
    }
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
在窗口中间居中弹出一个输入框，获取用户输入
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

## workspace
workspace二级模块对象，用于处理和工作空间以及文档事件有关的逻辑
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
env二级模块对象，包含运行环境信息和系统交互相关的方法
### 属性列表
|属性名		|属性类型				|描述																	|
|--			|--						|--																		|
|appName	|String					|应用程序名称：HBuilder X												|
|appVersion	|String					|应用程序主版本号，可在菜单【帮助】-【关于】中查看						|
|appRoot	|String					|应用程序安装路径														|
|appData	|String					|应用程序数据存放路径													|
|clipboard	|[Clipboard](#Clipboard)|剪切板对象，可用于读取剪切板内容和写入内容到剪切板，目前仅支持文本格式	|

### openExtenerl
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
    var openPromise = hx.env.openExtenerl("https://www.dcloud.io");
	openPromise.then(function(success) {
		console.log("打开链接结果：",success);
	});
```

## Clipboard
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
|返回类型				|描述				|
|--						|--					|
|Promise&lt;void&gt;	||

#### 示例
``` javascript
    hx.env.clipboard.writeText("Hello Clipboard.");
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
工作空间下的项目目录
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

## Disposable
资源释放接口，HBuilderX开放的部分API返回了该对象，将该对象添加到插件激活时的参数`context.subscriptions`数组内，插件卸载时将自动释放对应的资源。
### dispose
#### 参数说明
无

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

