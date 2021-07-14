# Jest-Testing-Library

Ref: https://jestjs.io/docs/getting-started

Jest enables to run tests

- for the frontend
- and backend

# Commands:

- test all test files: `npm run test`
- test a single file: `npm run test -- exceptions.test.js`
- test a single test:

  - same cmd as for "test a single file"
  - BUT temporarily change `test` to `test.only` in the code
  - Example:

    ```javascript
    test.only("this will be the only test that runs", () => {
      expect(true).toBe(false);
    });

    test("this test will not run", () => {
      expect("A").toBe("A");
    });
    ```
