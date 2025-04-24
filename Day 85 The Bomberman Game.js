// https://www.hackerrank.com/challenges/bomber-man/problem?isFullScreen=true
function bomberMan(n, grid) {
  const R = grid.length;
  const C = grid[0].length;

  const fillGrid = () =>
    Array(R)
      .fill()
      .map(() => 'O'.repeat(C));

  const detonate = (inputGrid) => {
    const result = Array.from({ length: R }, () => Array(C).fill('O'));

    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        if (inputGrid[i][j] === 'O') {
          result[i][j] = '.';
          if (i > 0) result[i - 1][j] = '.';
          if (i < R - 1) result[i + 1][j] = '.';
          if (j > 0) result[i][j - 1] = '.';
          if (j < C - 1) result[i][j + 1] = '.';
        }
      }
    }

    return result.map((row) => row.join(''));
  };

  if (n === 1) return grid;
  if (n % 2 === 0) return fillGrid();

  const firstDetonation = detonate(grid);
  const secondDetonation = detonate(firstDetonation);

  return n % 4 === 3 ? firstDetonation : secondDetonation;
}
