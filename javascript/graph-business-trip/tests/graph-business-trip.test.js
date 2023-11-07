const businessTrip = require('../index.js');


const graph = {
  'Metroville': [
    { node: 'Pandora', cost: 150 },
    { node: 'Arendelle', cost: 99 },
    // ... other connections
  ],
  'Pandora': [
    { node: 'Metroville', cost: 150 },
    // ... other connections
  ],
  'Arendelle': [
    { node: 'Metroville', cost: 99 },
    { node: 'Monstropolis', cost: 42 },
    // ... other connections
  ],
  'Monstropolis': [
    { node: 'Arendelle', cost: 42 },
  ],
};

test('businessTrip with a direct route', () => {
  const result = businessTrip(graph, ['Metroville', 'Pandora']);
  expect(result).toBe(150);
});

test('businessTrip with one city (no travel)', () => {
  const result = businessTrip(graph, ['Narnia']);
  expect(result).toBe(0);
});

test('businessTrip with a non-existing city', () => {
  const result = businessTrip(graph, ['Arendelle', 'El Dorado']);
  expect(result).toBeNull();
});
