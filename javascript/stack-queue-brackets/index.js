'use strict';

function validateBrackets(str) {
  let stack = [];
  let map = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let char of str) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      if (stack[stack.length - 1] === map[char]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}

module.exports = validateBrackets ;
