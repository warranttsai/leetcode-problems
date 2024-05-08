"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
/**
 * 1. The i[0] is 100% the first cost.
 * 2. Using Sliding Window
 * 3. 2 Arrays, the items we are using and the items we are NOT using.
 */
function minimumCost(nums, k, dist) {
    var n = nums.length;
    // The i[0] is 100% the first cost.
    // It will take one of the slot from k
    k -= 1;
    // dist + 2 is because if the dist = 3, the sliding window is going to cover
    // the item i[1], i[2], i[3], i[4]
    var firstChunk = nums.slice(1, dist + 2).sort(function (a, b) { return a - b; });
    var smallNums = firstChunk.slice(0, k);
    var largeNums = firstChunk.slice(k);
    var sumSmallNums = smallNums.reduce(function (sum, num) { return sum + num; }, 0);
    console.log({ firstChunk: firstChunk, smallNums: smallNums, largeNums: largeNums });
    var res = sumSmallNums, curr = sumSmallNums;
    console.log({ res: res, curr: curr });
    for (var i = dist + 2; i < n; i++) {
        // The item at the start of the sliding window
        var removal = nums[i - dist - 1];
        // Moving slide window
        if (largeNums.indexOf(removal) !== -1) {
            largeNums.splice(largeNums.indexOf(removal), 1);
        }
        else {
            var index = smallNums.indexOf(removal);
            if (index !== -1) {
                smallNums.splice(index, 1);
                curr -= removal;
            }
            if (largeNums.length) {
                var num = largeNums.shift();
                if (num !== undefined) {
                    curr += num;
                    smallNums.push(num);
                }
            }
        }
        // add the current element
        if (smallNums.length < k) {
            smallNums.push(nums[i]);
            curr += nums[i];
        }
        else if (nums[i] < smallNums[smallNums.length - 1]) {
            var num = smallNums.pop();
            if (num !== undefined) {
                curr -= num;
                largeNums.push(num);
                smallNums.push(nums[i]);
                curr += nums[i];
            }
        }
        else {
            largeNums.push(nums[i]);
        }
        console.log({ res: res, curr: curr });
        // minimize result
        res = Math.min(res, curr);
    }
    return res + nums[0];
}
for (var _i = 0, testCases_1 = constants_1.testCases; _i < testCases_1.length; _i++) {
    var item = testCases_1[_i];
    console.log("Example:", item);
    var result = minimumCost(item.nums, item.k, item.dist);
    console.log(result);
}
