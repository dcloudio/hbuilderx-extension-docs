# WebView2 執行時安裝說明（Windows 7 / 8 使用者）

HBuilderX 依賴 Microsoft Edge WebView2 Runtime 才能使 webview 正常渲染。

## 一、確認系統版本
* 如果您使用的是 Windows 7 / 8 / 8.1，請注意：微軟已停止對這些系統提供最新支援。最後相容的 WebView2 Runtime 版本為 **109.0.1518.140**。
* 若檢測到您的系統尚未安裝 WebView2 執行環境，請依照以下步驟進行安裝：

<img src="/static/snapshots/tutorial/question/webview2RuntimeMessage_cn.png" style="zoom:60%;" />

## 二、下載執行時安裝包
1. 開啟百度網盤連結：
   [https://pan.baidu.com/s/1A5mPulsy9wM_s-C_TisKRg](https://pan.baidu.com/s/1A5mPulsy9wM_s-C_TisKRg?pwd=jxwk)
   提取碼：`jxwk`

2. 下載壓縮檔案：
   `Webview2_Runtime_109.0.1518.140.zip`

## 三、找到程式目錄

如果您不確定程式安裝位置，請按照以下操作：

1. 找到桌面上的程式快捷方式（HBuilder X.lnk）。
2. 右鍵點擊該快捷方式，選擇 **內容**。
3. 在彈出視窗中，點擊 **開啟檔案所在的位置**。
4. 這樣即可直接進入程式安裝目錄。

## 四、解壓執行環境

1. 將 `Webview2_Runtime_109.0.1518.140.zip` 解壓縮到剛才打開的程式目錄。
* 解壓後目錄結構應當如下：

```bash
HBuilderX.exe
Webview2_Runtime_109.0.1518.140/
    ├─ msedgewebview2.exe
    ├─ msedge.dll
    ├─ icudtl.dat
    ├─ resources.pak
    ├─ locales/
    └─ ...
```
2. **注意**：必須保持解壓後的目錄結構完整，不能只複製部分檔案。

## 五、重新啟動應用

1. 完成解壓後，請關閉並重新啟動程式。
2. 程式會自動檢測 webview2_runtime 目錄，並使用該執行環境啟動。
3. 如果目錄正確，程式即可正常運行。
