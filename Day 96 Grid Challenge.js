//www.hackerrank.com/challenges/grid-challenge/problem?isFullScreen=true
function gridChallenge(grid) {
  // Write your code here
  for (let i = 0; i < grid.length; i++) {
    grid[i] = grid[i].split('').sort().join('');
  }
  let n = grid.length;
  let m = grid[0].length;
  for (let col = 0; col < m; col++) {
    for (let row = 1; row < n; row++) {
      if (grid[row - 1][col] > grid[row][col]) {
        return 'NO';
      }
    }
  }
  return 'YES';
}
/*
Sample Input
ebacd   grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']
fghij
olmkn
trpqs
xywuv

Sample Output 
YES
*/

/* Problem solving approach
- Split each element in the array so we can sort, then convert back to string
- Then we compare each element in each row above with the one below it, if its greater, then we return NO
Example:
a b c
d e f
- if a greater than d, we return NO.
else after all interation we return YES
*/
