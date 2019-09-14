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
}

// TEST 
var cities = new LinkedList();
cities.insert('Conway', 'head');
cities.insert('Russellville', 'Conway');
cities.insert('Carlisle', 'Russellville');
cities.insert('Alma', 'Russellville');
cities.insert('Carlisle', 'Russellville');
cities.display();
console.log('------------Carlisle should only be displayed once-------------');
cities.removeDuplicates();
cities.display();
