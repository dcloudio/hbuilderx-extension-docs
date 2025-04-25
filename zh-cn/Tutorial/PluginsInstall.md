# 插件安装@install

<!--
keyword: 安装插件,插件安装,install
-->

## 安装插件@install
HBuilderX启动后，点击菜单【工具】【插件安装】，即可打开插件安装窗口。

除下图所示插件外，其它插件，需要到[插件市场](https://ext.dcloud.net.cn/?cat1=1&cat2=11&orderBy=TotalDownload)进行下载。

<img src="/static/snapshots/tutorial/plugins_install/plugins_install_1.jpg" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;"/>

## 已安装插件@installed

如下图，HBuilderX已安装的插件，会显示在【已安装插件】中。

当服务器存在高版本插件时，相应插件会显示`升级`字样。

<img src="/static/snapshots/tutorial/plugins_install/plugins_install_2.jpg" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;"/>

## 插件市场安装插件@market

如下图所示，在[插件市场](https://ext.dcloud.net.cn/?cat1=1&cat2=11&orderBy=TotalDownload)，进入插件详情页，点击【导入插件】，会自动拉起本地安装的HBuilderX。

<img src="/static/snapshots/tutorial/plugins_install/plugins_install_3.jpg" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;"/>

## 离线安装插件@OfflineInstall

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

## 插件安装失败问题汇总@install-Fail

最近，小部分用户遇到`插件安装`失败的问题，如下:

<img src="/static/snapshots/tutorial/plugins_install/plugin_install_fail.png" class="hd-img" />

插件安装失败时，点击顶部菜单【帮助】【查看运行日志】，即可看到相关错误，根据相关错误解决问题。

备注：HBuilderX插件在服务器都是zip包，先下载到本地update目录，下载成功后，会自动解压拷贝到HBuilderX.exe 同级`plugins`目录下。

### Q1: 网络问题导致插件下载失败

- 可能您所在的城市，所用宽带，访问HBuilderX更新服务器失败。
- 电脑开了全局代理，无法连接HBuilderX更新服务器。
- 打开操作系统命令行工具，输入`ping update.liuyingyong.cn`，检查网路是否畅通。
- 电脑换个其它网络试试，比如连接手机4G/5G热点

### Q2: move fail

在日志中，您可能会看到如下日志:

```
[info] try move "xxxxx" to "xxxx"
[info] move result: false
```

在HBuilderX 3.5.2-alpha+版本，您可能会看到如下弹窗：

<img src="/static/snapshots/tutorial/plugins_install/plugin-install-fail-message-box.jpg" class="hd-img" />

这些信息代表，插件下载后，拷贝到指定目录失败了。

解决方法：
- 尝试重新安装此插件
- windows电脑：关闭HBuilderX，HBuilderX.exe右键菜单【以管理员身份运行】
- 进入HBuilderX安装目录，在update/plugins目录下，找到插件zip包，手动将zip包解压到HBuilderX.exe 同级`plugins`目录下。

### 03: 本地目录权限问题

HBuilderX 插件解压移动到指定目录，需要权限，如果没有权限，插件就会下载、或移动失败。

### Q4: 解压失败

在日志中，您可能会看到如下日志:
```
[info] Unpack plugin "xxxx"
[info] unzip "xxxx" failed
```
这些信息代表，插件下载后，解压失败了。

可能的原因：
- 解压到指定目录时，没有权限。
- zip包被加密，需要解密后才能解压。某些公司对从网络下载的带有可执行程序的zip包，自动加密了。遇到此种文件，请先解密，然后手动将zip解压到plugins目录下。

### Q5: 磁盘空间不够

HBuilderX所在的磁盘，空间不够，导致插件安装失败。遇到此种情况，请检查磁盘。

### Q6: MD5值校验不通过

HBuilderX会校验下载的zip插件的md5值，只有md5值一致时，才会安装。防止插件被篡改。

如果遇到md5值问题，请联系HBuilderX官方人员。

## 插件安装成功，运行项目提示插件未安装@installFail

某些node插件，比如`sass`、`less`, 安装成功，项目运行时，却提示安装失败。

通常可能出现问题的插件：`compile-node-sass`、`compile-dart-sass`、`compile-less`

可能的原因：node_modules安装失败了。进入插件目录，手动执行`npm install --save`
