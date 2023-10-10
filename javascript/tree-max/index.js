class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  findMaximumValue() {
    return this._findMaxRecursively(this.root);
  }

  _findMaxRecursively(node) {
    if (node === null) {
      return -Infinity;
    }

    let maxLeft = this._findMaxRecursively(node.left);
    let maxRight = this._findMaxRecursively(node.right);

    return Math.max(node.value, maxLeft, maxRight);
  }
}

module.exports = { BinaryTree, TreeNode };
