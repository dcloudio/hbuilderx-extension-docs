# CLI 打包日志 - App 云打包@logcat-pack

> 需 HBuilderX **5.11+** 版本

通过 CLI 查看 App **云打包**控制台输出日志，用于在命令行或 CI 中跟踪打包过程。与 [运行日志 - 手机或模拟器](/cli/logcat-app) 中的 `logcat app-android` 等命令不同，本命令针对的是**打包**环节，而非真机/模拟器运行。

> **适用项目**：uni-app、uni-app x（`app-android` / `app-ios` 云打包）。完整平台对照见 [CLI 概述](/cli/README?id=project-platform)。

## 命令说明

### logcat pack

查看 App 打包控制台日志。

**用法：**

```shell
./cli logcat pack --help
./cli logcat pack
```

**参数：**

| 参数名称 | 描述         |
| -------- | ------------ |
| --help   | cli 命令帮助 |

> 查看打包日志前，需先启动 HBuilderX（**5.11+**）。通常与 [云打包](/cli/pack)、[查询云打包状态](/cli/pack?id=pack-query) 配合使用。
