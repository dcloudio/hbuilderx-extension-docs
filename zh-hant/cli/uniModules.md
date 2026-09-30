# uni_modules CLI 命令使用說明@uniModules

`uni_modules` CLI 覆蓋插件開發的完整流程：新建插件、發布新版本、維護市場資料、安裝插件依賴、發布前校驗，以及從插件市場下載、更新和查看項目中的插件。

## 前置要求@requirement

- **HBuilderX 版本**：新建插件、發布插件、修改插件信息、安裝依賴、發布前校驗等命令自 HBuilderX 5.31 起提供；`--download`、`--upgrade`、`--list` 在 HBuilderX 5.0 及以上版本即可使用。
- **已登錄插件作者賬號**：發布、下載、更新等聯網命令需要使用插件作者賬號，未登錄時命令會給出提示；登錄方式見[用戶賬號操作](/cli/user)。

下文示例統一使用 `cli` 代表 HBuilderX 安裝目錄下的命令行工具（Windows 為 `cli.exe`，macOS、Linux 為 `cli`），寫法與 [cli 概述](/cli/README) 一致。示例中的 `D:\projects\my-uniapp` 請替換為實際項目路徑；插件 ID 統一寫成 `yourname-demo`，其中 `yourname` 是作者 ID 佔位符，實際使用時請替換為自己的作者 ID。

## 命令列表@overview

| 命令 | 用途 | 需要登錄插件作者賬號 | 版本要求 |
| --- | --- | --- | --- |
| `--create` | 新建 uni_modules 插件 | 否 | 5.31+ |
| `--publish` | 發布插件到插件市場 | 是 | 5.31+ |
| `--updateInfo` | 修改已發布插件的基本信息 | 是 | 5.31+ |
| `--install` | 安裝插件聲明的依賴 | 是 | 5.31+ |
| `--validate` | 發布前校驗插件 | 是 | 5.31+ |
| `--download` | 從插件市場下載插件到項目 | 是 | 5.0+ |
| `--upgrade` | 從插件市場更新項目中的插件 | 是 | 5.0+ |
| `--list` | 查看項目中已安裝的插件 | 否 | 5.0+ |

使用說明：

- 除 `--list` 外，其餘命令都需要用 `--project` 指定項目的絕對路徑；一次只能執行一個命令。
- 發布、下載等聯網命令會使用插件作者賬號，請先在 HBuilderX 中登錄；未登錄時命令會給出明確提示。
- `--create`、`--list` 為純本地操作，不需要登錄。

## 通用參數@common

| 參數 | 說明 |
| --- | --- |
| `--project <路徑>` | 項目絕對路徑，支持 uni-app、uni-app x 及其 CLI 項目；除 `--list` 外必填 |
| `--json` | 只輸出一條穩定的 JSON 結果，不輸出進度日誌，適合 CI/CD 讀取 |
| `--dryRun` | 只做校驗和打包，不提交市場數據、不寫入項目；`--create`、`--publish`、`--updateInfo` 支持 |
| `--force` | 允許覆蓋發生衝突的已有插件文件；`--download`、`--upgrade`、`--install` 支持 |

> 命令還支持少量供調用方（如 HBuilderV）使用的內部參數，用於按調用環境組織提示文案；這些參數不在幫助中列出，命令行用戶按本文說明使用即可。

### 執行日誌@log

命令執行過程會輸出進度日誌，依次經過讀取插件信息、校驗、打包或下載、提交等階段。下載、上傳耗時與網絡和插件體積有關，請耐心等待；命令結束後會輸出最終結果。

### JSON 輸出@json

`--json` 模式下只輸出一條 JSON，方便腳本解析。

執行成功：

```json
{"success":true,"result":{"action":"publish","pluginId":"yourname-demo","version":"1.0.1","outcome":"published"}}
```

執行失敗：

```json
{"success":false,"error":{"code":"SERVER_REJECTED","stage":"submit","message":"插件发布失败。","suggestion":"请根据服务端提示修正插件信息；确认版本未发布后再重试。","issues":[]}}
```

- `code`：穩定的錯誤標識，可用於腳本分支判斷
- `stage`：出錯階段，如 `arguments`（參數）、`validate`（校驗）、`submit`（提交）
- `message`、`suggestion`：錯誤原因與處理建議
- `issues`：發布校驗的問題清單，每項包含字段、原因和處理建議

## 查看幫助@help

```shell
# 命令總覽
cli uni_modules --help

# 指定命令的完整用法（參數、示例、執行影響）
cli uni_modules --publish help

# 以 JSON 輸出幫助內容，便於工具集成
cli uni_modules --publish help --json
```

## 新建插件@create

按模板在項目中創建 uni_modules 插件骨架，包括插件目錄、`package.json`、`readme.md`、`changelog.md` 等文件。

#### 命令語法

```shell
cli uni_modules --create <插件ID> --template <模板類型> --project <項目路徑> [--dryRun] [--json]
```

#### 參數

| 參數 | 說明 |
| --- | --- |
| `--create <插件ID>` | 必填。插件 ID，格式為「作者ID-插件英文名稱」，只允許英文、數字、下劃線和連字符；普通賬號不能使用 `uni`、`dcloud`、`uts` 開頭的保留前綴 |
| `--template <模板類型>` | 必填。模板類型見下表 |
| `--project <項目路徑>` | 必填。項目絕對路徑 |
| `--dryRun` | 只校驗並列出將要創建的文件，不寫入項目 |
| `--json` | 輸出 JSON |

#### 模板類型

| 模板類型 | 插件分類 | 適用項目 |
| --- | --- | --- |
| `component-vue` | 前端組件-vue組件 | uni-app、uni-app x |
| `component-mp` | 前端組件-小程序組件 | uni-app、uni-app x |
| `sdk-js` | JS SDK | uni-app、uni-app x |
| `uts` | UTS插件-API插件 | uni-app、uni-app x |
| `component-uts` | UTS插件-uni-app兼容模式組件（原「組件插件」） | uni-app、uni-app x |
| `uts-vue-component` | UTS插件-標準模式組件 | 僅 uni-app x |
| `uniapp-template-page` | 前端頁面模板 | uni-app、uni-app x |
| `unicloud-template-function` | 雲函數模板 | uni-app、uni-app x |
| `unicloud-template-page` | 雲端一體頁面模板 | uni-app、uni-app x |
| `unicloud-admin` | uniCloud Admin插件 | uni-app、uni-app x |
| `unicloud-database` | DB Schema及驗證函數 | uni-app、uni-app x |
| `uasm` | UASM插件 | 僅 uni-app x |

#### 示例

```shell
# 新建一個 vue 組件插件
cli uni_modules --create yourname-demo --template component-vue --project D:\projects\my-uniapp

# 在 uni-app x 項目中新建 UTS API 插件
cli uni_modules --create yourname-uts --template uts --project D:\projects\my-uniappx

# 只預覽將要創建的文件，不寫入項目
cli uni_modules --create yourname-demo --template sdk-js --project D:\projects\my-uniapp --dryRun
```

#### 注意事項

- 插件創建在項目的 `uni_modules/<插件ID>` 目錄下；同名插件已存在時命令會報錯，不會覆蓋已有插件。
- `uts-vue-component`（UTS插件-標準模式組件）和 `uasm`（UASM插件）只支持 uni-app x 項目，項目類型由項目根目錄的 `manifest.json` 判斷；在普通 uni-app 項目中使用這兩類模板會提示更換模板。
- 創建後不會自動發布，需要登錄插件作者賬號後執行 `--publish`。

## 發布插件到插件市場@publish

將插件發布為新版本，並可在發布成功後上傳插件截圖。

#### 命令語法

```shell
cli uni_modules --publish <插件ID> --project <項目路徑> [--changeLog <更新日誌>] [--imageFile <圖片路徑> ...] [--imageDir <圖片目錄>] [--example] [--dryRun] [--json]
```

#### 參數

| 參數 | 說明 |
| --- | --- |
| `--publish <插件ID>` | 必填。需要發布的本地插件 ID |
| `--project <項目路徑>` | 必填。項目絕對路徑 |
| `--changeLog <更新日誌>` | 指定本次更新日誌；不指定時使用插件根目錄 `changelog.md` 中的內容 |
| `--imageFile <圖片路徑>` | 發布成功後上傳的插件截圖，可重複指定多張；支持 JPG、JPEG、PNG，單張不超過 1 MB |
| `--imageDir <圖片目錄>` | 讀取目錄中的 JPG、JPEG、PNG 圖片，按文件名排序上傳；不能與 `--imageFile` 同時使用 |
| `--example` | 同時打包示例工程；項目類插件和 IDE 插件不支持 |
| `--dryRun` | 執行校驗和打包，但不提交市場數據 |
| `--json` | 輸出 JSON |

#### 示例

```shell
# 發布新版本，更新日誌取自 changelog.md
cli uni_modules --publish yourname-demo --project D:\projects\my-uniapp

# 直接指定本次更新日誌
cli uni_modules --publish yourname-demo --project D:\projects\my-uniapp --changeLog "修復登錄態失效後無法跳轉的問題"

# 發布並上傳兩張插件截圖
cli uni_modules --publish yourname-demo --project D:\projects\my-uniapp --imageFile D:\shots\1.png --imageFile D:\shots\2.png

# 發布並上傳截圖目錄中的全部圖片
cli uni_modules --publish yourname-demo --project D:\projects\my-uniapp --imageDir D:\shots

# 只校驗和打包，不提交市場數據
cli uni_modules --publish yourname-demo --project D:\projects\my-uniapp --dryRun
```

#### 更新日誌

- 更新日誌取自插件根目錄的 `changelog.md`。CLI 會自動寫入當前版本號標題（形如 `## 1.0.1 (2026-09-23)`），只需填寫本次更新內容。
- 使用 `--changeLog` 時，參數值會作為當前版本的更新內容寫入 `changelog.md`。
- `changelog.md` 中沒有可發布的更新內容時，命令會提示「未填寫本次發布的更新日誌，無法繼續發布。」，請補充內容或使用 `--changeLog`。

#### 發布前校驗

發布前會依次執行本地校驗和服務端校驗，不通過時一次性列出全部問題與處理建議。常見校驗項如下：

| 校驗項 | 要求 |
| --- | --- |
| 清單信息 | `package.json` 的 `id`、`displayName`、`version`、`description`、`keywords`、`dcloudext.type` 不能為空 |
| 合規聲明 | `dcloudext.declaration.permissions`（系統權限）、`.data`（數據採集）、`.ads`（廣告）必須填寫；無對應內容時也要寫明「無」「插件不採集任何數據」「無廣告」 |
| 兼容性 | 按插件分類校驗「支持的uni-app版本」「最低兼容版本號」「前端平台兼容性」「雲端平台兼容性」。例如雲函數模板、DB Schema 等分類不校驗前端平台，但至少需要一個雲端平台 |
| 插件文件 | `readme.md` 使用說明不少於 30 個字符；`changelog.md` 需包含當前版本的更新日誌 |
| 特殊分類 | `uasm`（UASM插件）必須聲明 `dcloudext.vapor` 為 `"√"`（支持蒸汽模式） |

服務端還會校驗版本狀態、賬號權限等規則，請按返回的處理建議修正後重試。

#### 注意事項

- 發布成功後 CLI 會輸出插件市場地址。截圖在版本發布成功後通過獨立接口上傳，截圖上傳失敗不影響已發布的版本。
- 修改插件目錄中的 `package.json`、`changelog.md` 後需要重新發布，市場資料才會與本地保持一致。

## 修改插件信息@updateInfo

修改已發布插件的基本信息，如名稱、簡介、標籤、價格、聲明等，不會創建新版本。

#### 命令語法

```shell
cli uni_modules --updateInfo <插件ID> --project <項目路徑> [--example] [--dryRun] [--json]
```

#### 參數

| 參數 | 說明 |
| --- | --- |
| `--updateInfo <插件ID>` | 必填。已經發布到插件市場的插件 ID |
| `--project <項目路徑>` | 必填。項目絕對路徑 |
| `--example` | 同時更新示例工程；項目類插件和 IDE 插件不支持 |
| `--dryRun` | 執行校驗和打包，但不提交市場數據 |
| `--json` | 輸出 JSON |

#### 示例

```shell
# 修改插件資料
cli uni_modules --updateInfo yourname-demo --project D:\projects\my-uniapp

# 只校驗，不提交
cli uni_modules --updateInfo yourname-demo --project D:\projects\my-uniapp --dryRun
```

#### 注意事項

- 插件尚未發布到插件市場時，命令會提示無法修改插件基本信息，請先發布插件。
- 修改內容同樣需要滿足發布校驗規則，例如清單字段、合規聲明、兼容性等。

## 安裝插件依賴@install

安裝插件在 `package.json` 的 `uni_modules.dependencies` 中聲明的依賴，並同時安裝這些依賴所需的關聯插件。

#### 命令語法

```shell
cli uni_modules --install <插件ID> --project <項目路徑> [--force] [--json]
```

#### 參數

| 參數 | 說明 |
| --- | --- |
| `--install <插件ID>` | 必填。讀取該插件的 `uni_modules.dependencies` |
| `--project <項目路徑>` | 必填。項目絕對路徑 |
| `--force` | 允許覆蓋發生衝突的已有插件文件 |
| `--json` | 輸出 JSON |

#### 示例

```shell
# 安裝插件聲明的依賴
cli uni_modules --install yourname-demo --project D:\projects\my-uniapp

# 依賴與本地已有插件衝突時覆蓋
cli uni_modules --install yourname-demo --project D:\projects\my-uniapp --force
```

#### 注意事項

- 命令會下載依賴及其關聯插件並寫入項目，同時輸出進度和結果統計（新增、更新、跳過的插件數量）。
- 命令只處理 uni_modules 插件依賴，不執行 `npm install`；npm 依賴請單獨安裝。

## 發布前校驗@validate

檢查插件是否滿足發布要求，不發布插件，也不修改線上數據。

#### 命令語法

```shell
cli uni_modules --validate <插件ID> --project <項目路徑> [--json]
```

#### 參數

| 參數 | 說明 |
| --- | --- |
| `--validate <插件ID>` | 必填。需要檢查的插件 ID |
| `--project <項目路徑>` | 必填。項目絕對路徑 |
| `--json` | 輸出 JSON |

#### 示例

```shell
# 校驗插件是否可以發布
cli uni_modules --validate yourname-demo --project D:\projects\my-uniapp
```

#### 注意事項

- 校驗規則與 `--publish` 一致，適合在發布前或持續集成流程中先行檢查。
- 校驗通過時輸出「插件 yourname-demo 校驗通過，版本 1.0.1。」；不通過時列出全部問題與處理建議。

## 下載插件@download

從[插件市場](https://ext.dcloud.net.cn/)下載指定的 `uni_modules` 插件到項目中。

#### 命令語法

```shell
cli uni_modules --download <插件ID> --project <項目路徑> [--version <版本>] [--extType <類型>] [--force] [--json]
```

#### 參數

| 參數 | 說明 |
| --- | --- |
| `--download <插件ID>` | 必填。需要下載的插件 ID |
| `--project <項目路徑>` | 必填。項目絕對路徑 |
| `--version <版本>` | 指定下載的版本號，不設置則下載最新版 |
| `--extType <類型>` | 指定下載的授權類型：`source` 源碼授權版、`encrypt` 普通授權版 |
| `--force` | 允許覆蓋發生衝突的已有插件文件 |
| `--json` | 輸出 JSON |

#### 示例

```shell
# 下載最新版本的插件
cli uni_modules --download uni-id-pages --project D:\projects\my-uniapp

# 下載指定版本
cli uni_modules --download uni-id-pages --project D:\projects\my-uniapp --version 1.0.5

# 下載源碼授權版
cli uni_modules --download uni-id-pages --project D:\projects\my-uniapp --extType source

# 覆蓋安裝
cli uni_modules --download uni-id-pages --project D:\projects\my-uniapp --force
```

#### 注意事項

- 下載插件時會一併下載並寫入其依賴的插件。
- 需要登錄插件作者賬號；下載付費插件前請確認賬號已購買對應授權。
- 如需從插件市場完整導入插件（含選擇項目、初始化雲開發等），建議使用 HBuilderX 界面的「從插件市場導入」。

## 更新插件@upgrade

從插件市場檢查並更新項目中的指定插件。

#### 命令語法

```shell
cli uni_modules --upgrade <插件ID> --project <項目路徑> [--force] [--json]
```

#### 參數

| 參數 | 說明 |
| --- | --- |
| `--upgrade <插件ID>` | 必填。需要更新的本地插件 ID |
| `--project <項目路徑>` | 必填。項目絕對路徑 |
| `--force` | 允許覆蓋發生衝突的已有插件文件 |
| `--json` | 輸出 JSON |

#### 示例

```shell
# 更新指定插件到最新版本
cli uni_modules --upgrade uni-id-pages --project D:\projects\my-uniapp
```

#### 注意事項

- 已是最新版本時命令會提示無需更新。
- 插件文件被本地修改過、或與依賴存在衝突時，需要顯式添加 `--force` 才能覆蓋。

## 查看插件列表@list

查看項目中已安裝的所有 `uni_modules` 插件。

#### 命令語法

```shell
cli uni_modules --list --project <項目路徑> [--json]
```

#### 參數

| 參數 | 說明 |
| --- | --- |
| `--list` | 必填。列出已安裝插件 |
| `--project <項目路徑>` | 必填。項目絕對路徑 |
| `--json` | 輸出 JSON |

#### 示例

```shell
# 查看項目中已安裝的插件列表
cli uni_modules --list --project D:\projects\my-uniapp

# 輸出 JSON，供腳本處理
cli uni_modules --list --project D:\projects\my-uniapp --json
```

#### 注意事項

- 普通項目讀取項目根目錄下的 `uni_modules`，uni-app CLI 項目讀取 `src/uni_modules`。
- 命令只讀取項目文件，不會修改項目；項目中沒有插件時會提示「當前項目下不存在uni_modules插件。」

## 常見問題@faq

**提示命令不存在或參數不支持。** 請先確認 HBuilderX 版本滿足上方命令列表中的版本要求（`uni_modules` 隨 HBuilderX 內置，無需單獨安裝），然後重新執行命令。

**提示未登錄。** 請先執行 `cli user login --username <用戶名> --password <密碼>` 登錄插件作者賬號（詳見 [用戶賬號操作](/cli/user)），再重新執行命令。

**提示版本已存在。** 插件市場不允許重複發布同一個版本號，請先修改 `package.json` 的 `version`，補充更新日誌後重新發布。

**提示未填寫更新日誌。** 請在插件根目錄 `changelog.md` 頂部填寫本次更新內容，或使用 `--publish --changeLog "更新內容"`。

**依賴和 npm 的關係。** `--install` 只處理 `package.json` 中 `uni_modules.dependencies` 聲明的插件依賴，不執行 `npm install`。

**命令執行時間較長。** 下載、上傳會輸出進度日誌；如果需要腳本處理，建議加 `--json` 獲取結構化結果。

## 相關文檔@related

- [uni_modules 目錄規範](https://uniapp.dcloud.net.cn/plugin/uni_modules.html)
- [插件市場](https://ext.dcloud.net.cn/)
- [cli 概述](/cli/README)
- [cli 用戶賬號操作](/cli/user)
