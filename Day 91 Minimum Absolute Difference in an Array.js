// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem?isFullScreen=true
function minimumAbsoluteDifference(arr) {
  // Write your code here
  let min = Math.max(...arr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length - 1; j++) {
      let difference = Math.abs(arr[i] - arr[j + 1]);

      if (min > difference) {
        min = difference;
      }
    }
  }
  return min;
}
/*
Sample Input
3
3 -7 0

Sample Output
3
 
consider: |3 - -7| |3 - 0| | -7 - 0| -> |10| |3| | 7| 
return 3 as its the minimum of all the output
*/

/*
Problem solvng Approach
Loop through without repetition from start
find the Absolute difference of each element in the arr
reurn the minimum
*/
