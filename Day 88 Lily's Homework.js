//  https://www.hackerrank.com/challenges/lilys-homework/problem?isFullScreen=true
function lilysHomework(arr) {
  // Write your code here
  function minSwaps(arr) {
    let n = arr.length;
    let arrPos = arr.map((value, index) => [value, index]);
    arrPos.sort((a, b) => a[0] - b[0]);

    let visited = new Array(n).fill(false);
    let swaps = 0;

    for (let i = 0; i < n; i++) {
      if (visited[i] || arrPos[i][1] === i) {
        continue;
      }

      let cycleSize = 0;
      let j = i;
      while (!visited[j]) {
        visited[j] = true;
        j = arrPos[j][1];
        cycleSize++;
      }

      if (cycleSize > 0) {
        swaps += cycleSize - 1;
      }
    }

    return swaps;
  }

  let ascSwaps = minSwaps([...arr]);
  let descSwaps = minSwaps([...arr].map((v) => -v));
  return Math.min(ascSwaps, descSwaps);
}
