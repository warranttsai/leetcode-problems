import { testCases } from "./constants";

function checkXMatrix(grid: number[][]): boolean {
  let isXMatrix = true;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (i == j) {
        if (grid[i][j] === 0) isXMatrix = false;
      } else if (j === grid[0].length - 1 - i) {
        if (grid[i][grid[0].length - 1 - i] === 0) isXMatrix = false;
      } else if (grid[i][j] !== 0) isXMatrix = false;
    }

    if (!isXMatrix) break;
  }

  return isXMatrix;
}

for (const item of testCases) {
  console.log("Example:", item);

  const result = checkXMatrix(item);
  console.log(result);
}
