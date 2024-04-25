import { testCases } from "./constants";

// Good Solution
// function containsDuplicate(nums: number[]): boolean {
//   let result = false;
//   const recordNums = [];
//   for (const num of nums) {
//     if (recordNums.indexOf(num) === -1) {
//       recordNums.push(num);
//     } else result = true;
//   }

//   return result;
// }

// Better Solution
function containsDuplicate(nums: number[]): boolean {
  const uniqueNums = new Set(nums);

  return nums.length > uniqueNums.size;
}

console.log("Test Case 1");
console.log(testCases[0]);
const result1 = containsDuplicate(testCases[0]);
console.log(result1);

console.log("Test Case 2");
console.log(testCases[1]);
const result2 = containsDuplicate(testCases[1]);
console.log(result2);

console.log("Test Case 3");
console.log(testCases[2]);
const result3 = containsDuplicate(testCases[2]);
console.log(result3);
