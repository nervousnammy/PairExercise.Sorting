let testArr2 = [1,2,8,3,5,0,5,1,9]

function split(wholeArray) {
  let array = wholeArray
  let firstHalf, secondHalf;
  if (array.length > 1) {
    const half = Math.floor(array.length / 2);
    firstHalf = array.splice(0, half);
    secondHalf = array;
  } else {
    return array;
  }
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let array1 = arr1;
  let array2 = arr2;
  let returnArray = [];
  const totalLength = arr1.length + arr2.length;
  for (let i = 0; i < totalLength; i++) {
    if (array1.length > 0 && array2.length > 0) {
      //Sorting
      if (array1[0] > array2[0]) {
        let pushValue = array2.shift()
        returnArray.push(pushValue);
      } else {
        let pushValue = array1.shift()
        returnArray.push(pushValue);
      }
    } else if (array1.length !== 0) {
      returnArray = returnArray.concat(array1);
      return returnArray;
    } else {
      returnArray = returnArray.concat(array2);
      return returnArray;
    }
  }
  return returnArray;
}

//let testArray2 = [1,2,8,3,5,0,5,1,9]
function mergeSort(array) {
  //Splitting into single elements
  let singleElements = [];
  singleElements.push(array);
  const arrLength = array.length
  //Spliting into singleElements
  while (singleElements.length !== arrLength) {
    for (let i = 0; i < singleElements.length; i++) {
      if (singleElements[i].length > 1) {
        let arr = split(singleElements[i])
        if (arr.length === 1) {
          singleElements.splice(i, 1, arr)
        } else {singleElements.splice(i, 1, arr[0], arr[1])};
      }
    }
  }

  //You should have array of single elements here
  let sortedArray = singleElements;
  let sortedArrayLength = sortedArray.length;
  while (sortedArray.length !== 1) {
    for(let i = 0; i < Math.floor(sortedArrayLength/2); i++) {
      if (sortedArray[i+1] !== undefined) {
        // console.log('i --->', i)
        // console.log('sortedArray --->', sortedArray)
        // console.log('sortedArray LENGTH --->', sortedArrayLength)
        let mergedArray = merge(sortedArray[i], sortedArray[i+1])
        // console.log('MERGED ARRAY', mergedArray)
        sortedArray.splice(i , 2, mergedArray)
      }
      sortedArrayLength = sortedArray.length
    }
  }
  return sortedArray;
}

const heyo = mergeSort(testArr2)
console.log('FINAL ANSWER--->', heyo)
