"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
function removeDuplicateLetters(s) {
    var stack = [];
    var seen = new Set();
    var lastIndex = new Map();
    // Preprocess the last index of each character
    for (var i = 0; i < s.length; i++) {
        lastIndex.set(s[i], i);
    }
    console.log({ lastIndex: lastIndex });
    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        // If the character is not in the stack
        if (!seen.has(char)) {
            console.log({ seen: seen, stack: stack });
            // While the stack is not empty, the current character is lexicographically smaller than the top character,
            // and the top character appears later in the string, pop the top character from the stack
            while (stack.length > 0 &&
                char < stack[stack.length - 1] &&
                lastIndex.get(stack[stack.length - 1]) > i) {
                seen.delete(stack.pop());
            }
            // Add the current character to the stack and mark it as seen
            seen.add(char);
            stack.push(char);
        }
    }
    return stack.join("");
}
for (var _i = 0, testCases_1 = constants_1.testCases; _i < testCases_1.length; _i++) {
    var item = testCases_1[_i];
    console.log("Example:", item);
    var result = removeDuplicateLetters(item);
    console.log(result);
}
