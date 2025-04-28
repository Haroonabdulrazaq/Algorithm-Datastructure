// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?isFullScreen=true
function sherlockAndAnagrams(s) {
  const map = new Map();
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const substr = s.substring(i, j);
      const sortedStr = substr.split('').sort().join('');

      if (map.has(sortedStr)) {
        count += map.get(sortedStr);
        map.set(sortedStr, map.get(sortedStr) + 1);
      } else {
        map.set(sortedStr, 1);
      }
    }
  }

  return count;
}
/*
Sample Input
cdcd
Sample Output: 5
*/

/*
Problem solving approach
Get all possible substr
set each substrin into a map
Check to count how many times each sorted substring appears
Each time a substr is found then it can be pairs with revious substring
Track the count and return
*/
