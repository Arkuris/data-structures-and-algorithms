'use strict';

const LinkedList = require('../index');

describe('Linked List', () => {

  it('Can successfully add a node to the end of the linked list', () => {
    let list = new LinkedList();
    list.append('first');
    expect(list.to_string()).toBe('{ first } -> NULL');
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    let list = new LinkedList();
    list.append('first');
    list.append('second');
    list.append('third');
    expect(list.to_string()).toBe('{ first } -> { second } -> { third } -> NULL');
  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    let list = new LinkedList();
    list.append('first');
    list.append('third');
    list.insertBefore('third', 'second');
    expect(list.to_string()).toBe('{ first } -> { second } -> { third } -> NULL');
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    let list = new LinkedList();
    list.append('second');
    list.insertBefore('second', 'first');
    expect(list.to_string()).toBe('{ first } -> { second } -> NULL');
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    let list = new LinkedList();
    list.append('first');
    list.append('second');
    list.insertAfter('second', 'third');
    expect(list.to_string()).toBe('{ first } -> { second } -> { third } -> NULL');
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    let list = new LinkedList();
    list.append('first');
    list.insertAfter('first', 'second');
    expect(list.to_string()).toBe('{ first } -> { second } -> NULL');
  });

  it('Can successfully retrieve the kth element from the end of the linked list', () => {
    let list = new LinkedList();
    list.append('first');
    list.append('second');
    list.append('third');
    list.append('fourth');

    expect(list.kthFromEnd(0)).toBe('fourth');
    expect(list.kthFromEnd(1)).toBe('third');
    expect(list.kthFromEnd(2)).toBe('second');
    expect(list.kthFromEnd(3)).toBe('first');
  });

  it('Returns null for out of range k values', () => {
    let list = new LinkedList();
    list.append('first');
    list.append('second');

    expect(list.kthFromEnd(5)).toBeNull(); // k is larger than the length of the list
    expect(list.kthFromEnd(-1)).toBeNull(); // negative k value
  });

});
