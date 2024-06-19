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

//delete by key
LinkedList.prototype.deleteByKey = function (key) {
  if (!this.head) {
    return;
  }
  if (this.head.data === key) {
    this.head = this.head.next;
    return;
  }
  let current = this.head;
  // Below line I tried myself
  // while(current.next && current.next.data !== key ){
  // current =current.next;
  // }
  // if(!current.next){
  //   console.log("No similar keys available")
  //   return;
  // }
  // currentNode.next =currentNode.next.next

  while (!current.next) {
    if (current.next.data === key) {
      current.next = current.next.next;
      return;
    }
    current = current.next;
  }
  console.log("No node with Key found :", key);

  // Don't directly transver this. head it will lost the original reference
  // while (this.head.next) {
  //   if (this.head.next.data === key) {
  //     this.head.next = this.head.next.next;
  //     return;
  //   }
  //   this.head = this.head.next;
  // console.log("No node with key found:", key);
  // }
};

//search operation by key
LinkedList.prototype.searchByKey = function (key) {
  let current = this.head;
  while (current) {
    if (current.data === key) {
      return true;
    }
    current = current.next;
  }
  return false;
};

//Transverse

LinkedList.prototype.printFunction = function () {
  let current = this.head;
  let listValues = [];
  while (current) {
    listValues.push(current.data);
    current = current.next;
  }
  // Never return console in print function
  return listValues?.length > 0 ? listValues.join("->") : "Data is empty";
};

// Little tricky
//Reverse a linkedList

LinkedList.prototype.reverse = function(){
  let current = this.head;
  let next = null;
  let prev = null;
  while(current){
    console.log('current', current)
    
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  this.head = prev
}
const myLinkList = new LinkedList();
myLinkList.deleteFirstNode();
myLinkList.insertAtEnd(10);
myLinkList.insertAtEnd(20);
myLinkList.insertAtEnd(30);
myLinkList.insertAtEnd(40);
myLinkList.insertInBetween(25, myLinkList?.head?.next);
myLinkList.deleteLastNode();
myLinkList.deleteByKey(25);
console.log("myLinkList", myLinkList);
console.log('printFunction', myLinkList.printFunction())
myLinkList.reverse();
console.log('reverse', myLinkList)
console.log('printFunction', myLinkList.printFunction())
