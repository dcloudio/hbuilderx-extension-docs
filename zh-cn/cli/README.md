> HBuilderX cli命令行工具, 仅适用于HBuilderX 3.1.5+版本

开发者可以通过cli命令行指示HBuilderX进行启动、打包、登录等操作。

#### cli程序@cli

命令行工具所在位置:

- Windows: HBuilderX安装目录根目录, `cli.exe`
- MacOSX
    - 正式版 `/Applications/HBuilderX.app/Contents/MacOS/cli`
    - Alpha版 `/Applications/HBuilderX-Alpha.app/Contents/MacOS/cli`
- Linux: HBuilderX安装目录根目录, `cli`

特别注意：本文所有命令示例，均以cli代替cli.exe，请根据不同操作系统，实际应用。

此外，您可以将`cli`加入到`环境变量`，这样您就可以在任意目录、任意终端上，随时随地调用cli， 而无需通过输入cli绝对路径的方式来使用它。

[配置环境变量](/cli/env)

#### Linux CLI

2025年1月初，推出了Linux HBuilderX CLI，欢迎大家试用反馈。 [详情](https://ask.dcloud.net.cn/article/41469)

cli的用途是让开发者可以在linux服务器上调用HBuilderX cli，来实现程序化操作打包app、上传unicloud云函数等，为持续集成、自动化发布、类saas业务的自动化给客户部署等业务提供支持。

请注意是cli程序，不是HBuilderX可视化编辑器。仅适用于Linux命令行调用。

目前我们仅在Ubuntu系统上进行了测试，并没有在其它Linux发行版上测试，如有问题，请及时反馈。

扩展：[Linux 安装插件市场插件](/cli/linux-install-market-plugin)

#### 查看帮助文档

> 查看帮助文档，需要先启动HBuilderX。

```shell
cli --help
cli help
```

#### 查看cli版本号

```shell
cli ver
```

#### 启动/关闭HBuilderX

```shell
# 启动HBuilderX程序
cli open

# 关闭HBuilderX程序
cli app quit
```

#### 更多命令

|cli命令												|详情													|
|--															|--														|
|用户账号操作，登录、退出等			|[详情](/cli/user)						|
|文件操作，打开文件并跳转指定行列				|[详情](/cli/file)					|
|项目操作，导入、关闭项目				|[详情](/cli/project)					|
|app打包												|[详情](/cli/pack)						|
|uniCloud操作，比如云函数上传等	|[详情](/cli/uniCloud)				|
|uniCloud 前端网页托管					|[详情](/cli/uniCloud-hosting)|
