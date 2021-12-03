# 用户操作@user

> HBuilderX cli命令行工具, 仅适用于HBuilderX 3.1.5+版本

#### 获取HBuilderX当前登录的用户信息

```shell
cli user info
```

#### 在HBuilderX中，登录某个账号

如果登录成功，则返回`0:user login:OK`

```shell
cli user login --username <用户名>  --password <密码>
```


#### 退出HBuilderX登录账号

如果退出成功，则返回`0:user logout:OK`

```shell
cli user logout
```
