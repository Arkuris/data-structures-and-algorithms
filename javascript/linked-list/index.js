'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.head) {
      newNode.next = this.head;
    }
    this.head = newNode;
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  to_string() {
    let stringRepresentation = '';
    let current = this.head;
    while (current) {
      stringRepresentation += `{ ${current.value} } -> `;
      current = current.next;
    }
    stringRepresentation += 'NULL';
    return stringRepresentation;
  }

  kthFromEnd(k) {
    if (!this.head || k < 0) return null;

    let leadPointer = this.head;
    let trailPointer = this.head;

    for (let i = 0; i < k; i++) {
      if (leadPointer.next) {
        leadPointer = leadPointer.next;
      } else {
        return null;
      }
    }

    while (leadPointer.next) {
      leadPointer = leadPointer.next;
      trailPointer = trailPointer.next;
    }

    return trailPointer.value;
  }

  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  insertBefore(value, newValue) {
    let newNode = new Node(newValue);
    if (!this.head) return;

    if (this.head.value === value) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  insertAfter(value, newValue) {
    let newNode = new Node(newValue);
    let current = this.head;
    while (current && current.value !== value) {
      current = current.next;
    }

    if (current) {
      newNode.next = current.next;
      current.next = newNode;
    }
  }
  zipLists(list2) {
    if (!this.head) return list2;
    if (!list2.head) return this;

    let current1 = this.head;
    let current2 = list2.head;
    let previous1 = null;

    while (current1 && current2) {
      let temp1 = current1.next;
      let temp2 = current2.next;

      current1.next = current2;
      current2.next = temp1;

      previous1 = current1;
      current1 = temp1;
      current2 = temp2;
    }

    if (previous1 && current2) {
      previous1.next.next = current2;
    }

    return this;
  }
}

let survivalRope = new LinkedList();

let golfclub = new Node('Golf Club');

survivalRope.head = golfclub;

let golfball = new Node('Golf Ball');

survivalRope.head.next = golfball;

let golftee = new Node('Golf Tee');
let sunglasses = new Node('Sunglasses');

golfball.next = golftee;
golftee.next = sunglasses;

function traversal (list) {

  let current = list.head;

  while (current) {
    console.log('CURRENT NODE VALUE:', current.value);
    current = current.next;
  }
}

survivalRope.append('paddle');

traversal(survivalRope);

module.exports = LinkedList;
