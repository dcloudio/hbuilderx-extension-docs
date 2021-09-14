# showView

> Supported from HBuilderX 2.9.9+ version

Switch the WebView control view of the specified viewId. 

After the plug-in creates multiple WebView views and opens them, you can switch the specified tab page in the left/right view area of the window through this interface. 

This interface is not suitable for creating

#### Parameter

|Name	|Type					|Description											|
|--		|--							|--												|
|viewInfo	|Object	| View information including viewId, conTainerId  |

#### Example
```Javascript
    hx.window.showView({viewId:'your viewid', containerId: 'containerId'});
```