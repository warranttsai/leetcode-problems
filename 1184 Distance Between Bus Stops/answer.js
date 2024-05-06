"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
function distanceBetweenBusStops(distance, start, destination) {
    var newStart = Math.min(start, destination);
    var newDestination = Math.max(start, destination);
    var clockwiseResult = 0, counterClockwiseResult = 0;
    for (var i = 0; i < distance.length; i++) {
        if (i > newStart - 1 && i <= newDestination - 1)
            clockwiseResult += distance[i];
        else
            counterClockwiseResult += distance[i];
    }
    console.log({ clockwiseResult: clockwiseResult, counterClockwiseResult: counterClockwiseResult });
    return Math.min(clockwiseResult, counterClockwiseResult);
}
for (var _i = 0, testCases_1 = constants_1.testCases; _i < testCases_1.length; _i++) {
    var item = testCases_1[_i];
    console.log("Example:", item);
    var result = distanceBetweenBusStops(item.distance, item.start, item.destination);
    console.log(result);
}
