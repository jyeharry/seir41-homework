function binarySearch(haystack, needle) {
    //  search through the array non-recursively for the needle
    //  if the needle is not found, return -1
    //  if the needle is found, return the index at which it was found
    let start = 0;
    let end = haystack.length - 1;
    let midpoint = Math.floor((start + end) / 2);

    // not found and still have elements to search through
    while (haystack[midpoint] !== needle && start < end) {
      if (needle < haystack[midpoint]) {
        end = midpoint - 1;
      } else {
        start = midpoint + 1;
      }
      midpoint = Math.floor((start + end) / 2);
    }
    return (haystack[midpoint] === needle) ? midpoint : -1;
}

function recursiveBinarySearch(
  haystack,
  needle,
  start = 0,
  end = haystack.length - 1,
  midpoint = Math.floor((start + end) / 2)
) {
    if (haystack[midpoint] === needle) {return midpoint};
    if (start >= end) {return -1};
    if (needle > haystack[midpoint]) {
      start = midpoint + 1;
    } else {
      end = midpoint - 1;
    }
    return recursiveBinarySearch(haystack, needle, start, end);
}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}
