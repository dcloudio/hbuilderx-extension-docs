> HBuilderX cli command line tool, supported from HBuilderX 3.1.5+

The developers can execute startup, package, log-in and other operations through the cli command line of HBuilderX.

#### cli

The path of the command line tool:

- Windows: HBuilderX installation directory, `cli.exe`
- MacOSX
    - Official Version `/Applications/HBuilderX.app/Contents/MacOS/cli`
    - Alpha Version `/Applications/HBuilderX-Alpha.app/Contents/MacOS/cli`
- Linux: HBuilderX installation directory, `cli`

Special Note: All the command examples in this article use cli instead of cli.exe. Please refer to different operating systems and actual applications.

In addition, you can add `cli` to `environment variables`, so that you can call cli anytime and anywhere, without having to enter the absolute path of cli.

[Environment Variables](/cli/env)

#### Linux CLI

2025年1月初，推出了Linux HBuilderX CLI，欢迎大家试用反馈。 [详情](https://ask.dcloud.net.cn/article/41469)

cli的用途是让开发者可以在linux服务器上调用HBuilderX cli，来实现程序化操作打包app、上传unicloud云函数等，为持续集成、自动化发布、类saas业务的自动化给客户部署等业务提供支持。

请注意是cli程序，不是HBuilderX可视化编辑器。仅适用于Linux命令行调用。

目前我们仅在Ubuntu系统上进行了测试，并没有在其它Linux发行版上测试，如有问题，请及时反馈。

#### Cli Help

> To use the help command, you need to start HBuilderX first.

```shell
cli --help
cli help
```

#### Cli Version

```shell
cli ver
```

#### Start/Quit HBuilderX

```shell
# Start HBuilderX
cli open

# Quit HBuilderX
cli app quit
```

#### More commands

|cli command												|Details													|
|--															|--														|
|User account, login, logout			|[Details](/cli/user)						|
|File operation, open the file and jump to the specified line and column				|[Details](/cli/file)					|
|Project operations, import and close projects				|[Details](/cli/project)					|
|app package												|[Details](/cli/pack)						|
|uniCLoud operation, for example upload to uniCloud	|[Details](/cli/uniCloud)				|
|uniCloud webpage hosting					|[Details](/cli/uniCloud-hosting)|
