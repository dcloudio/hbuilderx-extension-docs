# commands

commands二级模块对象，用于处理和`命令`相关的逻辑。`命令`包含2部分：唯一ID和自定义的function，可以通过registerCommand或registerTextEditorCommand注册。

`命令`可以通过以下方式触发：


## 声明command

#### 菜单：将命令通过`menus`扩展点关联到某个菜单。

1. 通过commands扩展点声明一个command，然后关联到`menus`上

```json
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

#### 用户自定义快捷键

用户自定义快捷键：使用插件的用户可以通过得知`命令`的ID（一般在package.json中有声明），然后通过`自定义快捷键`配置一个快捷键。

```json
// Keybindings.json;
[
    {
		"key":"ctrl+shift+0",
		"command":"extension.firstExtension"
	}
]
```

## executeCommand

执行指定id的`命令`。除了插件扩展的`命令`外，还可以执行HBuilderX内置的`命令`，完整的内置`命令`列表可以通过HBuilderX的顶部菜单`工具`-`自定义快捷键`，然后在打开的配置文件左侧部分找到所有列出的`command`字段，如下图：

<img src="/static/snapshots/api/commands@2x.png" style="zoom:50%" />

##### 参数说明

|参数名称	    |参数类型	    |描述			|
|--			|--			|--				|
|command	|String		|要执行的`命令`id	|

##### 返回值
|返回类型	|描述		|
|--			|--			|
|Promise	|Promise对象|


##### 示例
``` javascript
//执行插件扩展的命令
hx.commands.executeCommand('extension.firstExtension')
//执行内置的命令（关闭所有打开的编辑器）
hx.commands.executeCommand('workbench.action.closeAllEditors')
```

## registerCommand

注册一个指定id的`命令`，并关联一个自定义的函数

##### 参数说明

|参数名称	|参数类型	|描述					|
|--			|--			|--						|
|commandId	|String		|`命令`id				|
|handler	|Function	|`命令`触发时执行的函数	|

##### 返回值
|返回类型					|描述																									|
|--							|--																										|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	|该`命令`的销毁器,可将该对象放置到插件的context.subscriptions数组内，插件卸载时，将会自动注销该`命令`	|


##### 示例
``` javascript
    let disposable = hx.commands.registerCommand('extension.firstExtension',()=>{
        hx.window.showInformationMessage("Hello My First Extension.");
    });
    context.subscriptions.push(disposable);
```
