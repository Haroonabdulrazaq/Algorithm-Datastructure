// https://www.hackerrank.com/challenges/matrix-rotation-algo/problem?isFullScreen=true

function matrixRotation(matrix, r) {
  // Write your code here
  const m = matrix.length;
  const n = matrix[0].length;
  const layers = Math.min(m, n) / 2;

  for (let layer = 0; layer < layers; layer++) {
    let elements = [];

    for (let i = layer; i < n - layer; i++) elements.push(matrix[layer][i]);

    for (let i = layer + 1; i < m - layer - 1; i++)
      elements.push(matrix[i][n - layer - 1]);

    for (let i = n - layer - 1; i >= layer; i--)
      elements.push(matrix[m - layer - 1][i]);

    for (let i = m - layer - 2; i > layer; i--) elements.push(matrix[i][layer]);

    const rot = r % elements.length;
    const rotated = elements.slice(rot).concat(elements.slice(0, rot));

    let index = 0;

    for (let i = layer; i < n - layer; i++) matrix[layer][i] = rotated[index++];
    for (let i = layer + 1; i < m - layer - 1; i++)
      matrix[i][n - layer - 1] = rotated[index++];
    for (let i = n - layer - 1; i >= layer; i--)
      matrix[m - layer - 1][i] = rotated[index++];
    for (let i = m - layer - 2; i > layer; i--)
      matrix[i][layer] = rotated[index++];
  }

  matrix.forEach((row) => console.log(row.join(' ')));
}

/*
My problem-solving approach
Its a 2D matrix and required to rotate the matrix in r time.
We have to rotate the outside layer and inner layer of the matrix
To rotate for each layer start from layer 0, and store each element in an Element arr in clockwise direction
*/
