const Graph = require('../index.js');

describe('Graph depth-first traversal', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test('returns the correct pre-order traversal for a given graph', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'D');

    expect(graph.depthFirst('A')).toEqual(['A', 'B', 'D', 'C']);
  });

  test('returns the correct pre-order traversal for a graph with a single node', () => {
    graph.addVertex('A');
    expect(graph.depthFirst('A')).toEqual(['A']);
  });

  test('returns the correct pre-order traversal for a disconnected graph', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    expect(graph.depthFirst('A')).toEqual(['A']);
    expect(graph.depthFirst('B')).toEqual(['B']);
  });

});
