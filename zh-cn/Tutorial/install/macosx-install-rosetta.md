# Mac Apple芯片电脑安装Rosetta@install

<!--
keyword:安装,Rosetta
-->

## 问题

新Mac(Apple芯片)电脑，未安装Rosetta，会导致HBuilderX arm版本部分功能无法使用。目前影响的功能有：

- 多文件字符搜索 （搜索调用的是ripgrep/rg x86程序）
- iOS真机运行（插件中的mdb和zsign等二进制程序时 x86程序）

## 解决方法

打开终端, 输入以下命令安装Rosetta，然后按下回车键；这将安装Rosetta并自动同意其许可协议。

```shell
softwareupdate --install-rosetta --agree-to-license
```

## 扩展

您如果在Apple芯片的电脑上安装intel App，会弹出如下提示：

<img src="/static/snapshots/tutorial/install_macosx/rosetta.jpg" style="zoom: 50%;border-radius: 15px;" />

## 如何删除Rosetta?

[discussionschinese.apple.com](https://discussionschinese.apple.com/thread/255111841?sortBy=rank)
