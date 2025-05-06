// https://www.hackerrank.com/challenges/priyanka-and-toys/problem?isFullScreen=true
function toys(w) {
  // Write your code here
  let container = 1;
  let sortedWeight = w.sort((a, b) => a - b);
  let minWeight = sortedWeight[0];
  for (let i = 0; i < sortedWeight.length; i++) {
    if (sortedWeight[i] - minWeight > 4) {
      container++;
      minWeight = sortedWeight[i];
    }
  }
  return container;
}
