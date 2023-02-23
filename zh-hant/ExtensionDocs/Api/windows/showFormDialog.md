# showFormDialog

showFormDialog, 用于在HBuilderX中创建简单的窗口。


## 支持哪些控件？

- [标签描述文本](#label)
- [输入框](#input)
- [文件夹选择框](#fileSelectInput)
- [单选按钮组](#radioGroup)
- [列表控件](#list)
- [复选框控件](#checkBox)
- [文本编辑器](#textEditor)
- [组合下拉框](#comboBox)
- [组合控件](#widgetGroup)

## 语法
-----------------------

```js
hx.window.showFormDialog({
    formItems: [
        {
            type: "input",
            name: "projectName",
            label: "项目名称",
            placeholder: '请输入项目名称...',
            value: ""
        },
    ],
    title: "showFormDialog",
    subtitle: "演示插件API hx.window.showFormDialog使用",
    width: 480,
    height: 180,
    submitButtonText: "提交(&S)",
    cancelButtonText: "取消(&C)",
    validate: function(formData) {
        if (!formData.projectName) {
            this.showError("项目名称不能为空，请填写");
            return false;
        };
        return true;
    },
    onOpened: function() { },
    onChanged: function(field, value) { }
}).then((res) => {
    console.log("返回结果：", JSON.stringify(res));
});
```

**主窗口数据格式**

|       参数名称       |     类型      |                      描述                      |
| :------------------: | :-----------: | :--------------------------------------------: |
|        title         |    String     |                   窗口主标题                   |
|       subtitle       |    String     |                   窗口副标题                   |
|        footer        |    String     |                  窗口底部文本                  |
|     hideSubTitle     |    Boolean    |     隐藏副标题(未设置 subtitle 时自动隐藏)     |
|    hideErrorLabel    |    Boolean    |                  隐藏错误提示                  |
| hideFooterSeparator  |    Boolean    |                 隐藏底部分隔符                 |
|      hideFooter      |    Boolean    |                隐藏底部所有控件                |
|        width         |    Number     |        窗口宽度, 可不设置, 默认值为 640        |
|        height        |    Number     |        窗口高度, 可不设置, 默认值为 480        |
|   submitButtonText   |    String     |                 提交或上传按钮                 |
|   acceptButtonText   |    String     |                 提交或上传按钮                 |
|   cancelButtonText   |    String     |                    取消按钮                    |
|   rejectButtonText   |    String     |                    取消按钮                    |
|      formItems       | Array&lt;Object&gt; |                 窗口中的子控件                 |
| subtitleLinkAutoOpen |    Boolean    |    设置副标题是否自动打开链接（默认为true）    |
|  footerLinkAutoOpen  |    Boolean    |   设置底部文本是否自动打开链接（默认为true）   |
|  errorLinkAutoOpen   |    Boolean    | 设置错误提示标签是否自动打开链接（默认为true） |
| validate| | 此方法用于校验输入，比如校验输入框是否为空 |
| onChanged| | 此方法用于更新控件 |
| onOpened| | 此方法用于窗口UI加载完成后，去加载某些数据 |


## 控件
-----------------------

### label

标签控件, 生成一个标签, 放置描述文字

| 参数名称 |  类型  |                       描述                       |
| :------: | :----: | :----------------------------------------------: |
|   type   | String | label(type 为控件类型识别关键字, label 为固定值) |
|   name   | String |                  控件的唯一标识                  |
|   text   | String |                     描述文字                     |

```json
{
  "type": "label",
  "name": "label1",
  "text": "这是一个label"
}

or

{
  "type": "label",
  "name": "label2",
  "text": '<span style="color:red;">这是一个带有颜色的label</span>'
}
```

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/api_showFormDialog_label.jpg" class="hd-img" />

### input

输入框控件, 生成一个输入框

|  参数名称		|  类型	|                             描述									|
| :---------:	| :----:| :----------------------------------------------------------:		|
|    type		| String|                            input									|
|    name		| String|                        控件的唯一标识								|
|    label		| String| 输入框的说明文字(在输入框前, 存在一个 label, 进行必要的描述)		|
| placeholder	| String|                 输入框中没有文字时的提示文字						|
|    value		| String|                        输入框中的文字								|
|    mode		| String|                        设置输入框模式, 可选值为normal或password	|
|    disabled	| String| 设置输入框是否禁用，默认false。设置ture时，输入框不可输入。	|

```json
{
    type: "input",
    name: "projectName",
    label: "普通输入框",
    placeholder: "这是一个普通输入框",
    value: "",
    disabled: false
}
```

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/api_showFormDialog_input.jpg" class="hd-img" />

### fileSelectInput

输入框控件, 生成一个文件或文件夹选择框

|  参数名称   |     类型      |                             描述                             |
| :---------: | :-----------: | :----------------------------------------------------------: |
|    type     |    String     |                       fileSelectInput                        |
|    name     |    String     |                        控件的唯一标识                        |
|    mode     |    String     | 控制文件选择输入框, 是选择文件(file), 还是选择文件夹(folder) |
|    label    |    String     | 输入框的说明文字(在输入框前, 存在一个 label, 进行必要的描述) |
| placeholder |    String     |                 输入框中没有文字时的提示文字                 |
|    value    |    String     |                        输入框中的文字                        |
|   Filters   | Array&lt;string&gt; |                 文件过滤，当mode为file时生效                 |

```json
{
  "type": "fileSelectInput",
  "name": "projectLocation",
  "mode": "file",
  "label": "项目位置",
  "placeholder": "请选择项目位置",
  "value": "",
  "filters":["*.html;*.json"]
}
```

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/api_showFormDialog_fileSelectInput.jpg" class="hd-img" />

### radioGroup

单选按钮组, 生成一组单选按钮

|   参数名称   |     类型      |           描述           |
| :----------: | :-----------: | :----------------------: |
|     type     |    String     |        radioGroup        |
|     name     |    String     |      控件的唯一标识      |
|    label     |    String     | 可以给按钮组设置说明文字 |
|    items     | Array&lt;Object&gt; |   单选按钮项, 数组格式   |
| label(items) |    String     |     单选框的说明文字     |
|  id(items)   |    String     |     单选框的唯一标识     |
|    value     |    String     |    选中的单选框的 id     |

```json
{
  "type": "radioGroup",
  "name": "projectType",
  "label": "所有的项目: ",
  "items": [
    {"label": "Web项目","id": "web"},
    {"label": "uni-app","id": "uni-app"}
  ],
  "value": "uni-app"
}
```

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/api_showFormDialog_radioGroup.jpg" class="hd-img" />

### list

列表控件, 生成一组可选择的列表

|    参数名称		| 类型					|描述										|
| :-------------:	| :-----------:			| :----------------------------------:		|
|      type			|    String				| list										|
|      name			|    String				| 控件的唯一标识							|
|      title		|    String				| 列表外部存在一个 group, 这是 group 的标题	|
| columnStretches	|     Array				| 列表各个列的宽度比例						|
|      items		| Array&lt;Object&gt;	| 列表的全部行数据							|
| columns(items)	| Array&lt;Object&gt;	| 列表一行的数据							|
| label(columns)	|    String				| 在某行中, 表格第 N 列的数据				|
| multiSelection	|      boolean			| 是否允许多选								|
| value(columns)	|      int或Array		| 选择的列表项，如value:0，value:[0,1,2,3]	|
| refreshable		|      boolean			| 是否可刷新								|
| searchable		|      boolean			| 搜索设置									|
| searchColumns		| Array					| 要搜索的行列, 示例："searchColumns":[1,2]	|

```json
{
  "type": "list",
  "title": "选择框",
  "name": "list1",
  "columnStretches": [1, 2],
  "items": [
    {
      "columns": [
        {"label": "百度"},
        {"label": "使用百度搜索 <a href='www.baidu.com'>Baidu</a>"}
      ]
    },
    {
      "columns": [
        {"label": "Google"},
        {"label": "使用Google搜索 <a href='www.google.com'>Google</a>"}
      ]
    }
  ],
  "value": 0,
  "multiSelection": false,
  "searchable": true,
  "searchColumns":[1,2]
}
```

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/api_showFormDialog_list.jpg" class="hd-img" />

### checkBox

| 参数名称 |  类型   |        描述         |
| :------: | :-----: | :-----------------: |
|   type   | String  |      checkBox       |
|   name   | String  |   控件的唯一标识    |
|  label   | String  | checkBox 的说明文字 |
|  value   | Boolean | checkBox 是否被选中 |

```json
{
  "type": "checkBox",
  "name": "checkBox1",
  "label": "复选框",
  "value": true
}
```

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/api_showFormDialog_checkBox.jpg" class="hd-img" />


### textEditor

文本编辑器,提供一个让用户输入的编辑框


| 参数名称   | 类型   | 描述                         |
| ---------- | ------ | ---------------------------- |
| type       | String | textEditor                   |
| name       | String | 控件的唯一标识               |
| languageId | String | 设置编辑语言id，提供代码高亮 |
| text       | String | 设置编辑内容                 |
| title      | String | 标题                         |

```json
{
  type: "textEditor",
  name: "paramsInput",
  title: "参数输入",
  languageId: "json",
  text: "{\n\"params\":[\n]}"
}
```

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/api_showFormDialog_textEditor.jpg" class="hd-img" />


### comboBox

组合下拉框

| 参数名称    | 类型          | 描述                                            |
| ----------- | ------------- | ----------------------------------------------- |
| type        | String        | textEditor                                      |
| name        | String        | 控件的唯一标识                                  |
| items       | Array<String> | 字符串数组                                      |
| editable    | Boolean       | 设置是否可编辑，默认false                       |
| index       | Number        | 设置当前索引(editable设置为false时可以设置此项) |
| text        | String        | 设置当前文本(editable设置为true时可以设置此项)  |
| placeholder | String        | 设置提示占位提示文本                            |


```json
{
  type: "comboBox",
  placeholder: "请输入",
  name: "functionNameInput",
  editable: true,
  items: ["item1","item2","item3"],
  text: "item1"
}
or
{
  type: "comboBox",
  name: "functionNameInput",
  items: ["item1","item2","item3"],
  index:0
}
```

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/api_showFormDialog_comboBox.jpg" class="hd-img" />

### widgetGroup

组合控件(widgetGroup)，提供一个横向布局的控件窗口，使用者可以自定义向其中放入不同类型的控件.

##### widgetGroup参数

| 参数名称 | 类型   | 描述                |
| -------- | ------ | ------------------- |
| type     | String | widgetGroup(固定值) |
| name     | String | 控件的唯一标识      |
| widgets  | Array  | 控件                |

##### widgetGroup支持的子控件

- 普通按钮控件(button)

| 参数名称 | 类型   | 描述           |
| -------- | ------ | -------------- |
| type     | String | button         |
| name     | String | 控件的唯一标识 |
| text     | String | 按钮显示文本   |
| size     | String | 设置按钮大小等级, 可选值为small、normal、large。默认为normal   |

- 普通单选按钮(radioButton)

| 参数名称 | 类型    | 描述                                                         |
| -------- | ------- | ------------------------------------------------------------ |
| type     | String  | radioButton(固定值，若放在radioGroup中type可以不写)          |
| name     | String  | 控件的唯一标识                                               |
| text     | String  | 单选按钮显示文本                                             |
| checked  | boolean | 是否选中，默认为否，一个组合控件中的多个`radioButton`默认选中一个，如果指定则选中指定的，<br/>若放在在radioGroup中，并且radioGroup指定了checkedRadio选项，则以checkedRadio选项为准 |

- 普通标签控件(label)

| 参数名称  | 类型    | 描述                     |
| --------- | ------- | ------------------------ |
| type      | String  | label                    |
| name      | String  | 控件的唯一标识           |
| text      | String  | 标签显示文本             |
| canSelect | boolean | 设置标签文本是否可以选中 |

- 普通复选框(checkBox)

| 参数名称 | 类型    | 描述                             |
| -------- | ------- | -------------------------------- |
| type     | String  | checkBox                         |
| name     | String  | 控件的唯一标识                   |
| text     | String  | 复选框显示文本，支持`html a标签` |
| checked  | boolean | 是否选中，默认不选中             |

- 单选按钮组,多个单选按钮组成

| 参数名称     | 类型   | 描述                                        |
| ------------ | ------ | ------------------------------------------- |
| type         | String | radioGroup                                  |
| name         | String | 控件的唯一标识                              |
| radios       | Array  | 存放一组radioButton                         |
| checkedRadio | String | 选中的单选按钮名称                          |
| layout       | String | horizontal(横向)/vertical(纵向)，默认为横向 |

```js
{
    type: 'widgetGroup',
    name: 'testWidgetGroup',
    widgets: [
        {
            type: 'radioButton',
            name: 'testRadioButton',
            text: "单选按钮",
            checked: true
        },
        {
            type: 'button',
            name: 'testButton',
            text: '按钮',
            size: 'small'
        },
        {
            type: 'label',
            name: 'testLabel',
            text: "<a href='https://www.baidu.com'>了解详情</a>",
            canSelect: true
        },
    ]
}
```

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/api_showFormDialog_widgetGroup.jpg" class="hd-img" />

## 完整示例
-----------------------

```js
let hx = require('hbuilderx');

/**
 * @description 窗口控件
 * @param {Object} selected
 */
function getUIData(selected) {
    let uiData = {
        title: "showFormDialog",
        subtitle: "演示插件API hx.window.showFormDialog的使用",
        formItems: [
            {
                type: "radioGroup",
                name: "projectType",
                label: "单选框",
                value: selected,
                items: [
                    {label: "css",id: "css"},
                    {label: "typeScript",id: "typeScript"},
                    {label: "javaScript",id: "javascript"}
                ]
            },
            {type: "label",name: "selectedText",text: `<p style="color: gray;">您选择的单选框是: ${selected}</p>`},
            {type: "input",name: "projectName",label: "普通输入框",placeholder: '这是一个普通输入框',value: ""},
        ]
    }
    return uiData;
};

function showFormDialog() {
    // 获取默认UI数据
    let uidata = getUIData('css');

    hx.window.showFormDialog({
        ...uidata,
        width: 480,
        height: 280,
        submitButtonText: "提交(&S)",
        cancelButtonText: "取消(&C)",
        validate: function(formData) {
            if (!formData.projectName) {
                this.showError("普通输入框不能为空，请填写");
                return false;
            };
            return true;
        },
        onOpened: function() {},
        onChanged: function(field, value) {
            if (field == "projectType") {
                let updateData = getUIData(value);
                this.updateForm(updateData);
            };
        }
    }).then((res) => {
        console.log("返回结果：", JSON.stringify(res));
    });

};

module.exports = showFormDialog;
```
