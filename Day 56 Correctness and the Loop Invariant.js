// https://www.hackerrank.com/challenges/correctness-invariant/problem?isFullScreen=true
function insertionSort(ar) {
  for (let i = 1; i < ar.length; i++) {
    let value = ar[i];
    let j = i - 1;

    while (j >= 0 && ar[j] > value) {
      ar[j + 1] = ar[j];
      j = j - 1;
    }
    ar[j + 1] = value;
  }

  return ar;
}

// Sample input
// let ar=[4, 1, 3, 5, 6, 2];

// Sample Output
// [1, 2, 3, 4, 5, 6];

// Thinking approach:
/*
I was given a starter code to debug and fix the issue
I declared variables that werent decalred
I also improved the condition of the while loop, so that j starts from >=0
Add the Hackerrank boiler plate code to run the test file
*/
