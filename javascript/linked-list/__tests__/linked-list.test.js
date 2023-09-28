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
  it('Can successfully zip two linked lists', () => {
    let list1 = new LinkedList();
    list1.append('a1');
    list1.append('a2');
    list1.append('a3');

    let list2 = new LinkedList();
    list2.append('b1');
    list2.append('b2');
    list2.append('b3');

    list1.zipLists(list2);

    expect(list1.to_string()).toBe('{ a1 } -> { b1 } -> { a2 } -> { b2 } -> { a3 } -> { b3 } -> NULL');
  });

  it('Can handle zipping when one list is shorter than the other', () => {
    let list1 = new LinkedList();
    list1.append('a1');
    list1.append('a2');

    let list2 = new LinkedList();
    list2.append('b1');
    list2.append('b2');
    list2.append('b3');
    list2.append('b4');

    list1.zipLists(list2);

    expect(list1.to_string()).toBe('{ a1 } -> { b1 } -> { a2 } -> { b2 } -> { b3 } -> { b4 } -> NULL');
  });
});
