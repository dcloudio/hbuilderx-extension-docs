扩展点是通过在插件`package.json`文件中`contributes`节点下定义的一些JSON格式的配置项。以下是目前HBuilderX支持的扩展点列表：

## configuration
configuration扩展点，会将扩展的配置项注册到HBuilderX的全局可视化配置里`设置`-`插件配置`。

### configuration属性列表

#### title
每个插件扩展的配置是分配到同一组下的，title指的是该组的名称，一般写的是插件名称。

#### properties
properties内配置的是一个jsonobject对象，该对象的key代表着要扩展的配置项id，value是一个符合[JSON Schema](https://json-schema.org/understanding-json-schema/reference/index.html)规范的jsonobject，目前支持的字段包括：

- type 类型。支持的类型包括：string、boolean、number。
- description 描述
- default 默认值
- enum  可选值，目前只有type为string或number时可用

### configuration示例
```json
    "contributes": {
        "configuration":{
            "title":"eslint-js",
            "properties":{
                "eslint-js.autoFixOnSave":{
                    "type":"boolean",
                    "default":true,
                    "description":"保存时自动修复"
                },
                "eslint-js.validateOnDocumentChanged":{
                    "type":"boolean",
                    "default":false,
                    "description":"启用实时校验"
                }
            }
        }
    }
```
效果图如下：

<img src="/static/snapshots/plugins_setting.jpg" style="zoom:50%" />


## commands
commands扩展点用于声明一个`命令`，`命令`可以通过`menus`扩展点和菜单关联到一起
> 注意：当一个`命令`将要执行时，将会触发一个`onCommand:${commandId}`的[activationEvent](/ExtensionDocs/activation_event.md)用于激活监听该`命令`的插件

#### 示例
```json
    "contributes": {
        "commands": [
          {
            "command": "extension.firstExtension",
            "title": "Hello World"
          }
        ]
    }
```

## keybindings

> keybindings扩展点, 仅对HBuilderX 3.1.22+版本生效。

keybindings扩展点用于声明快捷键绑定.

#### 示例

```json
"keybindings":[
    {
        "command":"extension.firstExtension",    // command为您开发的插件中的command
        "key":"Ctrl+Shift+C",                    // key为要绑定的快捷键
        "when":"",                               // when表达式用来动态的判断某个条件是否满足，强烈建议设置此项。
        "macosx":"command+Shift+C"               // MacOSX系统的快捷键；如不设置此项，MacOSX系统，会将key中的ctrl转为command
    }
]
```

## snippets
snippets扩展点可以扩展指定编程语言的代码块，可扩展的编程语言Id列表见[这里](/ExtensionDocs/Api/other/languageId)。扩展示例代码如下：

```json
    "contributes": {
        "snippets": [
          {
            "language": "css",
            "path": "./snippets/css.json"
          },
          {
            "project":"uni-app",
            "language": "css",
            "path": "./snippets/condition_comment.json"
          }
        ]
    }
```

### 属性列表

|属性名称		|属性类型	|是否必须	|描述																																		|
|--				|--			|--			|--																																			|
|project		|String		|否			|是否只在指定的项目类型下生效，目前的可取值为"Web","App","Wap2App","uni-app";如果要支持多项目类型可以通过逗号分隔，例如："Web,uni-app,App"	|
|language		|String		|是			|编程语言ID，用于限定只在指定的语言下生效，语言Id的列表参见[这里](/ExtensionDocs/Api/other/languageId)									|
|path|String		|是			|要扩展的代码块列表文件路径，文件内容格式见下面|

### 代码块格式
每个配置项的说明如下表：

|名称|描述|
|--	|--	|
|`key`|代码块显示名称，显示在代码助手列表中的名字，以下例子中"console.log"就是一个key。|
|prefix|代码块的触发字符，就是敲什么字母匹配这个代码块。|
|body|代码块的内容。内容中有如下特殊格式：<br />$1 表示代码块输入后光标的所在位置。如需要多光标，就在多个地方配置$1,如该位置有预置数据，则写法是${1:foo1}，多选项即下拉候选列表使用${1:foo1/foo2/foo3}；<br />$2 表示代码块输入后再次按tab后光标的切换位置tabstops（代码块展开后按tab可以跳到下一个tabstop；<br />$0 代表代码块输入后最终光标的所在位置（也可以按回车直接跳过去）。<br />双引号使用\"转义，换行使用多个数组表示，每个行一个数组，用双引号包围，并用逗号分隔，缩进需要用\t表示，不能直接输入缩进！|
|triggerAssist	|为true表示该代码块输入到文档后立即在第一个tabstop上触发代码提示，拉出代码助手，默认为false。|

### 代码块示例
```json
// ./snippets/javascript.json
{
    "console.log": {
    	"prefix": "logtwo",
    	"body": [
    		"console.log('$1');",
    		"\tconsole.log('${2:foo/bar}');"
    	],
    	"triggerAssist": false,
    	"description": "Log output to console twice"
	}
}
```


## viewsContainers
在窗体左侧区域扩展一个和项目管理器同级的tab项，完整的扩展视图流程参考[如何注册一个新的视图？](/ExtensionTutorial/views)

#### 属性列表
|属性名称	|属性类型												|是否必须	|描述															|
|--			|--														|--			|--																|
|activitybar|Array&lt;[ViewsContainerDef](#ViewsContainerDef)&gt;	|不是			|定义扩展的视图容器列表，可在菜单`视图`-`显示扩展视图`中查看打开|
|rightside|Array&lt;[ViewsContainerDef](#ViewsContainerDef)&gt;	|不是|定义扩展的视图容器列表，可在菜单`视图`-`显示扩展视图`中查看打开|

#### 示例
```json
   "contributes": {
       "viewsContainers": {
           "activitybar": [{
               "id": "demoview",
               "title": "DemoView"
           }],
           "rightside":[{
                   "id":"rightsideContainerId",
                   "title":"rightside Container Title"
          }]
       },
       "views": {
           "demoview": [{
               "id": "extensions.treedemo",
               "name": "DemoView"
           }]
       },
       ...
    }
```

#### ViewsContainerDef
|属性名称	|属性类型	|是否必须	|描述								|
|--			|--			|--			|--									|
|id			|String		|是			|扩展的视图容器(viewContainers)的id	|
|title		|String		|是			|显示在tab标签上的标题				|

## views

扩展新的视图，扩展的view必须和`viewsContainers`内定义的视图容器绑定以后才能生效。

目前支持TreeView和WebView，并且一个视图容器（viewsContainers）仅支持绑定一个视图（view）。

在该扩展点声明后，需要通过API：[window.createTreeView](/ExtensionDocs/Api/windows/createTreeView)或者[window.createWebView](/ExtensionDocs/Api/windows/createWebView)实现。完整的扩展视图流程参考[如何注册一个新的视图？](/ExtensionTutorial/views)

### TreeView 示例
```json
    //NOTE：package.json不支持注释，以下代码使用时需要将注释删掉
   "contributes": {
       "views": {
           //绑定的视图容器（viewContainers）的Id，目前一个视图容器仅支持绑定一个视图（view）
           "demoview": [{
               //该id需要和window.createTreeView中的viewId参数一致
               "id": "extensions.treedemo",
               "name": "DemoView"
           }]
       }
    }
```

### WebView 示例
`从HBuilderX 2.8.1及以上版本开始支持`

```json
 "contributes": {
        "viewsContainers": {
            "rightside":[
                {
                    "id":"containerId",
                    "title":"Container Title"
                }
            ]
        },
        "views": {
            "containerId":[
                {
                    //该id需要和window.createWebView中的viewId参数一致
                    "id":"viewId",
                    "title":"Custom View Title"
                }
            ]
        },
        ...
     }
```

## menus

menus扩展点会关联一个`命令`到相应的菜单项里面，当菜单触发时将会执行对应的`命令。

menus节点下配置的对象内的key指的是要注册到哪个弹出菜单里面，目前支持的key值列表如下：

- `editor/context` ：编辑器右键菜单
- `explorer/context` ：项目管理器右键菜单
- `view/item/context` ：通过`views`扩展点扩展的`视图`的右键菜单（`从HBuilderX 2.7.12及以上版本开始支持`）
- `menubar/file` : 顶部菜单的`文件`菜单
- `menubar/edit` : 顶部菜单的`编辑`菜单
- `menubar/select` : 顶部菜单的`选择`菜单
- `menubar/find` : 顶部菜单的`查找`菜单
- `menubar/goto` : 顶部菜单的`跳转`菜单
- `menubar/run` : 顶部菜单的`运行`菜单
- `menubar/publish` : 顶部菜单的`发行`菜单
- `menubar/view` : 顶部菜单的`视图`菜单
- `menubar/tool` : 顶部菜单的`工具`菜单
- `menubar/help` : 顶部菜单的`帮助`菜单

### menus属性列表

|属性名称		|属性类型	|是否必须	|描述																						|
|--				|--			|--			|--																							|
|id				|String		|否			|菜单项的Id，如何要配置二级菜单，则需要该属性												|
|command		|String		|否			|菜单项关联的`命令`Id																		|
|title			|String		|否			|菜单项的名称，如果没有配置，将采用`命令`的title											|
|[group](#group)|String		|是			|菜单项要注册的位置,查看目前支持的[group列表](#group)。注意该属性必须写，不写视为无效菜单扩展	|
|[when](#when)	|String		|否			|控制菜单项是否显示的逻辑表达式,[表达式说明](#when)											|
|checked	    |String		|否			|`从HBuilderX 2.7.6及以上版本开始支持` <br/>控制菜单项是否处于checked的逻辑表达式,表达式语法和[when](#when)表达式一致										|

> 当属性title和command都为空时，将被识别为分割线。

### 示例
```json
   "contributes": {
       "menus": {
         "editor/context": [
           {
             "id":"sep",
             "group": "z_commands"
           },
           {
             "command": "extension.firstExtension",
             "group": "z_commands",
             "when":"editorTextFocus"
           }
         ]
       }
    }
```

### 注册二级菜单

二级菜单通过将group设置为%menuId%@1、%menuId%@2的方式来实现，其中menuId指的是菜单扩展中的id字段。代码示例如下:
```json
   "contributes": {
       "menus": {
         "editor/context": [
           {
             "id":"foo",
             "title": "带子菜单的菜单",
             "group": "z_commands",
           },
           {
             "command": "extension.firstExtension",
             "group": "foo@1",
             "when":"editorTextFocus"
           }
         ]
       }
    }
```

### group

每个弹出菜单内的group都不一样，下面列出所有的弹出菜单下可用的group。
> 注意：想要将扩展菜单放到弹出菜单的最后，可以将group设置成`0_foot`

- `editor/context`
    * copy
    * goto
    * copyPath
    * assist
    * z_commands

对应的位置如下图所示：

<img src = "/static/snapshots/Plug-in-development/group/editor_context.jpg" style="zoom:50%" />

- `explorer/context` ：项目管理器右键菜单
    * new
    * openInExplorer
    * nature
    * cutcopy
    * rename
    * z_commands

对应的位置如下图所示：

<img src = "/static/snapshots/Plug-in-development/group/explorer_context.jpg" style="zoom:50%" />

- `menubar/file` : 顶部菜单的`文件`菜单
    * new
    * tab
    * save
    * openInExplorer

对应的位置如下图所示：

<img src = "/static/snapshots/Plug-in-development/group/menubar_file.jpg" style="zoom:50%" />

- `menubar/edit` : 顶部菜单的`编辑`菜单
    * undo
    * copy
    * format
    * line
    * delete

对应的位置如下图所示：

<img src = "/static/snapshots/Plug-in-development/group/edit.jpg" style="zoom:50%" />

- `menubar/select` : 顶部菜单的`选择`菜单
    * selectAll
    * area
    * word
    * line
    * colum
    * 0_cursor
    * 1_cursor

对应的位置如下图所示：

<img src = "/static/snapshots/Plug-in-development/group/select.jpg" style="zoom:50%" />

- `menubar/find` : 顶部菜单的`查找`菜单
    * findFile
    * findWord
    * findSymbol

对应的位置如下图所示：

<img src = "/static/snapshots/Plug-in-development/group/find.jpg" style="zoom:50%" />

- `menubar/goto` : 顶部菜单的`跳转`菜单
    * system_goto
    * line_goto
    * define_goto

对应的位置如下图所示：

<img src = "/static/snapshots/Plug-in-development/group/goto.jpg" style="zoom:50%" />

- `menubar/run` : 顶部菜单的`运行`菜单
    * 0_foot

对应的位置在菜单的末尾。

- `menubar/publish` : 顶部菜单的`发行`菜单
    * 0_foot

对应的位置在菜单的末尾。

- `menubar/view` : 顶部菜单的`视图`菜单
    * min_window
    * focus_editor
    * show_lineno
    * view_split
    * scroll
    * plus_font

对应的位置如下图所示：

<img src = "/static/snapshots/Plug-in-development/group/view.jpg" style="zoom:50%" />

- `menubar/tool` : 顶部菜单的`工具`菜单
    * shortcuts
    * snippets
    * ext_settings

对应的位置如下图所示：

<img src = "/static/snapshots/Plug-in-development/group/tool.jpg" style="zoom:50%" />

- `menubar/help` : 顶部菜单的`帮助`菜单
    * documents
    * checkupdate
    * license

对应的位置如下图所示：

<img src = "/static/snapshots/Plug-in-development/group/help.jpg" style="zoom:50%" />


### when
when表达式用来动态的判断某个条件是否满足(即表达式的运算结果是`true`或者`false`)，目前用于控制一个菜单是否显示。目前支持的表达式运算符如下：

|操作符	|描述	|例子														|
|--		|--		|--															|
|`==`	|相等	|`langId == 'javascript'`									|
|`!=`	|不相等	|`langId != 'html'`								|
|`&&`	|并且	|`explorerResourceCount == 1 && explorerResourceIsFolder`	|
|<code>&#124;&#124;</code>|或者	|<code>explorerResourceIsFolder &#124;&#124; explorerResourceIsWorkspaceFolder</code>|
|`!`	|非	    |`!explorerResourceIsFolder`|
|`=~`	|正则运算	    |`workspaceFolderRelativePath  =~ /^package.json/`|

目前HBuilderX内置变量列表如下：

|变量名														|类型		|描述																																																			|
|--																|--			|--																																																				|
|workspaceFolderRelativePath			|String	|相对于项目的相对路径，举例： pages/user/user.vue																													|
|workspaceRelativePath						|String	|相对于项目的相对路径（加上项目名称），举例： HelloUniapp/pages/user/user.vue															|
|workspaceFolder.type							|String	|项目类型，可取值：UniApp_Vue,Web,App,Wap2App,Extension,Unkown																						|
|explorerResourceCount						|Number	|项目管理器选中的资源数量																																									|
|explorerResourceIsFolder					|Boolean|项目管理器选中的资源是否全是目录																																					|
|explorerResourceIsWorkspaceFolder|Boolean|项目管理器选中的资源是否全是项目根目录																																		|
|isSVN														|Boolean|是否是SVN仓库下的文件																																										|
|isGit														|Boolean|是否是Git仓库下的文件																																										|
|activeEditor.file.exists					|Boolean|当前激活的编辑器打开的文件是否存在																																				|
|activeEditor.file.isProjectFile	|Boolean|当前激活的编辑器打开的文件是否是左侧项目管理器下的文件																										|
|activeEditor.readonly						|Boolean|当前激活的编辑器是否是只读																																								|
|editorTextFocus									|Boolean|当前激活的编辑器是否有焦点																																								|
|langId														|String	|当前激活的编辑器打开的文档的编程语言id，完整语言Id列表参见[这里](/ExtensionDocs/Api/other/languageId)|
|viewItem													|String	|通过`views`扩展的视图中当前选择的item的contextValue																											|
|config.*													|Any		|获取某个配置项的值,例子： `config.editor.fontSize`																												|
|isMac														|Boolean|当前电脑操作系统是否是MacOSX（仅对HBuilderX3.2.22+版本生效）																							|
|isWindows												|Boolean|当前电脑操作系统是否是Windows（仅对HBuilderX3.2.22+版本生效）																						|
|editorHasSelection								|Boolean|当前激活的编辑器是否有选中的内容 （仅对HBuilderX3.2.22+版本生效）																				|

## customEditors

插件可以通过该扩展点扩展多个不同类型的自定义编辑器，自定义编辑器可以设置文件匹配模式，用户通过项目管理器打开的文件匹配到某一类型时，在编辑器区域创建webview视图，关联打开的文件。

完整的扩展自定义编辑器流程参考[如何扩展一个自定义编辑器？](/ExtensionTutorial/customeditor)

#### 扩展点示例如下：
```json
 "contributes": {
		"customEditors": [{
			"viewType": "catEdit.catScratch",
			"displayName": "Cat Scratch",
			"selector": [{
				"fileNamePattern": "*.cscratch"
			}],
			"priority": "default"
        },
        ...]
	}
```

#### 属性列表
|属性名称		|属性类型	|是否必须	|描述	|
|--	            |--			|--		|--		 |
|viewType		|String		|是		|自定义编辑器类型，`全局唯一` |
|displayName	|String		|否		|显示名称（暂时未用）	|
|selector		|Array&lt;[EditorSelctor](#EditorSelctor)&gt;	|是		|匹配模板，指定一个或多个匹配模板，匹配成功的文件会与该类型自定义编辑器关联|
|priority       |String		|否		|优先级（暂时未用）|


#### EditorSelctor
|属性名称	|属性类型	|是否必须	|描述   |
|--			|--			|--			|--     |
|fileNamePattern    |String	    |是 |文件名匹配，支持通配符|
