#登入失敗問題
此檔案用於解决某些用戶登錄失敗問題排查。

##現時已知的登入失敗的原因有以下幾條：
#### 1.網絡問題
解決方法：如果電腦開啟了代理或vpn，關閉後試試。 換個網絡試試，比如4G/5G手機熱點

#### 2.網絡限制
解決方法：ping功能變數名稱ide.liuyingyong.cn如果ping不通，可能是網絡做了限制，需要放開後重啓HBuilderX

#### 3.某些windows本地運行環境問題
解決方法：將HBuilderX解壓目錄裏bin/msvcr120.dll，bin/msvcp140.dll這兩個檔案考拷貝到上一級目錄（也就是HBuilderX.exe的同級目錄），拷貝完成後重啓HBuilderX

#### 4.電腦時間問題
解決方法：某些用戶回饋本機時間不正確，校準之後就正常了，可網上蒐索一下電腦時間自動校準操作步驟，校準後重啓HBuilderX再試

##如果以上都嘗試了，還未解决，請聯系官方：
1. Email: ide@dcloud.io
2. QQ:搜群，群關鍵字：HBuilderX，加入群後，找群管理員幫您解決。
3. 去論壇發帖。 論壇地址： http://ask.dcloud.net.cn
