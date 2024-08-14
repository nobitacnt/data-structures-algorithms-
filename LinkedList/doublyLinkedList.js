const executionTime = require("./utils");

class ListNode {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(element) {
    if(this.isEmptyTail()) {
      this.init(element);
    } else {
      let tailCurrent = this.tail;
      this.tail = new ListNode(element);
      this.tail.prev = tailCurrent;
    }

    this.size++;
  }

  prepend(element) {
    if(this.isEmptyHead()) {
      this.init(element);
    } else {
      let headCurrent = this.head;
      this.head = new ListNode(element);
      this.head.next = headCurrent;
      this.head.next.prev = this.head;
    }

    this.size++;
  }

  shift() {
    if(this.isEmptyHead()) return null;
    let headCurrent = this.head;
    this.head = headCurrent.next;
    return headCurrent.element;
  }

  pop() {
    if(this.isEmptyTail()) return null;
    let tailCurrent = this.tail;
    this.tail = tailCurrent.prev;
    return tailCurrent.element;
  }

  init(element) {
    let node = new ListNode(element);
    this.head = node;
    this.tail = node;
  }

  isEmptyHead() {
    return this.head === null;
  }
  isEmptyTail() {
    return this.tail === null;
  }

  showElements()
  {
    let current = this.tail;
    while (current !== null) {
      console.log(current.element);
      current = current.prev;
    }
  }
}

let stack = new DoublyLinkedList();
/*
stack.prepend(1);
stack.prepend(2);
stack.prepend(3);
stack.push(5);
stack.push(6);
stack.push(7);
stack.showElements();
*/


/*
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
 */

/*
executionTime(() => {
  let i = 1;
  while (i <= 1000000) {
    stack.prepend(i);
    i++;
  }
}).then(() => {
  console.log(stack.shift());
  console.log(stack.shift());
  console.log(stack.shift());
});
 */



