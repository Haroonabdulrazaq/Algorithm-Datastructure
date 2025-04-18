// https://www.hackerrank.com/challenges/string-construction/problem?isFullScreen=true
function stringConstruction(s) {
  // Write your code here
  let count = 0;
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (!arr.includes(s[i])) {
      count++;
      arr.push(s[i]);
    }
  }
  return count;
}
/*
Sample Input
abcd
abab

Sample Output
4
2
*/

/*
Prblem solving approach
Count unique characters of the string

*/
