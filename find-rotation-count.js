/** @format */

function findRotationCount(arr) {
  let startIdx = 0;
  let endIdx = arr.length - 1;
  if (arr[startIdx] > arr[endIdx]) {
    return 0;
  }
  while (startIdx <= endIdx) {
    let midIdx = Math.floor((startIdx + endIdx) / 2);
    if (arr[midIdx] > arr[midIdx + 1]) {
      return midIdx + 1;
    }

    if (arr[midIdx] >= arr[startIdx]) {
      startIdx = midIdx + 1;
    } else {
      endIdx = midIdx - 1;
    }
  }
}

module.exports = findRotationCount;
