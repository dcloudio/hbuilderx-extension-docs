# createStatusBarItem
> `从HBuilderX 3.8.5及以上版本开始支持`

创建一个状态栏元素

#### 参数说明

|参数名称	|参数类型									|描述												|
|--			|--											|--													|
|alignment	|[StatusBarAlignment](#StatusBarAlignment)	|状态栏元素对其方式									|
|priority	|Number										|状态栏元素优先级。值越高，表示元素应显示得越靠左。	|

#### 返回值

|返回类型						|描述				|
|--								|--					|
|[StatusBarItem](#StatusBarItem)|一个新的状态栏元素	|


#### StatusBarAlignment

状态栏元素对其方式

|枚举值	|描述		|
|--		|--			|
|Left	|与左侧对齐	|
|Right	|与右侧对齐	|

#### StatusBarItem

状态栏元素是在状态栏显示的文本或图标，并可以在单击时运行命令。

**属性列表**

|属性名			|属性类型									|描述																									|
|--				|--											|--																										|
|alignment		|[StatusBarAlignment](#StatusBarAlignment)	|状态栏元素对其方式																						|
|backgroundColor|String										|状态栏元素的背景色。																					|
|color			|String										|状态栏元素的前景色。																					|
|command		|String										|要在单击时运行的命令或命令的标识符。命令必须是已注册的。												|
|id				|String										|状态栏元素标识。																						|
|name			|String										|状态栏元素名称。																						|
|priority		|Number										|状态栏元素优先级。值越高，表示元素应显示得越靠左。														|
|text			|String										|状态栏元素要显示的文本。文本可以包含像$(icon-name)图标，需要在提前在package.json#contributes/icons配置	|
|tooltip		|String										|将鼠标悬停在状态栏元素上时的工具提示文本。																|

**方法列表**

|方法名		|返回值	|描述					|
|--			|--		|--						|
|dispose()	|void	|销毁状态栏元素			|
|hide()		|void	|在状态栏隐藏状态栏元素	|
|show()		|void	|在状态栏显示状态栏元素	|


#### 示例

``` javascript
const myStatusBarItem = hx.window.createStatusBarItem(
    hx.StatusBarAlignment.Right,
    100,
)
myStatusBarItem.text = 'Bar'
// myStatusBarItem.text = '$(icon-name) Bar'
myStatusBarItem.show()
```
