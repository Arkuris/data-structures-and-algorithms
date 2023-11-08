class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(src, dest) {
    if (!this.adjacencyList[src]) {
      this.addVertex(src);
    }
    if (!this.adjacencyList[dest]) {
      this.addVertex(dest);
    }
    this.adjacencyList[src].push(dest);
  }

  depthFirst(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }
}

module.exports = Graph;
