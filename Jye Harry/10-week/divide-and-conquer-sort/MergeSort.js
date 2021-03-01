function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)));
}


// HELPER FUNCTION: merge two sorted arrays
function merge(arr1, arr2) {
  var result = [];
  while (arr1.length && arr2.length) {
    result.push(arr1[0] <= arr2[0] ? arr1.shift() : arr2.shift());
  }
  return result.concat(arr1, arr2);
}

module.exports = mergeSort;
