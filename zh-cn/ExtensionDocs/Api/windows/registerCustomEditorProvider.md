# registerCustomEditorProvider
`从HBuilderX 2.9.2及以上版本开始支持`

注册指定类型的CustomEditorProvider，当用户打开匹配的文件时，在编辑器区域创建自定义编辑器标签卡。自定义编辑器使用webview提供视图显示。

#### 参数说明

|参数名称	|参数类型					|描述											|
|--		|--							|--												|
|type	|String	|自定义编辑器类型，需要首先在配置扩展点`customEditors`中声明。	|
|provider|CustomEditorProvider |用户自定义CustomEditorProvider|


#### 示例
```javascript
    hx.window.registerCustomEditorProvider("catEdit.catScratch", new CatCustomEditorProvider());
```
