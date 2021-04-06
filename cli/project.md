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

#### 前端网页托管

```shell
cli project publish [--prj xxxx] --space xxxx --provider aliyun [--source xxxx] [--prefix xxxx]
```

说明：

- prj 项目名称或序号为cli命令 project list中列举的项目名称或序号,当没有输入--prj参数时，--source参数为必须输入的项
- provider 云服务商代号为aliyun(指阿里云)或tcb(指腾讯云)
- space 为云空间名称或id或序号(来自cli cloud functions --list space 命令)
- source 可为当前目录的相对路径或绝对路径，当使用--prj参数时，source为相对于--prj项目的根路径的目录
- prefix 为云端文件夹路径，如果不输入则上传到云空间的根路径上