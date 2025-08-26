# User Operation

> Supported from HBuilderX 3.1.5+

#### Get the user information currently logged in HBuilderX

```shell
cli user info
```

#### Log in HBuilderX

If the login is successful, it will return `0:user login:OK`

```shell
cli user login --username <username>  --password <password>
```


#### Logout HBuilderX

If the logout is successful, it will return `0:user logout:OK`

```shell
cli user logout
```

#### 登录参数 --global

> HBuilderX 4.81+，新增登录参数--global

```shell
# --global, 布尔值， 默认为false
cli user login --global true --username <用户名>  --password <密码>
```

