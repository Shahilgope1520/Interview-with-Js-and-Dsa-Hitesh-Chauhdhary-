class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
}

// Insert at beginning
LinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data);
  LinkedList.head = newNode;
};

// insert at end
LinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);
  if (!this.head) {
    this.head = newNode;
    return;
  }
  let last = this.head;

  while (last.next) {
    last = last.next;
  }
  last.next = newNode;
};

// insert at any position
LinkedList.prototype.insertInBetween = function (data, prevNode) {
  console.log("prevNode", prevNode);
  if (!prevNode) {
    console.log("prevNode can't be null");
    return;
  }
  const newNode = new Node(data, prevNode.next);
  console.log("newNode", newNode);
  prevNode.next = newNode;
};

//delete first node
LinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    console.log("Nothing to delete");
    return;
  }
  this.head = this.head.next;
};

//delete last node
LinkedList.prototype.deleteLastNode = function () {
  if (!this.head) {
    return;
  }
  if (!this.head.next) {
    this.head = null;
  }
  let secondLast = this.head;
  while (secondLast.next.next) {
    secondLast = secondLast.next;
  }
  secondLast.next = null;
};

const myLinkList = new LinkedList();
myLinkList.deleteFirstNode();
myLinkList.insertAtEnd(10);
myLinkList.insertAtEnd(20);
myLinkList.insertAtEnd(30);
myLinkList.insertAtEnd(40);
myLinkList.insertInBetween(25, myLinkList?.head?.next);
myLinkList.deleteFirstNode();
myLinkList.deleteLastNode();
console.log("myLinkList", myLinkList);
