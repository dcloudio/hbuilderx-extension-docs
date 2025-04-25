# HBuilderX 自動轉px爲upx

uni-app 使用 upx 作爲默認尺寸單位， upx 是相對於基準寬度的單位，可以根據屏幕寬度進行自適應。uni-app 規定屏幕基準寬度750upx。  
但如果設計稿不是750px，那換算單位可頭疼了。
莫急，能讓計算機算的，不會讓人算。
  
1. 在HBuilderX 【設置】【編輯器設置】中進行配置  

<img src="/static/snapshots/tutorial/settings/upx/upx_1.png" style="zoom: 80%;" />

2. 啓用px轉upx後，就可以愉快的在uni-app中使用了。如下圖：

<img src="/static/snapshots/tutorial/settings/upx/upx_2.png" style="zoom: 80%;" />

關於upx尺寸單位，更多見：[upx尺寸單位](https://uniapp.dcloud.io/frame?id=%E5%B0%BA%E5%AF%B8%E5%8D%95%E4%BD%8D)  

當然，在普通web開發中，也是支持px轉rem的。