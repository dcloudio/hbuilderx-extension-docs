# CLI uni-app x 蒸汽模式 DevTools@uniappx-vapor-devtools

> 需 HBuilderX **5.33+** 版本，且需先安装 `uniappx-vapor-devtools` 插件

通过 CLI 创建、复用 uni-app x **蒸汽模式** App 的 DevTools 调试会话，并在不打开 DevTools 窗口的情况下读取或修改应用的调试数据（DOM、样式、页面、Network、Storage 等），可用于无人值守调试、自动化脚本等场景。

## 适用范围@scope

- 仅适用于 uni-app x 蒸汽模式的 `app-android`、`app-ios`、`app-harmony`。
- 不适用于 Web 和小程序。
- 同一平台同一时间只处理一台运行设备；若连接了多台设备，请先确定要调试的那一台。

## 概念说明@concepts

- **Session（会话）**：针对某台设备上正在运行的 App 建立的一次 DevTools 调试会话。同一时间可以存在多个会话（例如不同设备或不同项目）。
- **port（端口）**：每个会话在电脑本机监听的端口号，创建会话后由 `start`、`list` 返回。后续所有操作都用 `--port` 指定要操作哪个会话。
- **Runtime**：设备上运行的应用，通过会话向电脑上报页面、DOM、Network、Storage 等调试数据。

## 使用流程@workflow

下面按顺序说明如何取得一个可用的会话及其 `--port`，之后所有数据操作都用该 `--port`。

### 1. 确认插件@step-plugin

```shell
./cli installPlugin --name uniappx-vapor-devtools
```

插件已安装时可直接跳过；执行安装时不要加 `--force`，安装失败则停止。

### 2. 查询已有会话@step-list

```shell
./cli uniappx-vapor-devtools --command list
```

先查看是否已存在可用的会话。返回结果中的 `projectPath`、`platform`、`iosTarget`、`deviceId`、`deviceName` 可用于识别会话。若已有与当前调试目标匹配的会话，直接复用其 `port` 即可，无需重新创建。

### 3. 创建会话@step-start

没有可复用的会话时，新建一个会话（创建后会自动分配端口）。先用 `devices list` 枚举设备（见[获取设备列表](/cli/devices-list)）：

| 目标 | `devices list --platform` 取值 |
| --- | --- |
| Android | android |
| iOS 真机 | ios-iPhone |
| iOS 模拟器 | ios-simulator |
| HarmonyOS | app-harmony |

```shell
./cli devices list --platform <设备平台>

./cli uniappx-vapor-devtools --command start \
  --project <项目绝对路径> \
  --platform <app-android|app-ios|app-harmony> \
  --deviceId <设备ID> \
  [--iosTarget <device|simulator>] \
  [--deviceName <名称>]
```

`--project` 必须是绝对路径；`--iosTarget` 仅 `app-ios` 使用。创建成功后会返回 `port` 和 `runtimeInfo`，请记下 `port`，后续操作都要用到它。Android / HarmonyOS 由 CLI 自动建立设备端口反向转发；iOS 真机使用本机局域网 IPv4 地址（需与电脑处于同一局域网），模拟器使用 `127.0.0.1`。

### 4. 查询会话状态@step-status

```shell
./cli uniappx-vapor-devtools --command status --port <端口>
```

| 返回 | 处理 |
| --- | --- |
| `connected` | 会话已连接应用并完成初始化，可以执行数据操作 |
| `disconnected` | 应用尚未连接或已断开，按第 5 步处理 |
| `SESSION_NOT_FOUND` 或其他错误 | 会话不存在或出错，请重新创建会话 |

### 5. 连接应用@step-restart

状态为 `disconnected` 时，通常是因为应用还没有连接（或刚刚断开）。请先确保项目已运行到目标设备（参考[运行到手机或模拟器](/cli/launch-app)），再把第 3、4 步返回的完整 `runtimeInfo` 序列化后，作为一个值传给重启命令，让应用带上会话信息重新运行：

```shell
./cli restart app \
  --project <项目绝对路径> \
  --deviceId <设备ID> \
  --devtools_info '<runtimeInfo-json>'
```

请按当前操作系统和 Shell 处理引号与转义，`runtimeInfo` 需原样传递，不要拆分或手工拼接。重启成功后每隔一秒执行一次 `status`，最多等待 15 秒，状态变为 `connected` 后即可执行数据操作；若等待超时或出现错误，请从头排查。

### 6. 执行数据操作@step-operate

使用上一步确定的 `--port` 执行 DOM、截图、页面路由、Network、Storage 等操作，见[可用操作](#operations)。每次调用只输出一条 JSON，判断 `ok` 字段即可知道是否成功，失败时可用稳定的 `error.code` 定位原因（见[错误码](#errorcodes)）。

### 7. 关闭会话@step-stop

调试结束后，关闭本次创建的会话以释放端口和连接：

```shell
./cli uniappx-vapor-devtools --command stop --port <端口>
```

若该会话是复用已有的，请勿关闭，以免影响其他使用方。返回 `SESSION_NOT_FOUND` 说明会话已不存在，无需再处理。

## 可用操作@operations

### dom@dom

读取 DOM 和样式，并支持修改属性与样式。

**用法：**

```shell
./cli uniappx-vapor-devtools --command dom --port <端口> --action get-document --depth 2
./cli uniappx-vapor-devtools --command dom --port <端口> --action describe-node --node <节点ID> --depth -1
./cli uniappx-vapor-devtools --command dom --port <端口> --action computed-style --node <节点ID>
./cli uniappx-vapor-devtools --command dom --port <端口> --action box-model --node <节点ID>
./cli uniappx-vapor-devtools --command dom --port <端口> --action set-attribute --node <节点ID> --name <属性名> --value <值>
./cli uniappx-vapor-devtools --command dom --port <端口> --action remove-attribute --node <节点ID> --name <属性名>
./cli uniappx-vapor-devtools --command dom --port <端口> --action set-style --node <节点ID> --name <样式名> --value <值>
```

**参数：**

| 参数名称 | 描述 |
| --- | --- |
| --port | 会话端口，必填 |
| --action | 操作：get-document / describe-node / computed-style / box-model / set-attribute / remove-attribute / set-style |
| --node | DOM 节点 ID，除 `get-document` 外必填 |
| --depth | 子树深度，默认 1，`-1` 为完整子树，仅 `get-document`、`describe-node` 使用 |
| --name | 属性名或样式名，`set-attribute`、`remove-attribute`、`set-style` 使用 |
| --value | 属性值或样式值，`set-attribute`、`set-style` 使用 |

- 按 `--node` 操作时会自动建立无头 DOM 投影，无需先执行 `get-document`；页面切换或 DOM 刷新后旧节点 ID 可能失效，需要重新获取。
- 节点包含 `uniProperties`、`uniComponent`、`uniSourceFile` 等扩展字段，便于判断页面、自定义组件与普通 Element。
- 属性和样式写入仅对 Element 生效：`set-style` 修改行内样式，`set-attribute`、`remove-attribute` 修改属性。命令成功只表示 setter 已调用，不保证 Native 画面已刷新。
- 自定义组件 Props 目前仅支持读取，不支持修改。

### 截图@screenshot

截取指定 Element（`dom`）或整个页面（`page`）。

**用法：**

```shell
# Element 截图
./cli uniappx-vapor-devtools --command dom --port <端口> --action capture-screenshot \
  --node <节点ID> --output <绝对png路径>

# 页面截图
./cli uniappx-vapor-devtools --command page --port <端口> --action capture-screenshot \
  --output <绝对png路径> [--full-page]
```

**参数：**

| 参数名称 | 描述 |
| --- | --- |
| --port | 会话端口，必填 |
| --node | DOM 节点 ID，Element 截图必填 |
| --output | 截图输出文件的绝对路径，必填 |
| --full-page | 开关参数，传入时截取完整页面，不传截取可视区域，仅页面截图使用 |
| --overwrite | 是否覆盖已有截图，默认 false |

截图固定为 PNG，`--output` 必须是电脑上的绝对路径，默认不覆盖，传入 `--overwrite` 才覆盖，单张上限 16 MiB。`--full-page` 为开关，不要跟 `true` / `false`。

### page@page

页面跳转。该操作仅供无头调用方使用，UI DevTools 窗口中没有对应入口。

**用法：**

```shell
./cli uniappx-vapor-devtools --command page --port <端口> --action navigate --type navigateTo --url /pages/detail/detail?id=1
./cli uniappx-vapor-devtools --command page --port <端口> --action navigate --type navigateBack --delta 1
```

**参数：**

| 参数名称 | 描述 |
| --- | --- |
| --port | 会话端口，必填 |
| --action | 操作：navigate（页面截图见[截图](#screenshot)） |
| --type | 跳转方式：navigateTo / redirectTo / switchTab / reLaunch / navigateBack，必填 |
| --url | 页面路径，`navigateTo`、`redirectTo`、`switchTab`、`reLaunch` 必填，需以 `/` 开头 |
| --delta | 返回页面层数，默认 1，仅 `navigateBack` 使用 |

`navigateBack` 不需要传 `--url`。跳转成功或失败以命令返回结果为准。

### network@network

采集并读取应用的网络请求。

**用法：**

```shell
./cli uniappx-vapor-devtools --command network --port <端口> --action list
./cli uniappx-vapor-devtools --command network --port <端口> --action get --request <请求ID>
./cli uniappx-vapor-devtools --command network --port <端口> --action body --request <请求ID>
```

**参数：**

| 参数名称 | 描述 |
| --- | --- |
| --port | 会话端口，必填 |
| --action | 操作：list / get / body |
| --request | 请求 ID，`get`、`body` 必填 |

仅采集应用连接会话之后产生的 `uni.request`、`uni.uploadFile`、`uni.downloadFile` 请求，最多保留最近 1000 条；UTS 插件直接发起的请求不会出现，应用重连后历史记录清空。

### storage@storage

读取和修改应用的本地 Storage。

**用法：**

```shell
./cli uniappx-vapor-devtools --command storage --port <端口> --action list
./cli uniappx-vapor-devtools --command storage --port <端口> --action add-item --key <键名> --value <值> --value-type <string|number|boolean|null|array|object>
./cli uniappx-vapor-devtools --command storage --port <端口> --action set-item --key <键名> --value <值>
./cli uniappx-vapor-devtools --command storage --port <端口> --action remove-item --key <键名>
./cli uniappx-vapor-devtools --command storage --port <端口> --action clear
```

**参数：**

| 参数名称 | 描述 |
| --- | --- |
| --port | 会话端口，必填 |
| --action | 操作：list / add-item / set-item / remove-item / clear |
| --key | 键名，`add-item`、`set-item`、`remove-item` 必填 |
| --value | 值，`add-item`、`set-item` 必填 |
| --value-type | 新增条目的值类型：string / number / boolean / null / array / object，`add-item` 必填 |

- `list` 返回完整快照和每项的值类型；`add-item` 只新增不存在的 key；`set-item` 只修改已有 key 并保持原值类型，非法值不会写入；`remove-item` 为幂等删除；`clear` 清空全部。CLI 不支持修改 key。
- `--value` 按 `--value-type` 编码：`string` 原样传递，`number`、`boolean`、`null` 使用对应 JSON 文本，`array`、`object` 传入完整 JSON；值中含空格或特殊字符时请按当前 Shell 规则正确引用。
- Storage 的实时变化事件不会在 CLI 中主动推送；需要最新数据时重新执行 `list`。

### component@component

自定义组件 Props 目前仅支持读取，不支持修改，该命令暂不提供可写操作；读取可通过 `dom --action describe-node` 返回的 `uniComponent`、`uniComponentProps` 字段。

**用法：**

```shell
./cli uniappx-vapor-devtools --command component --port <端口> --action <操作>
```

**参数：**

| 参数名称 | 描述 |
| --- | --- |
| --port | 会话端口，必填 |
| --action | 操作名称；当前无可用写入操作 |

## 异常与限制@troubleshooting

- 遇到 `PORT_FORWARD_FAILED`、本机局域网地址不可用或设备无法连接等问题时，请先检查设备连接和网络环境（iOS 真机需与电脑处于同一局域网）后再重试，`runtimeInfo` 请勿修改。
- `runtimeInfo` 含认证 Token，仅用于本次调试，请勿写入日志、文档或持久化配置（`list` 返回中已省略）。
- 项目路径、设备名称、页面路径、Storage 值等含空格或特殊字符时，请按当前 Shell 规则正确引用。

## 错误码@errorcodes

| 错误码 | 含义 |
| --- | --- |
| INVALID_ARGUMENT | 参数缺失或格式错误 |
| SESSION_NOT_FOUND | 会话不存在或已关闭 |
| SESSION_CLOSED | 会话在创建期间已关闭 |
| LOCAL_NETWORK_ADDRESS_UNAVAILABLE | iOS 真机调试无可用局域网 IPv4 地址 |
| DEVTOOLS_NOT_READY | Runtime 或无头客户端尚未就绪 |
| CONNECTION_CHANGED | 操作期间 Runtime 连接发生变化 |
| PAGE_NOT_FOUND | 当前没有可操作的页面 |
| NODE_NOT_FOUND | 文档中不存在指定节点 |
| NODE_NOT_ELEMENT | 指定节点不是 Element |
| REQUEST_NOT_FOUND | Network 请求不存在或已淘汰 |
| BODY_NOT_AVAILABLE | 请求体或响应体不可读取 |
| STORAGE_ITEM_ALREADY_EXISTS | 新增的 Storage key 已存在 |
| STORAGE_ITEM_NOT_FOUND | 要修改的 Storage key 不存在 |
| STORAGE_VALUE_INVALID | 新值无法按原类型解析 |
| NAVIGATION_FAILED | 页面跳转失败 |
| SCREENSHOT_FAILED | 平台截图或文件读取失败 |
| SCREENSHOT_TOO_LARGE | PNG 超过 16 MiB |
| OUTPUT_ALREADY_EXISTS | 目标文件已存在且未允许覆盖 |
| OUTPUT_WRITE_FAILED | 无法写入或替换目标文件 |
| REQUEST_TIMEOUT | 单次操作超过内部超时 |
| PORT_FORWARD_FAILED | 设备端口转发失败或当前 Launcher 不支持 |
| INTERNAL_ERROR | 未归类的插件或 Server 错误 |
