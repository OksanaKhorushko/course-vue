<template>
  <div id="app">
    <img src="./assets/logo.png" alt="Vue logo">
    <div class="screen">
      <input
        v-model.number="operand1"
        type="text"
      />
      {{ operator }}
      <input
        v-model.number="operand2"
        type="text"
      />
      =>
      <input
        v-model="result"
        type="text"
        readonly
      />
      <div v-if="error" class="error">{{ error }}</div>
    </div>
    <div class="keyboard">
      <div class="row">
        <button v-for="(item, index) in operators" :key="index" @click="getResult(item)">{{ item }}</button>
      </div>
      <div class="numbersShown">
        <input type="checkbox" id="checkbox" v-model="isKeyboardShown" />
        <label for="checkbox">{{ checked }}</label>
        <div v-if="isKeyboardShown">
          <button v-for="(item, index) in numbers" :key="index" @click="inputValue(item)">{{ item }}</button>
          <div class="radioBtn">
            <input type="radio" id="operand1" value="operand1" v-model="activeInput">
            <label for="operand1">operand1</label>
            <input type="radio" id="operand2" value="operand2" v-model="activeInput">
            <label for="operand2">operand2</label>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      operand1: '',
      operand2: '',
      operator: '+',
      result: 0,
      error: '',
      operators: ['+', '-', '*', '/', '**', '\\'],
      isKeyboardShown: false,
      checked: 'Отобразить экранную клавиатуру',
      numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '←'],
      activeInput: 'operand1',
    }
  },
  methods: {
    setOperator(operator) {
      this.operator = operator
    },
    getResult(operator) {
      this.error = '';
      this.setOperator(operator);
      switch(operator) {
        case '+':
          this.result = this.operand1 + this.operand2
          break;
        case '-':
          this.result = this.operand1 - this.operand2
          break;
        case '*':
          this.result = this.operand1 * this.operand2
          break;
        case '/':
          if (this.operand2 === 0) {
            this.error = 'На 0 делить нельзя'
          } else {
            this.result = this.operand1 / this.operand2
          }
          break;
        case '**':
          this.result = Math.pow(this.operand1, this.operand2)
          break;
        case '\\':
          this.result = Math.floor(this.operand1 / this.operand2)
          break;
        default:
          this.result = 'Err'
          break;
      }
    },
    inputValue(val) {
      const strVal = `${this[this.activeInput]}`;
      if (val === '←') {
        this[this.activeInput] = +(strVal.substring(0, strVal.length - 1));
        return;
      }
      this[this.activeInput] = +(strVal + val);
    }
  }
}
</script>

<style lang="scss">
  #app {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    color: #000;
    margin-top: 60px;
  }

  .row {
    margin-bottom: 30px;
  }

  .error {
    margin: 20px;
    padding: 10px;
    border: 1px solid red;
    background-color: rgb(248, 175, 175);
    color: red;
  }

  #checkbox {
    margin-bottom: 15px;
  }
</style>
