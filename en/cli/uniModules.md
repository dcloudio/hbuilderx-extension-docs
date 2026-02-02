# uni_modules CLI Command Usage Guide

## Prerequisites

- `HBuilderX` version 5.0 +
- `uni_modules` plugin installed in `HBuilderX`

## Download Plugin@download

Download a specified `uni_modules` plugin from the [Plugin Marketplace](https://ext.dcloud.net.cn/) to your project.

### Syntax

```bash
cli uni_modules --download [Plugin ID] --project [Project Path] [Optional Parameters]
```

### Required Parameters

- `--download [Plugin ID]`: The ID of the plugin to download
- `--project [Project Path]`: The absolute path of the project

### Optional Parameters

- `--version [Version Number]`: Specify the version number of the plugin to download; downloads the latest version if not set
- `--extType [Type]`: Specify the type of plugin to download
  - `source`: Source code licensed version
  - `encrypt`: Standard licensed version
- `--force`: Force overwrite existing plugins/dependencies with the same name

### Usage Examples

```bash
# Download the latest version of a plugin
cli uni_modules --download uni-id-pages --project D:\projects\my-uniapp

# Download a specific version of a plugin
cli uni_modules --download uni-id-pages --project D:\projects\my-uniapp --version 1.0.5

# Download source code licensed version
cli uni_modules --download uni-id-pages --project D:\projects\my-uniapp --extType source

# Force overwrite installation
cli uni_modules --download uni-id-pages --project D:\projects\my-uniapp --force
```

---

## Update Plugin@upgrade

Update installed `uni_modules` plugins in your project to the latest version.

### Syntax

```bash
cli uni_modules --upgrade [Plugin ID] --project [Project Path]
```

### Required Parameters

- `--upgrade [Plugin ID]`: The ID of the plugin to update
- `--project [Project Path]`: The absolute path of the project

### Usage Examples

```bash
# Update a specific plugin to the latest version
cli uni_modules --upgrade uni-id-pages --project D:\projects\my-uniapp
```

---

## View Plugin List@list

View the list of all installed `uni_modules` plugins in your project.

### Syntax

```bash
cli uni_modules --list --project [Project Path]
```

### Required Parameters

- `--list`: List installed plugins
- `--project [Project Path]`: The absolute path of the project

### Usage Examples

```bash
# View the list of installed plugins in the project
cli uni_modules --list --project D:\projects\my-uniapp
```

---

## Help Information@help

View help information for `uni_modules` CLI commands.

### Syntax

```bash
cli uni_modules --help
```

### Usage Examples

```bash
# View help information
cli uni_modules --help
```
