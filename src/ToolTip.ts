export const ToolTip = {
  functional: true,
  name: 'op-toolTip',

  render(h, context) {
    const { props: { toolTip, placement } } = context;
    return h('el-tooltip', {
      props: {
        content: toolTip,
        placement: placement || 'top',
      }
    }, [h('i', {
      class: 'el-icon-question el-icon--right',
      style: {
        fontSize: '5px',
        margin: '1px',
        opacity: '0.8',
      }
    })]);
  },
};
