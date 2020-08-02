import { shallowMount } from '@vue/test-utils';
import { SchemaForm } from '../src';

describe('SchemaForm', () => {
    const propsData = {
        schema: {
            name: 'schemaForm',
            properties: {
                content: {
                    name: 'obj1',
                    title: '数字',
                    type: 'number',
                },
                name: {
                    name: 'obj2',
                    title: '名字',
                    type: 'string',
                },
            }
        },
    }

    it('render a schema form correctly', () => {
        const wrapper = shallowMount(SchemaForm, { propsData });
        expect(wrapper).toMatchSnapshot();
    })

    it('schema form handles data change', async () => {
        const wrapper = shallowMount(SchemaForm, { propsData });
        expect(wrapper.vm.$data.number === undefined);
        wrapper.vm.$emit('change', { key: 'min', value: 2 });
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.$data.number === 2);
    });
});