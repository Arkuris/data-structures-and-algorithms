'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.top) {
      newNode.next = this.top;
    }
    this.top = newNode;
  }

  pop() {
    if (!this.top) {
      throw new Error('Stack is empty!');
    }
    const valueToReturn = this.top.value;
    this.top = this.top.next;
    return valueToReturn;
  }

  peek() {
    if (!this.top) {
      throw new Error('Stack is empty!');
    }
    return this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.front) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue() {
    if (!this.front) {
      throw new Error('Queue is empty!');
    }
    const valueToReturn = this.front.value;
    this.front = this.front.next;
    if (!this.front) {
      this.rear = null;
    }
    return valueToReturn;
  }

  peek() {
    if (!this.front) {
      throw new Error('Queue is empty!');
    }
    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = { Stack, Queue, Node };
