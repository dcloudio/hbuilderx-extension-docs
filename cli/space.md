# cli space

> HBuilderX cli命令行工具, 仅适用于HBuilderX 3.1.5+版本

#### 列举云空间下的文件及文件夹

```shell
cli space list file --space 云空间名称或id --provider 服务商代号
```

#### 删除云空间下的文件及文件夹

```shell
cli space delete file --space 云空间名称或id --provider 服务商代号 --path 云空间文件或文件夹路径，文件夹须以/结尾
```