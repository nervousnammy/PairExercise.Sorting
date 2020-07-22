// let testArr = [1,2,8,3,5,0,5,1,9]

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

//let splitArray1 = [1,2,10]
//let splitArray2 = [1,9]
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
  console.log('ARGUMENT ARRAY --->', array)
  let singleElements = [].push(array);
  console.log('singleElements --->', singleElements)
  while (singleElements.length !== array.length) {
    singleElements.forEach((miniArray, index) => {
      if (miniArray.length > 1) {
        let arr = split(miniArray)
        if (arr.length === 1) {
          singleElements.splice(index, 1, arr)
        } else {
        singleElements.splice(index, 1, arr[0], arr[1]);
        }
      }
    });
  }

  //You should have array of single elements here
  let sortedArray = singleElements;
  //this is equal to [[1],[2],[3],[4],[5],[6]]
  //Joining back into single array
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
