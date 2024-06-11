class Stack {
  constructor() {
    this.stack = [];
  }
  push(data) {
    this.stack.push(data);
  }
  pop() {
    this.stack.pop();
  }
  peek() {
    this.stack[this.stack.length - 1];
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  size() {
    this.stack.length;
  }
  clear() {
    this.stack = [];
  }
  contains(element) {
    return this.stack.includes(elements);
  }
  reverse() {
    // const reversedArray = [];
    // for (let i = this.stack.length; i >= 0; i--) {
    //   reversedArray.push(this.stack[i]);
    // }
    // this.stack = reversedArray;

    this.stack.reverse()
  }
  printStack(){
    let str =""
    for (let index = 0; index < this.stack.length; index++) {
        str = this.stack[index] + "\n";
    }
    return str
  }
}
const myStack = new Stack()
console.log(myStack)
