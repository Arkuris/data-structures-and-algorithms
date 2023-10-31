
function repeatedWord(str) {
  let words = str.toLowerCase().split(/\W+/); // Split string into words, converting to lowercase and treating any non-word character as a delimiter
  let seenWords = new Set(); // Use a Set to store seen words

  for (let word of words) {
    if (seenWords.has(word)) {
      return word;
    }
    seenWords.add(word);
  }

  return null; // Return null if no word is repeated
}

module.exports = repeatedWord;
