export const Checkbox = {
  functional: true,
  name: 'op-checkbox',

  render(h, context) {
    const { props: { schema: { anyOf, name }, value }, listeners } = context;

    // 生成 checkbox vnode
    const nodes = anyOf.map((item) => h('el-checkbox', {
      props: {
        label: item.value,
      },
      on: {
        change() {
          let val: any[] = [];
          if (value.includes(item.value)) {
            val = value.filter((subItem) => subItem !== item.value);
          } else {
            val = [...value, item.value];
          }
          listeners.change({ key: name, value: val });
        },
      },
    }, item.label));
    return h('el-checkbox-group', {
      props: {
        value: value || [],
      },
    }, nodes);
  },
};
