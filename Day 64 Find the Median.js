function findMedian(arr) {
  // Write your code here
  arr.sort((a, b) => a - b);
  return arr[Math.floor(arr.length / 2)];
}
/*
Sample Input
0 1 2 4 6 5 3

Sample Output
3

*/

// My Problem Solving Approach
// The array is not sorted, to get the median number, we need to sort
// Return the median by calculating the arr.length/2 all floored

// contraint - arr.length will always be odd
