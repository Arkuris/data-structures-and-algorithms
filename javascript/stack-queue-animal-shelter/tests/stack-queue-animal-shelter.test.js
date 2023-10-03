'use strict';

class Animal {
  constructor(name, species) {
    if (!['cat', 'dog'].includes(species)) {
      throw new Error('Animal must be of species "cat" or "dog"');
    }
    this.name = name;
    this.species = species;
  }
}

class AnimalShelter {
  constructor() {
    this.cats = [];
    this.dogs = [];
  }

  enqueue(animal) {
    if (!(animal instanceof Animal)) {
      throw new Error('Input must be an instance of Animal');
    }

    if (animal.species === 'cat') {
      this.cats.push(animal);
    } else if (animal.species === 'dogs') {
      this.dogs.push(animal);
    } else {
      throw new Error('Animal species must be "cat" or "dog"');
    }
  }

  dequeue(pref) {
    if (pref !== 'cat' && pref !== 'dog') {
      return null;
    }

    if (pref === 'cat') {
      return this.cats.shift() || null;
    } else if (pref === 'dog') {
      return this.dogs.shift() || null;
    }
  }
}

const shelter = new AnimalShelter();
shelter.enqueue(new Animal('Whiskers', 'cat'));
shelter.enqueue(new Animal('Buddy', 'dog'));
shelter.enqueue(new Animal('Shadow', 'dog'));
