# cli project

> HBuilderX cli命令行工具, 仅适用于HBuilderX 3.1.5+版本

#### 列举所有项目列表

```shell
cli project list
```

#### 打开项目

```shell
cli project open --path 项目路径
```

#### 关闭项目

```shell
cli project close --path 项目路径
```

#### 网页托管
```shell
cli project publish --prj 项目名称 --space 云空间名称或id --provider 服务商代号 [--source 指定项目下源目录] [--prefix 指定云空间目录前缀]
```