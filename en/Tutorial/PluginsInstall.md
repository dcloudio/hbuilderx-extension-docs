# Plugin installation

## Install plugin

In HBuilderX, click the menu [Tools] [Plugin Installation] to open the plugin installation window.

In addition to the core plugins shown in the figure below, please go to [plugin market](https://ext.dcloud.net.cn/?cat1=1&cat2=11&orderBy=TotalDownload) to download other plugins.

<img src="/static/snapshots/tutorial/plugins_install/plugins_install_1.en.png" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;"/>

## Installed plugins

The installed plugins of HBuilderX will be displayed in [Installed].

When a new version of the plugin is released, this plugin will display the word `upgrade`.

<img src="/static/snapshots/tutorial/plugins_install/plugins_install_2.en.png" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;"/>

## Install plugins from market

In [Plugin Market](https://ext.dcloud.net.cn/?cat1=1&cat2=11&orderBy=TotalDownload), enter the plugin details page, click [Import Plugin], the installed HBuilderX will be called up.

<img src="/static/snapshots/tutorial/plugins_install/plugins_install_3.jpg" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;"/>

## 离线安装插件@OfflineInstall

插件市场，找到要下载的插件，如下所示，点击【下载插件ZIP】，

<img src="https://web-ext-storage.dcloud.net.cn/hx/download_zip_for_dart_sass.jpg" style="zoom: 50%;" />

1. 打开HBuilderX安装目录，进入`plugins`目录

   ```bash
   # Mac电脑 正式版 安装目录
   cd /Applications/HBuilderX.app/Contents/HBuilderX/plugins/

   # Mac电脑 Alpha版 安装目录
   cd /Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/
   ```

2. 将下载的zip包，解压到此文件夹 （注意解压的目录名，不能带版本号，必须跟插件市场的`插件ID`一致。）

    ```bash
    ✅ 正确示例：
    plugins/
    └── compile-dart-sass/

    ❌ 错误示例：
    plugins/
    └── compile-dart-sass-0.0.3/  （包含版本号）
    └── compile-dart-sass-main/   （包含其他后缀）
    ```
3. 安装依赖
    - 如果插件的 package.json 中声明了依赖，且目录下不存在 node_modules 文件夹
    - 在插件目录中打开命令行，执行：
    ```bash
    npm install

    # 使用HBuilderX 自带的npm安装
    ../npm/npm install
    ```
4. 重启HBuilderX编辑器

## FAQs on Plugins Install Failed @install-Fail

Recently, a part of our users have been getting problems with `plugins install`, e.g.

<img src="/static/snapshots/tutorial/plugins_install/plugin_install_fail.png" class="hd-img" />

When failed on install plugins, click on the window menu 【Help - View Running Logs】 to find out the related errors, according them to get a deal.

Notes: All plugins were saved as zip packages on the server, it will download to the local directory `update` firstly, then it will automatically unpack to a folder named `plugins` which is at the same level with HBuilderX.exe if download succeed.

### Q1: Network Issues

- Maybe it is the network or the area was restricted, that caused it not able to connecting with the HBuilderX Updating Server。
- Maybe it is not be able to connecting with the HBuilderX Updating Server by the computer's global network proxy is on.
- Try to ping with `ping update.liuyingyong.cn` with your cli to check if the network connection is working.
- Try to switch the network connecting method, maybe by 4G/5G hotspots on smartphone.

### Q2: Move Failed

You might see the beneath logs written in your log history:

```
[info] try move "xxxxx" to "xxxx"
[info] move result: false
```

These are showing, copying to the target folder has been failed after the download has been done.

Solutions：
- Try to uninstall and reinstall the plugin.
- Windows OS： Close the HBuilderX then restart HBuilderX.exe with right mouse-click on 【Run as Administrator】.
- Enter the folder which HBuilderX was installed in, then enter `update/plugins`, search for the zip pack of the plugin, unzip this package under the `plugins` dir which in the same directory as HBuilderX.exe.

### 03: Permission Problems of Local Directories

With appropriate permissions, your click will moving your unpacked HBuilderX plugins to the target directory automatically. But it may fail if without a suitable permission configuration when downloading or processing during the operation.

### Q4: Unzip Failed

You might see the beneath logs written in your log history:
```
[info] Unpack plugin "xxxx"
[info] unzip "xxxx" failed
```
These are showing, unzipping has been failed after the download has been done.

Possible reasons：
- No permission to unzipping to the target directory.
- Encrypted package needs to decrypt before unzipping. As for some security reason, some companies are applying strategies, to encrypting on zip packages which includes executable files. The encrypted package needs to be decrypted firstly, then unzipped it to the plugins directory.

### Q5: No More Storage on the Disk

The storage of the disk which HBuilderX was installed in was short. Make sure to check the disk first.

### Q6: Failed on MD5 check

HBuilderX will check md5 signiture of downloaded zipped plugins. To resist some malicial modifies, it will install only if the consistent of the signitures has been assured.

If this happenes to you, please make sure you get in touch with offical staffs from HBuilderX.

## Node-Plugin-Questions

Some node plugins, such as `sass` and `less`, were successfully installed, but HBuilderX prompts that the installation failed when the project is running.

Possible reason: `node_modules` installation failed. Enter the plugins directory of HBuilderX and manually execute command `npm install --save`.
