//www.hackerrank.com/challenges/larrys-array/problem?isFullScreen=true
https: function larrysArray(A) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = i; j < A.length; j++) {
      if (A[i] > A[j]) {
        count++;
      }
    }
  }
  let result = count % 2 == 0 ? 'YES' : 'NO';
  return result;
}
/*
Sample Input
3
3 1 2
4
1 3 4 2
5
1 2 3 5 4


Sample Output:
YES
YES
NO
*/

// My thinking Approach using rotation
/*
[1,6,5,2,4,3] considering [6,5,2]
[1,5,2,6,4,3] considering [5,2,6]
[1,2,6,5,4,3] considering [5,4,3]
[1,2,6,4,3,5] considering [6,4,3]
[1,2,4,3,6,5] considering [4,3,6]
[1,2,3,6,4,5] considering [6,4,5]
[1,2,3,4,5,6] 

Sample 1
[1,3,4,2] considering [3,4,2]
[1,4,2,3] considering [4,2,3]
[1,2,3,4]


The secrete to this problem is:
Check the numbers that is less than current number of the array A[i] to the right
After summing all the numbers that are less than the current number check if its even, then,
It can be sorted and return "YES", else return "NO"

For more detail watch explanation here :https://www.youtube.com/watch?v=-9PKZ8XkVBg
*/
