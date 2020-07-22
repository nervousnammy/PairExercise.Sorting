const someObj = {};

someObj.swap = function (arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

someObj.bubbleSort = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let x = 0; x < arr.length - i; x++) {
      if (arr[x] > arr[x + 1]) {
        this.swap(arr, x, x + 1);
      }
    }
  }
  return arr;
};
