# Plugin installation

### Install plugin

In HBuilderX, click the menu [Tools] [Plugin Installation] to open the plugin installation window.

In addition to the core plugins shown in the figure below, please go to [plugin market](https://ext.dcloud.net.cn/?cat1=1&cat2=11&orderBy=TotalDownload) to download other plugins.

<img src="/static/snapshots/tutorial/plugins_install_en_1.png" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;"/>

### Installed plugins

The installed plugins of HBuilderX will be displayed in [Installed].

When a new version of the plugin is released, this plugin will display the word `upgrade`.

<img src="/static/snapshots/tutorial/plugins_install_en_2.png" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;"/>

### Install plugins from market

In [Plugin Market](https://ext.dcloud.net.cn/?cat1=1&cat2=11&orderBy=TotalDownload), enter the plugin details page, click [Import Plugin], the installed HBuilderX will be called up.

<img src="/static/snapshots/tutorial/plugins_install_3.jpg" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;"/>

### Install plugin offline

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

### Questions

Some node plugins, such as `sass` and `less`, are successfully installed, but HBuilderX prompts that the installation failed when the project is running.

Possible reason: `node_modules` installation failed. Enter the plugins directory of HBuilderX and manually execute command `npm install --save`.
