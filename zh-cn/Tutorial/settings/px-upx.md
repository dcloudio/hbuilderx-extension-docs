# HBuilderX 自动转px为upx@pxToUpx

uni-app 使用 upx 作为默认尺寸单位， upx 是相对于基准宽度的单位，可以根据屏幕宽度进行自适应。uni-app 规定屏幕基准宽度750upx。  
但如果设计稿不是750px，那换算单位可头疼了。
莫急，能让计算机算的，不会让人算。
  
1. 在HBuilderX 【设置】【编辑器设置】中进行配置  

<img src="/static/snapshots/tutorial/upx_1.png" style="zoom: 80%;" />

2. 启用px转upx后，就可以愉快的在uni-app中使用了。如下图：

<img src="/static/snapshots/tutorial/upx_2.png" style="zoom: 80%;" />

关于upx尺寸单位，更多见：[upx尺寸单位](https://uniapp.dcloud.io/frame?id=%E5%B0%BA%E5%AF%B8%E5%8D%95%E4%BD%8D)  

当然，在普通web开发中，也是支持px转rem的。