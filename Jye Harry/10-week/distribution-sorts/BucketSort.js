function bucketSort(items, bucketSize = 5) {
  if (items.length === 0) return items;

  let min = items[0], max = items[0];

  items.forEach((item) => {
    if (item < min) {
      min = item;
    } else if (item > max) {
      max = item;
    }
  });

  const numOfBuckets = Math.floor((max - min) / bucketSize) + 1;
  const buckets = new Array(numOfBuckets);

  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  items.forEach((item) => {
    buckets[Math.floor((item - min) / bucketSize)].push(item);
  });

  items = [];
  buckets.forEach((bucket) => {
    bucket = classicSort(bucket);
    items.push(...bucket);
  });


  return items;
}

const classicSort = (array) => {
  return array.sort((a, b) => {
    return a - b;
  });
}

module.exports = bucketSort;
