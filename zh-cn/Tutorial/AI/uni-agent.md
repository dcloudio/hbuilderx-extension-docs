# uni-agent

## 在 hbuilderx-ai-chat 中使用 uni-agent

uni-agent 是 hbuilderx-ai-chat 插件支持的 AI 编码助手 Provider，支持多模型调用、流式输出、工具调用和 MCP 协议等能力。

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

2. **登录 DCloud 账户**
   - 在 HBuilderX 中，点击状态栏的登录入口，使用 DCloud 账户登录
   - 登录成功后，插件会自动检测账户的订阅状态

<img src="https://web-ext-storage.dcloud.net.cn/hx/uni-agent/hbuilderx-login.png" style="zoom: 60%;" />

3. **选择 uni-agent Provider**
   - 在 hbuilderx-ai-chat 的 Provider 选择界面中，选择 `uni-agent(sdk)` 作为当前 Provider

4. **自动配置生效**
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
   UNI_AGENT_BASE_URL=http://localhost:1234
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
| `UNI_AGENT_BASE_URL` | 是 | uni-agent API 服务的基础地址 | `http://localhost:4141` |
| `UNI_AGENT_API_KEY` | 是 | API 认证密钥，用于身份验证 | `cr_abcdefghijklmnopqrstuvwxyz` |
| `UNI_AGENT_PROVIDER` | 是 | AI 模型提供商标识 | `anthropic`、 `github-copilot`、 `openai-compatible` |
| `UNI_AGENT_MODEL` | 是 | 默认使用的模型 | `claude-sonnet-4-5` |
| `UNI_AGENT_SMALL_FAST_MODEL` | 否 | 用于快速任务的小模型 | `claude-haiku-4-5` |

---
