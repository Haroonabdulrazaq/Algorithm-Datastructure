// https://www.hackerrank.com/challenges/pangrams/problem?isFullScreen=true
function pangrams(s) {
  // Write your code here
  let alphabets = 'abcdefghijklmnopqrstuvwxyz';
  let lowerCaseStr = s.toLowerCase();

  let result = [...alphabets].every((letter) => lowerCaseStr.includes(letter));
  result = result ? 'pangram' : 'not pangram';
  return result;
}

/* Sample input
 We promptly judged antique ivory buckles for the next prize
 
 Sample Output
 pangram
*/
