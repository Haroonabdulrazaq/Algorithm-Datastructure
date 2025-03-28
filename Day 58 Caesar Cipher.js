// https://www.hackerrank.com/challenges/caesar-cipher-1/problem?isFullScreen=true

function caesarCipher(s, k) {
  // Write your code here
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let capAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let n = alphabet.length;
  let resultStr = '';
  let regex = /[a-zA-Z]/;
  let isUpper = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i].match(regex)) {
      let charIndex = 0;
      if (s[i] == s[i].toUpperCase()) isUpper = true;
      charIndex = isUpper ? capAlphabet.indexOf(s[i]) : alphabet.indexOf(s[i]);

      let newIndex = charIndex + k;
      newIndex = newIndex >= n ? newIndex % n : newIndex;

      resultStr += isUpper ? capAlphabet[newIndex] : alphabet[newIndex];
      isUpper = false;
    } else {
      resultStr += s[i];
    }
  }
  return resultStr;
}

/*
Sample Input 
abcdefghijklmnopqrstuvwxyz
Alphabet rotated +3:    

Expected Output
defghijklmnopqrstuvwxyzabc


Sample input 
s: abcdefghijklmnopqrstuvwxyz
 k: Alphabet rotated +2:    

Expected Output:
cdefghijklmnopqrstuvwxyzab
*/

// My inital Approach:

/*
for(let i=0; i < s.length; i++) {
  if(s[i].match(regex)){
    let charNum =0;
    if(s[i] == s[i].toUpperCase()) {
      charNum = capAlphabet.indexOf(s[i]);
      let newIndex = charNum + k;
      newIndex = newIndex > n?  newIndex% n : newIndex;
      resultStr += capAlphabet[newIndex];
    } else {
        charNum = alphabet.indexOf(s[i]);
        let newIndex = charNum + k;
        newIndex = newIndex > n? newIndex % n : newIndex;
        resultStr += alphabet[newIndex];
      }
  }else {
      resultStr += s[i];
  }
}

*/
