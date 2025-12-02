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

#### Login Parameter --global

> HBuilderX 4.81+, added login parameter --global

```shell
# --global, boolean, defaults to false
cli user login --global true --username <username>  --password <password>
```

