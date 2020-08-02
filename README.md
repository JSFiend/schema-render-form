# 表单(渲染)组件 -- schema-render-form 
`schema-render-form` 是基于 [Vue 高阶渲染函数](https://cn.vuejs.org/v2/guide/render-function.html) 和 [Element-ui](https://element.eleme.cn/) 开发的Form表单组件。

Form表单作为用户与网站间获取、传递数据的载体，应用场景广，灵活度高，是网页交互的核心元素。SchemaForm表单组件提供了一种高效的Form表单开发方式。使用时，通过 [JSON Schema](https://json-schema.org/) 对象设置各表单子项的渲染参数，易于编写，复用性高，利于提升开发效率。

# 目录
- [安装模块](#安装模块)
- [使用SchemaForm](#使用SchemaForm)
    - [引入方式](#引入方式)
    - [参数说明](#参数说明)
    - [字段标题](#字段标题)
        - [标题链接](#标题链接)
        - [必填项标识](#必填项标识)
        - [文字提示](#文字提示)
    - [表单示例](#表单示例)
- [组件对象及schema参数条件](#组件对象及schema参数条件)
    - [多选框](#checkBox-多选框)
    - [单选框](#radio-单选框)
    - [颜色选择器](#color-颜色选择器)
    - [时间选择器](#datePicker-时间选择器)
    - [文本/文字链接](#Text-文本/文字链接)
    - [文字输入框/文本域](#input-文字输入框/文本域)
    - [数字输入框](#inputNumber-数字输入框)
    - [下拉选择框](#select-下拉选择框)
    - [开关](#switch-开关)
    - [对象数组](#objectArray-对象数组)

## 安装模块
使用前，在命令行运行以下命令，将本项目安装至开发环境依赖。
```bash
npm install -S schema-render-form 
```

## 使用SchemaForm 
SchemaForm为一个element-ui模板表单组件,支持内嵌常见的、用于数据输入、提交及展示的基础组件。根据所声明的JSON Schema对象，将自动判断各表单子项对应的组件模板，并渲染表单。

### 引入方式
```bash
import { SchemaForm } from 'schema-render-form';      
```

### 参数说明
声明组件表单的JSON Schema对象应包括基础参数`properties`和`type`：

- `properties:` 组件表单属性，包含声明各子项组件的schema对象，参数类型为对象
- `type:` 组件表单的schema类型，参数类型为字符串，默认为`'object'`
```bash
schema: {
  properties: {
    obj1: {
      ...
    },
    ...
  },
  type: 'object'
}
```
表单内各子项组件的配置声明均采用JSON Schema格式，默认的JSON Schema格式为:
```bash
obj: {
  type: '', // ···················· 字段类型（必须）
  title: '', // ··················· 字段标题
  titleHref: '', // ··············· 标题链接
  toolTip: '', // ················· 标题文字提示
  description: '', // ············· 字段描述
  default: '', // ················· 字段默认值
  required: true, // ·············· 字段是否必须
  format: '', // ·················· 字段格式
  attrs: {} // ···················· 字段其他属性
}
```

## 字段标题
```bash
obj: {
  title: '',
  [titleHref: 'sampleLink.com',]
  ...
}
```
在表单子项的schema对象中，通过声明`title` 字段，定义组件标题文本，参数类型为字符串；

### 标题链接
表单子项元素的标题支持插入链接; 若声明了`titleHref` 可选参数，且参数值为有效的目标页面链接，相应项的标题将渲染成文字链接，点击标题时新建分页打开目标页面。

### 必填项标识
```bash
obj: {
  required: true,
  ...
}
```
表单组件支持设置必填项，渲染时，必填项的标题左上方将自动添加红色星号标识; 若在子项组件的schema对象中声明了`required`字段，且参数值为`true`，则识别为必填项。

### 文字提示
```bash
obj: {
  title: '',
  toolTip: '',
  ...
}
```
表单子项元素支持插入`toolTip`进行文字提示/补充说明；若在子项组件的schema对象中声明了`toolTip`字段，且参数值为提示文本内容，则在组件标题的右侧渲染问号图标，鼠标移动至图标上方时显示文字提示。
- 文字提示的默认主题为dark，默认显示方位为图标正上方。
- 文字提示图标默认在标题右侧渲染，因此只有声明了组件标题时有效。

> 应用例子：
```bash
icon: {
    title: '插入图标',
    titleHref: 'https://element.eleme.cn/#/zh-CN/component/icon',
    toolTip: '点击标题浏览所支持的图标类名',
    type: 'string',
    description: '请输入element-ui图标类名',
  },
```
字段标题渲染效果：

![image](http://km.oa.com/files/photos/pictures/202007/1595505993_9_w272_h47.png)

鼠标移至问号图标上方效果：

![image](http://km.oa.com/files/photos/pictures/202007/1595506026_33_w320_h93.png)

点击表单标题时将会新建分页打开element-ui-图标的说明页面。

## 表单示例
- 渲染一个包含输入框、下拉选择框、数字选择框的基础个人信息表单，其中，姓名为必填项： 
```bash
<template>
  <schema-form :schema="schema"></schema-form>
</template>

<script>      
import { SchemaForm } from 'schema-render-form';   

export default {
  name: 'personal-info',
  components: { SchemaForm },
  data() {
    return {
      // 用JSON Schema形式声明表单包含的组件
      schema: {
        properties: {
          name: {
            title: '名字', // 设置组件标签为'名字'
            type: 'string', // 渲染结果为输入框    
            required: true, // 设置为必填项，渲染时会标记红点
          },
          gender: {
            title: '性别', // 设置组件标签为'性别'
            type: 'string',
            // 渲染结果为下拉选择框
            enum: [
              { value: 'male', label: '男' },
              { value: 'female', label: '女' }
            ],
          },
          age: {
            title: '年龄', // 设置组件标签为'年龄'
            type: 'number', // 渲染结果为数字输入框
          }
        },
        type: 'object'
      }
    };
  },
};
</script>
```
- 表单渲染效果：

![image](http://km.oa.com/files/photos/pictures/202007/1594107921_10_w318_h154.png)

## 组件对象及schema参数条件
SchemaForm表单支持的子项字段类型包括：
  - checkBox 多选框
  - radio 单选框
  - color 颜色选择器
  - datePicker 时间选择器
  - Text 文本/文字链接
  - input 文字输入框/文本域
  - inputNumber 数字输入框
  - select 下拉选择框
  - switch 开关
  - objectArray 对象数组

在构建表单时，将根据`properties` 参数中各子项的JSON Schema对象判断并渲染相应类型的组件。

对于不同类型的组件对象，需在相应的JSON Schema对象中定义以下参数值：

### CheckBox 多选框
```bash
type: 'string',
anyOf:[{ value: '', label: '' }]
```
若组件JSON Schema对象中声明了类型字段`type` 的值为`'string'`，且定义了`anyOf`字段，参数类型为对象数组，则渲染多选框。数组中各对象的`'value'`与`'label'`值分别对应各选项的选项值与选项标签。

### Radio 单选框
```bash
type: 'string',
oneOf:[{ value: '', label: '' }]
```
若组件JSON Schema对象中声明了类型字段`type` 的值为`'string'`，且定义了`oneOf:` 字段，参数类型为对象数组，则渲染单选框选项。数组中各对象的`'value'`与`'label'`值分别对应各选项的选项值与选项标签。

### Select 下拉选择框
```bash
type: 'string',
enum: [{ value: '', label: '' }]
```
若组件JSON Schema对象中声明了类型字段`type` 的值为`'string'`，且定义了`enum`字段，参数类型为对象数组，则渲染下拉选择框。数组中各对象的`'value'`与`'label'`值分别对应各选项的选项值与选项标签。

### Text 文本/文字链接
```bash
type: 'string',
text: ''[,
titleHref: '',
attrs: {
  href: '',
}]
```
若组件JSON Schema对象中声明了类型字段`type` 的值为`'string'`，且定义了`text`字段，参数类型为字符串，则渲染文本。

文本支持插入链接：
- 若没有定义`attrs`属性，默认渲染文本；
- 若设置了`attrs`对象的`href`链接属性，则渲染文字链接，点击文字时新建分页并打开`href`链接对应的目标页面。

### Color 颜色选择器
```bash
type: 'string',
format: 'color'
```
若组件JSON Schema对象中声明了类型字段`type` 的值为`'string'`，且定义了`format` 字段，参数值为`'color'`，则渲染颜色选择器。

### DatePicker 时间选择器
```bash
type: 'string',
format: 'date'
```
若组件JSON Schema对象中声明了类型字段`type` 的值为`'string'`，且定义了`format` 字段，参数值为`'date'`，则渲染时间选择器。

### Input 文字输入框/文本域
```bash
type: 'string'[,
attrs: {
  type: 'textarea',
  [rows: ]
}]
```
若组件JSON Schema对象中声明了类型字段`type` 的值为`'string'`，且没有定义其他与组件类型判断相关的参数值，则渲染文字输入框。

文字输入框包括两种样式 -- 默认样式和文本域：
- 若没有定义`attrs`属性，渲染默认样式文本输入框；
- 若设置`attrs`对象的`type`类型属性为`'textarea'`， 则渲染文本域。
    - 对于文本域样式，可在`attrs`对象中定义`rows`字段，参数类型为数值，设置文本域行数。

### InputNumber 数字输入框
```bash
type: 'number'
```
若组件JSON Schema对象中声明了类型字段`type` 的值为`'number'`，且没有定义其他与组件类型判断相关的参数值，则渲染数字输入框。

### Switch 开关
```bash
type: 'boolean'
```
若组件JSON Schema对象中声明了类型字段`type` 的值为`'boolean'`，且没有定义其他与组件类型判断相关的参数值，则渲染开关。

### ObjectArray 对象数组
对象数组可视为一个子表单组件，支持将多个组件打包成一个组件对象，并根据长度设置重复渲染所打包的对象内容。
```bash
type: 'array',
[defaultNum: number,] // 可选参数：若设置，渲染固定长度数组
items： {
  type: 'object',
  properties: {
    ...
  },
}
```
若组件JSON Schema对象中声明了类型字段`type` 的值为`'array'`，并定义了`items`字段，且`items`对象中声明了类型字段`type` 的值为`'object'`，则以`items`中`properties`参数为对象数组的schema对象，渲染所包含的组件。

> 使用场景：

若某个组件需要设置多个选项，且每个选项对应多个数据内容，则可将多个数据输入组件打包为一个对象数组组件，并按照所需的选项数量重复渲染，以获取各个选项对应的全部数据内容。

> 长度设置：

对象数组的渲染支持固定长度或动态长度：
- 若在JSON Schema中定义了'defaultNum'参数，则按照参数值渲染固定长度的对象数组；
    - defaultNum值为1时，不渲染分割线； 
    - defaultNum值大于1时，各组间自动渲染分割线。
- 若未定义'defaultNum'参数，则在组件头部自动渲染数字选择器，根据数字选择器的值动态更改数组长度。

> 应用例子：

设置一组由用户定义的多选框时，对于各个选项，需要分别获取：选项标签、选项值、选项是否禁用 三个数据内容。将三个数据输入组件打包成一个对象数组组件，并根据多选框需要的选项数量灵活设置渲染长度。
- 明确只需要设置一个多选框选项时，在JSON Schema中定义参数`defaultNum: 1` :
```bash
option: {
  type: 'array',
  defaultNum: 1,
  items: {
    type: 'object',
    properties: {
      label: {
        title: '选项标签',
        description: '请输入标签文本内容',
        type: 'string',
        default: '备选项',
        required: true,
      },
      value: {
        title: '选项值',
        description: '请输入自定义选项值',
        type: 'string',
        default: '',
        required: false,
      },
      disabled: {
        title: '禁用状态',
        type: 'boolean',
        default: false,
        attrs: {
          'active-text': '禁用',
          'inactive-text': '启用',
        },
        required: false,
      },
    },
  },
},
```
表单子项渲染效果：

![image](http://km.oa.com/files/photos/pictures/202007/1594106618_69_w298_h156.png)

- 明确需要设置两个多选框选项时，在JSON Schema中定义参数`defaultNum: 2` (其余代码不变):

表单子项渲染效果：

![image](http://km.oa.com/files/photos/pictures/202007/1594106678_23_w296_h371.png)

- 若不确定需要多少个多选框选项，则在JSON Schema中不定义参数`defaultNum` (其余代码不变)，对象数组组件将自动在顶部渲染数据输入框，可在页面动态设置对象数组的长度:

表单子项渲染效果：

![image](http://km.oa.com/files/photos/pictures/202007/1594106699_51_w321_h245.png)
