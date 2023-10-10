const { BinaryTree, TreeNode } = require('../index');

test('Find maximum value in an empty tree', () => {
  const tree = new BinaryTree();
  expect(tree.findMaximumValue()).toBe(-Infinity);
});

test('Find maximum value in a tree with one node', () => {
  const root = new TreeNode(42);
  const tree = new BinaryTree(root);
  expect(tree.findMaximumValue()).toBe(42);
});

test('Find maximum value in a tree where max is in the left subtree', () => {
  const root = new TreeNode(10, new TreeNode(50), new TreeNode(15));
  const tree = new BinaryTree(root);
  expect(tree.findMaximumValue()).toBe(50);
});

test('Find maximum value in a tree where max is in the right subtree', () => {
  const root = new TreeNode(10, new TreeNode(20), new TreeNode(55));
  const tree = new BinaryTree(root);
  expect(tree.findMaximumValue()).toBe(55);
});

test('Find maximum value in a complex tree', () => {
  const root = new TreeNode(10, 
    new TreeNode(20, new TreeNode(5), new TreeNode(25)),
    new TreeNode(15, null, new TreeNode(30))
  );
  const tree = new BinaryTree(root);
  expect(tree.findMaximumValue()).toBe(30);
});
