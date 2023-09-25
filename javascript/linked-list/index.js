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
    let stringRepresentation = "";
    let current = this.head;
    while (current) {
      stringRepresentation += `{ ${current.value} } -> `;
      current = current.next;
    }
    stringRepresentation += "NULL";
    return stringRepresentation;
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
