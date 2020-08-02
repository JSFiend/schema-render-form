import { generAttrs } from '.';

export const Select = {
  functional: true,
  name: 'op-select',

  render(h, context) {
    const { props: { schema, schema: { name, enum: list }, value }, attrs, listeners } = context;

    const nodes = list.map((item) => h('el-option', {
      props: {
        key: item.value,
        label: item.label,
        value: item.value,
      },
    }));

    const cAttrs = generAttrs(schema, attrs);
    return h('el-select', {
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
    }, nodes);
  },
};
