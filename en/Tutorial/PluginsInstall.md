# Plug-in installation

### Install plugin

After HBuilderX is started, click the menu [Tools] [Plugin Installation] to open the plug-in installation window.

In addition to the plug-in shown in the figure below, other plug-ins，go to[market](https://ext.dcloud.net.cn/?cat1=1&cat2=11&orderBy=TotalDownload) download.

<img src="/static/snapshots/tutorial/plugins_install_en_1.png" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;"/>

### Installed plugin

The installed plug-ins of HBuilderX will be displayed in [Installed plug-ins].

When the server has a high version plug-in, the corresponding plug-in will display the word `upgrade`.

<img src="/static/snapshots/tutorial/plugins_install_en_2.png" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;"/>

### Plug-in market installation

In [Plugin Market](https://ext.dcloud.net.cn/?cat1=1&cat2=11&orderBy=TotalDownload), enter the plug-in details page, click [Import Plug-in], it will automatically pull up the locally installed HBuilderX.

<img src="/static/snapshots/tutorial/plugins_install_3.jpg" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;"/>

### Install plugin offline

> `nodejs` plugin, if there is no `node_modules` in the plugin, you need to manually execute `npm install`

#### windows

1. Open the Explorer and enter the HBuilderX installation directory
2. Enter the `plugins` directory
3. Place the plug-in folder in this directory. (If it is a zip package, just unzip it)
4. Restart the HBuilderX editor

#### Mac

1. Open the system terminal and enter the following command to open the HBuilderX plug-in directory (note: on mac, the official version is different from the alpha directory)
2. Put the plugin folder, if it is a zip package, just unzip it) and place it under the `plugins` directory
3. Restart the HBuilderX editor

```shell
# release
open /Applications/HBuilderX.app/Contents/HBuilderX/plugins/

# Alpha
open /Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/
```

### Question

Some node plugins, such as `sass` and `less`, are installed successfully, but when the project is running, it prompts that the installation failed.

Possible reason: `node_modules` installation failed. Enter the plugin directory and manually execute `npm install --save`