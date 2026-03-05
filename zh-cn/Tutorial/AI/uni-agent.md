# uni-agent

uni-agent 是专为 uni-app / uni-app x 开发者打造的 AI 编程助手，内置了丰富的技能（Skills）、子智能体（Subagents）和知识库，帮助您高效完成跨平台应用开发。

---

## 安装插件

如下图所示,工具栏,点击最右侧的 `AI` 图标,即可安装 uni-agent 插件。

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/plugin-install.jpg" style="zoom: 35%;" />

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

通过登录 DCloud 账户并订阅 uni-agent 套餐，插件会自动获取套餐中的 API 地址、密钥和模型配置，无需手动填写任何环境变量。

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


## uni-agent 视图概览

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/uniagent-view.png" style="zoom: 60%;" />

### 新会话

用于开始一段全新的对话。点击聊天视图右上角【新会话】后，会创建一个新的会话并重置当前会话的大纲与对话上下文；当你需要切换问题主题、重新梳理需求，或希望避免旧对话内容影响新的讨论时，可以使用该功能。


### 历史会话

用于管理和回到以前保存的会话记录。便于你从过往对话中快速续聊或复盘。

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/session-history.png" style="zoom: 60%;" />

- **查看历史会话** 点击聊天视图右上角【历史会话】后，会弹出历史会话列表，并显示会话标题与时间，在历史会话列表中，点击某条记录即可加载该会话内容；加载后，你可以在原会话上下文中继续提问，或查看此前的分析与结论。

- **删除历史会话** 当某些会话不再需要时，可以在历史会话列表中对对应记录执行删除操作，将其从历史记录中移除，以保持列表整洁。


### 大纲

用于查看当前会话的结构化摘要，并在长对话中快速定位关键内容。

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/outline.png" style="zoom: 60%;" />

- **查看会话大纲** 点击聊天视图右上角【大纲】后，会在右侧展示由 uni-agent 基于当前对话自动生成的大纲条目。

- **快速定位** 当对话内容较长时，可以在右侧大纲中点击对应条目，快速跳转/滚动到相关内容位置，从而减少手动翻找。


### 切换项目

用于切换 uni-agent 读取与回答时所基于的项目上下文。点击聊天视图右下角项目名称旁的【切换项目】后，会弹出可选项目列表，并标记当前正在使用的项目（例如“[当前项目] unix-demo”）。  

切换项目会影响后续对话中“读取项目文件、理解目录结构、解析配置（如页面与路由）”的上下文来源。

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/switch-project.png" style="zoom: 60%;" />

#### 同时处理多个项目的任务
如果您想让 uni-agent 同时处理多个项目的任务，可以将需要同步处理的项目在新窗体中打开，并在每个窗体的 uni-agent 视图中切换到对应项目，这样每个窗体的 uni-agent 就会基于当前所选的项目上下文进行对话和操作。 

如下图，HBuilderX 同时导入了 `unix-demo` 和 `hello-uni-app-demo` 两个项目，我想让 uni-agent 同时处理这个两个项目的任务，那么我就可以将 `hello-uni-app-demo` 项目在新窗体中打开，然后再打开 uni-agent 聊天视图，这样新窗体的 uni-agent 就会基于当前所选的项目上下文进行对话和操作。

**具体操作**：在项目上点击右键，选择【在新窗体中打开】 > 在新窗体中的右上角点击 `AI` 以打开 uni-agent 聊天视图 > 在聊天输入框中开启新聊天即可。

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/open-in-new-window.png" style="zoom: 60%;" />

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/open-in-new-window-2.png" style="zoom: 60%;" />

### 设置

用于配置/修改 uni-agent 连接大模型所需的 API Keys 等环境变量。  

点击聊天视图右上角【设置】进入配置面板后，按 `KEY=VALUE` 的格式逐行填写（以 `#` 开头的行会被忽略）。点击【保存】后，这些配置会写入插件的全局存储，并在下次初始化 uni-agent 时自动注入到进程环境变量中；如果你同时使用了 DCloud 账户订阅与手动配置了环境变量，则会优先使用手动配置而不再请求订阅信息。

<img src="https://web-ext-storage.dcloud.net.cn/hx/ai-chat/config-env.png" style="zoom: 60%;" />

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


## 为 uni-agent 配置自定义规则

您可以在项目根目录创建一个 AGENTS.md 文件为 uni-agent 提供自定义规则，该文件中的规则会被注入到与大模型对话的上下文中，以便针对您的项目规范 uni-agent 的行为。

### AGENTS.md 文件示例

```markdown
# 项目自定义规则

## 项目概述

本项目是一个基于 uni-app 开发的跨平台电商应用，支持 H5、微信小程序和 App 三端。

## 技术栈

- 框架：uni-app（Vue 3 + Composition API）
- UI 组件库：uni-ui
- 状态管理：Pinia
- 网络请求：uni.request 封装
- 样式：SCSS，采用 BEM 命名规范

## 代码规范

- 组件文件名使用 PascalCase，如 `GoodsList.vue`
- 页面文件放在 `pages/` 目录，按模块分子目录
- 公共组件放在 `components/` 目录
- 工具函数放在 `utils/` 目录，按功能模块拆分
- 接口请求统一封装在 `api/` 目录

## 接口约定

- 后端接口基础地址通过 `BASE_URL` 环境变量配置
- 所有接口返回格式为 `{ code, data, message }`，code 为 0 表示成功
- Token 存储在 `uni.getStorageSync('token')` 中，请求头携带 `Authorization: Bearer <token>`

## 注意事项

- 不要使用 `window`、`document` 等浏览器专有 API，请使用 uni 提供的跨平台 API
- 图片资源统一放在 `static/` 目录，不要使用网络图片作为默认资源
- 涉及支付、授权等敏感功能，修改前请先查阅 `docs/` 目录下的相关说明文档
```

---

## 其他问题
如果您在使用 uni-agent 的过程中遇到任何问题或者有好的建议，欢迎加入我们的 [**uni-agent 技术交流群**](https://im.dcloud.net.cn/#/?joinGroup=698bf7c65923842ac72bcb19) 沟通交流。