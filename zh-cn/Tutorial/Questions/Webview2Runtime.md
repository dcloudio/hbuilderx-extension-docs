# WebView2 运行时安装说明（Windows 7 / 8 用户）

HBuilderX依赖 Microsoft Edge WebView2 Runtime 才能使webview正常渲染。
￼
## 一. 确认系统版本
  * 如果您使用的是 Windows 7 / 8 / 8.1，请注意：微软已停止对这些系统的最新支持，最后兼容的 WebView2 Runtime 版本为 **109.0.1518.140**。
  * 若检测到您的系统尚未安装 WebView2 运行时，请根据以下步骤安装：

  <img src="/static/snapshots/tutorial/question/webview2RuntimeMessage_cn.png" style="zoom:60%;" />

## 二. 下载运行时安装包
1. 打开百度网盘链接：
   [https://pan.baidu.com/s/1A5mPulsy9wM_s-C_TisKRg](https://pan.baidu.com/s/1A5mPulsy9wM_s-C_TisKRg?pwd=jxwk)
   提取码：`jxwk`

2. 下载压缩包文件：
   `Webview2_Runtime_109.0.1518.140.zip`

## 三. 找到程序目录

如果您不确定程序安装在哪里，可以这样操作：

1. 找到您桌面上的程序快捷方式（HBuilder X.lnk）。
2. 右键点击该快捷方式，选择 “**属性**”。
3. 在弹出的窗口中，点击 “**打开文件所在的位置**”。
4. 这样就能直接进入程序安装目录。

## 四.解压运行环境

1. 将 `Webview2_Runtime_109.0.1518.140.zip` 解压缩到刚刚打开的程序目录。
* 解压后目录结构应当是：
```bash
HBuilderX.exe
Webview2_Runtime_109.0.1518.140\
    ├─ msedgewebview2.exe
    ├─ msedge.dll
    ├─ icudtl.dat
    ├─ resources.pak
    ├─ locales\
    └─ ...
```
2. **注意**：必须保持解压后的目录结构完整，不能只拷贝部分文件。

## 五.重新启动应用

1. 完成解压后，请关闭并重新启动程序。
2. 程序会自动检测 webview2_runtime 目录，并使用该运行环境启动。
3. 如果目录正确，程序即可正常运行。
