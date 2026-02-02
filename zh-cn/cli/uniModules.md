# uni_modules CLI 命令使用说明

## 前置要求

- `HBuilderX` 版本号 5.0 +
- `HBuilderX` 已安装 `uni_modules` 插件

## 下载插件@download

从[插件市场](https://ext.dcloud.net.cn/)下载指定的 `uni_modules` 插件到项目中。

### 语法

```bash
cli uni_modules --download [插件ID] --project [项目路径] [可选参数]
```

### 必需参数

- `--download [插件ID]`: 要下载的插件 ID
- `--project [项目路径]`: 项目的绝对路径

### 可选参数

- `--version [版本号]`: 指定下载插件的版本号，不设置则下载最新版
- `--extType [类型]`: 指定下载插件的类型
  - `source`: 源码授权版
  - `encrypt`: 普通授权版
- `--force`: 强制覆盖已存在的同名插件/依赖

### 使用示例

```bash
# 下载最新版本的插件
cli uni_modules --download uni-id-pages --project D:\projects\my-uniapp

# 下载指定版本的插件
cli uni_modules --download uni-id-pages --project D:\projects\my-uniapp --version 1.0.5

# 下载源码授权版插件
cli uni_modules --download uni-id-pages --project D:\projects\my-uniapp --extType source

# 强制覆盖安装
cli uni_modules --download uni-id-pages --project D:\projects\my-uniapp --force
```

---

## 更新插件@upgrade

更新项目中已安装的 `uni_modules` 插件到最新版本。

### 语法

```bash
cli uni_modules --upgrade [插件ID] --project [项目路径]
```

### 必需参数

- `--upgrade [插件ID]`: 要更新的插件 ID
- `--project [项目路径]`: 项目的绝对路径

### 使用示例

```bash
# 更新指定插件到最新版本
cli uni_modules --upgrade uni-id-pages --project D:\projects\my-uniapp
```

---

## 查看插件列表@list

查看项目中已安装的所有 `uni_modules` 插件列表。

### 语法

```bash
cli uni_modules --list --project [项目路径]
```

### 必需参数

- `--list`: 列出已安装的插件
- `--project [项目路径]`: 项目的绝对路径

### 使用示例

```bash
# 查看项目中已安装的插件列表
cli uni_modules --list --project D:\projects\my-uniapp
```

---

## 帮助信息@help

查看 `uni_modules` CLI 命令的帮助信息。

### 语法

```bash
cli uni_modules --help
```

### 使用示例

```bash
# 查看帮助信息
cli uni_modules --help
```
