擴展點是通過在插件`package.json`文件中`contributes`節點下定義的壹些JSON格式的配置項。以下是目前HBuilderX支持的擴展點列表：

## configuration
--------

configuration擴展點，會將擴展的配置項註冊到HBuilderX的全局可視化配置裏`設置`-`插件配置`。

#### configuration屬性列表:

**- title**

每個插件擴展的配置是分配到同壹組下的，title指的是該組的名稱，壹般寫的是插件名稱。

**- properties**

properties內配置的是壹個jsonobject對象，該對象的key代表著要擴展的配置項id，value是壹個符合[JSON Schema](https://json-schema.org/understanding-json-schema/reference/index.html)規範的jsonobject，目前支持的字段包括：

- type 類型。支持的類型包括：string、boolean、number。
- description 描述
- default 默認值
- enum  可選值，目前只有type為string或number時可用

#### configuration示例:
```json
    "contributes": {
        "configuration":{
            "title":"eslint-js",
            "properties":{
                "eslint-js.autoFixOnSave":{
                    "type":"boolean",
                    "default":true,
                    "description":"保存時自動修復"
                },
                "eslint-js.validateOnDocumentChanged":{
                    "type":"boolean",
                    "default":false,
                    "description":"啟用實時校驗"
                }
            }
        }
    }
```
效果圖如下：

<img src="/static/snapshots/plugins_setting.jpg" style="zoom:45%" />


## commands
--------

commands擴展點用於聲明壹個`命令`，`命令`可以通過`menus`擴展點和菜單關聯到壹起
> 註意：當壹個`命令`將要執行時，將會觸發壹個`onCommand:${commandId}`的[activationEvent](/ExtensionDocs/activation_event.md)用於激活監聽該`命令`的插件

##### 示例:
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
--------

> keybindings擴展點, 僅對HBuilderX 3.1.22+版本生效。

keybindings擴展點用於聲明快捷鍵綁定.

##### 示例:

```json
"keybindings":[
    {
        "command":"extension.firstExtension",    // command為您開發的插件中的command
        "key":"Ctrl+Shift+C",                    // key為要綁定的快捷鍵
        "when":"",                               // when表達式用來動態的判斷某個條件是否滿足，強烈建議設置此項。
        "macosx":"command+Shift+C"               // MacOSX系統的快捷鍵；如不設置此項，MacOSX系統，會將key中的ctrl轉為command
    }
]
```

## snippets
--------

snippets擴展點可以擴展指定編程語言的代碼塊，可擴展的編程語言Id列表見[這裏](/ExtensionDocs/Api/other/languageId)。擴展示例代碼如下：

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

#### 屬性列表

|屬性名稱		|屬性類型	|是否必須	|描述																																		|
|--				|--			|--			|--																																			|
|project		|String		|否			|是否只在指定的項目類型下生效，目前的可取值為"Web","App","Wap2App","uni-app";如果要支持多項目類型可以通過逗號分隔，例如："Web,uni-app,App"	|
|language		|String		|是			|編程語言ID，用於限定只在指定的語言下生效，語言Id的列表參見[這裏](/ExtensionDocs/Api/other/languageId)									|
|path|String		|是			|要擴展的代碼塊列表文件路徑，文件內容格式見下面|

#### 代碼塊格式
每個配置項的說明如下表：

|名稱|描述|
|--	|--	|
|`key`|代碼塊顯示名稱，顯示在代碼助手列表中的名字，以下例子中"console.log"就是壹個key。|
|prefix|代碼塊的觸發字符，就是敲什麽字母匹配這個代碼塊。|
|body|代碼塊的內容。內容中有如下特殊格式：<br />$1 表示代碼塊輸入後光標的所在位置。如需要多光標，就在多個地方配置$1,如該位置有預置數據，則寫法是${1:foo1}，多選項即下拉候選列表使用${1:foo1/foo2/foo3}；<br />$2 表示代碼塊輸入後再次按tab後光標的切換位置tabstops（代碼塊展開後按tab可以跳到下壹個tabstop；<br />$0 代表代碼塊輸入後最終光標的所在位置（也可以按回車直接跳過去）。<br />雙引號使用\"轉義，換行使用多個數組表示，每個行壹個數組，用雙引號包圍，並用逗號分隔，縮進需要用\t表示，不能直接輸入縮進！|
|triggerAssist	|為true表示該代碼塊輸入到文檔後立即在第壹個tabstop上觸發代碼提示，拉出代碼助手，默認為false。|

#### 代碼塊示例
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
--------

在窗體左側區域擴展壹個和項目管理器同級的tab項，完整的擴展視圖流程參考[如何註冊壹個新的視圖？](/ExtensionTutorial/views)

#### 屬性列表
|屬性名稱	|屬性類型												|是否必須	|描述															|
|--			|--														|--			|--																|
|activitybar|Array&lt;[ViewsContainerDef](#ViewsContainerDef)&gt;	|不是			|定義擴展的視圖容器列表，可在菜單`視圖`-`顯示擴展視圖`中查看打開|
|rightside|Array&lt;[ViewsContainerDef](#ViewsContainerDef)&gt;	|不是|定義擴展的視圖容器列表，可在菜單`視圖`-`顯示擴展視圖`中查看打開|

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
|屬性名稱	|屬性類型	|是否必須	|描述								|
|--			|--			|--			|--									|
|id			|String		|是			|擴展的視圖容器(viewContainers)的id	|
|title		|String		|是			|顯示在tab標簽上的標題				|

## views
--------

擴展新的視圖，擴展的view必須和`viewsContainers`內定義的視圖容器綁定以後才能生效。

目前支持TreeView和WebView，並且壹個視圖容器（viewsContainers）僅支持綁定壹個視圖（view）。

在該擴展點聲明後，需要通過API：[window.createTreeView](/ExtensionDocs/Api/windows/createTreeView)或者[window.createWebView](/ExtensionDocs/Api/windows/createWebView)實現。完整的擴展視圖流程參考[如何註冊壹個新的視圖？](/ExtensionTutorial/views)

#### TreeView 示例

```json
    //NOTE：package.json不支持註釋，以下代碼使用時需要將註釋刪掉
   "contributes": {
       "views": {
           //綁定的視圖容器（viewContainers）的Id，目前壹個視圖容器僅支持綁定壹個視圖（view）
           "demoview": [{
               //該id需要和window.createTreeView中的viewId參數壹致
               "id": "extensions.treedemo",
               "name": "DemoView"
           }]
       }
    }
```

#### WebView 示例

`從HBuilderX 2.8.1及以上版本開始支持`

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
                    //該id需要和window.createWebView中的viewId參數壹致
                    "id":"viewId",
                    "title":"Custom View Title"
                }
            ]
        },
        ...
     }
```

## menus
--------

menus擴展點會關聯壹個`命令`到相應的菜單項裏面，當菜單觸發時將會執行對應的`命令。

menus節點下配置的對象內的key指的是要註冊到哪個**`彈出菜單`**裏面，[詳情參考](#group)

### menus屬性列表

|屬性名稱		|屬性類型	|是否必須	|描述																						|
|--				|--			|--			|--																							|
|id				|String		|否			|菜單項的Id，如果要配置二級菜單，則需要該屬性												|
|command		|String		|否			|菜單項關聯的`命令`Id																		|
|title			|String		|否			|菜單項的名稱，如果沒有配置，將采用`命令`的title											|
|[group](#group)|String		|是			|菜單項要註冊的位置,查看目前支持的[group列表](#group)。註意該屬性必須寫，不寫視為無效菜單擴展	|
|[when](#when)	|String		|否			|控制菜單項是否顯示的邏輯表達式,[表達式說明](#when)											|
|checked	    |String		|否			|`從HBuilderX 2.7.6及以上版本開始支持` <br/>控制菜單項是否處於checked的邏輯表達式,表達式語法和[when](#when)表達式壹致										|

> 當屬性title和command都為空時，將被識別為分割線。

**示例**

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

### 註冊二級菜單

二級菜單通過將group設置為%menuId%@1、%menuId%@2的方式來實現，其中menuId指的是菜單擴展中的id字段。代碼示例如下:
```json
   "contributes": {
       "menus": {
         "editor/context": [
           {
             "id":"foo",
             "title": "帶子菜單的菜單",
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

每個彈出菜單內的group都不壹樣，下面列出所有的彈出菜單下可用的group。

|grop	|說明	|
|--	|--	|
|[editor/context](#editorContext)	|編輯器右鍵菜單[詳情](#editorContext)	|
|[explorer/context](#explorerContext)	|項目管理器右鍵菜單 [詳情](#explorerContext)	|
|view/item/context	|通過`views`擴展點擴展的`視圖`的右鍵菜單, 僅支持HBuilderX 2.7.12及以上版本	|
|[menubar/file](#menubarFile)	|頂部菜單的`文件`菜單 [詳情](#menubarFile)	|
|[menubar/edit](#menubarEdit)	|頂部菜單的`編輯`菜單 [詳情](#menubarEdit)	|
|[menubar/select](#menubarSelect)	|頂部菜單的`選擇`菜單 [詳情](#menubarSelect)	|
|[menubar/find](#menubarFind)	|頂部菜單的`查找`菜單 [詳情](#menubarFind)	|
|[menubar/goto](#menubarGoto)	|頂部菜單的`跳轉`菜單 [詳情](#menubarGoto)	|
|[menubar/run](#menubarRun)	|頂部菜單的`運行`菜單 [詳情](#menubarRun)	|
|[menubar/publish](#menubarPublish)	|頂部菜單的`發行`菜單 [詳情](#menubarPublish)	|
|[menubar/view](#menubarView)	|頂部菜單的`視圖`菜單 [詳情](#menubarView)	|
|[menubar/tool](#menubarTool)	|頂部菜單的`工具`菜單 [詳情](#menubarTool)	|
|[menubar/help](#menubarHelp)	|頂部菜單的`幫助`菜單 [詳情](#menubarHelp)	|

> 註意：想要將擴展菜單放到彈出菜單的最後，可以將group設置成`0_foot`

#### - editor/context@editorContext

* copy
* goto
* copyPath
* assist
* z_commands

對應的位置如下圖所示：

<img src = "/static/snapshots/Plug-in-development/group/editor_context.jpg" style="zoom:45%" />

#### - explorer/context: 項目管理器右鍵菜單@explorerContext

* new
* openInExplorer
* nature
* cutcopy
* rename
* z_commands

對應的位置如下圖所示：

<img src = "/static/snapshots/Plug-in-development/group/explorer_context.jpg" style="zoom:45%" />

#### - menubar/file: 頂部菜單的文件菜單@menubarFile

* new
* tab
* save
* openInExplorer

對應的位置如下圖所示：

<img src = "/static/snapshots/Plug-in-development/group/menubar_file.jpg" style="zoom:45%" />

#### - menubar/edit: 頂部菜單的編輯菜單@menubarEdit

* undo
* copy
* format
* line
* delete

對應的位置如下圖所示：

<img src = "/static/snapshots/Plug-in-development/group/edit.jpg" style="zoom:45%" />

#### - menubar/select: 頂部菜單的選擇菜單@menubarSelect

* selectAll
* area
* word
* line
* colum
* 0_cursor
* 1_cursor

對應的位置如下圖所示：

<img src = "/static/snapshots/Plug-in-development/group/select.jpg" style="zoom:45%" />

#### - menubar/find: 頂部菜單的查找菜單@menubarFind

* findFile
* findWord
* findSymbol

對應的位置如下圖所示：

<img src = "/static/snapshots/Plug-in-development/group/find.jpg" style="zoom:45%" />

#### - menubar/goto: 頂部菜單的跳轉菜單@menubarGoto

* system_goto
* line_goto
* define_goto

對應的位置如下圖所示：

<img src = "/static/snapshots/Plug-in-development/group/goto.jpg" style="zoom:45%" />

#### - menubar/run: 頂部菜單的運行菜單@menubarRun

0_foot , 對應的位置在菜單的末尾。

#### - menubar/publish: 頂部菜單的發行菜單@menubarPublish

0_foot，對應的位置在菜單的末尾。

#### - menubar/view: 頂部菜單的視圖菜單@menubarView

* min_window
* focus_editor
* show_lineno
* view_split
* scroll
* plus_font

對應的位置如下圖所示：

<img src = "/static/snapshots/Plug-in-development/group/view.jpg" style="zoom:45%" />

#### - menubar/tool: 頂部菜單的工具菜單@menubarTool

* shortcuts
* snippets
* ext_settings

對應的位置如下圖所示：

<img src = "/static/snapshots/Plug-in-development/group/tool.jpg" style="zoom:45%" />

#### - menubar/help: 頂部菜單的幫助菜單@menubarHelp

* documents
* checkupdate
* license

對應的位置如下圖所示：

<img src = "/static/snapshots/Plug-in-development/group/help.jpg" style="zoom:45%" />


### when表達式
when表達式用來動態的判斷某個條件是否滿足(即表達式的運算結果是`true`或者`false`)，目前用於控制壹個菜單是否顯示。目前支持的表達式運算符如下：

|操作符	|描述	|例子														|
|--		|--		|--															|
|`==`	|相等	|`langId == 'javascript'`									|
|`!=`	|不相等	|`langId != 'html'`								|
|`&&`	|並且	|`explorerResourceCount == 1 && explorerResourceIsFolder`	|
|<code>&#124;&#124;</code>|或者	|<code>explorerResourceIsFolder &#124;&#124; explorerResourceIsWorkspaceFolder</code>|
|`!`	|非	    |`!explorerResourceIsFolder`|
|`=~`	|正則運算	    |`workspaceFolderRelativePath  =~ /^package.json/`|

目前HBuilderX內置變量列表如下：

|變量名														|類型		|描述																																																			|
|--																|--			|--																																																				|
|workspaceFolderRelativePath			|String	|相對於項目的相對路徑，舉例： pages/user/user.vue																													|
|workspaceRelativePath						|String	|相對於項目的相對路徑（加上項目名稱），舉例： HelloUniapp/pages/user/user.vue															|
|workspaceFolder.type							|String	|項目類型，可取值：UniApp_Vue,Web,App,Wap2App,Extension,Unkown																						|
|explorerResourceCount						|Number	|項目管理器選中的資源數量																																									|
|explorerResourceIsFolder					|Boolean|項目管理器選中的資源是否全是目錄																																					|
|explorerResourceIsWorkspaceFolder|Boolean|項目管理器選中的資源是否全是項目根目錄																																		|
|isSVN														|Boolean|是否是SVN倉庫下的文件																																										|
|isGit														|Boolean|是否是Git倉庫下的文件																																										|
|activeEditor.file.exists					|Boolean|當前激活的編輯器打開的文件是否存在																																				|
|activeEditor.file.isProjectFile	|Boolean|當前激活的編輯器打開的文件是否是左側項目管理器下的文件																										|
|activeEditor.readonly						|Boolean|當前激活的編輯器是否是只讀																																								|
|editorTextFocus									|Boolean|當前激活的編輯器是否有焦點																																								|
|langId														|String	|當前激活的編輯器打開的文檔的編程語言id，完整語言Id列表參見[這裏](/ExtensionDocs/Api/other/languageId)|
|viewItem													|String	|通過`views`擴展的視圖中當前選擇的item的contextValue																											|
|config.*													|Any		|獲取某個配置項的值,例子： `config.editor.fontSize`																												|
|isMac														|Boolean|當前電腦操作系統是否是MacOSX（僅對HBuilderX3.2.22+版本生效）																							|
|isWindows												|Boolean|當前電腦操作系統是否是Windows（僅對HBuilderX3.2.22+版本生效）																						|
|editorHasSelection								|Boolean|當前激活的編輯器是否有選中的內容 （僅對HBuilderX3.2.22+版本生效）																				|

## customEditors
--------

插件可以通過該擴展點擴展多個不同類型的自定義編輯器，自定義編輯器可以設置文件匹配模式，用戶通過項目管理器打開的文件匹配到某壹類型時，在編輯器區域創建webview視圖，關聯打開的文件。

完整的擴展自定義編輯器流程參考[如何擴展壹個自定義編輯器？](/ExtensionTutorial/customeditor)

#### 擴展點示例如下：
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

#### 屬性列表
|屬性名稱		|屬性類型	|是否必須	|描述	|
|--	            |--			|--		|--		 |
|viewType		|String		|是		|自定義編輯器類型，`全局唯壹` |
|displayName	|String		|否		|顯示名稱（暫時未用）	|
|selector		|Array&lt;[EditorSelctor](#EditorSelctor)&gt;	|是		|匹配模板，指定壹個或多個匹配模板，匹配成功的文件會與該類型自定義編輯器關聯|
|priority       |String		|否		|優先級（暫時未用）|


#### EditorSelctor
|屬性名稱	|屬性類型	|是否必須	|描述   |
|--			|--			|--			|--     |
|fileNamePattern    |String	    |是 |文件名匹配，支持通配符|

### icons
--------

icons扩展点用于声明一个从图标（最好是SVG）和图标字体创建自己的图标主题

|属性名称		|属性类型	|描述																									|
|--				|--			|--																										|
|iconPath		|String		|使用svg/png时：图像的路径。																			|
|fontCharacter	|String		|使用字形字体时：要使用的字体中的字符。																	|
|fontColor		|String		|使用字形时字体：用于字形的颜色。																		|
|fontSize		|String		|使用字体时：字体大小。默认情况下，将使用字体规范中指定的大小。应该是父字体大小的相对大小（例如150%）。	|
|fontId			|String		|使用字体时：字体的id。如果未指定，将选取字体指定部分中指定的第一个字体									|

##### 示例:
```json
    "contributes": {
		"icons": {
			"loading": {
				"description": "Loading Icon",
				"default": {
					"fontPath": "./icon.ttf",
					"fontCharacter": "\\eb19"
				}
			}
		}
    }
```