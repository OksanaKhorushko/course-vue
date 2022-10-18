import { mount } from '@vue/test-utils';
import Calc from '../../src/App.vue';

describe('Calculator testing', () => {
  describe('operands', () => {
    test('Test first operand', () => {
      const wrapper = mount(Calc);
      const op1Input = wrapper.find('input[name="op1"]');

      op1Input.setValue(1);

      expect(wrapper.vm.operand1).toBe(1);
    });

    test('Test second operand', () => {
      const wrapper = mount(Calc);
      const op2Input = wrapper.find('input[name="op2"]');

      op2Input.setValue(2);

      expect(wrapper.vm.operand2).toBe(2);
    });
  });

  describe('methods', () => {

    test('Test sum method', () => {
      const wrapper = mount(Calc);
      const op1Input = wrapper.find('input[name="op1"]');
      const op2Input = wrapper.find('input[name="op2"]');
      const sumButton = wrapper.find('button[name="+"]');

      op1Input.setValue(4);
      op2Input.setValue(2);
      sumButton.trigger('click');

      expect(wrapper.vm.result).toBe(6);
    });

    test('Test minus method', () => {
      const wrapper = mount(Calc);
      const op1Input = wrapper.find('input[name="op1"]');
      const op2Input = wrapper.find('input[name="op2"]');
      const minusButton = wrapper.find('button[name="-"]');

      op1Input.setValue(4);
      op2Input.setValue(3);
      minusButton.trigger('click');

      expect(wrapper.vm.result).toBe(1);
    });

    test('Test multiply method', () => {
      const wrapper = mount(Calc);
      const op1Input = wrapper.find('input[name="op1"]');
      const op2Input = wrapper.find('input[name="op2"]');
      const multiplyButton = wrapper.find('button[name="*"]');

      op1Input.setValue(2);
      op2Input.setValue(3);
      multiplyButton.trigger('click');

      expect(wrapper.vm.result).toBe(6);
    });

    test('Test division method', () => {
      const wrapper = mount(Calc);
      const op1Input = wrapper.find('input[name="op1"]');
      const op2Input = wrapper.find('input[name="op2"]');
      const divisionButton = wrapper.find('button[name="/"]');

      op1Input.setValue(6);
      op2Input.setValue(3);
      divisionButton.trigger('click');

      expect(wrapper.vm.result).toBe(2);
    });

    test('Test exponentiation method', () => {
      const wrapper = mount(Calc);
      const op1Input = wrapper.find('input[name="op1"]');
      const op2Input = wrapper.find('input[name="op2"]');
      const exponentiationButton = wrapper.find('button[name="**"]');

      op1Input.setValue(3);
      op2Input.setValue(2);
      exponentiationButton.trigger('click');

      expect(wrapper.vm.result).toBe(9);
    });

    test('Test integer division method', () => {
      const wrapper = mount(Calc);
      const op1Input = wrapper.find('input[name="op1"]');
      const op2Input = wrapper.find('input[name="op2"]');
      const integerDivisionButton = wrapper.find('button[name="\\\\"]');

      op1Input.setValue(9);
      op2Input.setValue(3);
      integerDivisionButton.trigger('click');

      expect(wrapper.vm.result).toBe(3);
    });
  });

  describe('keyboard operand1', () => {
    let wrapper;

    beforeEach(async () => {
      wrapper = mount(Calc);
      await wrapper.setData({isKeyboardShown: true});
    });

    test('Test zero number', () => {
      const btn = wrapper.find('button[name="0"]');
      btn.trigger('click');

      expect(wrapper.vm.operand1).toBe(0);
    });

    test('Test numbers', () => {
      const btn1 = wrapper.find('button[name="1"]');
      const btn2 = wrapper.find('button[name="2"]');
      const btn3 = wrapper.find('button[name="3"]');
      const btn4 = wrapper.find('button[name="4"]');
      const btn5 = wrapper.find('button[name="5"]');
      const btn6 = wrapper.find('button[name="6"]');
      const btn7 = wrapper.find('button[name="7"]');
      const btn8 = wrapper.find('button[name="8"]');
      const btn9 = wrapper.find('button[name="9"]');

      btn1.trigger('click');
      btn2.trigger('click');
      btn3.trigger('click');
      btn4.trigger('click');
      btn5.trigger('click');
      btn6.trigger('click');
      btn7.trigger('click');
      btn8.trigger('click');
      btn9.trigger('click');

      expect(wrapper.vm.operand1).toBe(123456789);
    });

    test('Test backspace', () => {
      const btn = wrapper.find('button[name="←"]');
      const op1Input = wrapper.find('input[name="op1"]');

      op1Input.setValue(12345);
      btn.trigger('click');

      expect(wrapper.vm.operand1).toBe(1234);
    });
  });

  describe('keyboard operand2', () => {
    let wrapper;

    beforeEach(async () => {
      wrapper = mount(Calc);
      await wrapper.setData({isKeyboardShown: true, activeInput: 'operand2'});
    });

    test('Test zero number', () => {
      const btn = wrapper.find('button[name="0"]');
      btn.trigger('click');

      expect(wrapper.vm.operand2).toBe(0);
    });

    test('Test numbers', () => {
      const btn1 = wrapper.find('button[name="1"]');
      const btn2 = wrapper.find('button[name="2"]');
      const btn3 = wrapper.find('button[name="3"]');
      const btn4 = wrapper.find('button[name="4"]');
      const btn5 = wrapper.find('button[name="5"]');
      const btn6 = wrapper.find('button[name="6"]');
      const btn7 = wrapper.find('button[name="7"]');
      const btn8 = wrapper.find('button[name="8"]');
      const btn9 = wrapper.find('button[name="9"]');

      btn1.trigger('click');
      btn2.trigger('click');
      btn3.trigger('click');
      btn4.trigger('click');
      btn5.trigger('click');
      btn6.trigger('click');
      btn7.trigger('click');
      btn8.trigger('click');
      btn9.trigger('click');

      expect(wrapper.vm.operand2).toBe(123456789);
    });

    test('Test backspace', () => {
      const btn = wrapper.find('button[name="←"]');
      const op2Input = wrapper.find('input[name="op2"]');

      op2Input.setValue(12345);
      btn.trigger('click');

      expect(wrapper.vm.operand2).toBe(1234);
    });
  });
});
