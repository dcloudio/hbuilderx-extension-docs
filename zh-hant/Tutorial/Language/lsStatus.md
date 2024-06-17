# 語言服務狀態面板

> HbuilderX 4.18+起，新增語言服務狀態面板，支持實時查看語言服務主要進程狀態，更加方便的切換平臺和語法校驗開關(僅uni-app x)

## 怎麽打開
1.界面底部狀態欄

點擊紅框區域打開狀態面板

<div>
<img src="https://web-ext-storage.dcloud.net.cn/hx/lsstatus/zh/1.png" style="border:1px solid #eee;  border-radius: 5px;" />
</div>

2.右擊項目管理器的某一個uni-app x項目

<div>
<img src="https://web-ext-storage.dcloud.net.cn/hx/lsstatus/zh/2.png" style="border:1px solid #eee;  border-radius: 5px;" />
</div>

3.錯誤校驗懸浮框

<div>
<img src="https://web-ext-storage.dcloud.net.cn/hx/lsstatus/zh/3.png" style="border:1px solid #eee;  border-radius: 5px;" />
</div>

## 功能

1.查看TypeScript服務和索引服務進程的運行狀態

- 正常狀態

<div>
<img src="https://web-ext-storage.dcloud.net.cn/hx/lsstatus/zh/4.png" style="border:1px solid #eee;  border-radius: 5px;" />
</div>

- 異常狀態

此時底部狀態欄也隨之變化

<div>
<img src="https://web-ext-storage.dcloud.net.cn/hx/lsstatus/zh/5.png" style="border:1px solid #eee;  border-radius: 5px;" />
</div>

2.切換代碼提示和語法校驗平臺

<div>
<img src="https://web-ext-storage.dcloud.net.cn/hx/lsstatus/zh/6.png" style="border:1px solid #eee;  border-radius: 5px;" />
</div>

3.控製語法校驗開關
   
<div>
<img src="https://web-ext-storage.dcloud.net.cn/hx/lsstatus/zh/7.png" style="border:1px solid #eee;  border-radius: 5px;" />
</div>

4.捕獲語言服務錯誤

- 一旦語言服務內部出錯了，狀態欄的狀態就會隨之變化

<div>
<img src="https://web-ext-storage.dcloud.net.cn/hx/lsstatus/zh/8.png" style="border:1px solid #eee;  border-radius: 5px;" />
</div>

- 點擊狀態欄文字可以查看詳細的錯誤信息

<div>
<img src="https://web-ext-storage.dcloud.net.cn/hx/lsstatus/zh/9.png" style="border:1px solid #eee;  border-radius: 5px;" />
</div>

- 點擊`忽略`按鈕表示忽略此錯誤，此時狀態欄會恢復到正常的狀態

<div>
<img src="https://web-ext-storage.dcloud.net.cn/hx/lsstatus/zh/10.png" style="border:1px solid #eee;  border-radius: 5px;" />
</div>

- 點擊`報Bug`按鈕，會跳轉到bug提交頁面，語言服務報錯內容會被寫入到復現步驟裏邊，此時您可以完善其他的bug信息，bug提交成功後狀態欄會恢復到正常的狀態

<div>
<img src="https://web-ext-storage.dcloud.net.cn/hx/lsstatus/zh/12.png" style="border:1px solid #eee;  border-radius: 5px;" />
</div>