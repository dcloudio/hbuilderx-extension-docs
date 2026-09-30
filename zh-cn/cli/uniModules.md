# uni_modules CLI 命令使用说明@uniModules

`uni_modules` CLI 覆盖插件开发的完整流程：新建插件、发布新版本、维护市场资料、安装插件依赖、发布前校验，以及从插件市场下载、更新和查看项目中的插件。

## 前置要求@requirement

- **HBuilderX 版本**：新建插件、发布插件、修改插件信息、安装依赖、发布前校验等命令自 HBuilderX 5.31 起提供；`--download`、`--upgrade`、`--list` 在 HBuilderX 5.0 及以上版本即可使用。
- **已登录插件作者账号**：发布、下载、更新等联网命令需要使用插件作者账号，未登录时命令会给出提示；登录方式见[用户账号操作](/cli/user)。

下文示例统一使用 `cli` 代表 HBuilderX 安装目录下的命令行工具（Windows 为 `cli.exe`，macOS、Linux 为 `cli`），写法与 [cli 概述](/cli/README) 一致。示例中的 `D:\projects\my-uniapp` 请替换为实际项目路径；插件 ID 统一写成 `yourname-demo`，其中 `yourname` 是作者 ID 占位符，实际使用时请替换为自己的作者 ID。

## 命令列表@overview

| 命令 | 用途 | 需要登录插件作者账号 | 版本要求 |
| --- | --- | --- | --- |
| `--create` | 新建 uni_modules 插件 | 否 | 5.31+ |
| `--publish` | 发布插件到插件市场 | 是 | 5.31+ |
| `--updateInfo` | 修改已发布插件的基本信息 | 是 | 5.31+ |
| `--install` | 安装插件声明的依赖 | 是 | 5.31+ |
| `--validate` | 发布前校验插件 | 是 | 5.31+ |
| `--download` | 从插件市场下载插件到项目 | 是 | 5.0+ |
| `--upgrade` | 从插件市场更新项目中的插件 | 是 | 5.0+ |
| `--list` | 查看项目中已安装的插件 | 否 | 5.0+ |

使用说明：

- 除 `--list` 外，其余命令都需要用 `--project` 指定项目的绝对路径；一次只能执行一个命令。
- 发布、下载等联网命令会使用插件作者账号，请先在 HBuilderX 中登录；未登录时命令会给出明确提示。
- `--create`、`--list` 为纯本地操作，不需要登录。

## 通用参数@common

| 参数 | 说明 |
| --- | --- |
| `--project <路径>` | 项目绝对路径，支持 uni-app、uni-app x 及其 CLI 项目；除 `--list` 外必填 |
| `--json` | 只输出一条稳定的 JSON 结果，不输出进度日志，适合 CI/CD 读取 |
| `--dryRun` | 只做校验和打包，不提交市场数据、不写入项目；`--create`、`--publish`、`--updateInfo` 支持 |
| `--force` | 允许覆盖发生冲突的已有插件文件；`--download`、`--upgrade`、`--install` 支持 |

> 命令还支持少量供调用方（如 HBuilderV）使用的内部参数，用于按调用环境组织提示文案；这些参数不在帮助中列出，命令行用户按本文说明使用即可。

### 执行日志@log

命令执行过程会输出进度日志，依次经过读取插件信息、校验、打包或下载、提交等阶段。下载、上传耗时与网络和插件体积有关，请耐心等待；命令结束后会输出最终结果。

### JSON 输出@json

`--json` 模式下只输出一条 JSON，方便脚本解析。

执行成功：

```json
{"success":true,"result":{"action":"publish","pluginId":"yourname-demo","version":"1.0.1","outcome":"published"}}
```

执行失败：

```json
{"success":false,"error":{"code":"SERVER_REJECTED","stage":"submit","message":"插件发布失败。","suggestion":"请根据服务端提示修正插件信息；确认版本未发布后再重试。","issues":[]}}
```

- `code`：稳定的错误标识，可用于脚本分支判断
- `stage`：出错阶段，如 `arguments`（参数）、`validate`（校验）、`submit`（提交）
- `message`、`suggestion`：错误原因与处理建议
- `issues`：发布校验的问题清单，每项包含字段、原因和处理建议

## 查看帮助@help

```shell
# 命令总览
cli uni_modules --help

# 指定命令的完整用法（参数、示例、执行影响）
cli uni_modules --publish help

# 以 JSON 输出帮助内容，便于工具集成
cli uni_modules --publish help --json
```

## 新建插件@create

按模板在项目中创建 uni_modules 插件骨架，包括插件目录、`package.json`、`readme.md`、`changelog.md` 等文件。

#### 命令语法

```shell
cli uni_modules --create <插件ID> --template <模板类型> --project <项目路径> [--dryRun] [--json]
```

#### 参数

| 参数 | 说明 |
| --- | --- |
| `--create <插件ID>` | 必填。插件 ID，格式为「作者ID-插件英文名称」，只允许英文、数字、下划线和连字符；普通账号不能使用 `uni`、`dcloud`、`uts` 开头的保留前缀 |
| `--template <模板类型>` | 必填。模板类型见下表 |
| `--project <项目路径>` | 必填。项目绝对路径 |
| `--dryRun` | 只校验并列出将要创建的文件，不写入项目 |
| `--json` | 输出 JSON |

#### 模板类型

| 模板类型 | 插件分类 | 适用项目 |
| --- | --- | --- |
| `component-vue` | 前端组件-vue组件 | uni-app、uni-app x |
| `component-mp` | 前端组件-小程序组件 | uni-app、uni-app x |
| `sdk-js` | JS SDK | uni-app、uni-app x |
| `uts` | UTS插件-API插件 | uni-app、uni-app x |
| `component-uts` | UTS插件-uni-app兼容模式组件（原“组件插件”） | uni-app、uni-app x |
| `uts-vue-component` | UTS插件-标准模式组件 | 仅 uni-app x |
| `uniapp-template-page` | 前端页面模板 | uni-app、uni-app x |
| `unicloud-template-function` | 云函数模板 | uni-app、uni-app x |
| `unicloud-template-page` | 云端一体页面模板 | uni-app、uni-app x |
| `unicloud-admin` | uniCloud Admin插件 | uni-app、uni-app x |
| `unicloud-database` | DB Schema及验证函数 | uni-app、uni-app x |
| `uasm` | UASM插件 | 仅 uni-app x |

#### 示例

```shell
# 新建一个 vue 组件插件
cli uni_modules --create yourname-demo --template component-vue --project D:\projects\my-uniapp

# 在 uni-app x 项目中新建 UTS API 插件
cli uni_modules --create yourname-uts --template uts --project D:\projects\my-uniappx

# 只预览将要创建的文件，不写入项目
cli uni_modules --create yourname-demo --template sdk-js --project D:\projects\my-uniapp --dryRun
```

#### 注意事项

- 插件创建在项目的 `uni_modules/<插件ID>` 目录下；同名插件已存在时命令会报错，不会覆盖已有插件。
- `uts-vue-component`（UTS插件-标准模式组件）和 `uasm`（UASM插件）只支持 uni-app x 项目，项目类型由项目根目录的 `manifest.json` 判断；在普通 uni-app 项目中使用这两类模板会提示更换模板。
- 创建后不会自动发布，需要登录插件作者账号后执行 `--publish`。

## 发布插件到插件市场@publish

将插件发布为新版本，并可在发布成功后上传插件截图。

#### 命令语法

```shell
cli uni_modules --publish <插件ID> --project <项目路径> [--changeLog <更新日志>] [--imageFile <图片路径> ...] [--imageDir <图片目录>] [--example] [--dryRun] [--json]
```

#### 参数

| 参数 | 说明 |
| --- | --- |
| `--publish <插件ID>` | 必填。需要发布的本地插件 ID |
| `--project <项目路径>` | 必填。项目绝对路径 |
| `--changeLog <更新日志>` | 指定本次更新日志；不指定时使用插件根目录 `changelog.md` 中的内容 |
| `--imageFile <图片路径>` | 发布成功后上传的插件截图，可重复指定多张；支持 JPG、JPEG、PNG，单张不超过 1 MB |
| `--imageDir <图片目录>` | 读取目录中的 JPG、JPEG、PNG 图片，按文件名排序上传；不能与 `--imageFile` 同时使用 |
| `--example` | 同时打包示例工程；项目类插件和 IDE 插件不支持 |
| `--dryRun` | 执行校验和打包，但不提交市场数据 |
| `--json` | 输出 JSON |

#### 示例

```shell
# 发布新版本，更新日志取自 changelog.md
cli uni_modules --publish yourname-demo --project D:\projects\my-uniapp

# 直接指定本次更新日志
cli uni_modules --publish yourname-demo --project D:\projects\my-uniapp --changeLog "修复登录态失效后无法跳转的问题"

# 发布并上传两张插件截图
cli uni_modules --publish yourname-demo --project D:\projects\my-uniapp --imageFile D:\shots\1.png --imageFile D:\shots\2.png

# 发布并上传截图目录中的全部图片
cli uni_modules --publish yourname-demo --project D:\projects\my-uniapp --imageDir D:\shots

# 只校验和打包，不提交市场数据
cli uni_modules --publish yourname-demo --project D:\projects\my-uniapp --dryRun
```

#### 更新日志

- 更新日志取自插件根目录的 `changelog.md`。CLI 会自动写入当前版本号标题（形如 `## 1.0.1 (2026-09-23)`），只需填写本次更新内容。
- 使用 `--changeLog` 时，参数值会作为当前版本的更新内容写入 `changelog.md`。
- `changelog.md` 中没有可发布的更新内容时，命令会提示「未填写本次发布的更新日志，无法继续发布。」，请补充内容或使用 `--changeLog`。

#### 发布前校验

发布前会依次执行本地校验和服务端校验，不通过时一次性列出全部问题与处理建议。常见校验项如下：

| 校验项 | 要求 |
| --- | --- |
| 清单信息 | `package.json` 的 `id`、`displayName`、`version`、`description`、`keywords`、`dcloudext.type` 不能为空 |
| 合规声明 | `dcloudext.declaration.permissions`（系统权限）、`.data`（数据采集）、`.ads`（广告）必须填写；无对应内容时也要写明“无”“插件不采集任何数据”“无广告” |
| 兼容性 | 按插件分类校验「支持的uni-app版本」「最低兼容版本号」「前端平台兼容性」「云端平台兼容性」。例如云函数模板、DB Schema 等分类不校验前端平台，但至少需要一个云端平台 |
| 插件文件 | `readme.md` 使用说明不少于 30 个字符；`changelog.md` 需包含当前版本的更新日志 |
| 特殊分类 | `uasm`（UASM插件）必须声明 `dcloudext.vapor` 为 `"√"`（支持蒸汽模式） |

服务端还会校验版本状态、账号权限等规则，请按返回的处理建议修正后重试。

#### 注意事项

- 发布成功后 CLI 会输出插件市场地址。截图在版本发布成功后通过独立接口上传，截图上传失败不影响已发布的版本。
- 修改插件目录中的 `package.json`、`changelog.md` 后需要重新发布，市场资料才会与本地保持一致。

## 修改插件信息@updateInfo

修改已发布插件的基本信息，如名称、简介、标签、价格、声明等，不会创建新版本。

#### 命令语法

```shell
cli uni_modules --updateInfo <插件ID> --project <项目路径> [--example] [--dryRun] [--json]
```

#### 参数

| 参数 | 说明 |
| --- | --- |
| `--updateInfo <插件ID>` | 必填。已经发布到插件市场的插件 ID |
| `--project <项目路径>` | 必填。项目绝对路径 |
| `--example` | 同时更新示例工程；项目类插件和 IDE 插件不支持 |
| `--dryRun` | 执行校验和打包，但不提交市场数据 |
| `--json` | 输出 JSON |

#### 示例

```shell
# 修改插件资料
cli uni_modules --updateInfo yourname-demo --project D:\projects\my-uniapp

# 只校验，不提交
cli uni_modules --updateInfo yourname-demo --project D:\projects\my-uniapp --dryRun
```

#### 注意事项

- 插件尚未发布到插件市场时，命令会提示无法修改插件基本信息，请先发布插件。
- 修改内容同样需要满足发布校验规则，例如清单字段、合规声明、兼容性等。

## 安装插件依赖@install

安装插件在 `package.json` 的 `uni_modules.dependencies` 中声明的依赖，并同时安装这些依赖所需的关联插件。

#### 命令语法

```shell
cli uni_modules --install <插件ID> --project <项目路径> [--force] [--json]
```

#### 参数

| 参数 | 说明 |
| --- | --- |
| `--install <插件ID>` | 必填。读取该插件的 `uni_modules.dependencies` |
| `--project <项目路径>` | 必填。项目绝对路径 |
| `--force` | 允许覆盖发生冲突的已有插件文件 |
| `--json` | 输出 JSON |

#### 示例

```shell
# 安装插件声明的依赖
cli uni_modules --install yourname-demo --project D:\projects\my-uniapp

# 依赖与本地已有插件冲突时覆盖
cli uni_modules --install yourname-demo --project D:\projects\my-uniapp --force
```

#### 注意事项

- 命令会下载依赖及其关联插件并写入项目，同时输出进度和结果统计（新增、更新、跳过的插件数量）。
- 命令只处理 uni_modules 插件依赖，不执行 `npm install`；npm 依赖请单独安装。

## 发布前校验@validate

检查插件是否满足发布要求，不发布插件，也不修改线上数据。

#### 命令语法

```shell
cli uni_modules --validate <插件ID> --project <项目路径> [--json]
```

#### 参数

| 参数 | 说明 |
| --- | --- |
| `--validate <插件ID>` | 必填。需要检查的插件 ID |
| `--project <项目路径>` | 必填。项目绝对路径 |
| `--json` | 输出 JSON |

#### 示例

```shell
# 校验插件是否可以发布
cli uni_modules --validate yourname-demo --project D:\projects\my-uniapp
```

#### 注意事项

- 校验规则与 `--publish` 一致，适合在发布前或持续集成流程中先行检查。
- 校验通过时输出「插件 yourname-demo 校验通过，版本 1.0.1。」；不通过时列出全部问题与处理建议。

## 下载插件@download

从[插件市场](https://ext.dcloud.net.cn/)下载指定的 `uni_modules` 插件到项目中。

#### 命令语法

```shell
cli uni_modules --download <插件ID> --project <项目路径> [--version <版本>] [--extType <类型>] [--force] [--json]
```

#### 参数

| 参数 | 说明 |
| --- | --- |
| `--download <插件ID>` | 必填。需要下载的插件 ID |
| `--project <项目路径>` | 必填。项目绝对路径 |
| `--version <版本>` | 指定下载的版本号，不设置则下载最新版 |
| `--extType <类型>` | 指定下载的授权类型：`source` 源码授权版、`encrypt` 普通授权版 |
| `--force` | 允许覆盖发生冲突的已有插件文件 |
| `--json` | 输出 JSON |

#### 示例

```shell
# 下载最新版本的插件
cli uni_modules --download uni-id-pages --project D:\projects\my-uniapp

# 下载指定版本
cli uni_modules --download uni-id-pages --project D:\projects\my-uniapp --version 1.0.5

# 下载源码授权版
cli uni_modules --download uni-id-pages --project D:\projects\my-uniapp --extType source

# 覆盖安装
cli uni_modules --download uni-id-pages --project D:\projects\my-uniapp --force
```

#### 注意事项

- 下载插件时会一并下载并写入其依赖的插件。
- 需要登录插件作者账号；下载付费插件前请确认账号已购买对应授权。
- 如需从插件市场完整导入插件（含选择项目、初始化云开发等），建议使用 HBuilderX 界面的“从插件市场导入”。

## 更新插件@upgrade

从插件市场检查并更新项目中的指定插件。

#### 命令语法

```shell
cli uni_modules --upgrade <插件ID> --project <项目路径> [--force] [--json]
```

#### 参数

| 参数 | 说明 |
| --- | --- |
| `--upgrade <插件ID>` | 必填。需要更新的本地插件 ID |
| `--project <项目路径>` | 必填。项目绝对路径 |
| `--force` | 允许覆盖发生冲突的已有插件文件 |
| `--json` | 输出 JSON |

#### 示例

```shell
# 更新指定插件到最新版本
cli uni_modules --upgrade uni-id-pages --project D:\projects\my-uniapp
```

#### 注意事项

- 已是最新版本时命令会提示无需更新。
- 插件文件被本地修改过、或与依赖存在冲突时，需要显式添加 `--force` 才能覆盖。

## 查看插件列表@list

查看项目中已安装的所有 `uni_modules` 插件。

#### 命令语法

```shell
cli uni_modules --list --project <项目路径> [--json]
```

#### 参数

| 参数 | 说明 |
| --- | --- |
| `--list` | 必填。列出已安装插件 |
| `--project <项目路径>` | 必填。项目绝对路径 |
| `--json` | 输出 JSON |

#### 示例

```shell
# 查看项目中已安装的插件列表
cli uni_modules --list --project D:\projects\my-uniapp

# 输出 JSON，供脚本处理
cli uni_modules --list --project D:\projects\my-uniapp --json
```

#### 注意事项

- 普通项目读取项目根目录下的 `uni_modules`，uni-app CLI 项目读取 `src/uni_modules`。
- 命令只读取项目文件，不会修改项目；项目中没有插件时会提示「当前项目下不存在uni_modules插件。」

## 常见问题@faq

**提示命令不存在或参数不支持。** 请先确认 HBuilderX 版本满足上方命令列表中的版本要求（`uni_modules` 随 HBuilderX 内置，无需单独安装），然后重新执行命令。

**提示未登录。** 请先执行 `cli user login --username <用户名> --password <密码>` 登录插件作者账号（详见 [用户账号操作](/cli/user)），再重新执行命令。

**提示版本已存在。** 插件市场不允许重复发布同一个版本号，请先修改 `package.json` 的 `version`，补充更新日志后重新发布。

**提示未填写更新日志。** 请在插件根目录 `changelog.md` 顶部填写本次更新内容，或使用 `--publish --changeLog "更新内容"`。

**依赖和 npm 的关系。** `--install` 只处理 `package.json` 中 `uni_modules.dependencies` 声明的插件依赖，不执行 `npm install`。

**命令执行时间较长。** 下载、上传会输出进度日志；如果需要脚本处理，建议加 `--json` 获取结构化结果。

## 相关文档@related

- [uni_modules 目录规范](https://uniapp.dcloud.net.cn/plugin/uni_modules.html)
- [插件市场](https://ext.dcloud.net.cn/)
- [cli 概述](/cli/README)
- [cli 用户账号操作](/cli/user)
