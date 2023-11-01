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

module.exports = leftJoin;
