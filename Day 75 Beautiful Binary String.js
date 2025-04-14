//www.hackerrank.com/challenges/beautiful-binary-string/problem?isFullScreen=true
https: function beautifulBinaryString(b) {
  // Write your code here
  let i = 0;
  let count = 0;
  while (i < b.length) {
    let temp = b.substring(i, i + 3);
    if (temp == '010') {
      i += 3;
      count++;
    } else {
      i++;
    }
  }

  return count;
}

/*
Sample input
0100101010

Sample Output
3
*/

/*
My problem solving approach

Get substring for each iteration i
check if the substring equals 010
if it does then, we increase iteration by 3 instead of changing the string like the challenge mentioned
if its not, we increase the iteration by 1
*/
