class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }


  insert(val) {
    let newNode = new LinkedListNode(val)
    if (this.head == null) {
      this.head = newNode
    } else {
    let node = this.head;
    while (node.next) {
      node = node.next
      }
    node.next = newNode
    }
  }
  
  remove(val) {
    let node = this.head;
    let previous = null;
    while(node) {
      if (node.data == val) {
        if(previous != null) {
          previous.next = node.next
        } else {
          this.head = null;
        }
        return;
      }
      previous = node
      node = node.next
      }
      console.log(this)
  }

  find(val) {
    let node = this.head;
    while (node) {
      if (node.data == val) return true;
      node = node.next
      }
    return false
  }

  size() {
    let count = 0;
    let node = this.head;
    while(node) {
      count++;
      node = node.next;
    }
    return count;
  }
}

/*let node1 = new LinkedListNode(2);
let node2 = new LinkedListNode(5);
console.log(node1)
node1.next = node2;

let list = new LinkedList(node1)*/
