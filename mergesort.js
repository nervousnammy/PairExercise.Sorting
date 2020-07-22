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
  let returnArray = [];
  const totalLength = arr1.length + arr2.length;
  for (let i = 0; i < totalLength; i++) {
    if (arr1 && arr2) {
      //Sorting
      if (arr1[0] > arr2[0]) {
        returnArray.push(arr2.shift());
      } else {
        returnArray.push(arr1.shift());
      }
    } else if (arr1) {
      returnArray.concat(arr1);
      return returnArray;
    } else if (arr2) {
      returnArray.concat(arr2);
      return returnArray;
    } else {
      continue;
    }
  }
  return returnArray;
}

//let testArray2 = [1,2,8,3,5,0,5,1,9]
function mergeSort(array) {
  //Splitting into single elements
  let singleElements = [];
  singleElements.push(array);

  //Spliting into singleElements
  while (singleElements.length !== array.length) {
    console.log('LENGTH OF ARRAY--->', array.length)
    console.log('LENGTH OF SINGLE ELEMENTS--->', singleElements.length)
    for (let i = 0; i < singleElements.length; i++) {
      if (singleElements[i].length > 1) {
        let arr = split(singleElements[i])
        if (arr.length ===1) {
          singleElements.splice(i, 1, arr)
        } else {singleElements.splice(i, 1, arr[0], arr[1])};
      }
    }
  }

  //You should have array of single elements here
  let sortedArray = singleElements;
  console.log('SORTED ARRAY', sortedArray)
  while (sortedArray.length !== 1) {
    sortedArray.forEach((miniArray, index) => {
      if (sortedArray[index + 1]) {
        sortedArray.splice(
          index,
          2,
          merge(sortedArray[index], sortedArray[index + 1])
        );
      }
    });
  }
  return sortedArray;
}

console.log(mergeSort(testArr2))
