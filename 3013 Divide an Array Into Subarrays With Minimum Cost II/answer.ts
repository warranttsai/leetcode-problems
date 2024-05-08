import { testCases } from "./constants";

/**
 * 1. The i[0] is 100% the first cost.
 * 2. Using Sliding Window
 * 3. 2 Arrays, the items we are using and the items we are NOT using.
 */
function minimumCost(nums: number[], k: number, dist: number): number {
  const n = nums.length;

  // The i[0] is 100% the first cost.
  // It will take one of the slot from k
  k -= 1;

  // dist + 2 is because if the dist = 3, the sliding window is going to cover
  // the item i[1], i[2], i[3], i[4]
  let firstChunk = nums.slice(1, dist + 2).sort((a, b) => a - b);
  let smallNums = firstChunk.slice(0, k);
  let largeNums = firstChunk.slice(k);
  const sumSmallNums = smallNums.reduce((sum, num) => sum + num, 0);
  console.log({ firstChunk, smallNums, largeNums });

  let res = sumSmallNums,
    curr = sumSmallNums;
  console.log({ res, curr });
  for (let i = dist + 2; i < n; i++) {
    // The item at the start of the sliding window
    const removal = nums[i - dist - 1];
    // Moving slide window
    if (largeNums.indexOf(removal) !== -1) {
      largeNums.splice(largeNums.indexOf(removal), 1);
    } else {
      const index = smallNums.indexOf(removal);
      if (index !== -1) {
        smallNums.splice(index, 1);
        curr -= removal;
      }
      if (largeNums.length) {
        let num = largeNums.shift();
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
    } else if (nums[i] < smallNums[smallNums.length - 1]) {
      let num = smallNums.pop();
      if (num !== undefined) {
        curr -= num;
        largeNums.push(num);
        smallNums.push(nums[i]);
        curr += nums[i];
      }
    } else {
      largeNums.push(nums[i]);
    }

    console.log({ res, curr });
    // minimize result
    res = Math.min(res, curr);
  }

  return res + nums[0];
}

for (const item of testCases) {
  console.log("Example:", item);

  const result = minimumCost(item.nums, item.k, item.dist);
  console.log(result);
}
