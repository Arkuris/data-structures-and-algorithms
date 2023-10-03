'use strict';

const { Animal, AnimalShelter } = require('../index.js');

describe('Animal class', () => {
  test('should create a cat', () => {
    const cat = new Animal('Whiskers', 'cat');
    expect(cat.name).toBe('Whiskers');
    expect(cat.species).toBe('cat');
  });

  test('should create a dog', () => {
    const dog = new Animal('Buddy', 'dog');
    expect(dog.name).toBe('Buddy');
    expect(dog.species).toBe('dog');
  });

  test('should throw error for invalid species', () => {
    expect(() => new Animal('Tweety', 'bird')).toThrow('Animal must be of species "cat" or "dog"');
  });
});

describe('AnimalShelter class', () => {
  let shelter;

  beforeEach(() => {
    shelter = new AnimalShelter();
  });

  test('should enqueue a cat', () => {
    shelter.enqueue(new Animal('Whiskers', 'cat'));
    expect(shelter.cats[0].name).toBe('Whiskers');
  });

  test('should dequeue a cat', () => {
    shelter.enqueue(new Animal('Whiskers', 'cat'));
    const dequeuedCat = shelter.dequeue('cat');
    expect(dequeuedCat.name).toBe('Whiskers');
  });

  test('should return null for invalid preference', () => {
    expect(shelter.dequeue('bird')).toBeNull();
  });

  test('should handle dequeue from empty list', () => {
    expect(shelter.dequeue('cat')).toBeNull();
    expect(shelter.dequeue('dog')).toBeNull();
  });
});
