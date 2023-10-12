class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }

  preOrder(node = this.root, values = []) {
    if (node) {
      values.push(node.value);
      this.preOrder(node.left, values);
      this.preOrder(node.right, values);
    }
    return values;
  }

  inOrder(node = this.root, values = []) {
    if (node) {
      this.inOrder(node.left, values);
      values.push(node.value);
      this.inOrder(node.right, values);
    }
    return values;
  }

  postOrder(node = this.root, values = []) {
    if (node) {
      this.postOrder(node.left, values);
      this.postOrder(node.right, values);
      values.push(node.value);
    }
    return values;
  }
}

class BinarySearchTree extends BinaryTree {
  add(value) {
    this.root = this._addRecursively(this.root, value);
  }

  _addRecursively(node, value) {
    if (node === null) {
      return new Node(value);
    }
    if (value < node.value) {
      node.left = this._addRecursively(node.left, value);
    } else if (value > node.value) {
      node.right = this._addRecursively(node.right, value);
    } 
    return node;
  }

  contains(value) {
    return this._containsRecursively(this.root, value);
  }

  _containsRecursively(node, value) {
    if (node === null) {
      return false;
    }
    if (value === node.value) {
      return true;
    } else if (value < node.value) {
      return this._containsRecursively(node.left, value);
    } else {
      return this._containsRecursively(node.right, value);
    }
  }
}

module.exports = { Node, BinaryTree, BinarySearchTree };
