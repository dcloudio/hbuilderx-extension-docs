# createStatusBarItem
> `Supported from HBuilderX 3.8.5 and above`

Create a status bar item

#### Parameter Description

|Parameter Name	|Parameter Type									|Description												|
|--			|--											|--													|
|alignment	|[StatusBarAlignment](#StatusBarAlignment)	|Status bar item alignment									|
|priority	|Number										|Status bar item priority. Higher values mean the item should be displayed more to the left.	|

#### Return Value

|Return Type						|Description				|
|--								|--					|
|[StatusBarItem](#StatusBarItem)|A new status bar item	|


#### StatusBarAlignment

Status bar item alignment

|Enum Value	|Description		|
|--		|--			|
|Left	|Align to left	|
|Right	|Align to right	|

#### StatusBarItem

A status bar item is text or an icon displayed in the status bar that can run a command when clicked.

**Property List**

|Property Name			|Property Type									|Description																																						|
|--				|--											|--																																							|
|alignment		|[StatusBarAlignment](#StatusBarAlignment)	|Status bar item alignment																																			|
|backgroundColor|String										|Background color of the status bar item.																																		|
|color			|String										|Foreground color of the status bar item.																																		|
|command		|String										|Command or command identifier to run when clicked. The command must be registered.																									|
|id				|String										|Status bar item identifier.																																			|
|name			|String										|Status bar item name.																																			|
|priority		|Number										|Status bar item priority. Higher values mean the item should be displayed more to the left.																											|
|text			|String										|Text to display in the status bar item. Text can include icons like $(icon-name), which need to be configured in advance in [package.json#contributes/icons](/ExtensionDocs/ContributionPoints/README.md#icons)|
|tooltip		|String										|Tooltip text when hovering over the status bar item.																													|

**Method List**

|Method Name		|Return Value	|Description					|
|--			|--		|--						|
|dispose()	|void	|Dispose the status bar item			|
|hide()		|void	|Hide the status bar item	|
|show()		|void	|Show the status bar item	|


#### Example

``` javascript
const myStatusBarItem = hx.window.createStatusBarItem(
    hx.StatusBarAlignment.Right,
    100,
)
myStatusBarItem.text = 'Bar'
// myStatusBarItem.text = '$(icon-name) Bar'
myStatusBarItem.show()
```
