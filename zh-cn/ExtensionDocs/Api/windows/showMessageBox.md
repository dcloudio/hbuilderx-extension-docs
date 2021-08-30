# showMessageBox
> `从HBuilderX 2.9.12及以上版本开始支持`

在窗口显示可供选择的对话框

#### 参数说明

|参数名称	|参数类型			|描述					|
|--			|--					|--						|
|options	|[MessageBoxOptions](#对话框属性)|对话框内容|

#### 返回值

|返回类型				|描述									|
|--						|--										|
|Promise&lt;String&gt;	|如果设置了按钮，返回用户点击了哪个按钮	|


#### 对话框属性

对话框设置，相关属性

|属性名		|属性类型	|描述						|
|--			|--			|--							|
|type		|String		|消息类型,取值有['warning'，'info'，'error'，'question'] |
|title		|String		|对话框标题				|
|text		|String		|对话框内容				|
|buttons	|Array&lt;String&gt;|对话框中的按钮组 |
|defaultButton	|String	|默认按钮索引，可不填默认0 |
|escapeButton	|String	|默认Esc后执行的操作按钮索引，可不填默认1 |


#### 示例

``` javascript
let result = hx.window.showMessageBox({
    type: 'error',
    title: '测试对话框',
    text: '这里是测试对话框内容',
    buttons: ['确定', '取消']
});
result.then((button) => {
    if (button == '确定') {
        
    } else if (button == '取消') {
        
    }
});
```