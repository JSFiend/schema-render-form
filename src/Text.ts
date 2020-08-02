import { generAttrs, ToolTip } from '.';

export const Text = {
  functional: true,
  name: 'text',

  render(h, context) {
    const { props: { schema, schema: { text, name }, value }, data, attrs, listeners } = context;
    const cAttrs = generAttrs(schema, attrs);
    // 若schema中设置了tooltip字段，在标题右上方插入tooltip标签
    const toolTip = (data.slot === 'label' && schema.toolTip) ? h(ToolTip, {
      props: {
        toolTip: schema.toolTip,
      }
    }) : undefined;
    // 若文本插槽为标题，在内容右侧加上冒号
    const colon = (data.slot === 'label' && schema.text) ? ':' : undefined;
    const link = h('el-link', {
      props: {
        ...cAttrs,
        value: value || '',
      },
      attrs: {
        ...cAttrs,
        type: 'primary',
        target: '_blank',
        underline: false,
      },
      style: {
        fontSize: '12px',
        fontWeight: 'normal',
      },
    }, [text, toolTip, colon]);
    const pText = h('span', {
      props: {
        ...cAttrs,
        value: value || '',
      },
      style: {
        fontSize: '12px',
        fontWeight: 'normal',
      },
    }, [text, toolTip, colon]);
    // 若属性特征中设置了href字段，渲染文字链接，否则渲染纯文本
    return cAttrs.href ? link : pText;
  },
};
