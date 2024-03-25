# Git Blame

Git Blame插件在HBuilderX 4.01及更高版本中受支持[點此處安裝](https://ext.dcloud.net.cn/plugin?id=16568)。該插件依賴Git插件，Git插件調用`外部Git工具`，因此需要安裝[Git](https://git-scm.com/)的命令行工具。

Git Blame插件使用戶能夠快速查看Git項目中特定行代碼的最後提交時間、作者、郵箱和提交信息，並且還可以進行版本對比。
### 基本用法
游標置於編輯器的某一行，該行最後一次提交的訊息將自動顯示在該行行尾處。
<div>
  <img src="https://web-ext-storage.dcloud.net.cn/hx/gitextension_branch_blame1.png" style="border:1px solid #eee; border-radius: 5px;"/>
</div>

### Hover 弹窗

當滑鼠懸停在文字上時，會彈出浮動視窗，顯示更詳細的訊息。

<div>
  <img src="https://web-ext-storage.dcloud.net.cn/hx/gitextension_branch_blame2.png" style="border:1px solid #eee; border-radius: 5px;"/>
</div>

### 发邮件

當滑鼠懸停在第一行的名字上時，可以查看該行程式碼的作者郵箱, 點擊它可以給作者發郵件。

<div>
  <img src="https://web-ext-storage.dcloud.net.cn/hx/gitextension_branch_blame3.png" style="border:1px solid #eee; border-radius: 5px;"/>
</div>

### 版本比较

點擊浮動視窗最下方的文字，會打開版本對比頁面，查看該次提交對文件的具體改動。

<div>
  <img src="https://web-ext-storage.dcloud.net.cn/hx/gitextension_branch_blame4.png" style="border:1px solid #eee; border-radius: 5px;"/>
  <img src="https://web-ext-storage.dcloud.net.cn/hx/gitextension_branch_blame5.png" style="border:1px solid #eee; border-radius: 5px;"/>
</div>

### 设置
入口：
* Windows：頂部菜單欄->工具->设置->插件配置->Git
* macOS：左上角 HbuilderX->偏好設置->插件配置->Git
<div>
  <img src="https://web-ext-storage.dcloud.net.cn/hx/gitextension_branch_blame11.png" style="border:1px solid #eee; border-radius: 5px;"/>
</div>

目前支持三種設置：

1. 僅在游標所在行顯示（默認）
<div>
  <img src="https://web-ext-storage.dcloud.net.cn/hx/gitextension_branch_blame7.png" style="border:1px solid #eee; border-radius: 5px;"/>
</div>

2. 選中行顯示
<div>
  <img src="https://web-ext-storage.dcloud.net.cn/hx/gitextension_branch_blame8.png" style="border:1px solid #eee; border-radius: 5px;"/>
</div>

3. 不顯示（禁用該功能）
<div>
  <img src="https://web-ext-storage.dcloud.net.cn/hx/gitextension_branch_blame9.png" style="border:1px solid #eee; border-radius: 5px;"/>
</div>