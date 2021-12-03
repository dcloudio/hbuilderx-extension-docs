# 关于云函数上传提示ContentAccessDenied错误@ContentAccessDenied

某些情况下，云函数上传提示如下错误：

<img src="/static/snapshots/tutorial/unicloud/ContentAccessDenied.png" class="hd-img" />

## 原因@reason

HBuilderX上传云函数时，是将云函数文件夹压缩为zip包，然后上传部署到服务端。

生成的zip压缩包，其中某些特殊的的字符串，会被windows defender误报为病毒。

## 解决方法@solution

进入 windows安全中心 -> 病毒和威胁保护 -> 保护历史记录， 如下图

<img src="/static/snapshots/tutorial/unicloud/defender_history.png" class="hd-img" />

在【保护历史记录】窗口，找到【已阻止威胁】，在操作中，点击【允许】；然后继续上传云函数。

<img src="/static/snapshots/tutorial/unicloud/allow_defender.png" class="hd-img" />
