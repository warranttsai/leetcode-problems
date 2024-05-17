"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
function findSmallestSetOfVertices(n, edges) {
    const numSet = new Set(Array.from(Array(n).keys()));
    for (const [_, to] of edges)
        numSet.delete(to);
    return [...numSet];
}
for (const item of constants_1.testCases) {
    console.log("Example:", item);
    const result = findSmallestSetOfVertices(item.n, item.edges);
    console.log(result);
}
