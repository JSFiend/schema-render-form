import { generAttrs } from '.';

export const Switch = {
  functional: true,
  name: 'op-switch',

  render(h, context) {
    const { props: { schema, schema: { name }, value }, attrs, listeners } = context;
    const cAttr = generAttrs(schema, attrs);
    return h('el-switch', {
      props: {
        ...cAttr,
        value: value || false,
      },
      attrs: cAttr,
      on: {
        change(val) {
          listeners.change({ key: name, value: val });
        },
      },
    });
  },
};
