"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
function getMaximumGold(grid) {
    var rowLen = grid.length;
    var colLen = grid[0].length;
    /**
     * This solution is brute force. It caused time exceeded.
     */
    // function searchMine(i: number, j: number, from: string): number {
    //   console.log(`(${i}, ${j})`);
    //   if (grid[i][j] === 0) {
    //     return 0;
    //   }
    //   let toUp = grid[i][j],
    //     toRight = grid[i][j],
    //     toDown = grid[i][j],
    //     toLeft = grid[i][j];
    //   // Up
    //   if (from !== "up" && i - 1 >= 0 && grid[i - 1][j] > 0) {
    //     console.log("Go up! To ", grid[i - 1][j]);
    //     toUp += searchMine(i - 1, j, "down");
    //   }
    //   // Right
    //   if (from !== "right" && j + 1 < colLen && grid[i][j + 1] > 0) {
    //     console.log("Go right! To ", grid[i][j + 1]);
    //     toRight += searchMine(i, j + 1, "left");
    //   }
    //   // Down
    //   if (from !== "down" && i + 1 < rowLen && grid[i + 1][j] > 0) {
    //     console.log("Go down! To ", grid[i + 1][j]);
    //     toDown += searchMine(i + 1, j, "up");
    //   }
    //   // Left
    //   if (from !== "left" && j - 1 >= 0 && grid[i][j - 1] > 0) {
    //     console.log("Go left! To ", grid[i][j - 1]);
    //     toLeft += searchMine(i, j - 1, "right");
    //   }
    //   return Math.max(toUp, toRight, toDown, toLeft);
    // }
    // let result = 0;
    // for (let i = 0; i < rowLen; i++) {
    //   for (let j = 0; j < colLen; j++) {
    //     if (grid[i][j] > 0) {
    //       console.log(`Start from ${grid[i][j]}`);
    //       const currentSum = searchMine(i, j, "");
    //       console.log(`Comparison: ${result}, ${currentSum}`);
    //       result = Math.max(result, currentSum);
    //     }
    //   }
    // }
    var dfsBacktrack = function (i, j, currentGold) {
        if (i < 0 || j < 0 || i >= rowLen || j >= colLen || grid[i][j] == 0) {
            return 0;
        }
        var goldInCurrentCell = grid[i][j];
        currentGold += goldInCurrentCell;
        //mark Visited
        grid[i][j] = 0;
        //update Max Gold
        maxGold = Math.max(maxGold, currentGold);
        //traverse all dir
        dfsBacktrack(i + 1, j, currentGold);
        dfsBacktrack(i - 1, j, currentGold);
        dfsBacktrack(i, j + 1, currentGold);
        dfsBacktrack(i, j - 1, currentGold);
        //backtrack
        grid[i][j] = goldInCurrentCell;
    };
    var maxGold = 0;
    for (var i = 0; i < rowLen; i++) {
        for (var j = 0; j < colLen; j++) {
            if (grid[i][j] !== 0) {
                dfsBacktrack(i, j, 0);
            }
        }
    }
    return maxGold;
}
for (var _i = 0, testCases_1 = constants_1.testCases; _i < testCases_1.length; _i++) {
    var item = testCases_1[_i];
    console.log("Example:", item);
    var result = getMaximumGold(item);
    console.log(result);
}
