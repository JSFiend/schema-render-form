import { generAttrs } from '.';

const date = new Date();

export const DatePicker = {
  functional: true,
  name: 'op-date-picker',

  render(h, context) {
    const { props: { schema, schema: { name }, value }, attrs, listeners } = context;
    const cAttrs = generAttrs(schema, attrs);

    Object.assign(cAttrs, { type: (schema.attrs && schema.attrs.type) || 'date' });

    return h('el-date-picker', {
      props: {
        ...cAttrs,
        value: value || date,
      },
      attrs: cAttrs,
      on: {
        change(val) {
          listeners.change({ key: name, value: val.toString() });
        },
        input(val, ...arg) {
          listeners.change({ key: name, value: val.toString() });
        },
      },
    });
  },
};
