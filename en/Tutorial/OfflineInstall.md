# 离线安装

## windows

1. 打开资源管理器，进入HBuilderX安装目录
2. 进入`plugins`目录
3. 将插件文件夹, 放置到此目录。（如是zip包，解压即可）
4. 重启HBuilderX编辑器

## Mac

1. 打开系统终端，输入如下命令，打开HBuilderX插件目录 （注意：mac上，正式版和alpha目录不一样）
2. 将插件文件夹, 如是zip包，解压即可），放置到`plugins`目录下
3. 重启HBuilderX编辑器

正式版命令
```shell
open /Applications/HBuilderX.app/Contents/HBuilderX/plugins/
```

Alpha版命令
```shell
open /Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/
```

## `备注`

`nodejs`插件，如果插件内，没有`node_modules`，需要手动执行`npm install`