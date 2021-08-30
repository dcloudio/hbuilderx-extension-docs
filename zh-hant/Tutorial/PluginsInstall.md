# 插件安裝

### 安裝插件
HBuilderX啓動後，點擊菜單【工具】【插件安裝】，即可打開插件安裝窗口。

除下圖所示插件外，其它插件，需要到[插件市場](https://ext.dcloud.net.cn/?cat1=1&cat2=11&orderBy=TotalDownload)進行下載。

<img src="/static/snapshots/tutorial/plugins_install_1.jpg" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;"/>

### 已安裝插件

如下圖，HBuilderX已安裝的插件，會顯示在【已安裝插件】中。

當服務器存在高版本插件時，相應插件會顯示`升級`字樣。

<img src="/static/snapshots/tutorial/plugins_install_2.jpg" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;"/>

### 插件市場安裝插件

如下圖所示，在[插件市場](https://ext.dcloud.net.cn/?cat1=1&cat2=11&orderBy=TotalDownload)，進入插件詳情頁，點擊【導入插件】，會自動拉起本地安裝的HBuilderX。

<img src="/static/snapshots/tutorial/plugins_install_3.jpg" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;"/>

### 離線安裝插件

> `nodejs`插件，如果插件內，沒有`node_modules`，需要手動執行`npm install`

#### windows

1. 打開資源管理器，進入HBuilderX安裝目錄
2. 進入`plugins`目錄
3. 將插件文件夾, 放置到此目錄。（如是zip包，解壓即可）
4. 重啓HBuilderX編輯器

#### Mac

1. 打開系統終端，輸入如下命令，打開HBuilderX插件目錄 （注意：mac上，正式版和alpha目錄不一樣）
2. 將插件文件夾, 如是zip包，解壓即可），放置到`plugins`目錄下
3. 重啓HBuilderX編輯器

```shell
# 正式版
open /Applications/HBuilderX.app/Contents/HBuilderX/plugins/

# Alpha版
open /Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/
```

### 問題

某些node插件，比如`sass`、`less`, 安裝成功，項目運行時，卻提示安裝失敗。

可能的原因：node_modules安裝失敗了。進入插件目錄，手動執行`npm install --save`