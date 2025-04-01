//www.hackerrank.com/challenges/countingsort2/problem?isFullScreen=true
https: function countingSort(arr) {
  // Write your code here
  let freqArr = Array.from({ length: 100 }, (element) => (element = 0));
  let result = [];
  for (let num of arr) {
    freqArr[num] += 1;
  }
  for (let i = 0; i < freqArr.length; i++) {
    result.push(
      ...Array.from({ length: freqArr[i] }, (element) => (element = i))
    );
  }
  return result;
}

/* Input
63 25 73 1 98 73 56 84 86 57 16 83 8 25 81 56 9 53 98 67 99 12 83 89 80 91 39 86 76 85 74 39 25 90
59 10 94 32 44 3 89 30 27 79 46 96 27 32 18 21 92 69 81 40 40 34 68 78 24 87 42 69 23 41 78 22 6 90
99 89 50 30 20 1 43 3 70 95 33 46 44 9 69 48 33 60 65 16 82 67 61 32 21 79 75 75 13 87 70 33

Output
1 1 3 3 6 8 9 9 10 12 13 16 16 18 20 21 21 22 23 24 25 25 25 27 27 30 30 32 32 32 33 33 33 34 39 39
40 40 41 42 43 44 44 46 46 48 50 53 56 56 57 59 60 61 63 65 67 67 68 69 69 69 70 70 73 73 74 75 75
76 78 78 79 79 80 81 81 82 83 83 84 85 86 86 87 87 89 89 89 90 90 91 92 94 95 96 98 98 99 99
*/

// Thinking Approach
// See day 61 for Part 1 of the problem
// On Day 62, Im am to sort using the freqArr we got in Day 61.
// When I got the freqArr, I can easily put the proper number that appeared in it's index.
// Using the Array.from method. I could get how many times a number appeared and write that number the number of times it appeared.
