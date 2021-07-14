// Ref: https://jestjs.io/docs/asynchronous
// 1) CALLBACKS
test("the data is peanut butter", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});

// 2) Promises
test("the data is peanut butter", () => {
  return fetchData().then((data) => {
    expect(data).toBe("peanut butter");
  });
});

// If you expect a promise to be rejected, use the .catch method
test("the fetch fails with an error"),
  () => {
    expect.assertions(1);
    return fetchData().catch((e) => expect(e).toMatch("error"));
  };

// 3) .resolves / .rejects
test("the data is peanut butter", () => {
  return expect(fetchData()).resolves.toBe("peanut butter");
});

// 4) Async/Await
test("the data is peanut butter", async () => {
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch("error");
  }
});

// You can combine async and await with .resolves or .rejects.
test("the data is peanut butter", async () => {
  await expect(fetchData()).resolves.toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  await expect(fetchData()).rejects.toMatch("error");
});
