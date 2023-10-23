const insertionSort = require('../index.js');

describe('insertionSort', () => {
  test('sorts an unsorted array', () => {
    const input = [8, 4, 23, 42, 16, 15];
    const result = insertionSort(input);
    expect(result).toEqual([4, 8, 15, 16, 23, 42]);
  });

  test('sorts a reverse-sorted array', () => {
    const input = [20, 18, 12, 8, 5, -2];
    const result = insertionSort(input);
    expect(result).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  test('sorts an array with few unique values', () => {
    const input = [5, 12, 7, 5, 5, 7];
    const result = insertionSort(input);
    expect(result).toEqual([5, 5, 5, 7, 7, 12]);
  });

  test('sorts a nearly-sorted array', () => {
    const input = [2, 3, 5, 7, 13, 11];
    const result = insertionSort(input);
    expect(result).toEqual([2, 3, 5, 7, 11, 13]);
  });
});
