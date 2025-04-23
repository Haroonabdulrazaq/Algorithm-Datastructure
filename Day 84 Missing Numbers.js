//www.hackerrank.com/challenges/missing-numbers/problem?isFullScreen=true
https: function missingNumbers(arr, brr) {
  // Write your code here
  let result = [];
  let arrObj = {};
  let brrObj = {};

  for (let i = 0; i < arr.length; i++) {
    arrObj[arr[i]] = (arrObj[arr[i]] || 0) + 1;
  }

  for (let j = 0; j < brr.length; j++) {
    brrObj[brr[j]] = (brrObj[brr[j]] || 0) + 1;
  }

  for (let [key, value] of Object.entries(brrObj)) {
    if (arrObj[key] !== brrObj[key]) {
      result.push(key);
    }
  }

  return result;
}
