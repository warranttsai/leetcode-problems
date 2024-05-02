"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
function largestTriangleArea(points) {
    // [x, y]
    var sortedPointsByXDesc = points.sort(function (a, b) { return b[0] - a[0]; });
    // Iterate through all possible combinations of 3 points
    var result = 0;
    for (var i = 0; i < sortedPointsByXDesc.length - 2; i++) {
        for (var j = i + 1; j < sortedPointsByXDesc.length - 1; j++) {
            for (var k = j + 1; k < sortedPointsByXDesc.length; k++) {
                var _a = sortedPointsByXDesc[i], x1 = _a[0], y1 = _a[1];
                var _b = sortedPointsByXDesc[j], x2 = _b[0], y2 = _b[1];
                var _c = sortedPointsByXDesc[k], x3 = _c[0], y3 = _c[1];
                // Calculate the area of the triangle using Heron's formula
                var a = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
                var b = Math.sqrt(Math.pow((x2 - x3), 2) + Math.pow((y2 - y3), 2));
                var c = Math.sqrt(Math.pow((x3 - x1), 2) + Math.pow((y3 - y1), 2));
                var s = (a + b + c) / 2;
                var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
                // Update the maximum area if the current triangle has a larger area
                result = Math.max(result, area ? area : 0);
                console.log(result, area, a, b, c, s, s * (s - a) * (s - b) * (s - c));
            }
        }
    }
    return +result.toFixed(5);
}
for (var _i = 0, testCases_1 = constants_1.testCases; _i < testCases_1.length; _i++) {
    var item = testCases_1[_i];
    console.log("Example:", item);
    var result = largestTriangleArea(item);
    console.log(result);
}
