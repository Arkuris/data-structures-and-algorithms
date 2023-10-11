'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class KaryTree {
  constructor(root = null) {
    this.root = root;
  }
}

function fizzBuzzTree(tree) {
  if (!tree.root) {
    return new KaryTree;
  }

  let newTree = new KaryTree(new Node(transformValue(tree.root.value)));

  function transformValue(value) {
    if (value % 15 === 0) {
      return "FizzBuzz";
    } else if (value % 3 === 0) {
      return "Fizz";
    } else if (value % 5 === 0) {
      return "Buzz";
    } else {
      return value.toString();
    }
  }

  function copyAndTransform(nodeSrc, nodeDest) {
    for (let child of nodeSrc.children) {
      let newChild = new Node(transformValue(child.value));
      nodeDest.children.push(newChild);
      copyAndTransform(child, newChild);
    }
  }

  copyAndTransform(tree.root, newTree.root);

  return newTree;
}

module.exports = { Node, KaryTree, fizzBuzzTree };
