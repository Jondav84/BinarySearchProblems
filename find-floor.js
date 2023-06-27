/** @format */

function findFloor(arr, target) {
  let startIdx = 0;
  let endIdx = arr.length - 1;
  let floor = -1;
  while (startIdx <= endIdx) {
    const midIdx = Math.floor((startIdx + endIdx) / 2);
    if (arr[midIdx] === target) {
      return arr[midIdx];
    } else if (arr[midIdx] < target) {
      floor = arr[midIdx];
      startIdx = midIdx + 1;
    } else {
      endIdx = midIdx - 1;
    }
  }
  return floor;
}

module.exports = findFloor;
