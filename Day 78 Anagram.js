//https://www.hackerrank.com/challenges/anagram/problem?isFullScreen=true

function anagram(s) {
  // Write your code here
  if (s.length % 2 == 1) return -1;

  let mid = Math.ceil(s.length / 2);
  let secondHalf = s.slice(mid).split('');

  for (const char of s.slice(0, mid)) {
    if (secondHalf.includes(char)) {
      secondHalf.splice(secondHalf.indexOf(char), 1);
    }
  }
  return secondHalf.length;
}

/*
Sample input
aaabbb
ab
abc
mnop
xyyx
xaxbbbxx

Sample Output
3
1
-1
2
0
1

*/
