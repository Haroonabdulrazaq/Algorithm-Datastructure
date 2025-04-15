//www.hackerrank.com/challenges/two-strings/problem?isFullScreen=true
https: function twoStrings(s1, s2) {
  // Write your code here
  //First soltion
  // for(let i=0; i< s1.length; i++){
  //     if(s2.split("").some((element) => element === s1[i])) {
  //         return "YES"
  //     }
  // }
  // return "NO"

  //Second Solution
  // let firstStr = s1.split("");
  // let secondStr = s2.split("");
  // let result = firstStr.filter((element) => secondStr.find((str) => str == element));
  // if(result.length >= 1) return "YES";
  // else return "NO";

  // Third Solution
  let firstSet = new Set(s1.split(''));
  let temp = new Set(s2.split(''));

  let result = [...firstSet].filter((ele) => temp.has(ele));

  if (result.length >= 1) return 'YES';
  else return 'NO';
}

/*
Sample Input
hello
world
hi
world

Sample Output
YES
NO
*/

/*
My problem solving approach
Kindly Note: That this challenge has a 10^5 for each string.
The first solution wasnt as efficient as the second, and the second solution was as efcient as the third.
Using Set makes the comarison faster as it checks for the intersection of the two strings.
Convert each string into a Set, then check for the intersection

*/
