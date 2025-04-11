// https://www.hackerrank.com/challenges/gem-stones/problem?isFullScreen=true
function gemstones(arr) {
  // Write your code here
  let firstStone = new Set(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    let temp = new Set(arr[i]);
    firstStone = new Set([...firstStone].filter((ele) => temp.has(ele)));
  }

  return firstStone.size;
}
/*
Sample Input
arr = ['abcdde', 'baccd', 'eeabg']

Sample Output
2

*/

// My problem solving approach
// Find the intersect between the given array
