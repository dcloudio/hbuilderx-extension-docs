# cli 配置环境变量

您可以将`cli`加入到`环境变量`，这样您就可以在任意目录、任意终端上，随时随地调用cli， 而无需通过输入cli绝对路径的方式来使用它。

## MacOSX

下面的示例，均以`HBuilderX正式版`安装路径为例，如使用alpha cli，替换相关路径即可。

修改前，请先确定您的shell类型。

如何查看shell类型，打开终端，输入`echo $SHELL`

### 方法1：添加环境变量

> **警告：** 修改环境变量时，请**`慎重`** **`仔细`**，如果没有经验，不建议修改环境变量。

如果您的shell是`bash`，进入终端，编辑环境变量文件`~/.bash_profile`, 输入如下内容

如果您的shell是`zsh`，进入终端，编辑环境变量文件`~/.zprofile`，输入如下内容

```shell
export HX_HOME=/Applications/HBuilderX.app/Contents/MacOS/
export PATH=$HX_HOME:$PATH:.
```

### 方法2：创建别名

打开终端，根据shell类型，执行如下命令：
```shell
# shell类型：bash
echo "alias cli='/Applications/HBuilderX.app/Contents/MacOS/cli'" >> ~/.bashrc && source ~/.bashrc

# shell类型：zsh
echo "alias cli='/Applications/HBuilderX.app/Contents/MacOS/cli'" >> ~/.zshrc && source ~/.zshrc
```

### 方法3：创建软连接

打开终端，执行如下命令：
```shell
ln -s /Applications/HBuilderX.app/Contents/MacOS/cli /usr/local/bin/cli
```


## Windows

1. 复制HBuilderX安装目录路径（即HBuilderX.exe程序所在位置的上级目录）
2. 右键 This PC(此电脑) -> Properties（属性） -> Advanced system settings（高级系统设置） -> Environment Variables（环境变量）
3. 【用户变量】，点击【编辑】，找到path，输入HBuilderX路径。

<img src="/static/snapshots/cli/cli_env.png"/>
