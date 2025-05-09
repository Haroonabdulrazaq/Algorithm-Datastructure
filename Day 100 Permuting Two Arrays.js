//https://www.hackerrank.com/challenges/two-arrays/problem?isFullScreen=true
function twoArrays(k, A, B) {
  // Write your code here
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    if (A[i] + B[i] < k) {
      return 'NO';
    }
  }
  return 'YES';
}

/*
Sample Input:
3 10        A[] and B[] size n = 3, k = 10
2 1 3       A = [2, 1, 3]
7 8 9       B = [7, 8, 9]
4 5         A[] and B[] size n = 4, k = 5
1 2 2 1     A = [1, 2, 2, 1]
3 3 3 4     B = [3, 3, 3, 4]

Sample Output:
YES
NO
*/

/*
Problem Solving approach
- Sort the A in ascending Order and B in descending Order, 
- Loop through one of the array and check if the additionof A[i],B[i] is less than K
- If true return NO
- retrn YES at the end of the iteration
*/
