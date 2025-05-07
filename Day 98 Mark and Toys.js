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
