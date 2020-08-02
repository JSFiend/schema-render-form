import { generAttrs } from '.';

export const Input = {
  functional: true,
  name: 'op-input',

  render(h, context) {
    const { props: { schema, schema: { name }, value }, attrs, listeners } = context;
    const cAttrs = generAttrs(schema, attrs);
    return h('el-input', {
      props: {
        ...cAttrs,
        value: value || '',
      },
      attrs: cAttrs,
      on: {
        input(content) {
          listeners.change({ key: name, value: content });
        },
      },
    });
  },
};
