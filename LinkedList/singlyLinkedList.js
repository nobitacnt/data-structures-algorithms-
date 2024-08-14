const executionTime = require('./utils.js');

class ListNode {
  constructor(element) {
    this.element = element;
    this.prev = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  push(element) {
    const node = new ListNode(element);
    node.prev = this.head;
    this.head = node;
    this.size++;
  }
  pop() {
    let lastNode = this.head;
    if (lastNode) {
      this.head = lastNode.prev;
      return lastNode.element;
    }
    return null;
  }

  // prints the list items
  printList() {
    let curr = this.head;
    let str = '';
    while (curr) {
      str += curr.element + ' ';
      curr = curr.prev;
    }
    console.log(str);
  }
}
let start = new Date().getTime();

let stack = new SinglyLinkedList();

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

