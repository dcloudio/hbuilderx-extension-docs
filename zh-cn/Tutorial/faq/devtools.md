# 内置浏览器开发者控制台空白问题@devtools

<!--
keyword: 内置浏览器,空白,devtools
-->

MacOSX，某些情况下，内置浏览器开发者控制台显示空白。

这是由于端口被占用造成的。

### 解决方法@solution

打开终端，输入如下命令：

```shell
lsof -i:9777 | awk '{print $2}' | tail -n +2 | xargs kill -9
```