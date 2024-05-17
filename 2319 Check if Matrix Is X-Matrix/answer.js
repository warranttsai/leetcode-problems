"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
function checkXMatrix(grid) {
    let isXMatrix = true;
    // Good Solution
    // for (let i = 0; i < grid.length; i++) {
    //   for (let j = 0; j < grid[0].length; j++) {
    //     if (i == j) {
    //       if (grid[i][j] === 0) isXMatrix = false;
    //     } else if (j === grid[0].length - 1 - i) {
    //       if (grid[i][grid[0].length - 1 - i] === 0) isXMatrix = false;
    //     } else if (grid[i][j] !== 0) isXMatrix = false;
    //   }
    //   if (!isXMatrix) break;
    // }
    // Better Solution
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            const isDiagonal = i == j || j === grid[0].length - 1 - i;
            isXMatrix = isDiagonal ? grid[i][j] !== 0 : grid[i][j] === 0;
        }
    }
    return isXMatrix;
}
for (const item of constants_1.testCases) {
    console.log("Example:", item);
    const result = checkXMatrix(item);
    console.log(result);
}
