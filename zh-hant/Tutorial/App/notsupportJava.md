
#### 报错java不支持32位系统运行

##### 报错截图
> 发行->App - 云打包

![弹框提示](https://web-ext-storage.dcloud.net.cn/hx/packNotsupportJava.png)

> 运行->Android App 基座

![弹框提示](https://web-ext-storage.dcloud.net.cn/hx/runNotsupportJava.png)

##### 报错原由

> 从HBuilderX 4.27开始内置的JDK从32位调整为64位，版本从11调整为17。32位操作系统的用户，需要手动调整插件。

##### 解决方式

1. 32位amazon-corretto插件可通过[百度网盘下载](https://pan.baidu.com/s/1r89LhMOiMnp48_UhzWkdmA?pwd=frhc)，提取码：frhc
2. 下载完成后解压后放入 `%安装目录%/HBuilderX/plugins`目录，替换目录中的amazon-corretto文件夹
3. 重新HBuilderX即可
