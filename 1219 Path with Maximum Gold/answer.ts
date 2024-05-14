import { testCases } from "./constants";

function getMaximumGold(grid: number[][]): number {
  const rowLen = grid.length;
  const colLen = grid[0].length;

  const dfsBacktrack = (i: number, j: number, currentGold: number) => {
    if (i < 0 || j < 0 || i >= rowLen || j >= colLen || grid[i][j] == 0) {
      return 0;
    }

    const goldInCurrentCell = grid[i][j];
    currentGold += goldInCurrentCell;

    // Take out the mine on the cell, it also means that the cell is not reachable again.
    grid[i][j] = 0;

    // update Max Gold
    maxGold = Math.max(maxGold, currentGold);

    dfsBacktrack(i + 1, j, currentGold); // down
    dfsBacktrack(i - 1, j, currentGold); // up
    dfsBacktrack(i, j + 1, currentGold); // right
    dfsBacktrack(i, j - 1, currentGold); // keft

    // Record the current gold on the cell
    grid[i][j] = goldInCurrentCell;
  };

  let maxGold = 0;
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (grid[i][j] !== 0) {
        dfsBacktrack(i, j, 0);
      }
    }
  }

  return maxGold;
}

for (const item of testCases) {
  console.log("Example:", item);

  const result = getMaximumGold(item);
  console.log(result);
}
