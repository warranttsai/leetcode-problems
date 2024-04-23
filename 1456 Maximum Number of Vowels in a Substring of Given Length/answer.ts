import { testCases, vowels } from "./constants";

const maxNumVowels = (s: string, k: number): number => {
  let maxNum = 0,
    numVowels = 0,
    left = 0;
  // Loop all the substrings
  for (let right = 0; right < s.length; right++) {
    // check if the current character is a vowel letter
    numVowels += vowels.indexOf(s[right]) !== -1 ? 1 : 0;
    if (vowels.indexOf(s[right]) !== -1) console.log(`${s[right]} is a vowel`);

    // check if the window is larger than k
    if (right - left + 1 > k) {
      // check if the letter on the left side of window is a vowel
      numVowels -= vowels.indexOf(s[left]) !== -1 ? 1 : 0;
      left++;
    }

    maxNum = numVowels > maxNum ? numVowels : maxNum;
  }

  return maxNum;
};

for (const item of testCases) {
  console.log("Example:", item);

  const result = maxNumVowels(item.s, item.k);
  console.log(result);
}
