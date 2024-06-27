# 通過軟鏈優化日常開發體驗

**注意**: 軟鏈功能目前僅支持 HBuilderX 4.21.0 及以上版本
* 通過軟鏈功能, 可以將多個 uni-app 項目的頁面、組件、API 等目錄軟鏈到當前項目, 方便開發者在一個項目中同時開發多個項目的頁面、組件、API 等, 提高開發效率。
* 目前只支持uniappx項目

## 使用方法

1. 通過 HBuilderX 新建一個默認的 uni-app x (開發鴻蒙的話, 選 uni-app vue3)項目模板
2. 在項目根目錄創建`link.json`, 修改為本地的倉庫路徑地址

```json
{
  // 當前項目目錄與源目錄的軟鏈映射關係表，key 為當前項目的目錄結構，value 為源目錄
  "uni_modules": ["/Users/xxx/uni-app/api"], // uni-app 主倉庫 uni_modules 實現的 api 根目錄
  "components": ["/Users/xxx/hello-uni-app-x/components"], // hello uni-app x 根目錄的 components 目錄
  "pages/API": ["/Users/xxx/hello-uni-app-x/pages/API"] // hello uni-app x 的 API 頁面根目錄
  // ... 其他自定義映射
}
```

3. 在命令行切換到該項目根目錄(HBuilderX 中右鍵項目`使用命令行窗口打開打開所在目錄`)
4. 執行命令`npx @dcloudio/toolkit link page-head system-info --clear`，(可以修改`system-info`為自己想要軟鏈的 api 或頁面名稱，可模糊匹配，也支持傳遞多個)
   > 執行後，該項目會軟鏈 hello uni-app x 倉庫的`pages/API/get-system-info/get-system-info`、`components/page-head/page-head.vue`及 uni-app 倉庫的`uni-getSystemInfo`
5. 運行當前項目，即可修改調試對應示例頁面及 API 源碼，修改測試完成後，即可在原有倉庫提交改動。

### 更多命令參數說明

- `--clear` 可以清空之前的軟鏈和 pages.json 配置，方便根據 link 命令來重新初始化
> 示例：`npx @dcloudio/toolkit link --clear`，也可以同時指定新的需要軟鏈的目錄
- `--config` 可以指定`link.json`文件路徑，解決多項目共享相同`link.json`的問題
