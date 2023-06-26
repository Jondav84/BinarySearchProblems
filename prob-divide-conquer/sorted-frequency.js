/** @format */

function sortedFrequency(arr, target) {
  // find first occurrence of target in arr
  const leftIdx = findLeftIdx(arr, target);
  // check to see if it exist if not end the func by returning 0
  if (leftIdx === -1) {
    return 0;
  }
  // find the last occurrence of the target if a first occurrence exists
  const rightIdx = findRightIdx(arr, target);
  //return the difference + 1 to get total occurences
  return rightIdx - leftIdx + 1;
}

function findLeftIdx(arr, target) {
  let startIdx = 0;
  let endIdx = arr.length - 1;
  let leftIdx = -1;
  while (startIdx <= endIdx) {
    const midIdx = Math.floor((startIdx + endIdx) / 2);
    if (arr[midIdx] === target) {
      leftIdx = midIdx;
      endIdx = midIdx - 1;
    } else if (arr[midIdx] < target) {
      startIdx = midIdx + 1;
    } else {
      endIdx = midIdx - 1;
    }
  }
  return leftIdx;
}

function findRightIdx(arr, target) {
  let startIdx = 0;
  let endIdx = arr.length - 1;
  let rightIdx = -1;
  while (startIdx <= endIdx) {
    const midIdx = Math.floor((startIdx + endIdx) / 2);
    if (arr[midIdx] === target) {
      rightIdx = midIdx;
      startIdx = midIdx + 1;
    } else if (arr[midIdx] < target) {
      startIdx = midIdx + 1;
    } else {
      endIdx = midIdx - 1;
    }
  }
  return rightIdx;
}

module.exports = sortedFrequency;
