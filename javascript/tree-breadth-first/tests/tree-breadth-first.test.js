const { TreeNode, breadthFirst } = require('../index.js');

describe('breadthFirst', () => {
  test('returns values in level order for a complete binary tree', () => {
    const tree = new TreeNode(1);
    tree.left = new TreeNode(2);
    tree.right = new TreeNode(3);
    tree.left.left = new TreeNode(4);
    tree.left.right = new TreeNode(5);
    tree.right.left = new TreeNode(6);
    tree.right.right = new TreeNode(7);
    
    expect(breadthFirst(tree)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test('returns an empty array for a null tree', () => {
    expect(breadthFirst(null)).toEqual([]);
  });

  test('returns single value for tree with one node', () => {
    const tree = new TreeNode(1);
    expect(breadthFirst(tree)).toEqual([1]);
  });

});

