const Graph = require('../index.js');

describe('Graph breadthFirst', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
    // Add vertices
    for (let i = 1; i <= 6; i++) {
      graph.addVertex(i);
    }
    // Add edges
    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 4);
    graph.addEdge(2, 5);
    graph.addEdge(3, 6);
  });

  test('should return the nodes in the order they were visited', () => {
    expect(graph.breadthFirst(1)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should handle graphs with one node', () => {
    const smallGraph = new Graph();
    smallGraph.addVertex(1);
    expect(smallGraph.breadthFirst(1)).toEqual([1]);
  });

  test('should return an empty array for a node that does not exist', () => {
    expect(graph.breadthFirst(7)).toEqual([]);
  });
});
