> HBuilderX cli, 仅适用于HBuilderX 3.1.5+版本

开发者可以通过cli命令行指示HBuilderX进行启动、打包、登录等操作。

#### cli程序

命令行工具所在位置:

- Windows: HBuilderX安装目录根目录, `cli.exe`
- MacOSX
    - 正式版 `/Applications/HBuilderX.app/Contents/MacOS/cli`
    - Alpha版 `/Applications/HBuilderX-Alpha.app/Contents/MacOS/cli`

#### 启动/关闭HBuilderX

```
# 启动HBuilderX程序
cli.exe open

# 关闭HBuilderX程序
cli.exe app quit
```


#### 查看帮助文档

> 查看帮助文档，需要先启动HBuilderX。

```
cli.exe help
```