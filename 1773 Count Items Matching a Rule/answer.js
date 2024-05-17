"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
function countMatches(items, ruleKey, ruleValue) {
    const dict = {
        type: 0,
        color: 1,
        name: 2,
    };
    // Solution 1
    // let result = 0;
    // for (const item of items) if (item[dict[ruleKey]] === ruleValue) result++;
    // return result;
    // Solution 2
    // return items.filter((item) => item[dict[ruleKey]] === ruleValue).length;
    // Solution 3
    return items.reduce((count, item) => {
        return item[dict[ruleKey]] === ruleValue ? count + 1 : count;
    }, 0);
}
for (const item of constants_1.testCases) {
    console.log("Example:", item);
    const result = countMatches(item.items, item.ruleKey, item.ruleValue);
    console.log(result);
}
