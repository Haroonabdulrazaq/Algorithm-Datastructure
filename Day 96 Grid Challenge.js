function gridChallenge(grid) {
  // Write your code here
  for (let i = 0; i < grid.length; i++) {
    grid[i] = grid[i].split('').sort().join('');
  }
  let n = grid.length;
  let m = grid[0].length;
  for (let col = 0; col < m; col++) {
    for (let row = 1; row < n; row++) {
      if (grid[row - 1][col] > grid[row][col]) {
        return 'NO';
      }
    }
  }
  return 'YES';
}
