import { mount } from '@vue/test-utils';
import TestComponent from './TestComponent.vue';

describe('TestComponent testing', () => {
  test('Test content', () => {
    const wrapper = mount(TestComponent, {
      propsData: {
        message: 'Test message',
      },
    });

    expect(wrapper.text()).toEqual('Test message is Test message');
  });
});
