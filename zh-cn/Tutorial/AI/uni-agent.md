# uni-agent

uni-agent 是专为 uni-app / uni-app x 开发者打造的 AI 编程助手，内置了丰富的技能（Skills）、子智能体（Subagents）和知识库，帮助您高效完成跨平台应用开发。

它的设计理念和使用技巧另见 [https://doc.dcloud.net.cn/uni-app-x/ai/](https://doc.dcloud.net.cn/uni-app-x/ai/)

---

## 安装插件

如下图所示,工具栏,点击最右侧的 `AI` 图标,即可安装 uni-agent 插件。

<img src="https://web-ext-storage.dcloud.net.cn/hx/doc/Snipaste_2026-03-20_18-49-10.png" style="zoom: 35%;" />

## 启动插件

HBuilderX,可以通过以下方式打开聊天视图。

- 工具栏,点击最右侧的 `AI` 图标
- 菜单【视图】【插件扩展视图】【AI Code Chat】
- 快捷键: Windows `Ctrl+Alt+I` ;  MacOS `⌃⌘I`

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/plugin-entry.jpg?t=1" style="zoom: 35%;" />

---

## 连接到 LLM 服务

在 uni-agent 中要连接到 LLM 服务有以下两种方式：

1. **DCloud 账户订阅（推荐）** — 在 HBuilderX 中登录 DCloud 账户，通过订阅套餐自动获取配置
2. **手动配置环境变量** — 通过设置面板手动填写 API Keys 环境变量


**两种配置方式存在优先级关系**

1. **环境变量配置优先** — 如果通过设置面板配置了 `UNI_AGENT_API_KEY`，则直接使用环境变量中的配置，不会请求 DCloud 订阅信息
2. **订阅自动补充** — 仅当未通过环境变量配置 API Key 时，插件才会尝试通过 DCloud 账户订阅获取配置


### 方式一：DCloud 账户订阅（推荐）

通过登录 DCloud 账户并订阅 uni-agent 套餐，插件会自动获取套餐中的 API 地址、密钥和模型配置，无需手动填写任何环境变量。此时使用的是全球顶尖的 AI Coding 模型。

#### 使用步骤

1. **订阅 uni-agent 套餐**
   - 如果您尚未订阅，请前往 DCloud 官方的[开发者中心](https://dev.dcloud.net.cn/pages/product-account/product-account?pcd=uni_ai_agent)订阅 uni-agent 套餐
   - 订阅完成后，套餐信息会自动关联到您的 DCloud 账户

2. **自动配置生效**
   - 插件会自动向 DCloud 服务端请求您的套餐信息
   - 使用 `uni-agent` 时，插件自动从套餐信息中提取 API 地址、密钥、模型提供商和默认模型等配置

#### 自动配置行为

- **登录时**：如果当前未通过环境变量配置 API Keys，插件会自动请求套餐信息并注入配置
- **登出时**：插件会清除所有通过订阅注入的环境变量，并重新初始化

### 方式二：手动配置环境变量

如果您拥有自己的 API 密钥（例如自建服务或第三方提供），可以通过设置面板手动配置环境变量。


#### 使用步骤

1. **打开设置面板**
   - 在 uni-agent 的聊天界面中，点击`设置`按钮打开 API Keys 配置面板

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/config-env.png" style="zoom: 60%;" />

2. **填写环境变量**
- 在编辑器中使用 `KEY=VALUE` 格式填写环境变量，每行一个，以 `#` 开头的行为注释，会被忽略，[点击此处查看环境变量详细说明](#环境变量说明)。
- 配置示例：

   ```
   # uni-agent 配置
   UNI_AGENT_BASE_URL=your_provider_api_base_url
   UNI_AGENT_API_KEY=your_api_key
   UNI_AGENT_PROVIDER=anthropic
   UNI_AGENT_MODEL=anthropic/claude-sonnet-4-5
   UNI_AGENT_SMALL_FAST_MODEL=anthropic/claude-haiku-4-5
   ```

3. **保存并生效**
   - 保存后，环境变量配置会存储在插件的全局存储中，下次初始化 uni-agent 时，这些环境变量会自动注入到进程中

---


## uni-agent 界面与核心功能

<img src="https://web-ext-storage.dcloud.net.cn/hx/doc/Snipaste_2026-03-20_18-56-21.png" style="zoom: 60%;" />

uni-agent 聊天视图可以理解为 4 个区域：

- **顶部工具区**：新会话、历史会话、大纲、设置等入口
- **中间消息区**：显示对话内容、工具执行过程与结果
- **底部输入区**：输入问题、使用斜杠命令、切换执行模式
- **底部变更区**：当 AI 修改代码后，显示当前仍需关注的文件变更

下面按实际使用场景介绍这些能力。

### 会话管理

#### 新会话

用于开始一段全新的对话。点击聊天视图右上角【新会话】后，会创建一个新的会话并重置当前会话的大纲与对话上下文；当你需要切换问题主题、重新梳理需求，或希望避免旧对话内容影响新的讨论时，可以使用该功能。

#### 历史会话

用于管理和回到以前保存的会话记录。便于你从过往对话中快速续聊或复盘。

<img src="https://web-ext-storage.dcloud.net.cn/hx/doc/Snipaste_2026-03-20_18-57-42.png" style="zoom: 60%;" />

- **查看历史会话** 点击聊天视图右上角【历史会话】后，会弹出历史会话列表，并显示会话标题与时间，在历史会话列表中，点击某条记录即可加载该会话内容；加载后，你可以在原会话上下文中继续提问，或查看此前的分析与结论。

- **删除历史会话** 当某些会话不再需要时，可以在历史会话列表中对对应记录执行删除操作，将其从历史记录中移除，以保持列表整洁。

#### 大纲

用于查看当前会话的结构化摘要，并在长对话中快速定位关键内容。

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/outline.png" style="zoom: 60%;" />

- **查看会话大纲** 点击聊天视图右上角【大纲】后，会在右侧展示由 uni-agent 基于当前对话自动生成的大纲条目。

- **快速定位** 当对话内容较长时，可以在右侧大纲中点击对应条目，快速跳转/滚动到相关内容位置，从而减少手动翻找。

### 输入、模式与快捷命令

#### Code / Plan 模式切换

在输入框附近可以切换 **Code** 和 **Plan** 两种模式：

- **Code 模式**：适合直接让 uni-agent 读取项目、修改代码、执行工具、排查问题。
- **Plan 模式**：适合先让 uni-agent 梳理需求、分析方案、拆解步骤，再决定是否进入具体实现。

如果你已经明确要它直接动手改代码，优先使用 **Code**；如果问题较复杂、需要先讨论方案或生成实施计划，优先使用 **Plan**。

#### `/init`：初始化项目规则与上下文

在输入框中输入 `/init` 并发送后，uni-agent 会自动分析当前代码仓库，并尝试创建或更新项目根目录下的 `AGENTS.md`，帮助后续的 AI 协作更贴合当前项目规范。

该过程通常会关注以下内容：

- 项目的构建 / lint / 测试命令
- 代码风格、命名、类型与错误处理约定
- 仓库中已有的 AI 协作规则，例如 `AGENTS.md`、`CLAUDE.md`、`.cursor/rules/`、`.cursorrules`、`.github/copilot-instructions.md`

如果你希望后续的 AI 改代码行为更贴合当前项目规范，建议先执行一次 `/init`。

#### `/undo`：撤销上一轮对话及相关改动

在输入框中输入 `/undo` 并发送后，uni-agent 会尝试撤销上一轮对话及其关联的代码改动，用于快速回退刚刚那一轮不满意的结果。

适合以下场景：

- 上一轮生成的代码方向不对
- 刚才的修改需要整体撤回重做
- 希望回到上一个稳定状态重新提问

#### 重新编辑最后一条用户消息

对于最后一条用户消息，可以直接在消息旁点击 **重新编辑**，修改原问题后再次发送，而不必重新手动复制整段内容。

这个功能适合：

- 微调刚才的需求描述
- 补充遗漏条件
- 基于上一条提问快速改写后重试

重新编辑并发送后，uni-agent 会基于更新后的问题重新继续后续流程。

### 项目上下文与设置

#### 切换项目

用于切换 uni-agent 读取与回答时所基于的项目上下文。点击聊天视图右下角项目名称旁的【切换项目】后，会弹出可选项目列表，并标记当前正在使用的项目（例如“[当前项目] unix-demo”）。

切换项目会影响后续对话中“读取项目文件、理解目录结构、解析配置（如页面与路由）”的上下文来源。

<img src="https://web-ext-storage.dcloud.net.cn/hx/doc/Snipaste_2026-03-20_18-59-06.png" style="zoom: 60%;" />

##### 同时处理多个项目的任务
如果您想让 uni-agent 同时处理多个项目的任务，可以将需要同步处理的项目在新窗体中打开，并在每个窗体的 uni-agent 视图中切换到对应项目，这样每个窗体的 uni-agent 就会基于当前所选的项目上下文进行对话和操作。

如下图，HBuilderX 同时导入了 `unix-demo` 和 `hello-uni-app-demo` 两个项目，我想让 uni-agent 同时处理这个两个项目的任务，那么我就可以将 `hello-uni-app-demo` 项目在新窗体中打开，然后再打开 uni-agent 聊天视图，这样新窗体的 uni-agent 就会基于当前所选的项目上下文进行对话和操作。

**具体操作**：在项目上点击右键，选择【在新窗体中打开】 > 在新窗体中的右上角点击 `AI` 以打开 uni-agent 聊天视图 > 在聊天输入框中开启新聊天即可。

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/open-in-new-window.png" style="zoom: 60%;" />

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/open-in-new-window-2.png" style="zoom: 60%;" />

#### 设置

用于配置/修改 uni-agent 连接大模型所需的 API Keys 等环境变量。

点击聊天视图右上角【设置】进入配置面板后，按 `KEY=VALUE` 的格式逐行填写（以 `#` 开头的行会被忽略）。点击【保存】后，这些配置会写入插件的全局存储，并在下次初始化 uni-agent 时自动注入到进程环境变量中；如果你同时使用了 DCloud 账户订阅与手动配置了环境变量，则会优先使用手动配置而不再请求订阅信息。

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/config-env.png" style="zoom: 60%;" />

### 文件变更展示

当 uni-agent 在对话过程中修改了项目文件后，聊天窗口底部会显示 **文件变更列表**，帮助你快速看到本轮对话影响了哪些文件。

这个区域的作用包括：

- 汇总当前仍需关注的文件修改
- 帮助你快速确认改动范围
- 作为继续查看、复核和后续处理代码改动的入口

如果一次对话修改了多个文件，建议在继续下一轮提问前，先查看这里列出的变更，确保当前修改符合预期。

#### 环境变量说明

uni-agent 运行时依赖以下 5 个环境变量：

| 变量名 | 必填 | 说明 | 示例值 |
|--------|------|------|--------|
| `UNI_AGENT_BASE_URL` | 是 | uni-agent API 服务的基础地址 | `your_provider_api_base_url` |
| `UNI_AGENT_API_KEY` | 是 | API 认证密钥，用于身份验证 | `your_api_key` |
| `UNI_AGENT_PROVIDER` | 是 | AI 模型提供商标识 | `anthropic`、`openai-compatible` |
| `UNI_AGENT_MODEL` | 是 | 默认使用的模型 | `anthropic/claude-sonnet-4-5` |
| `UNI_AGENT_SMALL_FAST_MODEL` | 否 | 用于快速任务的小模型 | `anthropic/claude-haiku-4-5` |

**openai-compatible 模型提供商配置说明**

如果 `UNI_AGENT_PROVIDER` 配置为 `openai-compatible`，可以使用任何兼容 OpenAI API 的服务商和模型，例如 deepseek、azure-openai 等。
- 以 deepseek 模型提供商为例，环境变量配置如下：
```shell
UNI_AGENT_BASE_URL=https://api.deepseek.com
UNI_AGENT_API_KEY=your_deepseek_api_key
UNI_AGENT_PROVIDER=openai-compatible
UNI_AGENT_MODEL=openai-compatible/deepseek-chat
UNI_AGENT_SMALL_FAST_MODEL=openai-compatible/deepseek-chat
```

---


## 配置自定义规则

您可以在项目根目录创建一个 AGENTS.md 文件为 uni-agent 提供自定义规则，该文件中的规则会被注入到与大模型对话的上下文中，以便针对您的项目规范 uni-agent 的行为。

### uni-app的AGENTS.md 文件示例

```markdown
# 项目自定义规则

## 项目概述

本项目是一个基于 uni-app 开发的跨平台电商应用，支持 H5、微信小程序和 App 三端。（**此处务必自行定义**）

## 技术栈

- 框架：uni-app（Vue 3 + Composition API）
- UI 组件库：uni-ui
- 网络请求：uni.request 封装
- 样式：SCSS，采用 BEM 命名规范

## 代码规范

- 页面文件放在 `pages/` 目录，按模块分子目录

## 接口约定

- 后端接口基础地址通过 `BASE_URL` 环境变量配置
- 所有接口返回格式为 `{ code, data, message }`，code 为 0 表示成功
- Token 存储在 `uni.getStorageSync('token')` 中，请求头携带 `Authorization: Bearer <token>`

## 注意事项

- 除了在web的条件编译中，其他情况不要使用 `window`、`document` 等浏览器专有 API，请使用 uni 提供的跨平台 API
- 图片视频字体等多媒体文件资源统一放在 `static/` 目录
- 涉及支付、授权等敏感功能，修改前请先查阅 `docs/` 目录下的相关说明文档
```

---

## 配置自定义技能

uni-agent 支持通过自定义技能（Skills）来扩展其能力。您可以创建自定义技能，让 uni-agent 在对话中根据业务场景进行自动调用。

自定义技能支持两种配置方式：**全局配置** 和 **项目级配置**。

### 配置优先级

当同名技能同时存在于多个位置时，优先级如下：

**项目级配置 > 全局配置 > 内置技能**

### 全局配置

全局配置的技能对所有项目生效，技能目录位置因操作系统而异：

- **Windows**：`%APPDATA%/HBuilder X/extensions/hbuilderx-ai-chat/uni-agent/config/skills`
- **macOS**：`~/Library/Application Support/HBuilder X/extensions/hbuilderx-ai-chat/uni-agent/config/skills`

### 项目级配置

项目级配置的技能仅对当前项目生效，技能目录位于项目根目录下：

```
.hbuilderx/uni-agent/skills
```

### 技能目录结构

每个技能是 `skills` 目录下的一个子文件夹，文件夹内包含一个 `SKILL.md` 文件：

```
skills/
└── my_skill/
    └── SKILL.md
```

### SKILL.md 文件格式

`SKILL.md` 文件由两部分组成：

1. **Frontmatter**（YAML 格式）：定义技能的名称和描述，描述中应明确技能的调用要求和场景，以确保 Agent 能够准确使用
    - name: 技能名称，必须唯一
    - description: 技能描述，需详细说明技能的功能、调用条件和使用场景，帮助 Agent 理解何时以及如何调用此技能
    - project: 技能适用的项目类型，支持 `uniapp` 和 `uniappx`，若为空，则代表支持所有项目类型
      * 在全局配置中，uni-agent 会判断SKILL项目类型与当前项目类型是否匹配，如果不匹配则不会将技能描述追加到提示词中，以节省token消耗

2. **正文**：技能被调用时发送给大模型的 Prompt 内容

### 配置示例

以下示例创建一个名为 `code_review` 的代码审查技能：

**文件路径**（全局配置 - Windows）：`%APPDATA%/HBuilder X/extensions/hbuilderx-ai-chat/uni-agent/config/skills/code_review/SKILL.md`

```markdown
---
name: code_review
description: 对修改的代码进行审查，检查潜在问题并给出优化建议，编码完成后必须调用此技能
project: uniapp
---

请对以下代码进行审查，重点关注：

1. 代码逻辑是否正确
2. 是否存在性能问题
3. 是否符合 uni-app 跨平台开发规范（避免使用平台特有 API）
4. 命名是否清晰、规范

请给出具体的修改建议和优化后的代码。
```

配置完成后，需要重启 HBuilderX，再次发起会话时，Agent 会根据技能描述内容自动调用技能。

---

## 安装指定版本

如需使用某一特定版本的 uni-agent 插件（例如兼容性要求或回退到旧版本），请前往 uni-agent 的插件页面操作：

**[uni-agent - DCloud 插件市场](https://ext.dcloud.net.cn/plugin?name=hbuilderx-ai-chat)**

1. **打开上述链接**，进入 uni-agent 的插件详情页。
2. **在「更新记录」中**找到目标版本，点击该版本右侧的 **「下载此版本」**，下载对应版本的插件包（ZIP）。
3. **将插件拷贝到 HBuilderX 插件目录**：解压下载的 ZIP，将解压得到的插件文件夹复制到 HBuilderX 的 `plugins` 目录下。解压后的文件夹名带版本号（如 `hbuilderx-ai-chat_1.5.1.260312193`），复制时请将文件夹重命名为 `hbuilderx-ai-chat`（去掉版本号后缀），否则插件可能无法被正确识别。
   - **Windows**：HBuilderX 安装目录下的 `plugins` 目录
   - **macOS**：`HBuilderX.app` 内 `Contents/HBuilderX/plugins` 目录（右键 HBuilderX.app → 显示包内容 → 进入上述路径）
4. **安装后确认**：重启 HBuilderX，再通过右上角的【AI】打开 uni-agent，确认版本与功能是否符合预期。

若安装或使用指定版本时遇到问题，可加入 [uni-agent 技术交流群](https://im.dcloud.net.cn/#/?joinGroup=698bf7c65923842ac72bcb19) 咨询。

---

## 其他问题
如果您在使用 uni-agent 的过程中遇到任何问题或者有好的建议，欢迎加入我们的 [uni-agent 技术交流群](https://im.dcloud.net.cn/#/?joinGroup=698bf7c65923842ac72bcb19) 沟通交流。
