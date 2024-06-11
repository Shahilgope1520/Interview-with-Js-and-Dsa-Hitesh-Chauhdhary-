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
LinkedList.prototype.insertAtBeginning  =function(data){
    const newNode = new Node(data)
    LinkedList.head = newNode
}

// insert at end
LinkedList.prototype.insertAtEnd  =function(data){
    const newNode = new Node(data)
    if(!this.head){
        this.head = newNode;
        return;
    }
    let last = this.head;

    while(last.next){
        last= last.next
    }
    last.next = newNode
}

LinkedList.prototype.insertInBetween  =function(data,index){
    
    if(!this.head){
        this.head = newNode;
        return;
    }
    let location = this.head;

    for (let i = 0; i <= index; i++) {
        location = location.next
        if(i===index){
            const newNode = new Node(data,location.next);
            location=newNode
            return;
        }
        
    }

    // while(last.next){
    //     last= last.next
    // }
    // last.next = newNode
}
const myLinkList = new LinkedList()
myLinkList.insertAtEnd(10)
myLinkList.insertAtEnd(20)
myLinkList.insertAtEnd(30)
myLinkList.insertInBetween(15)
console.log('myLinkList', myLinkList)