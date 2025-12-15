# CLI uni-app 發行 - App 製作應用 wgt 包@wgt

> HBuilderX cli 命令行工具

通過 CLI 導出 wgt 包，支持 uni-app、Wap2App、5+App 項目。

## 命令說明

### publish wgt

製作應用 wgt 包

**參數：**

| 參數       | 說明                                                                               |
| ---------- | ---------------------------------------------------------------------------------- |
| --platform | 必填，[APP] 原生 App（HBuilderX 4.67-alpha+ 支持 app-ios/app-android/app-harmony） |
| --type     | 必填，[wgt] 製作應用 wgt 包                                                        |
| --project  | 必填，項目名稱                                                                     |
| --name     | 導出名稱(不指定默認爲：AppID.wgt)                                                  |
| --path     | 導出路徑(不指定默認爲：項目根路徑/unpackage/release)                               |
| --confuse  | 對配置的 js/nvue 文件進行原生混淆；布爾值，默認爲：false                           |

**使用示例：**

```shell
# 導出wgt包，默認選項
cli publish --platform APP --type wgt --project 項目名稱

# 導出wgt包，對配置的js/nvue文件進行原生混淆
cli publish --platform APP --type wgt --project 項目名稱 --confuse true

# 導出wgt包，自定義導出名稱
cli publish --platform APP --type wgt --project 項目名稱 --name 導出名稱

# 導出wgt包，自定義導出路徑
cli publish --platform APP --type wgt --project 項目名稱 --path 導出路徑

# 導出wgt包，自定義導出路徑和名稱
cli publish --platform APP --type wgt --project 項目名稱 --path 導出路徑 --name 導出名稱

# 導出wgt包，組合參數：原生混淆 + 自定義導出路徑和名稱
cli publish --platform APP --type wgt --project 項目名稱 --confuse true --path 導出路徑 --name 導出名稱

# 導出wgt包（HBuilderX 4.67-alpha+，iOS平臺）
cli publish app-ios --type wgt --project 項目名稱

# 導出wgt包（HBuilderX 4.67-alpha+，Android平臺）
cli publish app-android --type wgt --project 項目名稱

# 導出wgt包（HBuilderX 4.67-alpha+，鴻蒙平臺）
cli publish app-harmony --type wgt --project 項目名稱
```

**注意事項：**

> HBuilderX 4.67-alpha 開始 platform 支持 app-ios/app-android/app-harmony 平臺
