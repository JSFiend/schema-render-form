export const Radio = {
  functional: true,
  name: 'op-radio',

  render(h, context) {
    const { props: { schema: { name, oneOf }, value }, listeners } = context;
    // 渲染 radio 组
    const nodes = oneOf.map((item) => h('el-radio', {
      props: {
        label: item.value,
      },
      on: {
        change() {
          listeners.change({ key: name, value: item.value });
        },
      },
    }, item.label));

    // 渲染 radio group
    return h('el-radio-group', {
      props: {
        value: value || '',
      },
    }, nodes);
  },
};
