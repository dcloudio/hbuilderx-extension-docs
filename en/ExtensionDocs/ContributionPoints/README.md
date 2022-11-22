Contribution Points are a set of JSON declarations that you make in the contributes field of the package.json Extension Manifest. The following is a list of extension points currently supported by HBuilderX:

## configuration
--------

The configuration extension point will register the extended configuration items in the global visualization configuration of HBuilderX `Settings`-`Plugins`.

#### configuration attributes list

**- title**

The configuration of each extension is assigned to the same group. The title is the name of the group and usually the name of the extension.

**- properties**

The configuration in the properties is a jsonobject object, the key of the object represents the id of the configuration item to be extended, and the value is a conformity to [JSON Schema](https://json-schema.org/understanding-json-schema/reference/index .html) canonical jsonobject, currently supported fields include:

- type: string or boolean or number
- description
- default
- enum Optional value, only string or number

#### configuration exmpale
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
--------

Contribute the UI for a command consisting of a title and (optionally) an icon, category, and enabled state. Presentation of contributed commands depends on the containing menu.
> Note: When a command is invoked, it will emit an activationEvent `onCommand:${commandId}`.

##### Example
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

> Supported from HBuilderX 3.1.22+

Contribute a key binding rule defining what command should be invoked when the user presses a key combination.

##### Example

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
--------

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

#### Attribute list

|Attribute name		|Type	|Required	|Description																																		|
|--				|--			|--			|--																																			|
|project		|String		|No			|Whether it takes effect only under the specified item type, the current options are "Web","App","Wap2App","uni-app";If you want to support multiple project types, you can separate them by commas, for example: "Web,uni-app,App"	|
|language		|String		|Yes			|Programming language ID, which is used to limit the effect only in the specified language. For the list of language IDs, please refer to [here](/ExtensionDocs/Api/other/languageId)									|
|path|String		|Yes			|The file path of the code block list to be expanded, the format of the file content is shown below|

#### Snippets format
The description of each configuration item is as follows:

|Name|Description|
|--	|--	|
|`key`|Snippet name, this name will be displayed in the code assistant list. For example, "console.log" is a key.|
|prefix|Trigger character of snippet|
|body|The content of the snippet.|
|triggerAssist	|True means that the code prompt is triggered on the first tabtop and display code assistant immediately after the snippet is entered into the document. The default is false.|

#### Example
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
--------

Extend the new view, you must specify an identifier and name for the view.

TreeView and WebView are supported, and a view container (viewsContainers) only supports binding one view (view).

After the extension point is declared, you need to pass the API to:[window.createTreeView](/ExtensionDocs/Api/windows/createTreeView) or [window.createWebView](/ExtensionDocs/Api/windows/createWebView). The complete extended view process reference [How to register a new view? ](/ExtensionTutorial/views)

#### TreeView Example
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

#### WebView Example

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
--------

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

**Example**

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

The group in each pop-up menu is different, and all the groups available under the pop-up menu are listed below.
> Note: To put the extended menu at the end of the pop-up menu, you can set the group to `0_foot`

- `editor/context`
    * copy
    * goto
    * copyPath
    * assist
    * z_commands

As shown below:

<img src = "/static/snapshots/Plug-in-development/group/editor_context.jpg" style="zoom:50%" />

- `explorer/context`: Project manager right-click menu
    * new
    * openInExplorer
    * nature
    * cutcopy
    * rename
    * z_commands

As shown below:

<img src = "/static/snapshots/Plug-in-development/group/explorer_context.jpg" style="zoom:50%" />

- `menubar/file` : `File` menu
    * new
    * tab
    * save
    * openInExplorer

As shown below:

<img src = "/static/snapshots/Plug-in-development/group/menubar_file.jpg" style="zoom:50%" />

- `menubar/edit` : `Edit` menu
    * undo
    * copy
    * format
    * line
    * delete

As shown below:

<img src = "/static/snapshots/Plug-in-development/group/edit.jpg" style="zoom:50%" />

- `menubar/select` : `Select` menu
    * selectAll
    * area
    * word
    * line
    * colum
    * 0_cursor
    * 1_cursor

As shown below:

<img src = "/static/snapshots/Plug-in-development/group/select.jpg" style="zoom:50%" />

- `menubar/find` : `Find` menu
    * findFile
    * findWord
    * findSymbol

As shown below:

<img src = "/static/snapshots/Plug-in-development/group/find.jpg" style="zoom:50%" />

- `menubar/goto` : `Goto` menu
    * system_goto
    * line_goto
    * define_goto

As shown below:

<img src = "/static/snapshots/Plug-in-development/group/goto.jpg" style="zoom:50%" />

- `menubar/run` : `Run` menu
    * 0_foot

The corresponding position is at the end of the menu.

- `menubar/publish` : `Publish` menu
    * 0_foot

The corresponding position is at the end of the menu.

- `menubar/view` : `View` menu
    * min_window
    * focus_editor
    * show_lineno
    * view_split
    * scroll
    * plus_font

As shown below:

<img src = "/static/snapshots/Plug-in-development/group/view.jpg" style="zoom:50%" />

- `menubar/tool` : `Tool` menu
    * shortcuts
    * snippets
    * ext_settings

As shown below:

<img src = "/static/snapshots/Plug-in-development/group/tool.jpg" style="zoom:50%" />

- `menubar/help` : `Help` menu
    * documents
    * checkupdate
    * license

As shown below:

<img src = "/static/snapshots/Plug-in-development/group/help.jpg" style="zoom:50%" />


### when
The when expression is used to dynamically determine whether a certain condition is satisfied (that is, the result of the expression is `true` or `false`). It is currently used to control whether a menu is displayed. The currently supported expression operators are as follows:

|Operator	|Description	|Example														|
|--		|--		|--															|
|`==`	|euqal	|`langId == 'javascript'`									|
|`!=`	|not equal	|`langId != 'html'`								|
|`&&`	|and	|`explorerResourceCount == 1 && explorerResourceIsFolder`	|
|<code>&#124;&#124;</code>|Or	|<code>explorerResourceIsFolder &#124;&#124; explorerResourceIsWorkspaceFolder</code>|
|`!`	|No	    |`!explorerResourceIsFolder`|
|`=~`	|Regular expression    |`workspaceFolderRelativePath  =~ /^package.json/`|

The current HBuilderX built-in variable list is as follows:

|Variable Name														|Type		|Description																																																			|
|--																|--			|--																																																				|
|workspaceFolderRelativePath			|String	|The relative path relative to the project, for example: pages/user/user.vue																													|
|workspaceRelativePath						|String	|The relative path relative to the project (plus the project name), for example: HelloUniapp/pages/user/user.vue															|
|workspaceFolder.type							|String	|Item type, options values: UniApp_Vue,Web,App,Wap2App,Extension,Unkown																						|
|explorerResourceCount						|Number	|The number of resources selected by the project explorer																																									|
|explorerResourceIsFolder					|Boolean|Whether the resources selected by the project explorer are all directories																																					|
|explorerResourceIsWorkspaceFolder|Boolean|Whether the resources selected by the project explorer are all the project root directory																																		|
|isSVN														|Boolean|Is it a file in the SVN																																										|
|isGit														|Boolean|Is it a file under the Git repository																																										|
|activeEditor.file.exists					|Boolean|Whether the file opened by the currently active editor exists																																				|
|activeEditor.file.isProjectFile	|Boolean|Whether the file opened by the currently active editor is the file under the project explorer on the left																										|
|activeEditor.readonly						|Boolean|Whether the currently active editor is read-only																																								|
|editorTextFocus									|Boolean|Whether the currently active editor has focus																																								|
|langId														|String	|The programming language id of the document opened by the currently active editor, see [here] for the complete language id list(/ExtensionDocs/Api/other/languageId)|
|viewItem													|String	|The contextValue of the currently selected item in the view expanded by `views`																											|
|config.*													|Any		|Get the value of a configuration item, example: `config.editor.fontSize`																												|
|isMac														|Boolean|Whether the current computer operating system is MacOSX (Supported from HBuilderX3.2.22+)																							|
|isWindows												|Boolean|Whether the current computer operating system is MacOSX (Supported from HBuilderX3.2.22+)																			|
|editorHasSelection								|Boolean|Whether the currently activated editor has selected content (Supported from HBuilderX3.2.22+)																				|

## customEditors
--------

The customEditors contribution point is how your extension tells HBuilderX about the custom editors that it provides. For example, HBuilderX needs to know what types of files your custom editor works with as well as how to identify your custom editor in any UI.

Complete reference for the process of extending a custom editor [How to extend a custom editor? ](/ExtensionTutorial/customeditor)

#### For example:
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

#### Attributes List
|Attribute name		|Type	|Required	|Description	|
|--	            |--			|--		|--		 |
|viewType		|String		|Yes		|Custom editor type, `globally unique |
|displayName	|String		|No		|Display name（unused）	|
|selector		|Array&lt;[EditorSelctor](#EditorSelctor)&gt;	|Yes		|Matching template, specify one or more matching templates, the files that match successfully will be associated with the custom editor of this type|
|priority       |String		|No		|Priority (unused)）|


#### EditorSelctor
|Attribute name	|Type	|Required|Description   |
|--			|--			|--			|--     |
|fileNamePattern    |String	    |Yes |File name matching, supports wildcards|
