"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var priority_queue_1 = require("@datastructures-js/priority-queue");
// This solution should be correct. However, the time complexity was too high.
// O(k * n)
//
// function maxKelements(nums: number[], k: number): number {
//   let result = 0;
//   let descSortedNums = nums.sort((a, b) => a - b);
//   const lengthOfNums = nums.length;
//   for (let i = 0; i < k; i++) {
//     result += descSortedNums[lengthOfNums - 1];
//     descSortedNums[lengthOfNums - 1] = Math.ceil(
//       descSortedNums[lengthOfNums - 1] / 3
//     );
//     let j = 0;
//     while (descSortedNums[j] < descSortedNums[lengthOfNums - 1]) j++;
//     descSortedNums.splice(j, 0, descSortedNums[lengthOfNums - 1]);
//   }
//   return result;
// }
function maxKelements(nums, k) {
    var pq = new priority_queue_1.MaxPriorityQueue();
    // Push nums items into pq
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        pq.enqueue(num);
    }
    var result = 0;
    for (var i = 0; i < k; i++) {
        console.log(pq.toArray());
        var val = pq.dequeue();
        result += val;
        pq.enqueue(Math.ceil(val / 3));
    }
    return result;
}
for (var _i = 0, testCases_1 = constants_1.testCases; _i < testCases_1.length; _i++) {
    var item = testCases_1[_i];
    console.log("Example:", item);
    var startTime = performance.now();
    var result = maxKelements(item.nums, item.k);
    var endTime = performance.now();
    var executionTime = endTime - startTime;
    console.log("result: ".concat(result, ", Method execution time: ").concat(executionTime, " milliseconds"));
}
