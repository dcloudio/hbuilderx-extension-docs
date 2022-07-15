# Plugin installation

## Install plugin

In HBuilderX, click the menu [Tools] [Plugin Installation] to open the plugin installation window.

In addition to the core plugins shown in the figure below, please go to [plugin market](https://ext.dcloud.net.cn/?cat1=1&cat2=11&orderBy=TotalDownload) to download other plugins.

<img src="/static/snapshots/tutorial/plugins_install_en_1.png" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;"/>

## Installed plugins

The installed plugins of HBuilderX will be displayed in [Installed].

When a new version of the plugin is released, this plugin will display the word `upgrade`.

<img src="/static/snapshots/tutorial/plugins_install_en_2.png" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;"/>

## Install plugins from market

In [Plugin Market](https://ext.dcloud.net.cn/?cat1=1&cat2=11&orderBy=TotalDownload), enter the plugin details page, click [Import Plugin], the installed HBuilderX will be called up.

<img src="/static/snapshots/tutorial/plugins_install_3.jpg" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;"/>

## Install plugin offline

> `nodejs` plugin, if `node_modules` does not exist in the plugin, you have to manually run `npm install`.

#### windows

1. Open Resource Manager and find the HBuilderX installation directory
2. Open the 'plugins' directory of HBuilderX
3. Copy/paste the downloaded HBuilderX plugins to the current directory. (Decompress the archive file if it is a ZIP package)
4. Restart the HBuilderX editor

#### Mac

1. Open the system terminal and run the following command to open the HBuilderX plugins directory (note: On MAC, The official version and the alpha version have different directories).
2. Copy/paste the downloaded HBuilderX plugins to the current directory. (Decompress the archive file if it is a ZIP package)
3. Restart the HBuilderX editor

```shell
# release
open /Applications/HBuilderX.app/Contents/HBuilderX/plugins/

# Alpha
open /Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/
```

## 插件安装失败问题汇总@install-Fail

最近，小部分用户遇到`插件安装`失败的问题，如下:

<img src="/static/snapshots/plugins/plugin_install_fail.png" class="hd-img" />

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

## Node-Plugin-Questions

Some node plugins, such as `sass` and `less`, are successfully installed, but HBuilderX prompts that the installation failed when the project is running.

Possible reason: `node_modules` installation failed. Enter the plugins directory of HBuilderX and manually execute command `npm install --save`.
