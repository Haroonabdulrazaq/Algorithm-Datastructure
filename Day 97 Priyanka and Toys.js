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
/*
Sample Input: 1 2 3 21 7 12 14 21
Sample output: 4
*/

/*
Problem solving approach
w length is >= to  1, so container is initialised as 1
Sort in ascending order, so that smaller weights will be considered into the container
check if the weight difference is greater than 4 then a new container is needed
return container
*/
