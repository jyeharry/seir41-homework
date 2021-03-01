class Node{
    constructor(data, next = null){
        // a Node starts with a given data property
        this.data = data;
        // a Node also has a .next property initialized as null
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        // a Linked List starts with a "head" property intialized as null
        this.head = null;
    }
    appendNode(data){
        // creates a new node with the given data and adds it to back of the list
        if (this.head === null) {
          this.head = new Node(data, this.head);
        } else {
          this.endNode().next = new Node(data);
        }
    }
    prependNode(data){
        // creates a new node with the given data and adds it to the front of the list
          const node = new Node(data);
          node.next = this.head;
          this.head = node;
    }
    pop(){
        // removes the last node from the list and returns it
        let walker = this.head;
        if (!walker.next) {
          this.head = null;
          return walker;
        }
        while (walker) {
          if (walker.next === this.endNode()) {
            const end = this.endNode();
            walker.next = null;
            return end;
          }
          walker = walker.next;
        }
    }
    removeFromFront(){
        // remove the head node from the list and return it
        // the next node in the list is the new head node
        const frontNode = this.head;
        this.head = this.head.next;
        return frontNode;
    }
    insertAt(X, data){
        // insert a new node into the list with the given data
        // place it after X nodes in the list
        // if X exceeds the bounds of the list, put the node at the end
        // insertAt(0, 7) would add the new node as the head
        if (X === 0) return this.prependNode(data);
        const node = new Node(data);
        let counter = 1;
        let walker = this.head;
        while (walker) {
          if (X === counter) {
            node.next = walker.next;
            walker.next = node;
            return;
          }
          walker = walker.next;
          counter++;
        }
        return walker.next = node;
    }
    removeAt(X){
        // remove the Xth node from the list, considering 0 to be the first node
        // return the node that has been removed
        let counter = 0;
        let walker = this.head;
        while (walker.next) {
          if (X === counter) {
            const removed = new Node(walker.data);
            removed.next = walker.next;
            walker.data = walker.next.data;
            walker.next = walker.next.next;
            return removed;
          }
          walker = walker.next;
          counter++;
        }
    }
    search(data){
        // searches the list for a node with the given data
        // if it is found, return the "index" of the node, considering 0 to be the first node
        // if not, return false
        let counter = 0;
        let walker = this.head;
        while (walker) {
          if (walker.data === data) return counter;
          counter++;
          walker = walker.next;
        };
        return false;
    }
    sort(){
        // sort the Linked List in ascending order of data values
    }

    endNode() {
      let walker = this.head;
      while (walker.next) {
        walker = walker.next;
      }
      return walker;
    }
}

module.exports = {
    Node,
    LinkedList
}
