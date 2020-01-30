const _doubleNode = require('./doubleNode');

class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }

  insertFirst(item) {
    this.head = new _doubleNode(item, this.head, null);
  }
  
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      let prevNode;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      prevNode = tempNode;
      tempNode.next = new _doubleNode(item, null, prevNode);
      this.tail = tempNode.next;
    }
  }

  insertBefore(item, node) {
    //if list is empy
    if (this.head === null) {
      this.insertFirst(item);
    }

    if (node === this.head.value) {
      return this.head = new _doubleNode(item, this.head, null);
    }

    let tempNode = this.head;
    let before, after;

    while(tempNode.value !== node) {
      tempNode = tempNode.next;
    }
    before = tempNode.prev;
    after = tempNode;
    before.next = new _doubleNode(item, tempNode, before);
    after.prev = before.next;
    console.log(`Adding ${item} before ${tempNode.value} but after ${before.value}`);
  }

  insertAfter(item, node) {
    //if list is empy
    if (this.head === null) {
      this.insertFirst(item);
    }  
    //the value currently after the node where insertion is to occur
    let after;
    let before;
    //start at the head
    let tempNode = this.head;

    while(tempNode.value !== node) {
      tempNode = tempNode.next;
    }
    before = tempNode;
    //edge case - trying to add something after the tail:
    if(this.tail === before) {
      this.insertLast(item);
    } else {
      after = tempNode.next;
      before.next = new _doubleNode(item, before.next, before);
      after.prev = before.next;
      console.log(`Adding new node ${item} after ${before.value} and ${after.value}`);
    }
  }

  insertAt(item, position) {
    if (position === 1) {
      this.head = item;
    }
    //start at the head
    let tempNode = this.head;
    let after;
    for (let i = 1; i < position - 1; i++) {
      tempNode = tempNode.next;
    }
    after = tempNode.next;
    tempNode.next = new _doubleNode(item, after, tempNode);
    after.prev = tempNode.next;
    console.log(`Adding ${item} after ${tempNode.value} before ${after.value}.`);
  }

  remove(item) {
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //if the node to be removed is head,
    //make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    if(this.tail.value === item) {
      this.tail = this.tail.prev;
    }
    //start at the head
    let currNode = this.head;
    //keep track of the previous node
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      //update the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    //remove current node from next nodes .prev
    currNode.next.prev = previousNode;
    //set previous node's next to next node
    previousNode.next = currNode.next;
    //the combination of the two effectively eliminates the pointers to the 
    //currentNode, so it is removed from both paths of the linked list.
  }

  find(item) {
    let currNode = this.head;

    if (!this.head) {
      return null;
    }

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

}

module.exports = DoublyLinkedList;

