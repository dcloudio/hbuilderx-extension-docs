# 用戶操作@user

> HBuilderX cli命令行工具, 僅適用於HBuilderX 3.1.5+版本

#### 獲取HBuilderX當前登錄的用戶信息

```shell
cli user info
```

#### 在HBuilderX中，登錄某個賬號

如果登錄成功，則返回`0:user login:OK`

```shell
cli user login --username <用戶名>  --password <密碼>
```


#### 退出HBuilderX登錄賬號

如果退出成功，則返回`0:user logout:OK`

```shell
cli user logout
```

#### 登錄參數 --global

> HBuilderX 4.81+，新增登錄參數--global

```shell
# --global, 布爾值， 默認爲false
cli user login --global true --username <用戶名>  --password <密碼>
```
