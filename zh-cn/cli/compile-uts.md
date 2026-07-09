# CLI 编译 UTS 插件 - Android/iOS@compile-uts

> 需 HBuilderX 5.21+ 版本

通过 CLI 编译 **Android** 或 **iOS** 平台的 UTS **单文件**，或单个 `uni_modules` 模块。

## 命令说明

### compile app-android@compile-app-android

通过 CLI 编译 Android 平台 UTS 单文件或单个 `uni_modules` 模块。

**用法：**

```shell
cli compile app-android --help
cli compile app-android --project demo --file src/uni_modules/demo/utssdk/app-android/index.uts
cli compile app-android --project demo --uni_module aa-bb
```

**参数：**

| 参数名称 | 描述 |
| --- | --- |
| `--help` | 查看 UTS 编译 CLI 命令帮助 |
| `--project` | HBuilderX 中已导入项目的名称或绝对路径 |
| `--file` | 要编译的 UTS 文件路径，支持绝对路径或相对项目目录的路径；与 `--uni_module` 互斥 |
| `--uni_module` | 要编译的 `uni_modules` 模块目录，支持绝对路径、相对项目目录路径或模块名简写；与 `--file` 互斥 |

**说明：**

- `--file` 与 `--uni_module` 不能同时使用，二选一即可。
- `--uni_module` 仅传模块名时，会自动拼接为项目源码根目录下的 `uni_modules/模块名`。
- Linux 下如插件依赖第三方 Gradle，请先完成 [Linux CLI 下 UTS 插件的 Android 环境配置](/cli/linux-env)。

**使用示例：**

```shell
# 编译单个 Android 平台 UTS 文件
cli compile app-android --project demo --file src/uni_modules/demo/utssdk/app-android/index.uts

# 编译单个 uni_modules 模块（传模块名）
cli compile app-android --project demo --uni_module aa-bb

# 编译单个 uni_modules 模块（传绝对路径）
cli compile app-android --project demo --uni_module /path/to/demo/uni_modules/aa-bb
```

### compile app-ios@compile-app-ios

通过 CLI 编译 iOS 平台 UTS 单文件或单个 `uni_modules` 模块。

**用法：**

```shell
cli compile app-ios --help
cli compile app-ios --project demo --file src/uni_modules/demo/utssdk/app-ios/index.uts
cli compile app-ios --project demo --uni_module aa-bb
```

**参数：**

| 参数名称 | 描述 |
| --- | --- |
| `--help` | 查看 UTS 编译 CLI 命令帮助 |
| `--project` | HBuilderX 中已导入项目的名称或绝对路径 |
| `--file` | 要编译的 UTS 文件路径，支持绝对路径或相对项目目录的路径；与 `--uni_module` 互斥 |
| `--uni_module` | 要编译的 `uni_modules` 模块目录，支持绝对路径、相对项目目录路径或模块名简写；与 `--file` 互斥 |

**说明：**

- `--file` 与 `--uni_module` 不能同时使用，二选一即可。
- `--uni_module` 仅传模块名时，会自动拼接为项目源码根目录下的 `uni_modules/模块名`。

**使用示例：**

```shell
# 编译单个 iOS 平台 UTS 文件
cli compile app-ios --project demo --file src/uni_modules/demo/utssdk/app-ios/index.uts

# 编译单个 uni_modules 模块（传模块名）
cli compile app-ios --project demo --uni_module aa-bb

# 编译单个 uni_modules 模块（传绝对路径）
cli compile app-ios --project demo --uni_module /path/to/demo/uni_modules/aa-bb
```
