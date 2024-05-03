"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
function countMatches(items, ruleKey, ruleValue) {
    var dict = {
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
    return items.reduce(function (count, item) {
        return item[dict[ruleKey]] === ruleValue ? count + 1 : count;
    }, 0);
}
for (var _i = 0, testCases_1 = constants_1.testCases; _i < testCases_1.length; _i++) {
    var item = testCases_1[_i];
    console.log("Example:", item);
    var result = countMatches(item.items, item.ruleKey, item.ruleValue);
    console.log(result);
}
