function businessTrip(graph, cities) {
  let cost = 0;

  for (let i = 0; i < cities.length - 1; i++) {
    let route = graph[cities[i]].find(edge => edge.node === cities[i + 1]);
    if (!route) {
      return null; // Direct flight not found
    }
    cost += route.cost;
  }

  return cost;
}

module.exports = businessTrip;

