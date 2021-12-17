Contribution Points are a set of JSON declarations that you make in the contributes field of the package.json Extension Manifest. The following is a list of extension points currently supported by HBuilderX:

## configuration
The configuration extension point will register the extended configuration items in the global visualization configuration of HBuilderX `Settings`-`Plugins`.

### configuration attributes list

#### title
The configuration of each extension is assigned to the same group. The title is the name of the group and usually the name of the extension.

#### title
The configuration of each extension is assigned to the same group. The title refers to the name of the group, and usually the name of the extension.

#### properties
The configuration in the properties is a jsonobject object, the key of the object represents the id of the configuration item to be extended, and the value is a conformity to [JSON Schema](https://json-schema.org/understanding-json-schema/reference/index .html) canonical jsonobject, currently supported fields include:

- type: string or boolean or number
- description
- default
- enum Optional value, only string or number

### configuration exmpale
```json
    "contributes": {
        "configuration":{
            "title":"eslint-js",
            "properties":{
                "eslint-js.autoFixOnSave":{
                    "type":"boolean",
                    "default":true,
                    "description":"Automatically fix when saving"
                },
                "eslint-js.validateOnDocumentChanged":{
                    "type":"boolean",
                    "default":false,
                    "description":"Enable real-time verification"
                }
            }
        }
    }
```
As follows：

<img src="/static/snapshots/plugins_setting.jpg" style="zoom:50%" />


## commands
Contribute the UI for a command consisting of a title and (optionally) an icon, category, and enabled state. Presentation of contributed commands depends on the containing menu. 
> Note: When a command is invoked, it will emit an activationEvent `onCommand:${commandId}`.

#### Example
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

> Supported from HBuilderX 3.1.22+

Contribute a key binding rule defining what command should be invoked when the user presses a key combination.

#### Example

```json
"keybindings":[
    {
        "command":"extension.firstExtension", 
        "key":"Ctrl+Shift+C",
        "when":"", 
        "macosx":"command+Shift+C"
    }
]
```

## snippets
Contribute snippets for a specific language, See [here] for the list of extensible programming language Id (/ExtensionDocs/Api/other/languageId). The extended sample code is as follows:

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

### Attribute list

|Attribute name		|Type	|Required	|Description																																		|
|--				|--			|--			|--																																			|
|project		|String		|No			|Whether it takes effect only under the specified item type, the current options are "Web","App","Wap2App","uni-app";If you want to support multiple project types, you can separate them by commas, for example: "Web,uni-app,App"	|
|language		|String		|Yes			|Programming language ID, which is used to limit the effect only in the specified language. For the list of language IDs, please refer to [here](/ExtensionDocs/Api/other/languageId)									|
|path|String		|Yes			|The file path of the code block list to be expanded, the format of the file content is shown below|

### Snippets format
The description of each configuration item is as follows:

|Name|Description|
|--	|--	|
|`key`|Snippet name, this name will be displayed in the code assistant list. For example, "console.log" is a key.|
|prefix|Trigger character of snippet|
|body|The content of the snippet.|
|triggerAssist	|True means that the code prompt is triggered on the first tabtop and display code assistant immediately after the snippet is entered into the document. The default is false.|

### Example
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
Contribute a view container into which Custom views can be contributed. The complete extended view process reference [How to register a new view? ](/ExtensionTutorial/views)

#### Attribute list
|Attribute name	|Type												|Required	|Description															|
|--			|--														|--			|--																|
|activitybar|Array&lt;[ViewsContainerDef](#ViewsContainerDef)&gt;	|No			|Define the extended view container list, which can be viewed and opened in the menu `View`-`Show Extended View`|
|rightside|Array&lt;[ViewsContainerDef](#ViewsContainerDef)&gt;	|No|Define the extended view container list, which can be viewed and opened in the menu `View`-`Show Extended View`|

#### Example
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
|Attribute name	|Type	|Required	|Description								|
|--			|--			|--			|--									|
|id			|String		|Yes			|The id of the extended view container (viewContainers)	|
|title		|String		|Yes			|Title displayed on the tab label				|

## views

Extend the new view, you must specify an identifier and name for the view.

TreeView and WebView are supported, and a view container (viewsContainers) only supports binding one view (view).

After the extension point is declared, you need to pass the API to:[window.createTreeView](/ExtensionDocs/Api/windows/createTreeView) or [window.createWebView](/ExtensionDocs/Api/windows/createWebView). The complete extended view process reference [How to register a new view? ](/ExtensionTutorial/views)

### TreeView Example
```json
    //NOTE：package.json are not supported comments, you need to delete the comments when using the following code
   "contributes": {
       "views": {
           "demoview": [{
               //The id needs to be consistent with the viewId parameter in window.createTreeView
               "id": "extensions.treedemo",
               "name": "DemoView"
           }]
       }
    }
```

### WebView Example
`Supported from HBuilderX 2.8.1+`

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
                    //The id needs to be consistent with the viewId parameter in window.createTreeView
                    "id":"viewId",
                    "title":"Custom View Title"
                }
            ]
        },
        ...
     }
```

## menus

Contribute a menu item for a command to the editor or Explorer. The menu item definition contains the command that should be invoked when selected and the condition under which the item should show.

The key in the object configured under the menus node refers to which pop-up menu to register to. The currently supported key value list is as follows:

- `editor/context` ：Editor right-click menu
- `explorer/context` ：Project Explorer right-click menu
- `view/item/context` ：Right-click menu of `View` extended by `views` extension point（`Supported from HBuilderX 2.7.12+`）
- `menubar/file` : The `File` menu of the top menu
- `menubar/edit` : The `Edit` menu of the top menu
- `menubar/select` : The `Select` menu of the top menu
- `menubar/find` : The `Find` menu of the top menu
- `menubar/goto` : The `Goto` menu of the top menu
- `menubar/run` : The `Run` menu of the top menu
- `menubar/publish` : The `Build` menu of the top menu
- `menubar/view` : The `View` menu of the top menu
- `menubar/tool` : The `Tool` menu of the top menu
- `menubar/help` : The `Help` menu of the top menu

### Menus Attribute list

|Attribute name		|Type	|Required	|Description																						|
|--				|--			|--			|--																							|
|id				|String		|No			|The Id of the menu item, how to configure the secondary menu, you need this attribute												|
|command		|String		|No			|The `Command`Id associated with the menu item																	|
|title			|String		|No			|The name of the menu item, if it is not configured, the title of the `command` will be used											|
|[group](#group)|String		|Yes			|For the location of the menu item to be registered, check the currently supported [group list](#group). Note that this attribute must be written, if it is not written, it will be regarded as an invalid menu extension	|
|[when](#when)	|String		|No			|The logical expression that controls whether the menu item is displayed, [Expression Description](#when)											|
|checked	    |String		|No			|`Supported from HBuilderX 2.7.6+` <br/>Control whether the menu item is in the checked logical expression, the expression syntax is consistent with the [when](#when) expression									|

> When the attributes title and command are both empty, it will be recognized as a dividing line.

### Example
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

### Register secondary menu

The secondary menu is implemented by setting the group to %menuId%@1, %menuId%@2, where menuId refers to the id field in the menu extension. The code example is as follows:
```json
   "contributes": {
       "menus": {
         "editor/context": [
           {
             "id":"foo",
             "title": "Menu with submenu",
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

|操作符	|Description	|例子														|
|--		|--		|--															|
|`==`	|相等	|`langId == 'javascript'`									|
|`!=`	|不相等	|`langId != 'html'`								|
|`&&`	|并且	|`explorerResourceCount == 1 && explorerResourceIsFolder`	|
|<code>&#124;&#124;</code>|或者	|<code>explorerResourceIsFolder &#124;&#124; explorerResourceIsWorkspaceFolder</code>|
|`!`	|非	    |`!explorerResourceIsFolder`|
|`=~`	|正则运算	    |`workspaceFolderRelativePath  =~ /^package.json/`|

目前HBuilderX内置变量列表如下：

|变量名														|类型		|Description																																																			|
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
|Attribute name		|Type	|是否必须	|Description	|
|--	            |--			|--		|--		 |
|viewType		|String		|是		|自定义编辑器类型，`全局唯一` |
|displayName	|String		|否		|显示名称（暂时未用）	|
|selector		|Array&lt;[EditorSelctor](#EditorSelctor)&gt;	|是		|匹配模板，指定一个或多个匹配模板，匹配成功的文件会与该类型自定义编辑器关联|
|priority       |String		|否		|优先级（暂时未用）|


#### EditorSelctor
|Attribute name	|Type	|是否必须	|Description   |
|--			|--			|--			|--     |
|fileNamePattern    |String	    |是 |文件名匹配，支持通配符|
