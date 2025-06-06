# 重構@refactor

---

## 重新命名符號@renameSymbol

> 自 **`4.71+`** 版本起，HBuilderX 支援對符號進行重新命名操作。

此功能旨在幫助開發者在專案中快速、安全地修改變數名、函式名、類別名等符號，確保所有引用該符號的地方都能同步更新。

**支援重新命名符號的檔案類型：**`.js`、`.ts`、`.uts`、`.vue`、`.uvue`

**不支援重新命名符號的檔案類型：**`CSS 檔案（包括 .css、.scss、.less、vue 檔案中的 css 程式碼）`、`HTML 檔案（包括 vue 檔案中的 tag 標籤）`、`JSON 檔案`、`Markdown 檔案`

### 演示@demo

<img style="border-radius:8px;" src="https://web-ext-storage.dcloud.net.cn/hx/refacor-rename/rename.gif" />

### 操作步驟@steps

1. **選擇符號：**在編輯器中，將游標定位到您想要重新命名的符號上，或者使用滑鼠選取該符號。

  <img style="border-radius:10px;" src="https://web-ext-storage.dcloud.net.cn/hx/refacor-rename/rename-select-symbol.png" />

2. **觸發重新命名：**您可以透過快捷鍵或功能表選項來觸發重新命名操作。

  - 快捷鍵：`Ctrl+Alt+R`（Windows/Mac）

  ***注意：***如果您使用的是`VS Code`預設快捷鍵方案，重新命名符號預設快捷鍵為`F2`

  - 功能表操作：在選取的符號上按右鍵，選擇 `重新命名符號` 選項。

  <img style="border-radius:10px;" src="https://web-ext-storage.dcloud.net.cn/hx/refacor-rename/rename-select-menu.png" />

  ***注意：***如果是在一些不支援的檔案類型中，重新命名符號操作將會被停用。

  <img style="border-radius:10px;" src="https://web-ext-storage.dcloud.net.cn/hx/refacor-rename/rename-menu-disable.png" />

3. **輸入新名稱：**輸入您想要使用的新符號名稱，然後按下`Enter`鍵進行重新命名符號，或者按下`⌘+Enter`（Windows 平台為`Ctrl+Enter`）鍵進行重新命名預覽。

  <img style="border-radius:10px;" src="https://web-ext-storage.dcloud.net.cn/hx/refacor-rename/rename-input.png" />

  ***注意：***如果輸入的新名稱與現有符號名稱相同，應用重新命名操作時將不會有任何變化。

4. **應用重新命名：**如果您選擇按下`Enter`鍵，則會直接應用重新命名操作，將所有引用該符號的地方都更新為新名稱。

5. **預覽：**如果您選擇按下`⌘+Enter`（Windows 平台為`Ctrl+Enter`）鍵，則會在左側視圖中打開預覽視窗，顯示所有引用該符號的地方。您可以在預覽視窗中查看和選擇該符號的引用，最後點擊`應用`按鈕來應用重新命名操作或者點擊`取消`按鈕來取消重新命名操作。

  <img style="border-radius:10px;" src="https://web-ext-storage.dcloud.net.cn/hx/refacor-rename/rename-preview.png" />

  ***提示：***對預覽列表中的項目單擊或雙擊時，將會跳轉到對應檔案的對應位置，以便及時查看符號引用位置的上下文內容

  ***注意：***如果您取消勾選了某項引用，隨後應用此次重新命名符號操作時此處符號引用將不會被更新。

  <img style="border-radius:10px;" src="https://web-ext-storage.dcloud.net.cn/hx/refacor-rename/rename-filter.png" />
