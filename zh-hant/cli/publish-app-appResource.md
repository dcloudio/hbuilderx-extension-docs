# CLI uni-app 發行 - App 生成本地打包資源@appResource

> HBuilderX cli 命令行工具

通過 CLI 生成本地打包 App 資源，支持 uni-app、Wap2App、5+App 項目。

## 命令說明

### publish appResource

生成本地打包 App 資源

**參數：**

| 參數       | 說明                                                                   |
| ---------- | ---------------------------------------------------------------------- |
| --platform | 必填，[APP] 原生 App（HBuilderX 4.67-alpha+ 支持 app-ios/app-android） |
| --type     | 必填，[appResource] 本地打包(生成本地打包 App 資源)                    |
| --project  | 必填，項目名稱                                                         |

**使用示例：**

```shell
# 生成本地打包App資源
cli publish --platform APP --type appResource --project 項目名稱

# 生成本地打包App資源（HBuilderX 4.67-alpha+，iOS平臺）
cli publish app-ios --type appResource --project 項目名稱

# 生成本地打包App資源（HBuilderX 4.67-alpha+，Android平臺）
cli publish app-android --type appResource --project 項目名稱
```

**注意事項：**

> HBuilderX 4.67-alpha 開始 platform 支持 app-ios/app-android 平臺
