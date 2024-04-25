"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const maxNumVowels = (s, k) => {
    let maxNum = 0, numVowels = 0, left = 0;
    // Loop all the substrings
    for (let right = 0; right < s.length; right++) {
        // check if the current character is a vowel letter
        numVowels += constants_1.vowels.indexOf(s[right]) !== -1 ? 1 : 0;
        if (constants_1.vowels.indexOf(s[right]) !== -1)
            console.log(`${s[right]} is a vowel`);
        // check if the window is larger than k
        if (right - left + 1 > k) {
            // check if the letter on the left side of window is a vowel
            numVowels -= constants_1.vowels.indexOf(s[left]) !== -1 ? 1 : 0;
            left++;
        }
        maxNum = numVowels > maxNum ? numVowels : maxNum;
    }
    return maxNum;
};
for (const item of constants_1.testCases) {
    console.log("Example:", item);
    const result = maxNumVowels(item.s, item.k);
    console.log(result);
}
