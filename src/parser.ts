import {
  Radio, Checkbox, Input, InputNumber, Select, Switch, DatePicker, Color, Text
} from '.';

export function parserSchema(schema) {
  // 如果 src 有数组类型的 oneOf， 渲染 radio 单选框。
  if (schema.oneOf instanceof Array) {
    schema.oneOf = parserItem(schema.oneOf);
    return Radio;
  }
  // 如果 src 有数组类型的 anyOf， 渲染 checkbox 单选框。
  if (schema.anyOf instanceof Array) {
    schema.anyOf = parserItem(schema.anyOf);
    if (schema.type !== 'array') throw new Error(`多选框的类型必须是数组：${schema}`);
    return Checkbox;
  }
  // 如果 src 有数组类型的 enum， 渲染 select 选择框。
  if (schema.enum instanceof Array) {
    schema.enum = parserItem(schema.enum);
    return Select;
  }
  // 如果 src 有字符类型textContent， 渲染 text 文本。
  if (schema.text) {
    return Text;
  }

  // 如果 src 的 format 值是 color， 渲染颜色选择器。
  if ('color'.includes(schema.format)) {
    return Color;
  }
  // 如果 src 的 format 值是 date， 渲染日期选择器。
  if ('date'.includes(schema.format)) {
    return DatePicker;
  }
  // 渲染开关
  if ('boolean'.includes(schema.type)) {
    return Switch;
  }
  // 渲染 input 输入框
  if ('string'.includes(schema.type)) {
    return Input;
  }
  // 渲染 input-number 数字输入框
  if ('number'.includes(schema.type)) {
    return InputNumber;
  }
}

export function parserItem(items) {
  return items.map((item) => {
    if (typeof item !== 'object') {
      return { label: item, value: item };
    }
    return item;
  });
}
