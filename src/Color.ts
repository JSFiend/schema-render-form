import { generAttrs } from '.';

export const Color = {
  functional: true,
  name: 'op-color',

  render(h, context) {
    const { props: { schema, schema: { name }, value }, attrs, listeners } = context;
    const cAttr = generAttrs(schema, attrs);
    return h('el-color-picker', {
      props: {
        ...cAttr,
        value: value || '',
      },
      on: {
        change(val) {
          listeners.change({ key: name, value: val });
        },
      },
    });
  },
};
