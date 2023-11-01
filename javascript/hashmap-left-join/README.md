# hashmap-left-join
- Write a function that LEFT JOINs two hashmaps into a single data structure.

- Write a function called left join
- Arguments: two hash maps
- The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
- The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
- Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic

## Whiteboard Process
![uml](./code%20challenge%2031.png)
## Approach & Efficiency
ChatGPT, Google Images

## Solution
function leftJoin(hashmap1, hashmap2) {
    const result = [];

    for (let [key, value1] of hashmap1) {
        let value2 = hashmap2.get(key);
        if (value2 === undefined) {
            value2 = null;
        }
        result.push([key, value1, value2]);
    }

    return result;
}
