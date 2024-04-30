"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
function findValueOfPartition(nums) {
    var result = 99999999999;
    /**
     * Solution with Time Limit Exceeded
     */
    // for (let i = 0; i < nums.length; i++) {
    //   for (let j = i + 1; j < nums.length; j++) {
    //     const difference = Math.abs(nums[i] - nums[j]);
    //     console.log([nums[i], nums[j], difference, result]);
    //     result = difference < result ? difference : result;
    //   }
    // }
    var sortNums = nums.sort(function (a, b) { return a - b; });
    console.log({ sortNums: sortNums });
    for (var i = 0; i < sortNums.length - 1; i++) {
        var difference = Math.abs(sortNums[i] - sortNums[i + 1]);
        console.log([sortNums[i], sortNums[i + 1], difference, result]);
        result = difference < result ? difference : result;
        if (result === 0)
            break;
    }
    return result;
}
for (var _i = 0, testCases_1 = constants_1.testCases; _i < testCases_1.length; _i++) {
    var item = testCases_1[_i];
    console.log("Example:", item);
    var result = findValueOfPartition(item);
    console.log(result);
}
