// Linked List
class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head');
  }

  find(item) {
    var currNode = this.head;
    while(currNode.element != item) {
      currNode = currNode.next;
    }
    return currNode
  }

  insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);

    newNode.next = current.next
    current.next = newNode;
  }

  display() {
    var currNode = this.head;
    while (!(currNode.next ==  null)) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }

  findPrevious(item) {
    var currNode = this.head;
    while(currNode.next != null && currNode.next.element != item) {
      currNode = currNode.next
    }
    return currNode;
  }

  remove(item) {
    var prevNode = this.findPrevious(item);
    if (prevNode.next != null ) {
      prevNode.next = prevNode.next.next;
    }
  }
  // CTCI: 2.1 Remove duplicates from an unsorted linked list.
  removeDuplicates() {
    let node = this.head
    let hash = {};
    if(!node.next) return

    while(node = node.next) {
      if(!hash[node.element]){
        hash[node.element] = 0;
      }
      hash[node.element] += 1
      if(hash[node.element] > 1) {
        let previousNode = this.findPrevious(node.element);
        previousNode.next = previousNode.next.next;
      }
    }
    console.dir(hash);
  }

  // CTCI: 2.2 Return Kth to last element of single Link List
  returnKthToLast(n){
    if(!n) { return }
    let mainPtr = this.head;
    let refPtr = this.head;
    let count = 0;

    if(this.head != null){
      while(count < n){
        if(refPtr == null){
          console.log('N is greater than the number of nodes in the list');
          return
        }
        refPtr = refPtr.next;
        count++;
      }

      while(refPtr != null){
        debugger
        mainPtr = mainPtr.next;
        refPtr = refPtr.next;
      }

      console.log(`Kth to last element is ${mainPtr.element}`)
      return mainPtr.element;
    }
  }
}

// TEST 
var cities = new LinkedList();
cities.insert(1, 'head');
cities.insert(2, 1);
cities.insert(8, 2);
cities.insert(3, 8);
cities.insert(7, 3);
cities.insert(0, 7);
cities.insert(4, 0);



cities.display();
console.log('------------Carlisle should only be displayed once-------------');
cities.removeDuplicates();
//cities.display();
cities.returnKthToLast(3);
