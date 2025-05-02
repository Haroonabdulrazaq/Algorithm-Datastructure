// https://www.hackerrank.com/challenges/luck-balance/problem?isFullScreen=true
function luckBalance(k, contests) {
  // Write your code here
  let sortedContests = contests.sort((a, b) => b[0] - a[0]);
  let sum = 0;

  for (let i = 0; i < sortedContests.length; i++) {
    if (sortedContests[i][1] == 0) {
      sum += sortedContests[i][0];
    } else if (sortedContests[i][1] >= 1 && k !== 0) {
      sum += sortedContests[i][0];
      k--;
    } else {
      sum -= sortedContests[i][0];
    }
  }
  return sum;
}
