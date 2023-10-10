# Breadth-first Traversal.
- Write a function called breadth first
- Arguments: tree
- Return: list of all values in the tree, in the order they were encountered

## Whiteboard Process
<!-- Embedded whiteboard image -->

## Approach & Efficiency
- ChatGPT, example from CC17 assignment on canvas.

## Solution
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

// Example usage:
// const tree = new TreeNode(1);
// tree.left = new TreeNode(2);
// tree.right = new TreeNode(3);
// tree.left.left = new TreeNode(4);
// tree.left.right = new TreeNode(5);
// console.log(breadthFirst(tree)); // [1, 2, 3, 4, 5]