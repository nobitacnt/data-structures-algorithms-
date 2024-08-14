const executionTime = require('./utils.js');

class StackArray {
  constructor() {
    this.index = 0;
    this.items = [];
  }
  push(item) {
    this.items[this.index] = item;
    this.index++;
  }
  pop() {
    let end = 0;
    if (this.index > 0) {
      end = this.index - 1;
    }
    const value = this.items[end];
    delete this.items[end];
    this.index = end;
    return value;
  }
}

let stack = new StackArray();

executionTime(() => {
  let i = 1;
  while (i <= 1000000) {
    stack.push(i);
    i++;
  }
}).then(() => {
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
});


