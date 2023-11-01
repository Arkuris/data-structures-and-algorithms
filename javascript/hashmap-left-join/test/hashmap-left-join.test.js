
const leftJoin = require('../index.js');
test('leftJoin functionality', () => {
  const hashmap1 = new Map();
  hashmap1.set('fond', 'enamored');
  hashmap1.set('wrath', 'anger');

  const hashmap2 = new Map();
  hashmap2.set('fond', 'averse');
  hashmap2.set('diligent', 'idle');

  const expected = [
    ['fond', 'enamored', 'averse'],
    ['wrath', 'anger', null]
  ];

  expect(leftJoin(hashmap1, hashmap2)).toEqual(expected);
});

test('empty hashmap', () => {
  const hashmap1 = new Map();
  const hashmap2 = new Map();

  expect(leftJoin(hashmap1, hashmap2)).toEqual([]);
});
