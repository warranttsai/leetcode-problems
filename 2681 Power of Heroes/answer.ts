import { testCases } from "./constants";

/**
 *
 * Key Note:
 *
 * Take [1,2,3,4] as an example,
 * if we take 4 as the max number and the 1 as the minimal number,
 * the calculation result is going to be 4^2 * 1 = 16.
 *
 * In this scenario, there are 4 possible case, [1,4], [1,2,4], [1,3,4], [1,2,3,4].
 * All of these cases result in the same answer, which is 16.
 *
 * The array items [2], [3] are optional. So the number of combinations will be 2^(number of optional items) = 2^2 = 4.
 * To calculate the power of this scenario, simply use (4^2) * 2^(number of optional items) = (4^2) * 2^2 = 16 * 4 = 64.
 *
 * In the function, we are about to calculate the power for each scenario and save the value as "s".
 * So that, we can sum up by all the (maxNum * maxNum * (maxNum + s)) % mod.
 *
 * @param nums // number[]
 * @returns // number
 */
function sumOfPower(nums: number[]): number {
  const mod = 1e9 + 7;
  // Sorting the array to get larger or smaller number
  nums.sort((a, b) => a - b);

  let result = 0,
    s = 0;
  for (const x of nums) {
    // To prevent integer overflow, we need to use the BigInt() function to handle large numbers
    const bx = BigInt(x);

    // (maxNum * maxNum * (maxNum + s)) % mod
    const calc = (bx * bx * (bx + BigInt(s))) % BigInt(mod);
    result += Number(calc);

    // Iterating the sum of numbers which smaller than current number (x)
    s = (s * 2 + x) % mod;
  }

  return result % mod;
}

for (const item of testCases) {
  console.log("Example:", item);

  const result = sumOfPower(item);
  console.log(result);
}
