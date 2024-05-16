"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
function exclusiveTime(n, logs) {
    var processes = {};
    for (var i = 0; i < n; i++)
        processes[i] = 0;
    var stack = [];
    var previousTimestamp = -1;
    for (var _i = 0, logs_1 = logs; _i < logs_1.length; _i++) {
        var log = logs_1[_i];
        var _a = log.split(":"), id = _a[0], type = _a[1], timestamp = _a[2];
        var currentTimestamp = +timestamp;
        if (type === "start") {
            if (stack.length > 0) {
                var lastStartedId = stack[stack.length - 1];
                processes[lastStartedId] += currentTimestamp - previousTimestamp;
            }
            stack.push(id);
            previousTimestamp = currentTimestamp;
        }
        else {
            var duration = currentTimestamp - previousTimestamp + 1;
            var lastStartedId = stack.pop();
            processes[lastStartedId] += duration;
            previousTimestamp = currentTimestamp + 1;
        }
    }
    var result = Object.values(processes);
    return result;
}
for (var _i = 0, testCases_1 = constants_1.testCases; _i < testCases_1.length; _i++) {
    var item = testCases_1[_i];
    console.log("Example:", item);
    var result = exclusiveTime(item.n, item.logs);
    console.log(result);
}
