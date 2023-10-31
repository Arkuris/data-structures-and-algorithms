# tree_intersection
## Feature Tasks
- Write a function called tree_intersection that takes two binary trees as parameters.
Using your Hashmap implementation as a part of your algorithm, return a set of values found in both trees.


## Whiteboard Process
![Challenge32](./code%20challenge%2032.png)


## Approach & Efficiency
- ChatGPT, Google images for UML examples

## Solution
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class HashMap {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.storage[index]) {
      this.storage[index] = [];
    }
    this.storage[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.storage[index]) {
      for (let pair of this.storage[index]) {
        if (pair[0] === key) {
          return pair[1];
        }
      }
    }
    return null;
  }
}

function tree_intersection(tree1, tree2) {
  let results = [];
  let hashmap = new HashMap(1000);

  function _populateHashmap(node) {
    if (!node) return;
    hashmap.set(node.value.toString(), node.value);
    _populateHashmap(node.left);
    _populateHashmap(node.right);
  }

  function _checkIntersection(node) {
    if (!node) return;
    if (hashmap.get(node.value.toString())) {
      results.push(node.value);
    }
    _checkIntersection(node.left);
    _checkIntersection(node.right);
  }

  _populateHashmap(tree1);
  _checkIntersection(tree2);

  return results;
}
