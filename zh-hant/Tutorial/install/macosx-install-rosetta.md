# Mac Apple芯片电脑安装Rosetta@install

<!--
keyword:安装,Rosetta
-->

## 问题

新Mac(Apple芯片)电脑，未安装Rosetta，会导致HBuilderX arm版本部分功能无法使用。目前影响的功能有：

- 多文件字符搜索 （搜索调用的是ripgrep/rg x86程序）
- Android真机运行（插件中的adb是x86程序）

## 解决方法

打开终端, 输入以下命令安装Rosetta，然后按下回车键；这将安装Rosetta并自动同意其许可协议。

```shell
softwareupdate --install-rosetta --agree-to-license
```
