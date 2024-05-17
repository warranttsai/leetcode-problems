"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
function largestTriangleArea(points) {
    const sortedPointsByXDesc = points.sort((a, b) => b[0] - a[0]);
    // Iterate through all possible combinations of 3 points
    let result = 0;
    for (let i = 0; i < sortedPointsByXDesc.length - 2; i++) {
        for (let j = i + 1; j < sortedPointsByXDesc.length - 1; j++) {
            for (let k = j + 1; k < sortedPointsByXDesc.length; k++) {
                const [x1, y1] = sortedPointsByXDesc[i];
                const [x2, y2] = sortedPointsByXDesc[j];
                const [x3, y3] = sortedPointsByXDesc[k];
                // Calculate the area of the triangle using Heron's formula
                const a = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
                const b = Math.sqrt(Math.pow((x2 - x3), 2) + Math.pow((y2 - y3), 2));
                const c = Math.sqrt(Math.pow((x3 - x1), 2) + Math.pow((y3 - y1), 2));
                const s = (a + b + c) / 2;
                // Handle the exception that some of the side length are 0, which cased NaN as result
                const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
                // Update the maximum area if the current triangle has a larger area
                result = Math.max(result, area ? area : 0);
            }
        }
    }
    return +result.toFixed(5);
}
for (const item of constants_1.testCases) {
    console.log("Example:", item);
    const result = largestTriangleArea(item);
    console.log(result);
}
