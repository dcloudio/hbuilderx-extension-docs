# showFormDialog

showFormDialog is used to create simple dialog windows in HBuilderX.


## What Controls are Supported?

- [Label Description Text](#label)
- [Input Box](#input)
- [File/Folder Selection Input](#fileSelectInput)
- [Radio Button Group](#radioGroup)
- [List Control](#list)
- [Checkbox Control](#checkBox)
- [Text Editor](#textEditor)
- [Combo Box](#comboBox)
- [Widget Group](#widgetGroup)

## Syntax
-----------------------

```js
hx.window.showFormDialog({
    formItems: [
        {
            type: "input",
            name: "projectName",
            label: "Project Name",
            placeholder: 'Please enter project name...',
            value: ""
        },
    ],
    title: "showFormDialog",
    subtitle: "Demonstrates the use of plugin API hx.window.showFormDialog",
    width: 480,
    height: 180,
    submitButtonText: "Submit(&S)",
    cancelButtonText: "Cancel(&C)",
    validate: function(formData) {
        if (!formData.projectName) {
            this.showError("Project name cannot be empty, please fill in");
            return false;
        };
        return true;
    },
    onOpened: function() { },
    onChanged: function(field, value) { }
}).then((res) => {
    console.log("Return result:", JSON.stringify(res));
});
```

**Main Window Data Format**

|       Parameter Name       |     Type      |                      Description                      |
| :------------------: | :-----------: | :--------------------------------------------: |
|        title         |    String     |                   Main window title                   |
|       subtitle       |    String     |                   Window subtitle                   |
|        footer        |    String     |                  Window footer text                  |
|     hideSubTitle     |    Boolean    |     Hide subtitle (automatically hidden when subtitle is not set)     |
|    hideErrorLabel    |    Boolean    |                  Hide error message                  |
| hideFooterSeparator  |    Boolean    |                 Hide footer separator                 |
|      hideFooter      |    Boolean    |                Hide all footer controls                |
|        width         |    Number     |        Window width, optional, default is 640        |
|        height        |    Number     |        Window height, optional, default is 480        |
|   submitButtonText   |    String     |                 Submit or upload button                 |
|   acceptButtonText   |    String     |                 Submit or upload button                 |
|   cancelButtonText   |    String     |                    Cancel button                    |
|   rejectButtonText   |    String     |                    Cancel button                    |
|      formItems       | Array&lt;Object&gt; |                 Child controls in the window                 |
| subtitleLinkAutoOpen |    Boolean    |    Set whether subtitle auto-opens links (default is true)    |
|  footerLinkAutoOpen  |    Boolean    |   Set whether footer text auto-opens links (default is true)   |
|  errorLinkAutoOpen   |    Boolean    | Set whether error label auto-opens links (default is true) |
| validate| | This method is used for input validation, such as checking if input box is empty |
| onChanged| | This method is used to update controls |
| onOpened| | This method is used to load data after window UI is loaded |


## Controls
-----------------------

### label

Label control, creates a label to display description text

| Parameter Name |  Type  |                       Description                       |
| :------: | :----: | :----------------------------------------------: |
|   type   | String | label (type is control type identifier, label is a fixed value) |
|   name   | String |                  Unique control identifier                  |
|   text   | String |                     Description text                     |

```json
{
  "type": "label",
  "name": "label1",
  "text": "This is a label"
}

or

{
  "type": "label",
  "name": "label2",
  "text": '<span style="color:red;">This is a label with color</span>'
}
```

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/api_showFormDialog_label.jpg" class="hd-img" />

### input

Input control, creates an input box

|  Parameter Name		|  Type	|                             Description									|
| :---------:	| :----:| :----------------------------------------------------------:		|
|    type		| String|                            input									|
|    name		| String|                        Unique control identifier								|
|    label		| String| Input box description text (there is a label before the input box for necessary description)		|
| placeholder	| String|                 Placeholder text when input box is empty						|
|    value		| String|                        Text in input box								|
|    mode		| String|                        Set input box mode, options are normal or password	|
|    disabled	| String| Set whether input box is disabled, default false. When set to true, input box is not editable.	|

```json
{
    type: "input",
    name: "projectName",
    label: "Normal Input Box",
    placeholder: "This is a normal input box",
    value: "",
    disabled: false
}
```

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/api_showFormDialog_input.jpg" class="hd-img" />

### fileSelectInput

Input control, creates a file or folder selection input

|  Parameter Name   |     Type      |                             Description                             |
| :---------: | :-----------: | :----------------------------------------------------------: |
|    type     |    String     |                       fileSelectInput                        |
|    name     |    String     |                        Unique control identifier                        |
|    mode     |    String     | Control file selection input, select file (file) or folder (folder) |
|    label    |    String     | Input box description text (there is a label before the input box for necessary description) |
| placeholder |    String     |                 Placeholder text when input box is empty                 |
|    value    |    String     |                        Text in input box                        |
|   Filters   | Array&lt;string&gt; |                 File filter, effective when mode is file                 |

```json
{
  "type": "fileSelectInput",
  "name": "projectLocation",
  "mode": "file",
  "label": "Project Location",
  "placeholder": "Please select project location",
  "value": "",
  "filters":["*.html;*.json"]
}
```

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/api_showFormDialog_fileSelectInput.jpg" class="hd-img" />

### radioGroup

Radio button group, creates a group of radio buttons

|   Parameter Name   |     Type      |           Description           |
| :----------: | :-----------: | :----------------------: |
|     type     |    String     |        radioGroup        |
|     name     |    String     |      Unique control identifier      |
|    label     |    String     | Can set description text for button group |
|    items     | Array&lt;Object&gt; |   Radio button items, array format   |
| label(items) |    String     |     Radio button description text     |
|  id(items)   |    String     |     Radio button unique identifier     |
|    value     |    String     |    ID of selected radio button     |

```json
{
  "type": "radioGroup",
  "name": "projectType",
  "label": "All Projects: ",
  "items": [
    {"label": "Web Project","id": "web"},
    {"label": "uni-app","id": "uni-app"}
  ],
  "value": "uni-app"
}
```

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/api_showFormDialog_radioGroup.jpg" class="hd-img" />

### list

List control, creates a selectable list

|    Parameter Name		| Type					|Description										|
| :-------------:	| :-----------:			| :----------------------------------:		|
|      type			|    String				| list										|
|      name			|    String				| Unique control identifier							|
|      title		|    String				| There is a group outside the list, this is the group title	|
| columnStretches	|     Array				| Width ratio of each column in the list						|
|      items		| Array&lt;Object&gt;	| All row data of the list							|
| columns(items)	| Array&lt;Object&gt;	| Data of one row in the list							|
| label(columns)	|    String				| Data of column N in a row				|
| multiSelection	|      boolean			| Whether multiple selection is allowed								|
| value(columns)	|      int or Array		| Selected list item, e.g. value:0, value:[0,1,2,3]	|
| refreshable		|      boolean			| Whether refreshable								|
| searchable		|      boolean			| Search settings									|
| searchColumns		| Array					| Rows and columns to search, example: "searchColumns":[1,2]	|

```json
{
  "type": "list",
  "title": "Selection Box",
  "name": "list1",
  "columnStretches": [1, 2],
  "items": [
    {
      "columns": [
        {"label": "Baidu"},
        {"label": "Use Baidu search <a href='www.baidu.com'>Baidu</a>"}
      ]
    },
    {
      "columns": [
        {"label": "Google"},
        {"label": "Use Google search <a href='www.google.com'>Google</a>"}
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

| Parameter Name |  Type   |        Description         |
| :------: | :-----: | :-----------------: |
|   type   | String  |      checkBox       |
|   name   | String  |   Unique control identifier    |
|  label   | String  | Checkbox description text |
|  value   | Boolean | Whether checkbox is checked |

```json
{
  "type": "checkBox",
  "name": "checkBox1",
  "label": "Checkbox",
  "value": true
}
```

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/api_showFormDialog_checkBox.jpg" class="hd-img" />


### textEditor

Text editor, provides an editing box for user input


| Parameter Name   | Type   | Description                         |
| ---------- | ------ | ---------------------------- |
| type       | String | textEditor                   |
| name       | String | Unique control identifier               |
| languageId | String | Set editing language ID for code highlighting |
| text       | String | Set editing content                 |
| title      | String | Title                         |

```json
{
  type: "textEditor",
  name: "paramsInput",
  title: "Parameter Input",
  languageId: "json",
  text: "{\n\"params\":[\n]}"
}
```

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/api_showFormDialog_textEditor.jpg" class="hd-img" />


### comboBox

Combo dropdown box

| Parameter Name    | Type          | Description                                            |
| ----------- | ------------- | ----------------------------------------------- |
| type        | String        | textEditor                                      |
| name        | String        | Unique control identifier                                  |
| items       | Array<String> | String array                                      |
| editable    | Boolean       | Set whether editable, default false                       |
| index       | Number        | Set current index (can be set when editable is false) |
| text        | String        | Set current text (can be set when editable is true)  |
| placeholder | String        | Set placeholder hint text                            |


```json
{
  type: "comboBox",
  placeholder: "Please enter",
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

Widget group (widgetGroup), provides a horizontal layout control window where users can add different types of controls.

##### widgetGroup Parameters

| Parameter Name | Type   | Description                |
| -------- | ------ | ------------------- |
| type     | String | widgetGroup (fixed value) |
| name     | String | Unique control identifier      |
| widgets  | Array  | Controls                |

##### Child Controls Supported by widgetGroup

- Normal button control (button)

| Parameter Name | Type   | Description           |
| -------- | ------ | -------------- |
| type     | String | button         |
| name     | String | Unique control identifier |
| text     | String | Button display text   |
| size     | String | Set button size level, options are small, normal, large. Default is normal   |

- Normal radio button (radioButton)

| Parameter Name | Type    | Description                                                         |
| -------- | ------- | ------------------------------------------------------------ |
| type     | String  | radioButton (fixed value, type can be omitted if placed in radioGroup)          |
| name     | String  | Unique control identifier                                               |
| text     | String  | Radio button display text                                             |
| checked  | boolean | Whether selected, default is no. One radioButton in a widget group is selected by default, if specified then select the specified one,<br/>If placed in radioGroup and radioGroup specifies checkedRadio option, then checkedRadio option takes precedence |

- Normal label control (label)

| Parameter Name  | Type    | Description                     |
| --------- | ------- | ------------------------ |
| type      | String  | label                    |
| name      | String  | Unique control identifier           |
| text      | String  | Label display text             |
| canSelect | boolean | Set whether label text is selectable |

- Normal checkbox (checkBox)

| Parameter Name | Type    | Description                             |
| -------- | ------- | -------------------------------- |
| type     | String  | checkBox                         |
| name     | String  | Unique control identifier                   |
| text     | String  | Checkbox display text, supports `html a tag` |
| checked  | boolean | Whether selected, default not selected             |

- Radio button group, composed of multiple radio buttons

| Parameter Name     | Type   | Description                                        |
| ------------ | ------ | ------------------------------------------- |
| type         | String | radioGroup                                  |
| name         | String | Unique control identifier                              |
| radios       | Array  | Store a group of radioButtons                         |
| checkedRadio | String | Name of selected radio button                          |
| layout       | String | horizontal/vertical, default is horizontal |

```js
{
    type: 'widgetGroup',
    name: 'testWidgetGroup',
    widgets: [
        {
            type: 'radioButton',
            name: 'testRadioButton',
            text: "Radio Button",
            checked: true
        },
        {
            type: 'button',
            name: 'testButton',
            text: 'Button',
            size: 'small'
        },
        {
            type: 'label',
            name: 'testLabel',
            text: "<a href='https://www.baidu.com'>Learn More</a>",
            canSelect: true
        },
    ]
}
```

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/api_showFormDialog_widgetGroup.jpg" class="hd-img" />

## Complete Example
-----------------------

```js
let hx = require('hbuilderx');

/**
 * @description Window controls
 * @param {Object} selected
 */
function getUIData(selected) {
    let uiData = {
        title: "showFormDialog",
        subtitle: "Demonstrates the use of plugin API hx.window.showFormDialog",
        formItems: [
            {
                type: "radioGroup",
                name: "projectType",
                label: "Radio Box",
                value: selected,
                items: [
                    {label: "css",id: "css"},
                    {label: "typeScript",id: "typeScript"},
                    {label: "javaScript",id: "javascript"}
                ]
            },
            {type: "label",name: "selectedText",text: `<p style="color: gray;">Your selected radio box is: ${selected}</p>`},
            {type: "input",name: "projectName",label: "Normal Input Box",placeholder: 'This is a normal input box',value: ""},
        ]
    }
    return uiData;
};

function showFormDialog() {
    // Get default UI data
    let uidata = getUIData('css');

    hx.window.showFormDialog({
        ...uidata,
        width: 480,
        height: 280,
        submitButtonText: "Submit(&S)",
        cancelButtonText: "Cancel(&C)",
        validate: function(formData) {
            if (!formData.projectName) {
                this.showError("Normal input box cannot be empty, please fill in");
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
        console.log("Return result:", JSON.stringify(res));
    });

};

module.exports = showFormDialog;
```
