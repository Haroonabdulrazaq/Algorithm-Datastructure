//www.hackerrank.com/challenges/weighted-uniform-string/problem?isFullScreen=true
function weightedUniformStrings(s, queries) {
  // Write your code here
  let alphabets = 'abcdefghijklmnopqrstuvwxyz';
  let valueArr = [];
  let resultArr = [];
  let count = 1;

  let alphabetArr = alphabets.split('');
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i + 1]) {
      count++;
    } else {
      count = 1;
    }
    valueArr.push((alphabets.indexOf(s[i]) + 1) * count);
  }

  resultArr = queries.map((element) => {
    return valueArr.includes(element) ? 'Yes' : 'No';
  });
  return resultArr;
}

/*
Sample Input
aaabbbbcccddd

9
7
8
12
5

Sample Output
Yes
No
Yes
Yes
No
*/

/*
Get all the alphabet so I can get its value using (indexOf + 1)
Track alphabet that repeat, and multiply its value each time with count, and push into valueArr
If the alphabet doesnt repeat, push the value into the valueArr 
Compare the valueArr if its included in the queries,
if it is then push Yes, else push No into the resultArr
*/
