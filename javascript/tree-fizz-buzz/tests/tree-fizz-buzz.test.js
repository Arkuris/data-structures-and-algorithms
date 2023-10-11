const { Node, KaryTree, fizzBuzzTree } = require('../index.js');

test('fizzBuzzTree transforms values correctly', () => {
  let root = new Node(15);
  root.children.push(new Node(3));
  root.children.push(new Node(5));
  root.children.push(new Node(2));

  let tree = new KaryTree(root);
  let newTree = fizzBuzzTree(tree);

  expect(newTree.root.value).toBe('FizzBuzz');
  expect(newTree.root.children[0].value).toBe('Fizz');
  expect(newTree.root.children[1].value).toBe('Buzz');
  expect(newTree.root.children[2].value).toBe('2');
});

test('fizzBuzzTree handles empty tree correctly', () => {
  let tree = new KaryTree();
  let newTree = fizzBuzzTree(tree);

  expect(newTree).not.toBeNull();
  expect(newTree.root).toBeNull();
});
