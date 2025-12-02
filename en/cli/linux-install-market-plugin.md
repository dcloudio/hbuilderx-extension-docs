# Linux Install Plugin Market Plugins

The Linux .tar.gz installation package does not include plugins from the plugin market. How do you install plugin market plugins like less, sass, etc. on Linux?

**Using the less plugin in the image below as an example, click the download button [Download Plugin ZIP]**

<img src="https://web-ext-storage.dcloud.net.cn/hx/static/snapshots/cli/linux-market-less.jpg" class="hd-img" />

**Copy the downloaded zip file to the Linux HBuilderX/plugins directory.**

<img src="https://web-ext-storage.dcloud.net.cn/hx/static/snapshots/cli/linux-npm-install.jpg" class="hd-img" />

**Extract the plugin zip file. The extracted folder name must be the plugin ID**

```shell
# Example below, extract compile-less.zip
unzip compile-less_1.0.5.zip -d compile-less
```

**Install node_modules**

```shell
# Some Node plugins from the plugin market have dependencies, so you need to run npm to install node_modules. Enter the plugin directory and run
../npm/npm install
```

<img src="https://web-ext-storage.dcloud.net.cn/hx/static/snapshots/cli/linux-npm-install.jpg" class="hd-img" />
