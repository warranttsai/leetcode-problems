"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
function matrixScore(grid) {
    let finalMatrix = grid;
    // Check row by row
    for (let i = 0; i < grid.length; i++) {
        if (grid[i][0] === 0) {
            for (let j = 0; j < grid[0].length; j++)
                finalMatrix[i][j] = grid[i][j] === 1 ? 0 : 1;
        }
    }
    // Check column by column
    for (let i = 0; i < grid[0].length; i++) {
        let colSum = 0;
        let flipedColSum = 0;
        for (let j = 0; j < grid.length; j++) {
            colSum += grid[j][i];
            flipedColSum += grid[j][i] === 0 ? 1 : 0;
        }
        if (flipedColSum > colSum) {
            for (let j = 0; j < grid.length; j++) {
                finalMatrix[j][i] = finalMatrix[j][i] === 0 ? 1 : 0;
            }
        }
    }
    // Sum up
    let result = 0;
    for (let row of finalMatrix)
        result += parseInt(row.join(""), 2);
    return result;
}
for (const item of constants_1.testCases) {
    console.log("Example:", item);
    const result = matrixScore(item);
    console.log(result);
}
