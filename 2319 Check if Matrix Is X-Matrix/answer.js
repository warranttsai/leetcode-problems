"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
function checkXMatrix(grid) {
    var isXMatrix = true;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            console.log("Checking:", grid[i][j], i, j);
            if (i == j) {
                if (grid[i][j] === 0) {
                    console.log("i === j, not X Matrix", i, j);
                    isXMatrix = false;
                }
            }
            else if (j === grid[0].length - 1 - i) {
                if (grid[i][grid[0].length - 1 - i] === 0) {
                    console.log("j === grid[0].length - 1 - i, not X Matrix", i, grid[0].length - 1 - i);
                    isXMatrix = false;
                }
            }
            else if (grid[i][j] !== 0) {
                console.log("Else, not X Matrix", i, j);
                isXMatrix = false;
            }
        }
        if (!isXMatrix)
            break;
    }
    return isXMatrix;
}
for (var _i = 0, testCases_1 = constants_1.testCases; _i < testCases_1.length; _i++) {
    var item = testCases_1[_i];
    console.log("Example:", item);
    var result = checkXMatrix(item);
    console.log(result);
}
