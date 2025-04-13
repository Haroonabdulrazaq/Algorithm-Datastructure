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
