function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr.shift();
  const left = arr.filter(element => element < pivot);
  const right = arr.filter(element => element >= pivot);

  // arr.forEach((item) => {
  //   if (item < pivot) {
  //     left.push(item);
  //   } else {
  //     right.push(item);
  //   }
  // });
  return [...quickSort(left), pivot, ...quickSort(right)];
}

module.exports = quickSort;
