# Linux CLI 使用示例：从安装到编译、发行@linux-uts-workflow

本文以一个已准备好的 uni-app x 项目 `hello-uts-demo` 为例，介绍在 Linux 上如何从安装 HBuilderX CLI，到登录账号、导入项目，再到编译 UTS 插件、执行编译模式运行、生成发行资源、云打包和查看打包日志的完整流程。

> 目前我们仅在 **Ubuntu** 系统上进行了测试，并未在其他 Linux 发行版上验证。如有问题，请及时反馈。

## 示例约定

本文假设：

- HBuilderX CLI 安装在 `/home/ubuntu/software/HBuilderX`
- 项目路径为 `/home/ubuntu/workspace/hello-uts-demo`
- 要编译的 `uni_modules` 模块名为 `hello-uts-plugin`

如果你的实际路径或模块名不同，请替换为自己的值。

## 1. 安装 HBuilderX Linux CLI

从 HBuilderX 官方下载 Linux CLI 安装包后，在服务器上解压到任意目录。例如：

```shell
mkdir -p /home/ubuntu/software
tar -zxvf HBuilderX-Linux-CLI-*.tar.gz -C /home/ubuntu/software
```

解压完成后，进入 HBuilderX 安装目录。

```shell
cd /home/ubuntu/software/HBuilderX
```

## 2. 找到 CLI 程序

Linux 下的 CLI 程序位于 HBuilderX 安装目录根目录，文件名为 `cli`。

例如：

```shell
cd /home/ubuntu/software/HBuilderX
ls ./cli
```

如果你已经将 `cli` 加入环境变量，则后续命令也可以直接写成 `cli`。

## 3. 启动 HBuilderX

首次使用前，先启动 HBuilderX：

```shell
./cli open
```

启动后，如需查看 CLI 帮助，可执行：

```shell
./cli --help
```

使用完成后，如需退出 HBuilderX，可执行：

```shell
./cli app quit
```

## 4. 登录 HBuilderX 账号

执行以下命令登录：

```shell
./cli user login --username your-account --password your-password
```

登录成功后，可执行以下命令确认当前登录状态：

```shell
./cli user info
```

## 5. 导入项目

将示例项目导入到 HBuilderX：

```shell
./cli project open --path /home/ubuntu/workspace/hello-uts-demo
```

如需查看当前已导入的项目列表，可执行：

```shell
./cli project list
```

## 6. 编译 UTS 插件

> 需 HBuilderX 5.14+ 版本

`cli compile` 用于编译 UTS 插件。

### 按 `uni_modules` 模块编译

```shell
./cli compile app-android --project /home/ubuntu/workspace/hello-uts-demo --uni_module hello-uts-plugin
```

当 `--uni_module` 只传模块名时，CLI 会自动按项目源码根目录下的 `uni_modules/hello-uts-plugin` 查找模块。

### 按单文件编译

```shell
./cli compile app-android --project /home/ubuntu/workspace/hello-uts-demo --file uni_modules/hello-uts-plugin/utssdk/app-android/index.uts
```

`--file` 与 `--uni_module` 不能同时使用，二选一即可。

## 7. 执行编译模式运行

Linux 下通常使用 `launch` 的编译模式做构建验证，无需连接设备：

```shell
./cli launch app-android --project /home/ubuntu/workspace/hello-uts-demo --compile true
```

如需清理构建缓存，可加上 `--cleanCache true`：

```shell
./cli launch app-android --project /home/ubuntu/workspace/hello-uts-demo --compile true --cleanCache true
```

该命令只编译代码，不运行到真机或模拟器。

## 8. 生成发行资源

### 生成本地打包 App 资源

```shell
./cli publish app-android --type appResource --project /home/ubuntu/workspace/hello-uts-demo
```

该命令会生成 Android 本地打包所需的 App 资源。

### 导出 wgt 包

```shell
./cli publish app-android --type wgt --project /home/ubuntu/workspace/hello-uts-demo
```

如需自定义导出名称或路径，可继续添加 `--name`、`--path` 等参数。

## 9. 执行云打包

如果需要直接生成 Android 安装包，可执行云打包：

```shell
./cli pack --project /home/ubuntu/workspace/hello-uts-demo --platform android --android.packagename com.example.hello --android.androidpacktype 1
```

其中：

- `--android.packagename`：Android 包名
- `--android.androidpacktype 1`：使用公共证书打包

如果使用自有证书，可按 [App 云打包](/cli/pack) 文档补充证书参数。

## 10. 查看云打包日志

云打包发起后，可在另一个终端查看打包日志：

```shell
./cli logcat pack
```

如需进一步查询打包状态，也可执行：

```shell
./cli pack status --project /home/ubuntu/workspace/hello-uts-demo
```

## 11. 一组完整示例命令

下面是一组可直接参考的完整流程命令：

```shell
cd /home/ubuntu/software/HBuilderX
./cli open
./cli user login --username your-account --password your-password
./cli project open --path /home/ubuntu/workspace/hello-uts-demo
./cli compile app-android --project /home/ubuntu/workspace/hello-uts-demo --uni_module hello-uts-plugin
./cli launch app-android --project /home/ubuntu/workspace/hello-uts-demo --compile true
./cli publish app-android --type appResource --project /home/ubuntu/workspace/hello-uts-demo
./cli publish app-android --type wgt --project /home/ubuntu/workspace/hello-uts-demo
./cli pack --project /home/ubuntu/workspace/hello-uts-demo --platform android --android.packagename com.example.hello --android.androidpacktype 1
./cli logcat pack
```

## 12. 什么时候需要准备 Android 编译环境

如果项目中的 UTS 插件依赖第三方 Gradle，则需要先配置 Android SDK 和 Gradle，再执行 `cli compile app-android` 或 `cli launch app-android --compile true` 等命令。详情见：

- [Linux CLI 下 UTS 插件的 Android 环境配置](/cli/linux-env)

如果插件不依赖第三方 Gradle，则通常无需额外配置本文所述 Android 编译环境。

## 补充说明

- `--project` 可以传项目在 HBuilderX 中的名称，也可以传项目绝对路径。Linux 环境下更推荐使用**绝对路径**。
- 如果你已经将 `cli` 加入环境变量，可将示例中的 `./cli` 替换为 `cli`。
