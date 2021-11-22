# The developer console of the built-in browser is blank

On MacOSX, in some cases, the developer console of the built-in browser is blank.

This is caused by the port being occupied.

### Solution

Open the terminal and enter the following command:

```shell
lsof -i:9777 | awk '{print $2}' | tail -n +2 | xargs kill -9
```
