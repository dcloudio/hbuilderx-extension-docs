# showView

> `從HBuilderX 2.9.9及以上版本開始支持`

切換指定viewId的WebView控件視圖。插件創建多個WebView視圖並打開後，可以通過該接口切換窗口左側/右側視圖區域中指定的tab頁。該接口不適用於創建

#### 參數說明

|參數名稱	|參數類型					|描述											|
|--		|--							|--												|
|viewInfo	|Object	| 包含viewId, conTainerId的視圖信息  |

#### 示例
```Javascript
    hx.window.showView({viewId:'your viewid', containerId: 'containerId'});
```