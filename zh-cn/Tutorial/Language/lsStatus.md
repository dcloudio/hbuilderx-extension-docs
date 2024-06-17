# 语言服务状态面板

> HbuilderX 4.18+起，新增语言服务状态面板，支持实时查看语言服务主要进程状态，更加方便的切换平台和语法校验开关(仅uni-app x)

## 怎么打开
1.界面底部状态栏

点击红框区域打开状态面板

<div>
<img src="https://web-ext-storage.dcloud.net.cn/hx/lsstatus/zh/1.png" style="border:1px solid #eee;  border-radius: 5px;" />
</div>

2.右击项目管理器的某一个uni-app x项目

<div>
<img src="https://web-ext-storage.dcloud.net.cn/hx/lsstatus/zh/2.png" style="border:1px solid #eee;  border-radius: 5px;" />
</div>

3.错误校验悬浮框

<div>
<img src="https://web-ext-storage.dcloud.net.cn/hx/lsstatus/zh/3.png" style="border:1px solid #eee;  border-radius: 5px;" />
</div>

## 功能

1.查看TypeScript服务和索引服务进程的运行状态

- 正常状态

<div>
<img src="https://web-ext-storage.dcloud.net.cn/hx/lsstatus/zh/4.png" style="border:1px solid #eee;  border-radius: 5px;" />
</div>

- 异常状态

此时底部状态栏也随之变化

<div>
<img src="https://web-ext-storage.dcloud.net.cn/hx/lsstatus/zh/5.png" style="border:1px solid #eee;  border-radius: 5px;" />
</div>

2.切换代码提示和语法校验平台

<div>
<img src="https://web-ext-storage.dcloud.net.cn/hx/lsstatus/zh/6.png" style="border:1px solid #eee;  border-radius: 5px;" />
</div>

3.控制语法校验开关
   
<div>
<img src="https://web-ext-storage.dcloud.net.cn/hx/lsstatus/zh/7.png" style="border:1px solid #eee;  border-radius: 5px;" />
</div>

4.捕获语言服务错误

- 一旦语言服务内部出错了，状态栏的状态就会随之变化

<div>
<img src="https://web-ext-storage.dcloud.net.cn/hx/lsstatus/zh/8.png" style="border:1px solid #eee;  border-radius: 5px;" />
</div>

- 点击状态栏文字可以查看详细的错误信息

<div>
<img src="https://web-ext-storage.dcloud.net.cn/hx/lsstatus/zh/9.png" style="border:1px solid #eee;  border-radius: 5px;" />
</div>

- 点击`忽略`按钮表示忽略此错误，此时状态栏会恢复到正常的状态

<div>
<img src="https://web-ext-storage.dcloud.net.cn/hx/lsstatus/zh/10.png" style="border:1px solid #eee;  border-radius: 5px;" />
</div>

- 点击`报Bug`按钮，会跳转到bug提交页面，语言服务报错内容会被写入到复现步骤里边，此时您可以完善其他的bug信息，bug提交成功后状态栏会恢复到正常的状态

<div>
<img src="https://web-ext-storage.dcloud.net.cn/hx/lsstatus/zh/12.png" style="border:1px solid #eee;  border-radius: 5px;" />
</div>