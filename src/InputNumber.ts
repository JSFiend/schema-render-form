import { generAttrs } from '.';

export const InputNumber = {
  functional: true,
  name: 'op-input-number',

  render(h, context) {
    const { props: { schema, schema: { name, description }, value }, attrs, listeners } = context;
    const cAttrs = generAttrs(schema, attrs);

    return h('el-input-number', {
      props: {
        ...cAttrs,
        value: value || '',
      },
      attrs: cAttrs,
      on: {
        change(val) {
          listeners.change({ key: name, value: val });
        },
      },
    });
  },
};
