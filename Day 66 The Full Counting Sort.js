// https://www.hackerrank.com/challenges/countingsort4/problem?isFullScreen=true
function countSort(arr) {
  // Write your code here
  let mid = arr.length / 2;
  let firstHalf = arr.slice(0, mid);
  let secondHalf = arr.slice(mid);

  firstHalf.map((element) => element.splice(1, 1, '-'));
  let resultArr = [...firstHalf, ...secondHalf];
  resultArr.sort((a, b) => a[0] - b[0]);

  let myArr = resultArr.map((element) => element[1]);
  console.log(myArr.join(' ')); // Specification to print instead of return
}
/*
Sample Input
[0 ab,6 cd,0 ef,6 gh,4 ij,0 ab,6 cd,0 ef,6 gh,0 ij,
4 that,3 be,0 to,1 be,5 question,1 or,2 not,4 is,2 to,4 the]

Sample Output
- - - - - to be or not to be - that is the question - - - -

*/

// My thinking Aproach
// Understanding the problem is Key here:
// We have ArrayofArray example: [[0,'w'],[3,'a'],[6,'b'],[0,'k'],]
// The firstHalf[1] wll be replaced by '-'
// The we sort the ArrayofArray by the number i.e [[0,'-'],[0,'k'],[3,'-'],[6,'b']]
// Then we print only the string with space seperated - k - b
