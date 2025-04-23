//www.hackerrank.com/challenges/missing-numbers/problem?isFullScreen=true
function missingNumbers(arr, brr) {
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

/*
Sample Input
203 204 205 206 207 208 203 204 205 206

203 204 204 205 206 207 205 208 203 206 205 206 204


Sample Output
204 205 206
*/

/*My problem solving approach
I tracked the frequency of each number in its separate obj
I looped through the objects to get where the frequency are different
If they are different then, its missing and push in result Array
*/
