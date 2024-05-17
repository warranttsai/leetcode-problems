"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
function minOperationsQueries(n, edges, queries) {
    return [];
}
for (const item of constants_1.testCases) {
    console.log("Example:", item);
    const result = minOperationsQueries(item.n, item.edges, item.queries);
    console.log(result);
}
