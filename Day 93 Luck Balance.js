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

/*
k The number of important contest she can loose
contests the map between luck value and it's important contest
n = 6, k = 3
5 1         contests = [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]]
2 1
1 1
8 1
10 0
5 0


*/

/*
Problem solving approach
Lena wants to maximise her luck. Her luck reduces when she wins the contest, and increases when she looses
First I ned tp sort by highest Luck value, in order to discard less value but important, when the k value is 0
Then add up all the unimportant contest
Then subtract the less value but important contest from the sum
That way Lena gets the highest possible luck from loosing her contest
*/
