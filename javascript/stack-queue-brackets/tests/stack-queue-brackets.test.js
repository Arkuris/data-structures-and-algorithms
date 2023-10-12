const validateBrackets = require('../index.js');

test('{} should be true', () => {
  expect(validateBrackets("{}")).toBe(true);
});

test('{}(){} should be true', () => {
  expect(validateBrackets("{}(){}")).toBe(true);
});

test('()[[Extra Characters]] should be true', () => {
  expect(validateBrackets("()[[Extra Characters]]")).toBe(true);
});

test('(){}[[]] should be true', () => {
  expect(validateBrackets("(){}[[]]")).toBe(true);
});

test('{}{Code}[Fellows](()) should be true', () => {
  expect(validateBrackets("{}{Code}[Fellows](())")).toBe(true);
});

test('[({}] should be false', () => {
  expect(validateBrackets("[({}]")).toBe(false);
});

test('(]( should be false', () => {
  expect(validateBrackets("(](")).toBe(false);
});

test('{(}) should be false', () => {
  expect(validateBrackets("{(})")).toBe(false);
});
