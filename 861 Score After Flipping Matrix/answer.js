"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
function matrixScore(grid) {
    function flipRow(row) {
        var result = [];
        for (var _i = 0, row_1 = row; _i < row_1.length; _i++) {
            var item = row_1[_i];
            result.push(item === 0 ? 1 : 0);
        }
        result;
    }
    var finalMatrix = grid;
    // Check row by row
    for (var i = 0; i < grid.length; i++) {
        if (grid[i][0] === 0) {
            for (var j = 0; j < grid[0].length; j++)
                finalMatrix[i][j] = grid[i][j] === 1 ? 0 : 1;
        }
    }
    // Check column by column
    for (var i = 0; i < grid[0].length; i++) {
        var colSum = 0;
        var flipedColSum = 0;
        for (var j = 0; j < grid.length; j++) {
            colSum += grid[j][i];
            flipedColSum += grid[j][i] === 0 ? 1 : 0;
        }
        if (flipedColSum > colSum) {
            for (var j = 0; j < grid.length; j++) {
                finalMatrix[j][i] = finalMatrix[j][i] === 0 ? 1 : 0;
            }
        }
    }
    console.log(finalMatrix);
    // Sum up
    var result = 0;
    for (var _i = 0, finalMatrix_1 = finalMatrix; _i < finalMatrix_1.length; _i++) {
        var row = finalMatrix_1[_i];
        // Convert the binary string to a decimal number
        var decimalValue = parseInt(row.join(""), 2);
        result += decimalValue;
    }
    return result;
}
for (var _i = 0, testCases_1 = constants_1.testCases; _i < testCases_1.length; _i++) {
    var item = testCases_1[_i];
    console.log("Example:", item);
    var result = matrixScore(item);
    console.log(result);
}
