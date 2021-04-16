> HBuilderX cli命令行工具, 仅适用于HBuilderX 3.1.5+版本

开发者可以通过cli命令行指示HBuilderX进行启动、打包、登录等操作。

#### cli程序

命令行工具所在位置:

- Windows: HBuilderX安装目录根目录, `cli.exe`
- MacOSX
    - 正式版 `/Applications/HBuilderX.app/Contents/MacOS/cli`
    - Alpha版 `/Applications/HBuilderX-Alpha.app/Contents/MacOS/cli`

特别注意：本文所有命令示例，均以cli代替cli.exe，请根据不同操作系统，实际应用。

此外，您可以将`cli`加入到`环境变量`，这样您就可以在任意目录、任意终端上，随时随地调用cli， 而无需通过输入cli绝对路径的方式来使用它。

[配置环境变量](/cli/env)

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
|项目操作，导入、关闭项目				|[详情](/cli/project)					|
|app打包												|[详情](/cli/pack)						|
|uniCLoud操作，比如云函数上传等	|[详情](/cli/uniCloud)				|
|uniCloud 前端网页托管					|[详情](/cli/uniCloud-hosting)|
