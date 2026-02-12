# Linux HBuilderX CLI

### Introduction@desc
-------------------

The purpose of the CLI is to allow developers to call HBuilderX CLI on Linux servers to programmatically package apps and upload uniCloud cloud functions.

It provides support for continuous integration, automated releases, and automated customer deployment for SaaS-like businesses.

**Please note this is a CLI program, not the HBuilderX visual editor. It is only suitable for Linux command-line invocation.**

**We have only tested on Ubuntu 20.04 LTS system and have not tested on other Linux distributions. If you encounter any issues, please provide feedback in this post.**

### Download@download
--------------------------

<!-- <div style="display: block; line-height: 40px;" id="hx_alpha_download"></div>
<div style="display: block; line-height: 40px;" id="hx_release_download"></div> -->

<a id="download_alpha" download="" href="https://download1.dcloud.net.cn/download/HBuilderX.5.01.2026021122-alpha.linux_x64.full.tar.gz" target="_blank"> v5.01 alpha 下载地址</a>

<a id="download_release" download="" href="https://download1.dcloud.net.cn/download/HBuilderX.4.87.2025121004.linux_x64.full.tar.gz" target="_blank"> v4.87 Release Download</a>

For historical versions, you can download from Baidu Netdisk, [Netdisk Access](https://pan.baidu.com/s/1kvigifhSaEImD-gCx_DQ8Q)
Extraction code: bmnh

### Common Usage Commands@usage
--------------------------

**1. Extract the installation package**

```bash
tar -zxvf xxx.linux_x64.full.tar.gz
```

**2. Start HBuilderX program using CLI**

```
cd HBuilderX directory
./cli open
```

After starting, you can use `ps -ef | grep HBuilderX` to check if HBuilderX is running.

**3. App packaging operation commands**

```
# Login to HBuilderX. Note: login is required for app packaging. Reason: required by relevant national departments
cli user login --username <username>  --password <password>

# Import the project to be packaged
cli project open --path <project path>

# Android iOS packaging. Documentation: https://hx.dcloud.net.cn/cli/pack
cli pack --config configuration file
```

For complete CLI documentation, see: [https://hx.dcloud.net.cn/cli/README](https://hx.dcloud.net.cn/cli/README)

### Extensions

- [Linux Installing Plugin Market Plugins](/cli/linux-install-market-plugin)

### Report Bugs

If you encounter any issues, please report bugs at [https://issues.dcloud.net.cn/pages/issues/report-bug?mid=pluginsCLI.linux](https://issues.dcloud.net.cn/pages/issues/report-bug?mid=pluginsCLI.linux). When submitting issues, please include the following information:
1. Operating system information
2. Detailed command examples and screenshots

The more detailed information you provide, the better we can diagnose and resolve the issue.
