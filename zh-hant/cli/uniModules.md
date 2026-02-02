# uni_modules CLI 命令使用說明

## 前置要求

- `HBuilderX` 版本號 5.0 +
- `HBuilderX` 已安裝 `uni_modules` 插件

## 下載插件@download

從[插件市場](https://ext.dcloud.net.cn/)下載指定的 `uni_modules` 插件到項目中。

### 語法

```bash
cli uni_modules --download [插件ID] --project [項目路徑] [可選參數]
```

### 必需參數

- `--download [插件ID]`: 要下載的插件 ID
- `--project [項目路徑]`: 項目的絕對路徑

### 可選參數

- `--version [版本號]`: 指定下載插件的版本號,不設置則下載最新版
- `--extType [類型]`: 指定下載插件的類型
  - `source`: 源碼授權版
  - `encrypt`: 普通授權版
- `--force`: 強制覆蓋已存在的同名插件/依賴

### 使用示例

```bash
# 下載最新版本的插件
cli uni_modules --download uni-id-pages --project D:\projects\my-uniapp

# 下載指定版本的插件
cli uni_modules --download uni-id-pages --project D:\projects\my-uniapp --version 1.0.5

# 下載源碼授權版插件
cli uni_modules --download uni-id-pages --project D:\projects\my-uniapp --extType source

# 強制覆蓋安裝
cli uni_modules --download uni-id-pages --project D:\projects\my-uniapp --force
```

---

## 更新插件@upgrade

更新項目中已安裝的 `uni_modules` 插件到最新版本。

### 語法

```bash
cli uni_modules --upgrade [插件ID] --project [項目路徑]
```

### 必需參數

- `--upgrade [插件ID]`: 要更新的插件 ID
- `--project [項目路徑]`: 項目的絕對路徑

### 使用示例

```bash
# 更新指定插件到最新版本
cli uni_modules --upgrade uni-id-pages --project D:\projects\my-uniapp
```

---

## 查看插件列表@list

查看項目中已安裝的所有 `uni_modules` 插件列表。

### 語法

```bash
cli uni_modules --list --project [項目路徑]
```

### 必需參數

- `--list`: 列出已安裝的插件
- `--project [項目路徑]`: 項目的絕對路徑

### 使用示例

```bash
# 查看項目中已安裝的插件列表
cli uni_modules --list --project D:\projects\my-uniapp
```

---

## 幫助信息@help

查看 `uni_modules` CLI 命令的幫助信息。

### 語法

```bash
cli uni_modules --help
```

### 使用示例

```bash
# 查看幫助信息
cli uni_modules --help
```
