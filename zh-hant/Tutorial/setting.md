# 設置

您可以通過各種設置輕鬆配置HBuilderX。

要想打開設置，請使用以下菜單命令:

- Windows: 頂部菜單【工具】-> 【設置】(快捷鍵: `ctrl` + `alt` + `,`)
- MacOSX: 頂部菜單【HBuilderX】-> 【偏好設置】(快捷鍵: `command` + `,`)

<img src="/static/snapshots/tutorial/settings.png" style="zoom:90%" />

設置視圖，主要分爲5部分：

- 常用配置：[詳情](/Tutorial/setting?id=常用配置)
- 編輯器配置: [詳情](/Tutorial/setting?id=編輯器配置)
- 運行配置：手機/模擬器運行和瀏覽器運行相關配置
- 插件配置：已安裝的插件擴展配置
- 源碼視圖：json文件，包含以上自定義的配置

## 常用配置

- 編輯器字體大小
- 編輯字體，[詳情](/Tutorial/settings/font)
- 製表符長度
- 空格代替製表符
- 失去焦點自動保存：默認未開啓，如需要，請手動開啓
- 語言關聯配置
- 項目管理器過濾器配置
- 搜索默認不包含的目錄：搜索時默認不包含`.git`、`.cvs`、`.svn`、`node_modules`、`unpackage`
- 打開終端數量：最多允許打開的終端數量，默認8
- 本地歷史記錄，[詳情](/Tutorial/UserGuide/LocalHistory)
- 項目管理器打擊展開/摺疊目錄，關閉此項則是雙擊展開/摺疊目錄
- 項目管理器點擊目錄時打開內部資源管理器

#### 更新設置

HBuilderX，可自定義編輯器升級策略。

啓動時自動檢查更新，即每次HBuilderX啓動，都會檢查更新，當存在更新時，彈窗提示更新。

<img src="/static/snapshots/tutorial/settings/upgrade.png" class="hd-img" />

## 編輯器配置

- 自動換行: 默認不換行，如需要，請啓用。
- 高亮時顯示空白字符：默認啓用。
- 顯示換行符
- 選擇默認換行符
- 迷你地圖最大像素寬度：默認100
- 鼠標懸停預覽
- 關閉時記憶文檔摺疊狀態
- 啓動.editorconfig支持：默認啓用
- 顯示代碼縮進對齊線
- 顯示長行指示豎線
- 長行指示豎線顯示在第幾列： 默認值80
- 編輯器行高：文檔行間距比例，默認1.2
- 僅在選擇一個完整的單詞時觸發相同詞高亮
- 啓動代碼助手：默認啓用，可手動關閉
- Tab鍵自動插入代碼助手選中項
- 代碼助手字體大小：默認12
- 代碼助手觸發字符
- 啓用px轉rem提示
- 啓用px轉rpx/upx提示 [詳情](/Tutorial/settings/px-upx)
- 自動匹配匹配字符
- 中文標點免干擾輸入
- 文字分隔符
- 插入多光標使用的修飾鍵
- 使用Ctrl+鼠標滾輪縮放編輯器
- 智能計算製表符長度
- 編輯器向下滾動一屏

## uniapp運行設置@uniapp-run-setting

如果uniapp編譯遇到`JavaScript heap out of memory`問題，請調整uniapp node啓動內存參數。

點擊菜單【設置 - 運行設置 - uniapp運行設置】，如下圖：

<img src="/static/snapshots/tutorial/settings/uniapp_run_setting.png" style="zoom: 45%;border: 1px solid #eee;"/>

如果调整node启动内存参数，仍无法解决此问题，建议优化项目或代码。

## 源碼視圖常見問題

HBuilderX啓動時，會加載`設置配置文件`, 文件損壞（文件格式錯誤，非json格式），會導致HBuilderX無法啓動。

修改源碼視圖時，請謹慎修改。