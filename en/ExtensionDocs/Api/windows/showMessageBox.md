# showMessageBox
> Supported from HBuilderX 2.9.12+.

Show a dialog box for selection in the window

#### Parameter

|Name	|Type			|Description					|
|--			|--					|--						|
|options	|[MessageBoxOptions](#Dialog properties)|Dialog content|

#### Returns

|Type		|Description									|
|--						|--										|
|Promise&lt;String&gt;	|A promise that resolves to the selected resources or undefined.	|


#### Dialog properties

Dialog settings, related attributes

|Attribute name		|Type	|Description						|
|--			|--			|--							|
|type		|String		|Message type,Values are['warning'，'info'，'error'，'question'] |
|title		|String		|Dialog title				|
|text		|String		|Dialog content				|
|buttons	|Array&lt;String&gt;|Button group in dialog box |
|defaultButton	|String	|Default button index, can be left blank, default 0 |
|escapeButton	|String	|The index of the operation button to be executed after the default Esc, can be left blank, the default is 1 |


#### Example

``` javascript
let result = hx.window.showMessageBox({
    type: 'error',
    title: 'Dialog title',
    text: 'Dialog content',
    buttons: ['Ok', 'Cancel']
});
result.then((button) => {
    if (button == 'Ok') {
        
    } else if (button == 'Cancel') {
        
    }
});
```
