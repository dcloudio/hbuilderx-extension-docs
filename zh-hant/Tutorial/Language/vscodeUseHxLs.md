## 在vscode中, 如何使用hbuilderx-language-services插件

### 官方交流羣
[點擊加入im官方交流羣](https://im.dcloud.net.cn/#/?joinGroup=682c303383abe400024d38ba)

### 安裝
#### 搜索線上包進行安裝
* 在vscode中, 插件界面, 搜索`hbuilderx-language-services`進行安裝

#### 使用VSIX文件進行安裝
1. 進入擴展管理
    * 在側邊欄點擊 擴展（Extensions） 圖標, 或者使用快捷鍵
        * Windows / Linux: Ctrl + Shift + X
        * macOS: Cmd + Shift + X  

<img src="/static/snapshots/tutorial/language/vscodeUseHxLs/1.png" style="zoom:80%" />

2. 安裝 VSIX 插件
    * 把VSIX文件拖入擴展欄中
3. 安裝完成後, 右下角會提示插件安裝成功, 在已安裝列表中有如下插件即可  

<img src="/static/snapshots/tutorial/language/vscodeUseHxLs/2.png" style="zoom:80%" />


### 使用
**注意：現在僅支持uniapp x項目的語言服務, 非uniapp x項目, 仍使用ide自帶插件**
* 本插件已內置了uvue相關的語法高亮和提示
* 非uvue文件已不再進行處理
* 無需禁用volar/vue等相關插件


#### Target配置說明@setting
* 支持`Target`功能
    * 在uniappx項目中, 打開任意文件, 即可在**狀態欄**看到**Target信息**
    * **點擊狀態欄Target信息**可打開對應項目的**Target配置文件**, 可進行修改
    * 目前只支持手動修改Target配置信息

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

#### 關聯文件類型
* 打開uniapp x項目, 打開一個.uvue/.uts文件, 會自動關聯對應的語言
* 如果沒有自動關聯, 點擊右下角文件類型, 選擇關聯文件為uvue/uts;  

  **右下角文件類型**  
<img src="/static/snapshots/tutorial/language/vscodeUseHxLs/4.png" style="zoom:80%" />

  **選擇對應配置**  
<img src="/static/snapshots/tutorial/language/vscodeUseHxLs/5.png" style="zoom:80%" />

  **選擇語言**  
<img src="/static/snapshots/tutorial/language/vscodeUseHxLs/6.png" style="zoom:80%" />

#### 禁用插件
* 非uniapp x項目, 可直接禁用本插件:
    * 點擊禁用（工作區）  

<img src="/static/snapshots/tutorial/language/vscodeUseHxLs/7.png" style="zoom:80%" />