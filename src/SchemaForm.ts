import Vue, { VNode } from 'vue';
import { genId } from './util';
import { FormItem } from '.';

const id = genId('SchemaForm');

export const SchemaForm = Vue.extend({
  name: 'op-schemaForm',

  props: {
    schema: { type: Object, default: () => ({}) },

    value: {
      type: [Number, String, Array, Object, Boolean],
      default: () => ({}),
    },
    rules: Object,
    labelPosition: String,
    labelWidth: String,
    labelSuffix: {
      type: String,
      default: '',
    },
    inline: Boolean,
    inlineMessage: Boolean,
    statusIcon: Boolean,
    showMessage: {
      type: Boolean,
      default: true,
    },
    size: String,
    disabled: Boolean,
    validateOnRuleChange: {
      type: Boolean,
      default: true,
    },
    hideRequiredAsterisk: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      modelValue: {},
    };
  },

  watch: {
    // src 改变，代表组件更新，modelValue 赋予默认值
    schema(n, p) {
      // console.log(n, p, this.value);
      this.modelValue = { ...this.value };
    },
  },

  render(h): VNode {
    const { schema, $slots } = this;

    const nodes: VNode[] = Object.keys(schema.properties).map((key) => {
      const value = schema.properties[key];
      // src 加上 name 属性
      const schemaItem = { ...value, name: key };

      // 添加 FormItem label
      return h(FormItem, {
        props: {
          schema: schemaItem,
          label: schemaItem.title,
          titleHref: schemaItem.titleHref || undefined,
          toolTip: schemaItem.toolTip || undefined,
          required: schemaItem.required,
          rules: schemaItem.rules || [],
          value: this.value[key],
        },
        on: {
          change: this.change,
        },
      });
    });

    // 添加子节点数组
    if ($slots.default) {
      $slots.default.forEach((node) => nodes.push(node));
    }

    // 渲染 el-form
    return h('el-form', {
      ref: id,
      props: {
        // @ts-ignore
        ...this._props,
        model: this.modelValue,
      },
    }, nodes);
  },

  methods: {
    // 表单触发 change 事件改编 form 的内容 listeners.change({ key: name, value: val });
    change({ key, value }) {
      this.$set(this.modelValue, key, value);
      this.$emit('change', this.modelValue);
    },
  },

  created() {
    // 切断和上层 model 的绑定
    this.modelValue = { ...this.value };
  },
});
