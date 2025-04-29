// https://www.hackerrank.com/challenges/sherlock-and-array/problem?isFullScreen=true
function balancedSums(arr) {
  // Write your code here
  let total = arr.reduce((sum, num) => sum + num, 0);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let rightSum = total - leftSum - arr[i];
    if (leftSum === rightSum) {
      return 'YES';
    }
    leftSum += arr[i];
  }

  return 'NO';
}

/* We needed to find if the array is balanced or not
The formula is to compare rightSum to Leftsum, each time after subtracting leftSum from total, and current iteration element.
*/
