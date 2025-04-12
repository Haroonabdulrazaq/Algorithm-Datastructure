// https://www.hackerrank.com/challenges/alternating-characters/problem?isFullScreen=true
function alternatingCharacters(s) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] == s[i + 1]) {
      count++;
    }
  }
  return count;
}
/*
Sample Input
AAAA
BBBBB
ABABABAB
BABABA
AAABBB

Sample Output
3
4
0
0
4
*/
/*
Problem solving approach
Loop throgh the string
Search if the current letter is equal to the next, if true, then increment
*/
