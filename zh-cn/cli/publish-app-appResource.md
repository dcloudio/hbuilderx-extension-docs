# CLI uni-app 发行 - App 生成本地打包资源@appResource

> HBuilderX cli 命令行工具

通过 CLI 生成本地打包 App 资源，支持 uni-app、Wap2App、5+App 项目。

## 命令说明

### publish appResource

生成本地打包 App 资源

**参数：**

| 参数       | 说明                                                                   |
| ---------- | ---------------------------------------------------------------------- |
| --platform | 必填，[APP] 原生 App（HBuilderX 4.67-alpha+ 支持 app-ios/app-android） |
| --type     | 必填，[appResource] 本地打包(生成本地打包 App 资源)                    |
| --project  | 必填，项目名称                                                         |

**使用示例：**

```shell
# 生成本地打包App资源
cli publish --platform APP --type appResource --project 项目名称

# 生成本地打包App资源（HBuilderX 4.67-alpha+，iOS平台）
cli publish app-ios --type appResource --project 项目名称

# 生成本地打包App资源（HBuilderX 4.67-alpha+，Android平台）
cli publish app-android --type appResource --project 项目名称
```

**注意事项：**

> HBuilderX 4.67-alpha 开始 platform 支持 app-ios/app-android 平台
