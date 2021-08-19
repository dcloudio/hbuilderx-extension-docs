# cli 配置環境變量

您可以將`cli`加入到`環境變量`，這樣您就可以在任意目錄、任意終端上，隨時隨地調用cli， 而無需通過輸入cli絕對路徑的方式來使用它。

## MacOSX

下面的示例，均以`HBuilderX正式版`安裝路徑爲例，如使用alpha cli，替換相關路徑即可。

修改前，請先確定您的shell類型。

如何查看shell類型，打開終端，輸入`echo $SHELL`

### 方法1：添加環境變量

> **警告：** 修改環境變量時，請**`慎重`** **`仔細`**，如果沒有經驗，不建議修改環境變量。

如果您的shell是`bash`，進入終端，編輯環境變量文件`~/.bash_profile`, 輸入如下內容

如果您的shell是`zsh`，進入終端，編輯環境變量文件`~/.zprofile`，輸入如下內容

```shell
export HX_HOME=/Applications/HBuilderX.app/Contents/MacOS/
export PATH=$HX_HOME:$PATH:.
```

### 方法2：創建別名

打開終端，根據shell類型，執行如下命令：
```shell
# shell類型：bash
echo "alias cli='/Applications/HBuilderX.app/Contents/MacOS/cli'" >> ~/.bashrc && source ~/.bashrc

# shell類型：zsh
echo "alias cli='/Applications/HBuilderX.app/Contents/MacOS/cli'" >> ~/.zshrc && source ~/.zshrc
```

### 方法3：創建軟連接

打開終端，執行如下命令：
```shell
ln -s /Applications/HBuilderX.app/Contents/MacOS/cli /usr/local/bin/cli
```


## Windows

1. 複製HBuilderX安裝目錄路徑（即HBuilderX.exe程序所在位置的上級目錄）
2. 右鍵 This PC(此電腦) -> Properties（屬性） -> Advanced system settings（高級系統設置） -> Environment Variables（環境變量）
3. 【用戶變量】，點擊【編輯】，找到path，輸入HBuilderX路徑。

<img src="/static/snapshots/cli_env.png"/>
