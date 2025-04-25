function palindromeIndex(s) {
  // Write your code here
  if (checkPalindrome(s)) return -1;

  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - i - 1]) {
      //  Assume left character is odd
      let s1 = s.slice(0, i) + s.slice(i + 1);
      if (checkPalindrome(s1)) return i;

      //  Assume right character is odd
      let s2 = s.slice(0, s.length - i - 1) + s.slice(s.length - i);
      if (checkPalindrome(s2)) return s.length - i - 1;

      return -1;
    }
  }
  retrun - 1;
}

function checkPalindrome(str) {
  let strReverse = str.slice(0).split('').reverse().join('');
  if (str == strReverse) {
    return true;
  }
  return false;
}

/*
Problem Solving Approach
I wrote a function to check if a string is a palindrome, In order to make the code DRY
The Task me want to return the index of the character that will not make the str a palindrom
To Identify that character I will loop through half of the string, and check the string that is not the same.
I need to further confirm if it's the front character I should return or the character from the back

By checking with the helper function checkPalindrome
if it returns true, then I will return the i for the Front character or s[i] or Left character
if it returns false, then I will  further check to see if the Back character is the same as s[i], and further check palindrome function.

Example: 
aacbcbaa -> At index i=2 and from the back s[s.length -i - 1] are different, c !== b
Then I will ignore one of the charcter and check if the string will give a palindrome -> aabcbaa
This will return a palindrome then I will return  i = 2

Example:
aabcbcaa -> At index i=2 and from the back s[s.length -i - 1] are different, b !== c
Then I will ignore the back charcter and check if the string will give a palindrome -> aabcbaa
This will return a palindrome then I will return   i = s.length - 1 -i
*/
