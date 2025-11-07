# CLI uni-app 发行 - App-Harmony-本地打包 App 资源@publishAppHarmony

> HBuilderX cli 命令行工具

通过 CLI 对鸿蒙平台生成本地打包 App 资源，支持 uni-app (x) 项目。

## 命令说明

### publish app-harmony

生成本地打包 App 资源或 wgt 包

**参数：**

| 参数      | 说明                                                                   |
| --------- | ---------------------------------------------------------------------- |
| --type    | 必填，资源类型，取值为 `appResource` 或 `wgt`，表示打包 App 资源或 wgt |
| --project | 必填，项目名称                                                         |

**使用示例：**

```shell
# 生成本地打包App资源
cli publish app-harmony --type appResource --project 项目名称

# 生成本地打包wgt包
cli publish app-harmony --type wgt --project 项目名称
```

**注意事项：**

> 首先, 需要启动 HBuilderX. (进入 HBuilderX 安装目录根目录, 终端输入 `cli.exe open`)
