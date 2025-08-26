# Linux 安装插件市场插件

Linux.tar.gz安装包中，没有包含插件市场的插件，那如何在Linux上安装插件市场的less、sass等插件？

**以下图中的less插件为例，点击下载按钮【下载插件ZIP】**

<img src="https://web-ext-storage.dcloud.net.cn/hx/static/snapshots/cli/linux-market-less.jpg" class="hd-img" />

**将下载的zip文件拷贝到Linux HBuilderX/plugins目录下。**

<img src="https://web-ext-storage.dcloud.net.cn/hx/static/snapshots/cli/linux-npm-install.jpg" class="hd-img" />

**解压插件zip文件，解压后的文件名必须是插件ID**

```shell
# 如下示例，解压compile-less.zip
unzip compile-less_1.0.5.zip -d compile-less
```

**安装node_modules**

```shell
# 某些插件市场的Node插件，存在依赖，因此需要执行npm安装node_modules, 进入插件目录, 执行
../npm/npm install
```

<img src="https://web-ext-storage.dcloud.net.cn/hx/static/snapshots/cli/linux-npm-install.jpg" class="hd-img" />
