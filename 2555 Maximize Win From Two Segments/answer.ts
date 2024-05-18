import { testCases } from "./constants";

function maximizeWin(prizePositions: number[], k: number): number {
  const len = prizePositions.length;
  // The most selected items would be happening from no-overlapping case.
  // If the positions are not more than k*2, it couldn't contain two segments
  // In this case, return the length of the positions
  if (len < k * 2) return len;

  /**
   *
   * 1. We initialize an array dp of length n + 1 with zeros, where dp[i] will store the maximum length of a single segment ending at index i - 1.
   * 2. We use two pointers, i and j, to keep track of the current segment and the start of the next possible segment, respectively.
   * 3. For each index i, we move the pointer j to the rightmost position such that
   *    - prizePositions[i] - prizePositions[j] <= k.
   *    This ensures that the segment from j to i is valid.
   * 4. We calculate the length of the current segment len = i - j + 1.
   * 5. We update dp[i + 1] with the maximum length of a single segment ending at index i.
   * 6. We also update result with the maximum possible sum of two non-overlapping segments,
   *    which is the sum of the maximum length of a single segment ending
   *    at index j - 1 (dp[j]) and the length of the current segment (len).
   * 7. Finally, we return result, which represents the maximum win from two non-overlapping segments.
   *
   */
  const n = prizePositions.length;
  let dp = new Array(n + 1).fill(0);
  let j = 0;
  let result = 0;
  for (let i = 0; i < n; i++) {
    while (prizePositions[i] > prizePositions[j] + k) {
      j++;
    }
    let len = i - j + 1;
    dp[i + 1] = Math.max(dp[i], len);
    result = Math.max(result, dp[j] + len);
    console.log({ result });
  }
  console.log({ dp });

  return result;
}

for (const item of testCases) {
  console.log("Example:", item);

  const result = maximizeWin(item.prizePositions, item.k);
  console.log(result);
}
