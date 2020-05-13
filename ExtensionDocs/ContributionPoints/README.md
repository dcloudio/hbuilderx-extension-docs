扩展点是通过在插件`package.json`文件中`contributes`节点下定义的一些JSON格式的配置项。以下是目前HBuilderX支持的扩展点列表：

### configuration
configuration扩展点，会将扩展的配置项注册到HBuilderX的全局可视化配置里`设置`-`插件配置`。

#### 属性列表

##### title
每个插件扩展的配置是分配到同一组下的，title指的是该组的名称，一般写的是插件名称。

##### properties
properties内配置的是一个jsonobject对象，该对象的key代表着要扩展的配置项id，value是一个符合[JSON Schema](https://json-schema.org/understanding-json-schema/reference/index.html)规范的jsonobject，目前支持的字段包括：

- type 类型。支持的类型包括：string、boolean、number。
- description 描述
- default 默认值
- enum  可选值，目前只有type为string或number时可用

#### 示例
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

### commands
commands扩展点用于声明一个`命令`，`命令`可以通过`menus`扩展点和菜单关联到一起
> 注意：当一个`命令`将要执行时，将会触发一个`onCommand:${commandId}`的activationEvent用于激活监听该`命令`的插件

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

### menus
menus扩展点会关联一个`命令`到相应的菜单项里面，当菜单触发时将会执行对应的`命令`。menus节点下配置的对象内的key指的是要注册到哪个弹出菜单里面，目前支持的key值列表如下：
- `editor/context` ：编辑器右键菜单
- `explorer/context` ：项目管理器右键菜单
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

#### 属性列表
|属性名称		|属性类型	|是否必须	|描述																						|
|--				|--			|--			|--																							|
|id				|String		|否			|菜单项的Id，如何要配置二级菜单，则需要该属性												|
|command		|String		|否			|菜单项关联的`命令`Id																		|
|title			|String		|否			|菜单项的名称，如果没有配置，将采用`命令`的title											|
|[group](#group)|String		|是			|菜单项要注册的位置,查看目前支持的[group列表](#group)。注意该属性必须写，不写视为无效菜单扩展	|
|[when](#when)	|String		|否			|控制菜单项是否显示的逻辑表达式,[表达式说明](#when)											|

> 当属性title和command都为空时，将被识别为分割线。

#### 示例
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
#### 注册二级菜单
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

#### group
每个弹出菜单内的group都不一样，下面列出所有的弹出菜单下可用的group。
> 注意：想要将扩展菜单放到弹出菜单的最后，可以将group设置成`0_foot`

- `editor/context`
    * copy
    * goto
    * copyPath
    * assist
    * z_commands

对应的位置如下图所示：

<img src = "/static/snapshots/editor_context.jpg" style="zoom:50%" />

- `explorer/context` ：项目管理器右键菜单
    * new
    * openInExplorer
    * nature
    * cutcopy
    * rename
    * z_commands

对应的位置如下图所示：

<img src = "/static/snapshots/explorer_context.jpg" style="zoom:50%" />

- `menubar/file` : 顶部菜单的`文件`菜单
    * new
    * tab
    * save
    * openInExplorer

对应的位置如下图所示：

<img src = "/static/snapshots/menubar_file.jpg" style="zoom:50%" />

- `menubar/edit` : 顶部菜单的`编辑`菜单
    * undo
    * copy
    * format
    * line
    * delete

对应的位置如下图所示：

<img src = "/static/snapshots/edit.jpg" style="zoom:50%" />

- `menubar/select` : 顶部菜单的`选择`菜单
    * selectAll
    * area
    * word
    * line
    * colum
    * 0_cursor
    * 1_cursor

对应的位置如下图所示：

<img src = "/static/snapshots/select.jpg" style="zoom:50%" />

- `menubar/find` : 顶部菜单的`查找`菜单
    * findFile
    * findWord
    * findSymbol

对应的位置如下图所示：

<img src = "/static/snapshots/find.jpg" style="zoom:50%" />

- `menubar/goto` : 顶部菜单的`跳转`菜单
    * system_goto
    * line_goto
    * define_goto

对应的位置如下图所示：

<img src = "/static/snapshots/goto.jpg" style="zoom:50%" />

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

<img src = "/static/snapshots/view.jpg" style="zoom:50%" />

- `menubar/tool` : 顶部菜单的`工具`菜单
    * shortcuts
    * snippets
    * ext_settings

对应的位置如下图所示：

<img src = "/static/snapshots/tool.jpg" style="zoom:50%" />

- `menubar/help` : 顶部菜单的`帮助`菜单
    * documents
    * checkupdate
    * license

对应的位置如下图所示：

<img src = "/static/snapshots/help.jpg" style="zoom:50%" />


#### when
when表达式用来动态的判断某个条件是否满足(即表达式的运算结果是`true`或者`false`)，目前用于控制一个菜单是否显示。目前支持的表达式运算符如下：

|操作符	|描述	|例子														|
|--		|--		|--															|
|`==`	|相等	|`langId == 'javascript'`									|
|`!=`	|不相等	|`langId != 'html'`								|
|`&&`	|并且	|`explorerResourceCount == 1 && explorerResourceIsFolder`	|
|<code>&#124;&#124;</code>|或者	|<code>explorerResourceIsFolder &#124;&#124; explorerResourceIsWorkspaceFolder</code>|
|`!`	|非	    |`!explorerResourceIsFolder`|

目前HBuilderX内置变量列表如下：

|变量名								|类型	|描述																|
|--									|--		|--																	|
|explorerResourceCount				|Number	|项目管理器选中的资源数量											|
|explorerResourceIsFolder			|Boolean|项目管理器选中的资源是否全是目录									|
|explorerResourceIsWorkspaceFolder	|Boolean|项目管理器选中的资源是否全是项目根目录								|
|isSVN								|Boolean|是否是SVN仓库下的文件												|
|isGit								|Boolean|是否是Git仓库下的文件												|
|activeEditor.file.exists			|Boolean|当前激活的编辑器打开的文件是否存在									|
|activeEditor.file.isProjectFile	|Boolean|当前激活的编辑器打开的文件是否是左侧项目管理器下的文件				|
|activeEditor.readonly				|Boolean|当前激活的编辑器是否是只读											|
|editorTextFocus					|Boolean|当前激活的编辑器是否有焦点											|
|langId								|String	|当前激活的编辑器打开的文档的编程语言id，完整语言Id列表参见[这里](/ExtensionDocs/Api/README.md#languageId)|
|config.*							|Any	|获取某个配置项的值,例子： `config.editor.fontSize`					|
   
