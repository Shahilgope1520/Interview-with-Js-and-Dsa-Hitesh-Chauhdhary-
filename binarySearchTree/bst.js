class BSTNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // Above code is just a binary tree design not function implementation;

  insert(key) {
    const newNode = new BSTNode(key);
    if (!this.root) {
      this.root = newNode;
    }
    else{
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    // node -> rootNode or subNode
    if (node.key > newNode.key) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if (node.key < newNode.key) {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    } 
    else if (node.key === newNode.key) {
      console.log(`No duplication Allowed ${node.key} ${newNode.key}`);
    }
  }
}

const myBST = new BinarySearchTree()
myBST.insert(25)
myBST.insert(26)
myBST.insert(17)
myBST.insert(18)
myBST.insert(16)
myBST.insert(26)
console.log('myBST', myBST)
