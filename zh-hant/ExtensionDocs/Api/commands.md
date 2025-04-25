# commands

commands二級模塊對象，用於處理和`命令`相關的邏輯。`命令`包含2部分：唯一ID和自定義的function，可以通過registerCommand或registerTextEditorCommand註冊。

`命令`可以通過以下方式觸發：


## 聲明command

#### 菜單：將命令通過`menus`擴展點關聯到某個菜單。

1. 通過commands擴展點聲明一個command，然後關聯到`menus`上

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

2. 在插件的激活回調(`activate`)中註冊該command

``` javascript
    hx.commands.registerCommand('extension.firstExtension',()=>{
        hx.window.showInformationMessage("Hello My First Extension.");
    });
```

#### 用戶自定義快捷鍵

用戶自定義快捷鍵：使用插件的用戶可以通過得知`命令`的ID（一般在package.json中有聲明），然後通過`自定義快捷鍵`配置一個快捷鍵。

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

執行指定id的`命令`。除了插件擴展的`命令`外，還可以執行HBuilderX內置的`命令`，完整的內置`命令`列表可以通過HBuilderX的頂部菜單`工具`-`自定義快捷鍵`，然後在打開的配置文件左側部分找到所有列出的`command`字段，如下圖：

<img src="/static/snapshots/api/commands@2x.png" style="zoom:50%" />

##### 參數說明

|參數名稱	    |參數類型	    |描述			|
|--			|--			|--				|
|command	|String		|要執行的`命令`id	|

##### 返回值
|返回類型	|描述		|
|--			|--			|
|Promise	|Promise對象|


##### 示例
``` javascript
//執行插件擴展的命令
hx.commands.executeCommand('extension.firstExtension')
//執行內置的命令（關閉所有打開的編輯器）
hx.commands.executeCommand('workbench.action.closeAllEditors')
```

## registerCommand

註冊一個指定id的`命令`，並關聯一個自定義的函數

##### 參數說明

|參數名稱	|參數類型	|描述					|
|--			|--			|--						|
|commandId	|String		|`命令`id				|
|handler	|Function	|`命令`觸發時執行的函數	|

##### 返回值
|返回類型					|描述																									|
|--							|--																										|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	|該`命令`的銷燬器,可將該對象放置到插件的context.subscriptions數組內，插件卸載時，將會自動註銷該`命令`	|


##### 示例
``` javascript
    let disposable = hx.commands.registerCommand('extension.firstExtension',()=>{
        hx.window.showInformationMessage("Hello My First Extension.");
    });
    context.subscriptions.push(disposable);
```
