import { parserSchema, ObjArray, Text } from '.';

export const FormItem = {
  functional: true,
  name: 'op-form-item',

  render(h, context) {
    const { props: { schema, value }, data, listeners } = context;
    // 将标题文本转为文字链接
    const title = schema.title ? h(Text, {
      slot: 'label',
      props: {
        schema: {
          text: schema.title,
          toolTip: schema.toolTip || undefined,
          attrs: {
            href: schema.titleHref || undefined,
          },
        },
      },
    }) : undefined;
    // 若需获取数组形式的数据，渲染特定的对象数组表单组件
    if (schema.type === 'array' && schema.items && schema.items.type === 'object') {
      const children = h(ObjArray, {
        props: {
          schema,
          value,
        },
        on: listeners,
      });
      // 若schema中定义了`titleHref`字段，将表单标题文本替换成文字链接
      return [title, children];
    }

    // 若无数组形式的数据，根据数据类型、属性判断渲染表单组件
    const formComponent = parserSchema(schema);
    const children = h(formComponent, {
      props: {
        schema,
        value,
      },
      on: listeners,
    });
    // 若schema中定义了`titleHref`字段，将表单标题文本替换成文字链接
    const nodes = [title, children];
    return h('el-form-item', data, nodes);
  },
};
