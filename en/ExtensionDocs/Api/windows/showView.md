# showView

> `从HBuilderX 2.9.9及以上版本开始支持`

切换指定viewId的WebView控件视图。插件创建多个WebView视图并打开后，可以通过该接口切换窗口左侧/右侧视图区域中指定的tab页。该接口不适用于创建

#### Parameter

|Name	|Type					|Description											|
|--		|--							|--												|
|viewInfo	|Object	| 包含viewId, conTainerId的视图信息  |

#### Example
```Javascript
    hx.window.showView({viewId:'your viewid', containerId: 'containerId'});
```