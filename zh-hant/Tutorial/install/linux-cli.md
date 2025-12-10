# Linux HBuilderX CLI

### 简介@desc
-------------------

cli的用途是让开发者可以在linux服务器上调用HBuilderX cli，来实现程序化操作打包app、上传unicloud云函数。

为持续集成、自动化发布、类saas业务的自动化给客户部署等业务提供支持。

**请注意是cli程序，不是HBuilderX可视化编辑器。仅适用于Linux命令行调用。**

**目前我们仅在Ubuntu 20.04 LTS系统上进行了测试，并没有在其它Linux发行版上测试，如有问题，请在本帖反馈**

### 下载@download
--------------------------

<!-- <div style="display: block; line-height: 40px;" id="hx_alpha_download"></div>
<div style="display: block; line-height: 40px;" id="hx_release_download"></div> -->

<a id="download_alpha" download="" href="https://download1.dcloud.net.cn/download/HBuilderX.4.87.2025112602-alpha.linux_x64.full.tar.gz" target="_blank"> v4.87 alpha 下载地址</a>

<a id="download_release" download="" href="https://download1.dcloud.net.cn/download/HBuilderX.4.87.2025121004.linux_x64.full.tar.gz" target="_blank"> v4.87 正式版 下载地址</a>

历史版本，可在百度网盘下载， [网盘访问地址](https://pan.baidu.com/s/1kvigifhSaEImD-gCx_DQ8Q)
提取码: bmnh

### 常见使用命令@usage
--------------------------

**1. 安装包解压**

```bash
tar -zxvf xxx.linux_x64.full.tar.gz
```

**2. 使用cli启动HBuilderX程序**

```
cd HBuilderX目录
./cli open
```

启动后，可使用`ps -ef | grep HBuilderX`查看HBuilderX是否启动。

**3.  app打包操作命令**

```
# HBuilderX登录。注意app打包必须登录。原因：国家相关部门要求
cli user login --username <用户名>  --password <密码>

# 导入要打包的项目
cli project open --path <项目路径>

# android ios打包。文档：https://hx.dcloud.net.cn/cli/pack
cli pack --config 配置文件
```

完整的cli文档见：[https://hx.dcloud.net.cn/cli/README](https://hx.dcloud.net.cn/cli/README)

### 扩展

- [Linux 安装插件市场插件](/cli/linux-install-market-plugin)

### 报Bug

如果大家遇到问题，请大家到[https://issues.dcloud.net.cn/pages/issues/report-req?mid=pluginsCLI.linux](https://issues.dcloud.net.cn/pages/issues/report-req?mid=pluginsCLI.linux)报Bug。提交问题，请包含以下内容：
1. 操作系统信息
2. 详细的命令示例、截图

您提供的信息越详细，越有助于排查解决问题。
