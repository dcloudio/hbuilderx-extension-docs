# 插件安装@install

<!--
keyword: 安装插件,插件安装,install
-->

### 安装插件@install
HBuilderX启动后，点击菜单【工具】【插件安装】，即可打开插件安装窗口。

除下图所示插件外，其它插件，需要到[插件市场](https://ext.dcloud.net.cn/?cat1=1&cat2=11&orderBy=TotalDownload)进行下载。

<img src="/static/snapshots/tutorial/plugins_install_1.jpg" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;"/>

### 已安装插件@installed

如下图，HBuilderX已安装的插件，会显示在【已安装插件】中。

当服务器存在高版本插件时，相应插件会显示`升级`字样。

<img src="/static/snapshots/tutorial/plugins_install_2.jpg" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;"/>

### 插件市场安装插件@market

如下图所示，在[插件市场](https://ext.dcloud.net.cn/?cat1=1&cat2=11&orderBy=TotalDownload)，进入插件详情页，点击【导入插件】，会自动拉起本地安装的HBuilderX。

<img src="/static/snapshots/tutorial/plugins_install_3.jpg" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;"/>

### 离线安装插件@OfflineInstall

> `nodejs`插件，如果插件内，没有`node_modules`，需要手动执行`npm install`

#### windows

1. 打开资源管理器，进入HBuilderX安装目录
2. 进入`plugins`目录
3. 将插件文件夹, 放置到此目录。（如是zip包，解压即可）
4. 重启HBuilderX编辑器

#### Mac

1. 打开系统终端，输入如下命令，打开HBuilderX插件目录 （注意：mac上，正式版和alpha目录不一样）
2. 将插件文件夹, 如是zip包，解压即可），放置到`plugins`目录下
3. 重启HBuilderX编辑器

```shell
# 正式版
open /Applications/HBuilderX.app/Contents/HBuilderX/plugins/

# Alpha版
open /Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/
```

### 问题@question

某些node插件，比如`sass`、`less`, 安装成功，项目运行时，却提示安装失败。

可能的原因：node_modules安装失败了。进入插件目录，手动执行`npm install --save`