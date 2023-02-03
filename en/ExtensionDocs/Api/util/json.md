# 读取和写入JSON

## 读取JSON: readJSONValue


```js
let filePath = "";
let result = hx.util.readJSONValue(filePath, 'name');
result.then((data) => {
    console.log("----读取的值为:", data)
});
```


## 写入JSON: writeJSONValue

```js
let filePath = "";
let result = hx.util.writeJSONValue(filePath, 'version', '2.0.0');
result.then((data) => {
    console.log(data)
});
```
