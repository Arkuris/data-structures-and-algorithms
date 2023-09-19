# Challenge Title
<!-- Description of the challenge -->
Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

## Whiteboard Process
<!-- Embedded whiteboard image -->
![whiteboard](../assets/whiteboard%20CodeChallange%2001.jpg)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Talked with classmates, ChatGPT, old code, chatGPT, google. 

## Solution
<!-- Show how to run your code, and examples of it in action -->

function reverseArray(arr) {
    let reversedArr = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}
#### Testing
let input = [1, 2, 3, 4, 5, 6];
let output = reverseArray(input);
console.log(output); 