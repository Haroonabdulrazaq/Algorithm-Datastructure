//www.hackerrank.com/challenges/funny-string/problem?isFullScreen=true
https: function funnyString(s) {
  // Write your code here
  let strValue = [];
  for (let i = 0; i < s.length; i++) {
    strValue.push(s.charCodeAt(i));
  }
  let strReverse = strValue.slice(0).reverse();

  for (let j = 0; j < s.length - 1; j++) {
    if (
      Math.abs(strValue[j] - strValue[j + 1]) !==
      Math.abs(strReverse[j] - strReverse[j + 1])
    ) {
      return 'Not Funny';
    }
  }
  return 'Funny';
}

/*
Sample Input:
acxz    s = 'acxz'
bcxz    s = 'bcxz'


Sample Output:
Funny
Not Funny

*/

/*
My problem solving Approach

Get the ascii of each character in string s
Save in an array
Make a deep copy and Reverse the array
Compare the absolute adjacent difference
If at least one of the element is not the same, then they are not funny
Else they are funny string
*/
