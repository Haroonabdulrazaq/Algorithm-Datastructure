// https://www.hackerrank.com/challenges/mark-and-toys/problem?isFullScreen=true
function maximumToys(prices, k) {
  // Write your code here
  let sortedPrice = prices.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < sortedPrice.length; i++) {
    if (k > sortedPrice[i]) {
      k -= sortedPrice[i];
      count++;
    }
  }
  return count;
}
/*
Sample Input: 
1 12 5 111 200 1000 10

Sample Output: 4
*/

/*
Problem solving approach
Sort to ge the leats price toy first
For each iteration of sortedPrice
We deduct the price of each toy from the budget k
increase ccount in each deduction
*/
