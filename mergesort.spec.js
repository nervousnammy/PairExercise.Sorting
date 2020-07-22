let testArray1 = [1,2,8,3,5,0,5,1,9]
let testArray2 = [1,2,8,3,5,0,5,1,9]
let splitArray1 = [1,2,10]
let splitArray2 = [1,9]

describe('Split Array function', function() {
  xit('is able to split an array into two halves', function() {
    const splitArray = split(testArray1)
    expect(splitArray.length).toEqual(2)
    expect(splitArray[0]).toEqual([1,2,8,3])
    expect(splitArray[1]).toEqual([5,0,5,1,9])
  })
})

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    const mergedArray = merge(splitArray1, splitArray2)
    expect(mergedArray.length).toEqual(5)
    expect(mergedArray).toEqual([1,1,2,9,10])
  })
})

describe('Merge Sort function', function() {
  it('is able to mergeSort an unsorted array', function() {
    const sortedArray = mergeSort(testArray2)
    expect(sortedArray).toEqual([0,1,1,2,3,5,5,8,9])
    expect(sortedArray.length).toEqual(9)
  })
})
