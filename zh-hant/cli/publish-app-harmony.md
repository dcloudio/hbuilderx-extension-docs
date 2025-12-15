# CLI uni-app 發行 - App-Harmony-本地打包 App 資源@publishAppHarmony

> HBuilderX cli 命令行工具

通過 CLI 對鴻蒙平臺生成本地打包 App 資源，支持 uni-app (x) 項目。

## 命令說明

### publish app-harmony

生成本地打包 App 資源或 wgt 包

**參數：**

| 參數      | 說明                                                                   |
| --------- | ---------------------------------------------------------------------- |
| --type    | 必填，資源類型，取值爲 `appResource` 或 `wgt`，表示打包 App 資源或 wgt |
| --project | 必填，項目名稱                                                         |

**使用示例：**

```shell
# 生成本地打包App資源
cli publish app-harmony --type appResource --project 項目名稱

# 生成本地打包wgt包
cli publish app-harmony --type wgt --project 項目名稱
```

**注意事項：**

> 首先, 需要啓動 HBuilderX. (進入 HBuilderX 安裝目錄根目錄, 終端輸入 `cli.exe open`)
