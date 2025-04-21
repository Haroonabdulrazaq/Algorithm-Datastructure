//www.hackerrank.com/challenges/marcs-cakewalk/problem?isFullScreen=true
https: function marcsCakewalk(calorie) {
  // Write your code here
  let sum = 0;
  calorie.sort((a, b) => b - a);
  for (let i = 0; i < calorie.length; i++) {
    sum += Math.pow(2, i) * calorie[i];
  }

  return sum;
}

/*
Sample Input
3
1 3 2

Sample Output
11
*/
