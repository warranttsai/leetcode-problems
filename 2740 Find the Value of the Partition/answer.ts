import { testCases } from "./constants";

function findValueOfPartition(nums: number[]): number {
  let result = 99999999999;

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

  // Sorting by ASC
  const sortNums = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortNums.length - 1; i++) {
    const difference = Math.abs(sortNums[i] - sortNums[i + 1]);
    result = difference < result ? difference : result;

    // If the difference hit the minimum number, return
    if (result === 0) break;
  }

  return result;
}

for (const item of testCases) {
  console.log("Example:", item);

  const result = findValueOfPartition(item);
  console.log(result);
}
