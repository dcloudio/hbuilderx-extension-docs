# uni-agent

uni-agent 是专为 uni-app / uni-app x 开发者打造的 AI 编程助手，内置了丰富的技能（Skills）、子智能体（Subagents）和知识库，帮助您高效完成跨平台应用开发。

## 在 hbuilderx-ai-chat 中使用 uni-agent

在 hbuilderx-ai-chat 中使用 uni-agent 有两种方式：

1. **DCloud 账户订阅（推荐）** — 在 HBuilderX 中登录 DCloud 账户，通过订阅套餐自动获取配置
2. **手动配置环境变量** — 通过设置面板手动填写 API Keys 环境变量


**两种配置方式存在优先级关系**

1. **环境变量配置优先** — 如果通过设置面板配置了 `UNI_AGENT_API_KEY`，则直接使用环境变量中的配置，不会请求 DCloud 订阅信息
2. **订阅自动补充** — 仅当未通过环境变量配置 API Key 时，插件才会尝试通过 DCloud 账户订阅获取配置


---

## 方式一：DCloud 账户订阅（推荐）

通过登录 DCloud 账户并订阅 uni-agent 套餐，插件会自动获取套餐中的 API 地址、密钥和模型配置，无需手动填写任何环境变量。

### 使用步骤

1. **订阅 uni-agent 套餐**
   - 如果您尚未订阅，请前往 DCloud 官网订阅 uni-agent 套餐
   - 订阅完成后，套餐信息会自动关联到您的 DCloud 账户

2. **选择 uni-agent 助手**
   - 打开 HBuilderX 并登录您的 DCloud 账户
   - 点击 HBuilderX 右上角的 `AI` 图标，进入插件视图
   - 在插件视图界面中打开一个新会话，并选择 `uni-agent` 助手

<img src="https://web-ext-storage.dcloud.net.cn/hx/uni-agent/choose-uni-agent.png" style="zoom: 60%;" />

3. **自动配置生效**
   - 插件会自动向 DCloud 服务端请求您的套餐信息
   - 使用 `uni-agent` 时，插件自动从套餐信息中提取 API 地址、密钥、模型提供商和默认模型等配置

### 自动配置行为

- **登录时**：如果当前未通过环境变量配置 API Keys，插件会自动请求套餐信息并注入配置
- **登出时**：插件会清除所有通过订阅注入的环境变量，并重新初始化

---

## 方式二：手动配置环境变量

如果您拥有自己的 API 密钥（例如自建服务或第三方提供），可以通过设置面板手动配置环境变量。

### 使用步骤

1. **打开设置面板**
   - 在 hbuilderx-ai-chat 的聊天界面中，点击设置按钮打开 API Keys 配置面板

<img src="https://web-ext-storage.dcloud.net.cn/hx/uni-agent/config-env.png" style="zoom: 60%;" />

2. **填写环境变量**
   - 在编辑器中使用 `KEY=VALUE` 格式填写环境变量，每行一个
   - 以 `#` 开头的行为注释，会被忽略
   - 示例：

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

## 环境变量说明

uni-agent 运行时依赖以下 5 个环境变量：

| 变量名 | 必填 | 说明 | 示例值 |
|--------|------|------|--------|
| `UNI_AGENT_BASE_URL` | 是 | uni-agent API 服务的基础地址 | `your_provider_api_base_url` |
| `UNI_AGENT_API_KEY` | 是 | API 认证密钥，用于身份验证 | `your_api_key` |
| `UNI_AGENT_PROVIDER` | 是 | AI 模型提供商标识 | `anthropic`、`openai-compatible` |
| `UNI_AGENT_MODEL` | 是 | 默认使用的模型 | `anthropic/claude-sonnet-4-5` |
| `UNI_AGENT_SMALL_FAST_MODEL` | 否 | 用于快速任务的小模型 | `anthropic/claude-haiku-4-5` |

**openai-compatible 配置说明**
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
