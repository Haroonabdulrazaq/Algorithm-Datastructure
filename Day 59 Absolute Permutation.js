//www.hackerrank.com/challenges/absolute-permutation/problem?isFullScreen=true
https: function absolutePermutation(n, k) {
  // Write your code here
  if (k === 0) {
    return Array.from({ length: n }, (_, i) => i + 1);
  }

  if ((n / k) % 2 !== 0) {
    return [-1];
  }

  let result = [];
  let flip = false;

  for (let i = 1; i <= n; i++) {
    if (flip) {
      result.push(i - k);
    } else {
      result.push(i + k);
    }

    if (i % k === 0) {
      flip = !flip;
    }
  }

  return result;
}

// Sample Input
/*
pos[i]  i   |pos[i] - i|
  3     1        2
  4     2        2
  1     3        2
  2     4        2
  */

// My approach
// For every pos[i] - i should equal k;
// return the perfect permutation
// if its not possble to have an absolute permutation return -1
