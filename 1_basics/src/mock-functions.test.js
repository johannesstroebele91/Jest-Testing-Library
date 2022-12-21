// https://jestjs.io/docs/mock-functions
// Mock functions allow you to test the links between code

// 1) Usage
// forEach invokes a callback for each item in a supplied array
function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

const mockCallback = jest.fn((x) => 42 + x);
forEach([0, 1], mockCallback);

// The mock function is called twice
expect(mockCallback.mock.calls.length).toBe(2);

// The first argument of the first call to the function was 0
expect(mockCallback.mock.calls[0][0]).toBe(0);

// The first argument of the second call to the function was 1
expect(mockCallback.mock.calls[1][0]).toBe(2);

// The return value of the first call to the function was 42
expect(mockCallback.mock.results[0].value).toBe(42);

// 2) .mock property
const someMockFunction = jest.fn();

const a = new someMockFunction();
const b = {};
const bound = someMockFunction.bind(b);
bound();

console.log(someMockFunction.mock.instances);
// > [ <a>, <b> ]

// The function was called exactly once
expect(someMockFunction.mock.calls.length).toBe(2);

// The first arg of the first call to the function was 'first arg'
expect(someMockFunction.mock.calls[0][0]).toBe("first arg");

// The second arg of the first call to the function was 'second arg'
expect(someMockFunction.mock.calls[0][1]).toBe("second arg");

// The return value of the first call to the function was 'return value'
expect(someMockFunction.mock.results[0].value).toBe("return value");

// This function was instantiated exactly twice
expect(someMockFunction.mock.instances.length).toBe(2);

// The object returned by the first instantiation of this function
// had a `name` property whose value was set to 'test'
expect(someMockFunction.mock.instances[0].name).toEqual("test");
