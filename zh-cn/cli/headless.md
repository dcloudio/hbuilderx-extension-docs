# cli 无头模式@headless

> 需 HBuilderX **5.36+** 版本

无头模式（Headless）让 HBuilderX 在不打开可视化窗口的情况下运行，只保留 CLI 能力，可正常执行启动、打包、发行等命令，适合无图形界面的服务器、容器、持续集成（CI）等无人值守场景。

> Linux 版 CLI 本身即为无头运行，无需额外配置；本页主要说明 Windows、macOS 版如何开启无头模式。

## 启用方式@enable

无头模式由配置文件 `startup.ini` 控制。将该文件放到 **cli 可执行程序所在目录**（即 HBuilderX 可执行程序同级目录），写入：

```ini
[General]
HBUILDERX_CLI_HEADLESS=true
```

> `HBUILDERX_CLI_HEADLESS=true` 即开启无头模式；删除该项，或设置为其它值则不开启。

`startup.ini` 放置位置（与 `cli` 同目录）：

| 平台 | 放置目录 | 完整路径示例 |
| --- | --- | --- |
| Windows | HBuilderX 安装目录根目录 | `HBuilderX\startup.ini`（与 `cli.exe`、`HBuilderX.exe` 同级） |
| macOS | `HBuilderX.app/Contents/MacOS` | `/Applications/HBuilderX.app/Contents/MacOS/startup.ini` |

放置后重新启动 HBuilderX（`cli open`）即可生效。

## 无头模式与 UI 模式二选一@exclusive

开启无头模式后，双击 HBuilderX 可执行程序（`HBuilderX.exe`）或桌面图标都不会启动图形界面，只能通过 cli 使用。如需恢复 UI 模式，移除 `startup.ini` 文件后重新启动即可。
