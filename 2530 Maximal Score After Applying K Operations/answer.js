"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const priority_queue_1 = require("@datastructures-js/priority-queue");
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
    const maxPQ = new priority_queue_1.MaxPriorityQueue();
    // Push nums items into pq
    for (const num of nums) {
        maxPQ.enqueue(num);
    }
    let result = 0;
    for (let i = 0; i < k; i++) {
        const maxNum = maxPQ.dequeue();
        result += maxNum;
        maxPQ.enqueue(Math.ceil(maxNum / 3));
    }
    return result;
}
for (const item of constants_1.testCases) {
    console.log("Example:", item);
    const startTime = performance.now();
    const result = maxKelements(item.nums, item.k);
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    console.log(`result: ${result}, Method execution time: ${executionTime} milliseconds`);
}
