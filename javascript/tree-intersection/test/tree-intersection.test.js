const { tree_intersection, Node } = require('../index.js');

describe('tree_intersection', () => {
  it('should find common elements in two binary trees', () => {
    let tree1 = new Node(1);
    tree1.left = new Node(2);
    tree1.right = new Node(3);
    tree1.left.left = new Node(4);

    let tree2 = new Node(5);
    tree2.left = new Node(2);
    tree2.right = new Node(6);
    tree2.left.left = new Node(4);

    expect(tree_intersection(tree1, tree2)).toEqual([2, 4]);
  });

  it('should return an empty array if there are no common elements', () => {
    let tree1 = new Node(1);
    tree1.left = new Node(7);
    tree1.right = new Node(8);

    let tree2 = new Node(5);
    tree2.left = new Node(2);
    tree2.right = new Node(6);

    expect(tree_intersection(tree1, tree2)).toEqual([]);
  });
});
