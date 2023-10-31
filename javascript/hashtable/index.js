class Hashtable {
  constructor(size = 50) {
    this.size = size;
    this.buckets = new Array(size).fill(null).map(() => []);
  }

  hash(key) {
    let hashValue = 0;
    for (let char of key) {
      hashValue += char.charCodeAt(0);
    }
    return hashValue % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    let keyExists = false;

    for (let item of bucket) {
      if (item[0] === key) {
        item[1] = value;
        keyExists = true;
        break;
      }
    }

    if (!keyExists) {
      bucket.push([key, value]);
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let item of bucket) {
      if (item[0] === key) {
        return item[1];
      }
    }

    return undefined;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let item of bucket) {
      if (item[0] === key) {
        return true;
      }
    }

    return false;
  }

  keys() {
    const allKeys = [];
    for (let bucket of this.buckets) {
      for (let item of bucket) {
        allKeys.push(item[0]);
      }
    }
    return allKeys;
  }
}

module.exports = Hashtable;
