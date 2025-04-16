//www.hackerrank.com/challenges/the-love-letter-mystery/problem?isFullScreen=true
https: function theLoveLetterMystery(s) {
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
