"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
function removeDuplicateLetters(s) {
    const stack = [];
    const seen = new Set();
    const lastIndex = new Map();
    // Preprocess the last index of each character
    for (let i = 0; i < s.length; i++)
        lastIndex.set(s[i], i);
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        // If the character is not in the stack
        if (!seen.has(char)) {
            // While the stack is not empty, the current character is lexicographically smaller than the top character,
            // and the top character appears later in the string, pop the top character from the stack
            while (stack.length > 0 &&
                char < stack[stack.length - 1] &&
                lastIndex.get(stack[stack.length - 1]) > i)
                seen.delete(stack.pop());
            // Add the current character to the stack and mark it as seen
            seen.add(char);
            stack.push(char);
        }
    }
    return stack.join("");
}
for (const item of constants_1.testCases) {
    console.log("Example:", item);
    const result = removeDuplicateLetters(item);
    console.log(result);
}
