"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
function compareVersion(version1, version2) {
    const version1Arr = version1.split(".");
    const version2Arr = version2.split(".");
    for (let i = 0; i <
        (version1Arr.length > version2Arr.length
            ? version1Arr.length
            : version2Arr.length); i++) {
        if ((version1Arr[i] ? +version1Arr[i] : 0) >
            (version2Arr[i] ? +version2Arr[i] : 0))
            return 1;
        else if ((version1Arr[i] ? +version1Arr[i] : 0) <
            (version2Arr[i] ? +version2Arr[i] : 0))
            return -1;
    }
    return 0;
}
for (const item of constants_1.testCases) {
    console.log("Example:", item);
    const result = compareVersion(item.version1, item.version2);
    console.log(result);
}
