// importing the file
const sum = require("./sum");

// 1) Matchers
// 1.1) Basics
// expect and toBe to test that
// two values were exactly identical
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// 1.2) Matching primitive types
// Matchers are e.g. toBe (which uses Object.is behind the curtains)
test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

// 1.3) Matching reference types
test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2; // Shorthand for adding a field to an object
  expect(data).toEqual({ one: 1, two: 2 });
});

// 1.4) Test for opposite of a matcher
test("adding positive numbers is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
}); // Tests if a+b is never 0 during the loop

// 2) Truthiness
// Handling undefined, null, and false separately
// or all together using toBeNull(), ...

test("truthiness of null", () => {
  const n = null;
  expect(n).toBeNull(), expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
}); // OUTPUT: tests that n is null, defined, not undefined, not true, and false

test("truthiness of zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// 3) Numbers
// Using toBeGreaterThan(), toBe()...
test("handling numbers of two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// Fort floating numbers
// Using toBeCloseTo()
test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});

// 4) Strings
// Using toMatch()
test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});

// 5) Arrays and iterables
// Using toContain()
const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});