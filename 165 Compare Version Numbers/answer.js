"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
function compareVersion(version1, version2) {
    // Versions is incremental. Calculate the sum of the version number to recognise the latest version
    // const version1Arr = version1.split(".").reverse();
    // let sumVersion1NumArr = version1Arr
    //   .map((item, index) => BigInt(item) * BigInt(10) ** BigInt(index))
    //   .reduce(
    //     (accumulator, currentValue) => accumulator + currentValue,
    //     BigInt(0)
    //   );
    // const version2Arr = version2.split(".").reverse();
    // let sumVersion2NumArr = version2Arr
    //   .map((item, index) => BigInt(item) * BigInt(10) ** BigInt(index))
    //   .reduce(
    //     (accumulator, currentValue) => accumulator + currentValue,
    //     BigInt(0)
    //   );
    // if the version number has more digits from the others, we have to make up the weight by calculate the difference between number of digits
    // E.g., version1  = "7.5.2.4", version2 = "7.5.3"
    // sumVersion1NumArr =
    //   version1Arr.length < version2Arr.length
    //     ? sumVersion1NumArr * 10 ** (version2Arr.length - version1Arr.length)
    //     : sumVersion1NumArr;
    // sumVersion2NumArr =
    //   version2Arr.length < version1Arr.length
    //     ? sumVersion2NumArr * 10 ** (version1Arr.length - version2Arr.length)
    //     : sumVersion2NumArr;
    // console.log({ sumVersion1NumArr, sumVersion2NumArr });
    // return sumVersion1NumArr < sumVersion2NumArr
    //   ? -1
    //   : sumVersion1NumArr === sumVersion2NumArr
    //   ? 0
    //   : 1;
    var version1Arr = version1.split(".");
    var lenVersion1Arr = version1Arr.length;
    var version2Arr = version2.split(".");
    var lenVersion2Arr = version2Arr.length;
    for (var i = 0; i < (lenVersion1Arr > lenVersion2Arr ? lenVersion1Arr : lenVersion2Arr); i++) {
        if ((version1Arr[i] ? +version1Arr[i] : 0) >
            (version2Arr[i] ? +version2Arr[i] : 0))
            return 1;
        else if ((version1Arr[i] ? +version1Arr[i] : 0) <
            (version2Arr[i] ? +version2Arr[i] : 0))
            return -1;
    }
    return 0;
}
for (var _i = 0, testCases_1 = constants_1.testCases; _i < testCases_1.length; _i++) {
    var item = testCases_1[_i];
    console.log("Example:", item);
    var result = compareVersion(item.version1, item.version2);
    console.log(result);
}
