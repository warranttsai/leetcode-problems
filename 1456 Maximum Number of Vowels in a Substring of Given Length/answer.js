"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var maxNumVowels = function (s, k) {
    var maxNum = 0, numVowels = 0, left = 0;
    // Loop all the substrings
    for (var right = 0; right < s.length; right++) {
        // check if the current character is a vowel letter
        numVowels += constants_1.vowels.indexOf(s[right]) !== -1 ? 1 : 0;
        if (constants_1.vowels.indexOf(s[right]) !== -1)
            console.log("".concat(s[right], " is a vowel"));
        // check if the window is larger than k
        if (right - left + 1 > k) {
            console.log("Check before");
            if (constants_1.vowels.indexOf(s[right]) !== -1)
                console.log("Chop before, ".concat(s[left], " is a vowel"));
            numVowels -= constants_1.vowels.indexOf(s[left]) !== -1 ? 1 : 0;
            left++;
        }
        console.log("Current numVowels is ".concat(numVowels));
        // Record the maximum number
        maxNum = numVowels > maxNum ? numVowels : maxNum;
    }
    return maxNum;
};
for (var _i = 0, testCases_1 = constants_1.testCases; _i < testCases_1.length; _i++) {
    var item = testCases_1[_i];
    console.log("Example:", item);
    var result = maxNumVowels(item.s, item.k);
    console.log(result);
}
