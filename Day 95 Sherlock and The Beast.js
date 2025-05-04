// https://www.hackerrank.com/challenges/sherlock-and-the-beast/problem?isFullScreen=true
function decentNumber(n) {
  // Write your code here
  let m = n;

  while (m % 3 != 0) {
    m -= 5;
  }
  let five = '5';
  let three = '3';
  if (m < 0) {
    console.log(-1);
  } else {
    console.log(five.repeat(m) + '' + three.repeat(n - m));
  }
}
/*
Sample Input
1       n = 1 (first test case)
3       n = 3 (second test case)
5
11
Sample Output
-1
555
33333
55555533333
*/

/*
My problem solving-approach
We will keep subtracting 5 until m is a multiple of 3
If it's a multiple of 3 then,
we need to check if m is less than zero, if it is we return -1
else we print 5 by that number
then we print 3 by the n - m times
*/
