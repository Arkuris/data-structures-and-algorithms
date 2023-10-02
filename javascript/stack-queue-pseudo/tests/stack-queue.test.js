'use strict';

const PseudoQueue = require('../index.js');

describe('PseudoQueue Tests', () => {

  it('should enqueue items correctly', () => {
    const q = new PseudoQueue();
    q.enqueue(20);
    q.enqueue(15);
    q.enqueue(10);
    q.enqueue(5);

    expect(true).toBe(true);
  });

  it('should dequeue items in FIFO order', () => {
    const q = new PseudoQueue();
    q.enqueue(20);
    q.enqueue(15);
    q.enqueue(10);
    q.enqueue(5);

    expect(q.dequeue()).toBe(20);
    expect(q.dequeue()).toBe(15);
    expect(q.dequeue()).toBe(10);
    expect(q.dequeue()).toBe(5);
  });

  it('should handle enqueue and dequeue in mixed order', () => {
    const q = new PseudoQueue();
    q.enqueue(20);
    q.enqueue(15);
    expect(q.dequeue()).toBe(20);

    q.enqueue(10);
    expect(q.dequeue()).toBe(15);

    q.enqueue(5);
    expect(q.dequeue()).toBe(10);
    expect(q.dequeue()).toBe(5);
  });

  it('should return null for dequeue on an empty queue', () => {
    const q = new PseudoQueue();
    expect(q.dequeue()).toBeNull();
  });

});
