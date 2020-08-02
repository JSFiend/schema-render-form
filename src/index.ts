export * from './types';
export * from './util';
export * from './parser';
export * from './SchemaForm';
export * from './ObjArray';
export * from './FormItem';
export * from './Radio';
export * from './Checkbox';
export * from './Input';
export * from './InputNumber';
export * from './Text';
export * from './Select';
export * from './Switch';
export * from './DatePicker';
export * from './Color';
export * from './ToolTip';
import { SchemaForm } from './SchemaForm';
import './index.css';

const install = function (Vue) {
  Vue.component('SchemaForm', SchemaForm);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
