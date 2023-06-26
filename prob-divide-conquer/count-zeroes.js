/** @format */

function countZeroes(arr) {
  let startIdx = 0;
  let endIdx = arr.length;

  while (startIdx <= endIdx) {
    const midIdx = Math.floor((startPoint + endPoint) / 2);

    if (arr[midIdx] === 1) {
      startIdx = midIdx + 1;
    } else {
      if (midIdx === 0 || (arr[midIdx] === 0 && arr[midIdx - 1] === 1)) {
        return arr.length - midIdx;
      }
      endIdx = midIdx - 1;
    }
  }
  return 0;
}

module.exports = countZeroes;
