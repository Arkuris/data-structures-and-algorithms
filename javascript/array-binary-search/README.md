# Challenge Title
<!-- Description of the challenge -->
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.

## Whiteboard Process
<!-- Embedded whiteboard image -->
![whiteboard](./challange%2003.jpg)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
ChatGPT, stackOverFlow

## Solution
<!-- Show how to run your code, and examples of it in action -->

function BinarySearch(arr, key) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === key) {
            return mid;
        } else if (arr[mid] < key) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; 
}

// Example usage
let arr = [4, 8, 15, 16, 23, 42];
let key = 15;
console.log(BinarySearch(arr, key));






