// https://www.hackerrank.com/challenges/quicksort1/problem?isFullScreen=true
function quickSort(arr) {
  // Write your code here
  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];
  let midArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == pivot) {
      midArr.push(arr[i]);
    } else if (arr[i] > pivot) {
      rightArr.push(arr[i]);
    } else {
      leftArr.push(arr[i]);
    }
  }
  return [...leftArr, ...midArr, ...rightArr];
}

// Sample Input
// arr = [4, 5, 3, 7, 2];

// Sample Output
// 3 2 4 5 7

// My Approach
// We need to push the element less than the pivot to the left,
// We push element greater to the pivot to the right
// Element equal to the pivot is pushed to the midArr
// We join and return the resulting solution in leftArr + midArr + rightArr
