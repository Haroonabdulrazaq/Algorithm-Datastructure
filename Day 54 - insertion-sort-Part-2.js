// https://www.hackerrank.com/challenges/insertionsort2/problem?
// Day 54 - Insertion Sort - Part 2

function insertionSort2(n, arr) {
  // Write your code here

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (arr[i] < arr[j]) {
        arr.splice(j, 0, arr[i]);
        arr.splice(i, 0, arr[j]);
        arr.splice(i, 1);
        arr.splice(i + 1, 1);
      }
    }
    console.log(arr.join(' '));
  }
}

// My thinking Approach
// Loop through the entire array
// Inner loop will run from 0 to i
// Compare the current element with the previous element
// If the current element is smaller than the previous element, shift in front of it
// Print the array after each iteration

// Sample inputs

// 8
// 8 7 6 5 4 3 2 1

// Sample Output
/*
  7 8 6 5 4 3 2 1
  6 7 8 5 4 3 2 1
  5 6 7 8 4 3 2 1
  4 5 6 7 8 3 2 1
  3 4 5 6 7 8 2 1
  2 3 4 5 6 7 8 1
  1 2 3 4 5 6 7 8
*/

// Sample Input
/*
6
1 4 3 5 6 2
*/

// Sample Output
/* 1 4 3 5 6 2
1 3 4 5 6 2
1 3 4 5 6 2
1 3 4 5 6 2
1 2 3 4 5 6*/
