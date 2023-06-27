/** @format */

function findRotatedIndex(arr, target) {
  let startIdx = 0;
  let endIdx = arr.length - 1;
  while (startIdx <= endIdx) {
    let midIdx = Math.floor((startIdx + endIdx) / 2);
    if (arr[midIdx] === target) {
      return midIdx;
    }
    if (arr[startIdx] <= arr[midIdx]) {
      if (target >= arr[start] && target < arr[midIdx]) {
        endIdx = midIdx - 1;
      } else {
        startIdx = midIdx + 1;
      }
    } else {
      if (target > arr[midIdx] && target <= arr[endIdx]) {
        startIdx = midIdx + 1;
      } else {
        endIdx = midIdx;
      }
    }
  }
  return -1;
}

module.exports = findRotatedIndex;
