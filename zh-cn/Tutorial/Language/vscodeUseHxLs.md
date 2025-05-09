## 在vscode中, 如何使用hbuilderx-language-services插件


### 安装
1. 进入扩展管理
    * 在侧边栏点击 扩展（Extensions） 图标, 或者使用快捷键
        * Windows / Linux: Ctrl + Shift + X
        * macOS: Cmd + Shift + X
<img src="/static/snapshots/tutorial/language/vscodeUseHxLs/1.png" style="zoom:80%" />

2. 安装 VSIX 插件
    * 把VSIX文件拖入扩展栏中
3. 安装完成后, 右下角会提示插件安装成功, 在已安装列表中有如下插件即可
<img src="/static/snapshots/tutorial/language/vscodeUseHxLs/2.png" style="zoom:80%" />


### 使用
**注意：现在仅支持uniapp x项目的语言服务, 非uniapp x项目, 仍使用ide自带插件**
* 本插件已内置了uvue相关的语法高亮和提示
* 非uvue文件已不再进行处理
* 无需禁用volar/vue等相关插件


#### Target配置说明
* 支持`Target`功能
    * 在uniappx项目中, 打开任意文件, 即可在**状态栏**看到**Target信息**
    * **点击状态栏Target信息**可打开对应项目的**Target配置文件**, 可进行修改
    * 目前只支持手动修改Target配置信息
<img src="/static/snapshots/tutorial/language/vscodeUseHxLs/3.png" style="zoom:80%" />

```json
{
    "targets": [
        "APP-ANDROID",
        "APP-IOS",
        "APP-HARMONY",
        "WEB",
        "MP-WEIXIN"
    ]
}
```

#### 关联文件类型
* 打开uniapp x项目, 打开一个.uvue/.uts文件, 会自动关联对应的语言
* 如果没有自动关联, 点击右下角文件类型, 选择关联文件为uvue/uts;
<img src="/static/snapshots/tutorial/language/vscodeUseHxLs/4.png" style="zoom:80%" />
<img src="/static/snapshots/tutorial/language/vscodeUseHxLs/5.png" style="zoom:80%" />
<img src="/static/snapshots/tutorial/language/vscodeUseHxLs/6.png" style="zoom:80%" />

#### 禁用插件
* 非uniapp x项目, 可直接禁用本插件:
    * 点击禁用（工作区）
<img src="/static/snapshots/tutorial/language/vscodeUseHxLs/7.png" style="zoom:80%" />
