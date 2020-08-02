import { mount, shallowMount } from '@vue/test-utils';
import { Radio, Checkbox, Input, InputNumber, Select, Switch, DatePicker, Color, ObjArray, Text } from '../src';

describe('Radio', () => {
  it('renders an el-radio', () => {
    const wrapper = shallowMount(Radio, {
      context: {
        props: {
          schema: {
            name: 'op-radio',
            type: 'string',
            oneOf: [
              { value: 'a', label: 'a' },
            ]
          },
        }
      }
    });
    expect(wrapper.get('el-radio').text()).toBe('a');
    expect(wrapper.findAll('el-radio')).toHaveLength(1);
  });
});

describe('Checkbox', () => {
  it('renders an el-checkbox', () => {
    const wrapper = shallowMount(Checkbox, {
      context: {
        props: {
          schema: {
            name: 'op-checkBox',
            type: 'string',
            anyOf: [
              { value: 'a', label: 'a' },
            ]
          },
        }
      }
    });
    expect(wrapper.get('el-checkbox').text()).toBe('a');
    expect(wrapper.findAll('el-checkbox')).toHaveLength(1);
  });
});

describe('Input', () => {
  it('renders an el-input', () => {
    const wrapper = shallowMount(Input, {
      context: {
        props: {
          schema: {
            name: 'op-input',
            type: 'string',
          },
        }
      }
    });
    expect(wrapper.get('el-input'));
  });
});

describe('InputNumber', () => {
  it('renders an el-input-number', () => {
    const wrapper = shallowMount(InputNumber, {
      context: {
        props: {
          schema: {
            name: 'op-inputNumber',
            type: 'number',
          },
        }
      }
    });
    expect(wrapper.get('el-input-number'));
  });
});

describe('Text', () => {
  it('renders Text', () => {
    const text = 'Hello trpc!';
    const wrapper = shallowMount(Text, {
      context: {
        props: {
          schema: {
            name: 'op-text',
            type: 'string',
            text,
          },
        }
      }
    });
    expect(wrapper.get('p').text()).toMatch(text);
  });
  it('renders Text Link', () => {
    const text = 'vue website';
    const href = 'https://vuejs.org/';
    const wrapper = shallowMount(Text, {
      context: {
        props: {
          schema: {
            name: 'op-text',
            type: 'string',
            text,
            attrs: {
              href,
            },
          },
        }
      }
    });
    expect(wrapper.get('el-link').text()).toMatch(text);
    expect(wrapper.attributes('href')).toBe(href);
  });
});

describe('Select', () => {
  it('renders an el-select', () => {
    const wrapper = mount(Select, {
      context: {
        props: {
          schema: {
            name: 'op-select',
            type: 'string',
            enum: [
              { value: 'a', label: 'a' },
              { value: 'b', label: 'b' },
            ]
          },
        }
      }
    });
    expect(wrapper.get('el-select'));
    expect(wrapper.findAll('el-option')).toHaveLength(2);
  });
});

describe('Switch', () => {
  it('renders an el-switch', () => {
    const wrapper = shallowMount(Switch, {
      context: {
        props: {
          schema: {
            name: 'op-switch',
            type: 'boolean',
            default: true,
          },
        }
      }
    });
    expect(wrapper.get('el-switch'));
  });
});

describe('DatePicker', () => {
  it('renders an el-date-picker', () => {
    const wrapper = shallowMount(DatePicker, {
      context: {
        props: {
          schema: {
            name: 'op-datePicker',
            type: 'string',
            format: 'date'
          },
        }
      }
    });
    expect(wrapper.get('el-date-picker').attributes('type')).toBe('date');
  });
});

describe('Color', () => {
  it('renders an el-color-picker', () => {
    const wrapper = shallowMount(Color, {
      context: {
        props: {
          schema: {
            name: 'op-color',
            type: 'string',
            format: 'color',
          },
        }
      }
    });
    expect(wrapper.get('el-color-picker'));
  });
});

describe('ObjArray', () => {
  it('renders an object array dynamically', () => {
    const schema = {
      name: 'op-objArray',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          label: {
            name: 'switch',
            type: 'boolean',
          }
        }
      }
    };
    const value = [{ label: 'switch', value: true }];
    const wrapper = shallowMount(ObjArray, {
      context: {
        props: {
          schema,
          value,
        }
      }
    });
    expect(wrapper.get('el-input-number').attributes('min')).toBe('1');
    expect(wrapper.get('el-switch'));
  });

  it('renders an object array of fixed length', () => {
    const schema = {
      name: 'op-objArray',
      type: 'array',
      defaultNum: 3,
      items: {
        type: 'object',
        properties: {
          label: {
            name: 'switch',
            type: 'boolean',
          }
        }
      }
    };
    const value = [{ label: 'switch', value: true }];
    const wrapper = shallowMount(ObjArray, {
      context: {
        props: {
          schema,
          value,
        }
      }
    });
    expect(wrapper.find('el-input-number').exists()).toBe(false);
    expect(wrapper.findAll('el-switch')).toHaveLength(3);
  });
});
