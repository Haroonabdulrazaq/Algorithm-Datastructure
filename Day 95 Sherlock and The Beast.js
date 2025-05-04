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
