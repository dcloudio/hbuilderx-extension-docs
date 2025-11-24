# CLI uni-app 发行 - App 制作应用 wgt 包@wgt

> HBuilderX cli 命令行工具

通过 CLI 导出 wgt 包，支持 uni-app、Wap2App、5+App 项目。

## 命令说明

### publish wgt

制作应用 wgt 包

**参数：**

| 参数       | 说明                                                                               |
| ---------- | ---------------------------------------------------------------------------------- |
| --platform | 必填，[APP] 原生 App（HBuilderX 4.67-alpha+ 支持 app-ios/app-android/app-harmony） |
| --type     | 必填，[wgt] 制作应用 wgt 包                                                        |
| --project  | 必填，项目名称                                                                     |
| --name     | 导出名称(不指定默认为：AppID.wgt)                                                  |
| --path     | 导出路径(不指定默认为：项目根路径/unpackage/release)                               |
| --confuse  | 对配置的 js/nvue 文件进行原生混淆；布尔值，默认为：false                           |

**使用示例：**

```shell
# 导出wgt包，默认选项
cli publish --platform APP --type wgt --project 项目名称

# 导出wgt包，对配置的js/nvue文件进行原生混淆
cli publish --platform APP --type wgt --project 项目名称 --confuse true

# 导出wgt包，自定义导出名称
cli publish --platform APP --type wgt --project 项目名称 --name 导出名称

# 导出wgt包，自定义导出路径
cli publish --platform APP --type wgt --project 项目名称 --path 导出路径

# 导出wgt包，自定义导出路径和名称
cli publish --platform APP --type wgt --project 项目名称 --path 导出路径 --name 导出名称

# 导出wgt包，组合参数：原生混淆 + 自定义导出路径和名称
cli publish --platform APP --type wgt --project 项目名称 --confuse true --path 导出路径 --name 导出名称

# 导出wgt包（HBuilderX 4.67-alpha+，iOS平台）
cli publish app-ios --type wgt --project 项目名称

# 导出wgt包（HBuilderX 4.67-alpha+，Android平台）
cli publish app-android --type wgt --project 项目名称

# 导出wgt包（HBuilderX 4.67-alpha+，鸿蒙平台）
cli publish app-harmony --type wgt --project 项目名称
```

**注意事项：**

> HBuilderX 4.67-alpha 开始 platform 支持 app-ios/app-android/app-harmony 平台
