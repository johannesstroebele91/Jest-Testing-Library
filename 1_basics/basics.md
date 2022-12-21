# Jest-Testing-Library

Ref: https://jestjs.io/docs/getting-started

Jest enables to run tests

- for the frontend
- and backend

# Install Jest on Windows

`npm install --save-dev jest-cli`

# Commands:

- test all test files: `npm run test`
- test a single file: Navigate to folder && `npm run test -- .\exceptions.test.js` or `npm test -- .\exceptions.test.js`
- skip a single test: test.skip(),() => {} instead of test(),() => {} && run the test
- test a single test: test.only(),() => {} instead of test(),() => {} && run the test

Example

```javascript
test.only("this will be the only test that runs", () => {
  expect(true).toBe(false);
});

test("this test will not run", () => {
  expect("A").toBe("A");
});
```

# test alias it

test has the alias "it", so e.g. it('did not rain', ...);
Ref: https://jestjs.io/docs/api

```javascript
test("did not rain", () => {
  expect(inchesOfRain()).toBe(0);
});

// Is the same as:

it("did not rain", () => {
  expect(inchesOfRain()).toBe(0);
});
```
