// test whether a particular function
// throws an error when it's called
// use toThrow

// For testing purposes
// this function always throws an error
// to test error handling using test() below
function compileAndroidCode() {
  throw new Error("you are using the wrong JDK");
}

test("compiling android goes as expected", () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
/* OUTPUT: the outcome of the function
 * which is here "you are using the wrong JDK"
 * gets compared to the text provided (Error, ...)