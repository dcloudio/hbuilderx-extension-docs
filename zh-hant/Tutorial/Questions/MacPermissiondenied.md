# macOS 切換用戶後升級提示權限不足

在 macOS 多用戶切換後，HBuilderX 安裝目錄可能出現權限不足的問題，導致升級過程中無法正常寫入，因此出現升級失敗或功能異常。

解决方法

請在終端機執行以下命令修復目錄權限（需將路徑替換為你本機的實際安裝路徑）：

```bash
osascript -e 'do shell script "chmod 3777 \"/Applications/HBuilderX-Alpha.app/Contents/HBuilderX\"" with administrator privileges'
```

執行過程中，系統會跳出授權提示，需要輸入管理員帳號和密碼進行授權。

請注意：範例路徑為：/Applications/HBuilderX-Alpha.app/Contents/HBuilderX 如果你的 HBuilderX 安裝在其他目錄，請替換為對應實際路徑。

修復完成後，請重新啟動 HBuilderX 並再次嘗試升級。
