class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function breadthFirst(tree) {
  if (!tree) return [];

  const result = [];
  const queue = [tree];  // Initialize the queue with the root node.

  while (queue.length > 0) {
    const currentNode = queue.shift(); // Dequeue the front node.

    result.push(currentNode.value); // Add the value to the result list.

    if (currentNode.left) queue.push(currentNode.left); // Enqueue left child if exists.
    if (currentNode.right) queue.push(currentNode.right); // Enqueue right child if exists.
  }

  return result;
}

module.exports = { TreeNode, breadthFirst };
