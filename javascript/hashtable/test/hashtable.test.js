const Hashtable = require('../index.js');

describe("Hashtable", () => {
  let hashtable;

  beforeEach(() => {
    hashtable = new Hashtable();
  });

  test("set and get method", () => {
    hashtable.set("name", "John");
    expect(hashtable.get("name")).toBe("John");
  });

  test("set method overwriting value", () => {
    hashtable.set("name", "John");
    hashtable.set("name", "Doe");
    expect(hashtable.get("name")).toBe("Doe");
  });

  test("has method", () => {
    hashtable.set("name", "John");
    expect(hashtable.has("name")).toBe(true);
    expect(hashtable.has("age")).toBe(false);
  });

  test("keys method", () => {
    hashtable.set("name", "John");
    hashtable.set("age", 25);
    expect(hashtable.keys()).toEqual(expect.arrayContaining(["name", "age"]));
  });

  test("hash method", () => {
    expect(typeof hashtable.hash("test")).toBe("number");
  });
});
