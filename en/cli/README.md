> HBuilderX cli command line tool, supported from HBuilderX 3.1.5+

The developers can execute startup, package, log-in and other operations through the cli command line of HBuilderX.

#### cli

The path of the command line tool:

- Windows: HBuilderX installation directory, `cli.exe`
- MacOSX
    - Official Version `/Applications/HBuilderX.app/Contents/MacOS/cli`
    - Alpha Version `/Applications/HBuilderX-Alpha.app/Contents/MacOS/cli`

Special Note: All the command examples in this article use cli instead of cli.exe. Please refer to different operating systems and actual applications.

In addition, you can add `cli` to `environment variables`, so that you can call cli anytime and anywhere, without having to enter the absolute path of cli.

[Env Variables](/cli/env)

#### Help

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

# Shutdown HBuilderX
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
