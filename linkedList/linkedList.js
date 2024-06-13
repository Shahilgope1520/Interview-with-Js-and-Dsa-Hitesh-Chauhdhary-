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

LinkedList.prototype.insertInBetween = function (data, prevNode) {
  console.log('prevNode', prevNode)
  if (!prevNode) {
    console.log("prevNode can't be null");
    return;
  }
  const newNode = new Node(data, prevNode.next);
  console.log('newNode', newNode)
  prevNode.next = newNode;
};
const myLinkList = new LinkedList();
myLinkList.insertAtEnd(10);
myLinkList.insertAtEnd(20);
myLinkList.insertAtEnd(30);
myLinkList.insertAtEnd(40);
myLinkList.insertInBetween(25,
  myLinkList?.head?.next 
);
console.log("myLinkList", myLinkList);
