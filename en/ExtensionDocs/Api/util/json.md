# Read and Write JSON

## Read JSON: readJSONValue


```js
let filePath = "";
let result = hx.util.readJSONValue(filePath, 'name');
result.then((data) => {
    console.log("----The read value is:", data)
});
```


## Write JSON: writeJSONValue

```js
let filePath = "";
let result = hx.util.writeJSONValue(filePath, 'version', '2.0.0');
result.then((data) => {
    console.log(data)
});
```
