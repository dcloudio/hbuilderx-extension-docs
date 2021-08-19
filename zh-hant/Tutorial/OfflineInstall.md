# 離線安裝

## windows

1. 打開資源管理器，進入HBuilderX安裝目錄
2. 進入`plugins`目錄
3. 將插件文件夾, 放置到此目錄。（如是zip包，解壓即可）
4. 重啓HBuilderX編輯器

## Mac

1. 打開系統終端，輸入如下命令，打開HBuilderX插件目錄 （注意：mac上，正式版和alpha目錄不一樣）
2. 將插件文件夾, 如是zip包，解壓即可），放置到`plugins`目錄下
3. 重啓HBuilderX編輯器

正式版命令
```shell
open /Applications/HBuilderX.app/Contents/HBuilderX/plugins/
```

Alpha版命令
```shell
open /Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/
```

## `備註`

`nodejs`插件，如果插件內，沒有`node_modules`，需要手動執行`npm install`