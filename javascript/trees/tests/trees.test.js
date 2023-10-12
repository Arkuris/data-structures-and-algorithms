const { Node, BinaryTree, BinarySearchTree } = require('../index.js');

describe('BinarySearchTree', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree(5);
    bst.add(3);
    bst.add(7);
    bst.add(2);
    bst.add(4);
    bst.add(6);
    bst.add(8);
  });

  test('preOrder should return an array with values in pre-order', () => {
    expect(bst.preOrder()).toEqual([5, 3, 2, 4, 7, 6, 8]);
  });

  test('inOrder should return an array with values in in-order', () => {
    expect(bst.inOrder()).toEqual([2, 3, 4, 5, 6, 7, 8]);
  });

  test('postOrder should return an array with values in post-order', () => {
    expect(bst.postOrder()).toEqual([2, 4, 3, 6, 8, 7, 5]);
  });

  test('contains should return true for values present in the tree', () => {
    expect(bst.contains(4)).toBe(true);
  });

  test('contains should return false for values not present in the tree', () => {
    expect(bst.contains(9)).toBe(false);
  });
});
