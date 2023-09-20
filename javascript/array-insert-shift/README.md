# Challenge Title
<!-- Description of the challenge -->
Write a function called insertShiftArray which takes in an array and a value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Whiteboard Process
<!-- Embedded whiteboard image -->
![whiteboard](./whiteboard%20CodeChallange%2002.jpg)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
old code, chatgpt. I seem to confuse myself when I try and whiteboard whats happening in code. I had Chatgpt give me a walkthrough for every step of the function and I tried to build on the whiteboard from the steps given by chat.

## Solution
<!-- Show how to run your code, and examples of it in action -->
function insertShiftArray(arr, value) {
    // Determine the middle index
    let middleIndex = Math.ceil(arr.length / 2);

    // Create a new array to hold the result
    let result = [];

    // Loop through the original array and insert the value at the middle index
    for (let i = 0; i < arr.length; i++) {
        if (i === middleIndex) {
            result.push(value);
        }
        result.push(arr[i]);
    }

    // Handle the edge case where the original array length is even 
    // and we haven't added the value yet.
    if (arr.length % 2 === 0) {
        result.push(value);
    }

    return result;
}