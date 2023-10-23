function insert(sorted, value) {
  let i = 0;
  // Find the position where the value should be inserted
  while (value > sorted[i]) {
    i++;
  }

  // Insert the value and shift the rest of the values
  while (i < sorted.length) {
    let temp = sorted[i];
    sorted[i] = value;
    value = temp;
    i++;
  }

  // Append the remaining value
  sorted.push(value);
}

function insertionSort(input) {
  let sorted = [];
  sorted[0] = input[0];

  for (let i = 1; i < input.length; i++) {
    insert(sorted, input[i]);
  }

  return sorted;
}

// Test the implementation
const testArray = [8, 4, 23, 42, 16, 15];
console.log(insertionSort(testArray)); // Output: [4, 8, 15, 16, 23, 42]

module.exports = insertionSort;
