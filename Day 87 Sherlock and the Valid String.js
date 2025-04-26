// https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem?isFullScreen=true
function isValid(s) {
  // Write your code here
  let trackObj = {};
  for (let i = 0; i < s.length; i++) {
    trackObj[s[i]] = (trackObj[s[i]] || 0) + 1;
  }

  let valueArr = Object.values(trackObj);
  let freqNum = {};

  for (let i = 0; i < valueArr.length; i++) {
    freqNum[valueArr[i]] = (freqNum[valueArr[i]] || 0) + 1;
  }
  console.log(freqNum);
  let keys = Object.keys(freqNum).map(Number);
  if (keys.length == 1) {
    return 'YES';
  }

  if (keys.length == 2) {
    const [key1, key2] = keys;

    if (
      (freqNum[key1] === 1 && (key1 - 1 === key2 || key1 - 1 === 0)) ||
      (freqNum[key2] === 1 && (key2 - 1 === key1 || key2 - 1 === 0))
    ) {
      return 'YES';
    }
  }

  return 'NO';
}

/*
Sample Input
aabbccddeefghi

Sample Output
NO

*/

/*
Count the frequency of Characters
Count the frequency Of Numbers
Then consider:
If only 1 frequency → "YES"
If 2 frequencies:
    - One freq must be 1 and occur once → OK
    - Or difference between two freqs must be 1 and higher freq occurs once → OK
Else → "NO"
*/
