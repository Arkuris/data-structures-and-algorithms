class Graph {
  constructor() {
    this.adjacencyList = new Map(); // to hold the graph
  }

  // add node
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []); // initialize the adjacency list with an array
    }
  }

  // add edge, undirected
  addEdge(src, dest) {
    if (!this.adjacencyList.has(src)) {
      this.addVertex(src);
    }
    if (!this.adjacencyList.has(dest)) {
      this.addVertex(dest);
    }
    this.adjacencyList.get(src).push(dest);
    this.adjacencyList.get(dest).push(src);
  }

  // breadth-first search
  breadthFirst(start) {
    // Check if the starting node exists in the graph
    if (!this.adjacencyList.has(start)) {
      return []; // Return an empty array if the node doesn't exist
    }

    const queue = [start];
    const visited = new Set();
    const result = [];

    visited.add(start);

    while (queue.length) {
      const currentNode = queue.shift();
      result.push(currentNode);

      const neighbors = this.adjacencyList.get(currentNode);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return result;
  }
}

module.exports = Graph;

