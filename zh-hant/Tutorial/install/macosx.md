# MacOSX安裝HBuilderX

## 下載@download

HBuilderX下載地址: [下載地址](https://www.dcloud.io/hbuilderx.html)

## 安裝@install

如圖，將HBuilderX`拖`到Applications，纔是正確的安裝姿勢。

<img src="/static/snapshots/tutorial/install_macosx/install_mac.jpeg" />

> MacOSX，軟件必須安裝到`/Applications`目錄，如未安裝到此目錄，可能會出現插件安裝失敗、項目創建失敗等問題。

如果啓動遇到下列問題，請到【系統設置】中解決。

<img src="/static/snapshots/tutorial/install_macosx/mac_download1.min.jpg" style="zoom: 40%; border: 1px solid #eee;border-radius: 10px;"/>

<img src="/static/snapshots/tutorial/install_macosx/mac_download2.min.jpg" style="zoom: 40%; border: 1px solid #eee;border-radius: 10px;"/>

## 配置文件目錄@config

配置文件目錄，如下：
- `$HOME/Library/Application\ Support/HBuilder\ X`
- `$HOME/Library/Caches/HBuilder\ X`

**請注意：** mac上，如果路徑包含空格，需要`\`進行轉義


## 啓動問題@question

某些情況下，MacOSX HBuilderX無法啓動，解決方法如下：

- 重啓電腦
- 配置文件目錄下的.lock文件問題 [解決方案](#deleteLockFile)
- 配置文件損壞，導致HBuilderX無法啓動，重置配置文件即可。[解決方案](#resetConfig)

#### 刪除.lock文件@deleteLockFile

打開操作系統終端，輸入如下命令：

```
rm -f $HOME/Library/Application\ Support/HBuilder\ X/.lock
```

如刪除.lock文件還無法解決啓動問題，請嘗試刪除配置文件目錄, [詳見](#resetConfig)。


#### 重置配置文件目錄@resetConfig

> 如在HBuilderX內，曾設置過快捷鍵、代碼塊、以及其它設置項，如需保存，刪除前，建議備份。
> 目錄：$HOME/Library/Application\ Support/HBuilder\ X/user

```shell
# 備份配置文件，如不需要，請略過
cp -r $HOME/Library/Application\ Support/HBuilder\ X   $HOME/Desktop/HX

# 直接刪除配置文件目錄
rm -r $HOME/Library/Application\ Support/HBuilder\ X
rm -r $HOME/Library/Caches/HBuilder\ X
```

#### apple芯片电脑如何执行intel程序？@rosetta

[在apple芯片电脑安装rosetta](/Tutorial/install/macosx-install-rosetta)
