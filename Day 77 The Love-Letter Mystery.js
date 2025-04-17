// www.hackerrank.com/challenges/the-love-letter-mystery/problem?isFullScreen=true
function theLoveLetterMystery(s) {
  // Write your code here
  let alphabets = 'abcdefghijklmnopqrstuvwxyz';
  let alphabetArr = alphabets.split('');
  let mid = Math.ceil(s.length / 2);
  let isEven = s.length % 2 == 0 ? true : false;
  let firstHalf = isEven ? s.slice(0, mid) : s.slice(0, mid - 1);
  let secondHalf = s.slice(mid);

  secondHalf = secondHalf.split('').reverse().join('');
  if (firstHalf == secondHalf) return 0;
  let count = 0;

  for (let i = 0; i < firstHalf.length; i++) {
    count += Math.abs(
      alphabetArr.indexOf(firstHalf[i]) - alphabetArr.indexOf(secondHalf[i])
    );
  }
  return count;
}

/*
Sample Input
abc 
abcba
abcd
cba
Sample output
2
0
4
2
*/

/* 
My thinking approach
Divide the string and get the firsthalf and secondHalf, ignore the mid letter
if isEven then it will divid equalkly, else it will divide abd ignore the mid letter
The check if the firstHalf and secondHalf are equal, if true return 0
if its not I will loop through the length of firstString and find the value difference between the string index
return the count of the value difference of each s
*/
