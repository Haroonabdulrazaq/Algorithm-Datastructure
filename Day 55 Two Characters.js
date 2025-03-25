//https://www.hackerrank.com/challenges/two-characters/problem?isFullScreen=true
// Two Characters
function alternate(s) {
  // Write your code here
  let uniqueStr = [...new Set(s)];
  let maxLength = 0;

  for (let i = 0; i < uniqueStr.length; i++) {
    for (let j = i + 1; j < uniqueStr.length; j++) {
      let char1 = uniqueStr[i],
        char2 = uniqueStr[j];

      let filterStr = [...s].filter((char) => char === char1 || char == char2);

      if (isAlternating(filterStr)) {
        maxLength = Math.max(maxLength, filterStr.length);
      }
    }
  }

  return maxLength;
}

const isAlternating = (str) => {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] == str[i + 1]) return false;
  }
  return true;
};

// Sample input
// beabeefeab  s = 'beabeefeab'

// Sample output
// 5

/*
Thinking Approach
Using Brute force approach
Create unique character and combine each using the loop
Filter the character and store in an array filterStr, this would help us to get only the character combination that exist in s.
Then I check if the letters are alternating in a helper function called isAlternating
if it is, then I get the maximum starting max from 0.
return max, else max is 0

*/
