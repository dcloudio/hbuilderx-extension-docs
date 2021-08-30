## 外部命令能幹什麼呢？

外部命令可以讓您在HBuilderX中通過菜單、快捷鍵等方式調用外部程序或命令行

## 使用場景

- 壓縮文件與解壓
- 壓縮圖片 
- 文檔轉換（比如markdown轉pdf）
- 調用python、shell腳本
- 打開本地的某個程序
- 傳輸文件到服務器
- 操作服務器的某些服務（如啓動、停止、重啓nginx)
- 下載文件
- 安裝apk到手機
- 上傳應用到應用分發網站（比如蒲公英）
- 批量壓縮
- 其它的自動化操作
- 上傳文件到七牛雲、阿里雲等

## 外部命令在哪裏？

菜單【工具】-->【外部命令】

如下圖，您可以看到幾個例子

<img src="/static/snapshots/tutorial/externalCommands.png" />

點擊菜單【工具】-->【外部命令】-->【自定義外部命令】，就可以自定義外部命令，格式爲json。

## 外部命令示例

### 例子1：壓縮、解壓

windows例子:

> 注意： windows的軟件大部分安裝在`Program Files`目錄，需要注意空格與斜槓。如下例子

```shell
[{
    "name": "文件: 壓縮7z格式",
    "command": "\"C:/Program\ Files/7-Zip/7z.exe\" a ${file}.7z ${file}",
    "type": "process",
    "key": ""
  },
  {
    "name": "文件: 壓縮zip格式",
    "command": [
      "C:/Program Files/7-Zip/7z.exe",
      "a",
      "${file}.zip",
      "${file}"
    ],
    "type": "process",
    "key": ""
  },
  {
    "name": "文件: 解壓",
    "command": "\"C:/Program Files/7-Zip/7z.exe\" x ${file}",
    "type": "shell",
    "key": ""
  }
]

```

Mac例子：

```shell
[
  {
    "name": "壓縮目錄爲bz2",
    "command": "cd ${fileDir} && tar -jcvf ${fileBasename}.tar.bz2 ${fileBasename}",
    "type": "terminal",
    "key": "alt+shift+e"
  },
  {
    "name": "解壓zip包",
    "command": "unzip ${file}",
    "type": "terminal",
    "key": "alt+shift+e"
  }
]
```

### 例子2：調用外部python、shell等腳本

```
[{
  "name":"調用python腳本",
  "command":"python script.py",
  "type" : "terminal",
  "key":"alt+shift+p"
  }]
```

### 例子3： 調用TinyPNG無損壓縮圖片

大部分情況下, 圖片都是需要壓縮的,爲了 更快的打開網頁,節省流量
推薦：[TinyPNGg官網](https://tinypng.com) 無損壓縮，良心網站，每月500張免費。

如下所示：`YOUR_API_KEY`是你申請的key, --output 可以指定目錄文件名，注意如果和當前圖片路徑一致，會覆蓋原先圖片
```
[{
      "name":"調用TinyPNG無損壓縮圖片",
      "command":"curl --user api:YOUR_API_KEY --data-binary @${file} -i https://api.tinify.com/shrink --output ${file}",
      "type" : "terminal",
      "key":"alt+shift+m"
  }]
```
注意：curl是mac自帶的命令，windows上如需使用curl，請下載[curl](https://curl.haxx.se/windows/) 安裝

### 例子4：下載文件
mac上下載文件的命令有：wget、curl
windows上下載文件的命令是：bitsadmin.exe
```
[{
      "name":"下載文件",
      "command":"wget -c ${userInput:輸入要下載的地址url}",
      "type" : "terminal",
      "key":"alt+shift+m"
  }]
```
注意： `${userInput:彈框說明}` 會在當前屏幕彈框,可以輸入內容

### 例子5： Mac: 複製項目到遠程linux服務器

scp是linux和mac上才能用的命令，windows上不可以使用哦

```
[{
      "name":"scp傳輸項目到服務器",
      "command":"scp -r ${projectDir} 用戶名@ip:服務器目錄路徑",
      "type" : "terminal",
      "key":"alt+shift+m"
  }]
```

### 例子6： 遠程linux服務器 重啓/啓動nginx服務

```
[{
      "name":"遠程服務器重啓nginx",
      "command":"ssh 用戶@ip '/opt/nginx/sbin/nginx -s reload'",
      "type" : "terminal",
      "key":""
  },
{
      "name":"遠程服務器重啓nginx",
      "command":"ssh 用戶@ip '/opt/nginx/sbin/nginx'",
      "type" : "terminal",
      "key":""
  }]
```

### 例子7： 使用pandoc轉markdown爲pdf、doc、html

pandoc是什麼？
pandoc是一個軟件，是一個能把千奇百怪的文檔格式互相轉換的神器，是一把文檔轉換的瑞士軍刀。
安裝後，可以通過命令調用。[pandoc官網](http://www.pandoc.org)

**pandoc結合外部命令的例子**

```
[{
    "name": "Pandoc轉md爲pdf",
    "command": "pandoc ${file} -o ${fileBasename}.pdf",
    "type": "terminal",
    "key": ""
  },
  {
    "name": "Pandoc轉md爲doc",
    "command": "pandoc ${file} -o ${fileBasename}.docx",
    "type": "terminal",
    "key": ""
  },
  {
    "name": "Pandoc轉md爲html",
    "command": "pandoc ${file} -o ${fileBasename}.html",
    "type": "terminal",
    "key": ""
  }
]
```

### 例子8： 安裝apk到Android手機

```
[
  {
    "name": "安裝apk到android手機",
    "command": "adb install ${file}",
    "type": "terminal",
    "key": ""
    }
]
```

### 例子9： 【蒲公英】內測應用上傳

```
[
{
    "name": "【蒲公英】內測應用上傳",
    "command": "curl -F 'file=@${file}' -F 'uKey=xxxxxxx' -F '_api_key=xxxxxx' https://upload.pgyer.com/apiv1/app/upload",
    "type": "terminal",
    "key": "alt+shift+m"
    }
]
```
說明：`uKey`、`_api_key`需要自己申請。 網址：https://www.pgyer.com/doc/api

### 例子10：使用ftp
參考網友貢獻[http://ask.dcloud.net.cn/article/35459](http://ask.dcloud.net.cn/article/35459)

###  例子11：使用顏色選擇器
該插件目前無需外部命令配置，具體見其文檔：[http://ext.dcloud.net.cn/plugin?id=146](http://ext.dcloud.net.cn/plugin?id=146)

### 例子12： 批量壓縮js文件

find是mac上的命令。windows請自行編寫批處理
```
[{  
    "name": "js批量壓縮",  
    "command": "for i in `find ${projectDir} -path ${projectDir}'/unpackage' -prune -o -name '*.js' -and ! -iname '*.min.js'`;do `/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/compress-babel-minify/node_modules/.bin/minify ${i} --out-file ${i%.js*}.min.js 2>/dev/null`;[ $? -ne 0 ] && echo && echo '壓縮錯誤的文件:'${i}; done",  
    "type": "shell",  
    "key": "alt+shift+e"  
}]  
```

## 外部命令配置快捷鍵

如上的例子，key，可以配置快捷鍵哦

```
{
      "name":"scp傳輸項目到服務器",
      "command":"scp -r ${projectDir} 用戶名@ip:服務器目錄路徑",
      "type" : "terminal",
      "key":"alt+shift+m"
  }
```


## 外部命令變量說明

因爲變量和快捷鍵，所以外部命令強大。

```
//------------外部命令 變量說明------------//
"command"、"workingDir"中可使用預定義的變量來獲取當前文件的路徑信息
${file}	當前文件的完整路徑，比如 D:\files\test.txt
${fileName}	當前文件的文件名，比如 test.txt
${fileExtension}	當前文件的擴展名，比如 txt
${fileBasename}	當前文件僅包含文件名的部分，比如 test
${fileDir} 當前文件所在目錄的完整路徑，比如 D:\files
${projectDir} 當前文件所在項目的完整路徑，只有當前文件是項目管理器中某個項目下的文件時才起作用
```