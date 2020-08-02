import { VNode } from 'vue';
import { FormItem } from '.';

export const ObjArray = {
  functional: true,
  name: 'op-objArray',

  render(h, context) {
    const { props: { schema, schema: { name, items, defaultNum }, value }, listeners } = context;
    if (typeof defaultNum === 'number' && defaultNum > 0 && value.length !== defaultNum) {
      Array.from({ length: defaultNum - 1 }, (_, i) => value.push(JSON.parse(JSON.stringify(value[0]))));
    }
    let lbCount = value.length;
    const children: VNode[][] = [];
    const div = h(FormItem, {
      style: {
        margin: '15px 10px 10px 5px',
      },
      props: {
        schema: {
          name: 'num',
          type: 'number',
          title: '数量',
          attrs: {
            min: 1,
          },
        },
        value: lbCount,
      },
      on: {
        change(val) {
          const newV = JSON.parse(JSON.stringify(value[value.length - 1]));
          if (val.value > lbCount) {
            Array.from({ length: val.value - lbCount }, (_, i) => value.push(newV));
          } else if (lbCount > 1 && val.value < lbCount) {
            Array.from({ length: lbCount - val.value }, (_, i) => value.pop());
          }
          lbCount = val.value;
          listeners.change({ key: name, value });
        },
      },
    });

    for (let i = 0; i < lbCount; i += 1) {
      const nodes: VNode[] = Object.keys(items.properties).map((key) => {
        const itemsVal = items.properties[key];
        // src 加上 name 属性
        const schemaItem = { ...itemsVal, name: key };
        // 添加 FormItem label
        return h(FormItem, {
          style: {
            margin: '5px 10px 10px 5px',
          },
          props: {
            schema: schemaItem,
            label: schemaItem.title,
            required: schemaItem.required,
            value: value[i][key],
          },
          on: {
            change(val) {
              value[i][val.key] = val.value;
              listeners.change({ key: name, value });
            },
          },
        });
      });

      const divider = h('div', {
        class: {
          separator: true,
        },
      }, `选项 ${i + 1}`);
      // @ts-ignore
      if (!defaultNum || defaultNum > 1) {
        children.push(divider);
      }
      children.push(nodes);
    }

    return h('div', {
      style: {
        border: '1px solid #CCCACA',
        marginBottom: '20px',
        boxShadow: '1px 1px rgba(0, 0, 0, 0.1)',
      },
    }, [defaultNum ? null : div, children]);
  },
};
