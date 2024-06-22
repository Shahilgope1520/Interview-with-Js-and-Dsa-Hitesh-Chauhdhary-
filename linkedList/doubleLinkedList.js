class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}
DoubleLinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data, this.head, null);
  if (this.head) {
    this.head.prev = newNode;
  }
  this.head = newNode;
  if (!this.tail) {
    this.tail = newNode;
  }
};
DoubleLinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data, null, this.tail);
  if (this.head) {
    this.tail.next = newNode;
  }
  this.tail = newNode;
  if (!this.head) {
    this.head = newNode;
  }
  // below code for understanding pointer
  // let obj = {
  //     prev:null,
  //     data:2,
  //     next:null
  // }
  // const a = {
  //   data:1,
  //   next:obj
  // }
  // obj.prev = 2
  // obj = a
  // console.log('obj', obj)

  // const c = {
  //   a:1
  // }
  // const d =c;
  // c=
  // console.log(c,d)
};

//my code for insertAt given Node
// DoubleLinkedList.prototype.insertAtGivenNode = function(data,prevNode,nextNode){
//   if(!prevNode || !nextNode ){
//     console.log("Please provide both Nodes")
//     return;
//   }
//   const newNode = new Node(data,prevNode.next,nextNode.prev);
//   prevNode.next = newNode;
//   nextNode.prev = newNode

//   if(!this.head){

//   }

// }

//insert after
DoubleLinkedList.prototype.insertAfter = function (data, prevNode) {
  const newNode = new Node(data, prevNode, prevNode.next);
  if (prevNode.next) {
    prevNode.next.prev = newNode;
    prevNode.next = newNode;
  }
  if (!prevNode.next) {
    newNode.next = null;
    prevNode.next = newNode;
  }
};

//Delete first Node

DoubleLinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    console.log("No data Available to delete");
    return;
  }
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
    this.head.prev = null;
  }
};

//Delete last Node
DoubleLinkedList.prototype.deleteLastNode = function () {
  if(!this.tail){
    console.log("No data Available to delete");
    return;
  }
  if(this.tail === this.head){
    this.head = null;
    this.tail = null;
  }
  else{
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
}

//Reverse a double-linked list
DoubleLinkedList.prototype.reverse = function () {
  if(!this.head){
    console.log("No data Available to reverse");
    return;
  }
  // this.head.prev = this.tail;
  // this.tail.next = this.head;
  // this.tail.prev = null;
  // this.head = this.tail;
  let current = this.head;
  let temp = null
  while(current){
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;
    current = current.prev
  }
  if(temp){
    this.tail = this.head;
    this.head =temp.prev
  }



}

const mydoubleLinkedList = new DoubleLinkedList();
mydoubleLinkedList.insertAtBeginning(10);
mydoubleLinkedList.insertAtEnd(15);
mydoubleLinkedList.insertAtEnd(20);
// mydoubleLinkedList.insertAtGivenNode(12,mydoubleLinkedList?.head,mydoubleLinkedList?.head?.next);
// mydoubleLinkedList.insertAfter(12,mydoubleLinkedList?.head);
console.log("mydoubleLinkedList", mydoubleLinkedList);
// mydoubleLinkedList.deleteFirstNode();
// mydoubleLinkedList.deleteLastNode();
mydoubleLinkedList.reverse();
console.log("mydoubleLinkedList", mydoubleLinkedList);
