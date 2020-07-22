let testArr = [3, 5, 1, 9, 10, 4, 2];
let testArr2 = [9, 2, 6, 3, 1, 8, 5];

describe("Bubble Sort", function () {
  beforeAll(() => {
    spyOn(someObj, "swap").and.callThrough();
  });
  it('has methods "bubbleSort","swap"', () => {
    expect(typeof someObj.bubbleSort).toBe("function");
    expect(typeof someObj.swap).toBe("function");
  });
  it("handles an empty array", function () {
    expect(someObj.bubbleSort([])).toEqual([]);
  });
  it("sorts the array in the correct order", function () {
    expect(someObj.bubbleSort(testArr)).toEqual([1, 2, 3, 4, 5, 9, 10]);
  });
  it("count the calls of swap", function () {
    someObj.bubbleSort(testArr);
    expect(someObj.swap.calls.count()).toEqual(10);
  });
});
