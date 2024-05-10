"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
function maxEnvelopes(envelopes) {
    // Time limite exceeded
    // Sorting the envelopes by area size
    // const lenOfEnvelops = envelopes.length;
    // const sortedEnvelopesDESC = envelopes.sort(
    //   (a, b) => b[0] * b[1] - a[0] * a[1]
    // );
    // let maxNumOfEnvelope = 1;
    // function CanBeContained(currentIndex: number, counter: number) {
    //   if (currentIndex + 1 < lenOfEnvelops) {
    //     const currentEnvelop = sortedEnvelopesDESC[currentIndex];
    //     for (let i = 1; i < lenOfEnvelops - currentIndex; i++) {
    //       const nextEnvelope = sortedEnvelopesDESC[currentIndex + i];
    //       if (
    //         currentEnvelop[0] > nextEnvelope[0] &&
    //         currentEnvelop[1] > nextEnvelope[1]
    //       )
    //         CanBeContained(currentIndex + i, counter + 1);
    //     }
    //   }
    //   maxNumOfEnvelope = Math.max(maxNumOfEnvelope, counter);
    // }
    // for (let i = 0; i < lenOfEnvelops - 1; i++) CanBeContained(i, 1);
    // return maxNumOfEnvelope;
    if (envelopes.length === 0)
        return 0;
    function findIndex(dp, target) {
        var left = 0;
        var right = dp.length - 1;
        while (left <= right) {
            var mid = Math.floor((left + right) / 2);
            if (dp[mid] < target) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        return left;
    }
    // Sort envelopes by width in ascending order, if widths are equal, sort by height in descending order
    envelopes.sort(function (a, b) {
        if (a[0] === b[0])
            return b[1] - a[1];
        return a[0] - b[0];
    });
    console.log({ envelopes: envelopes });
    var dp = [];
    for (var _i = 0, envelopes_1 = envelopes; _i < envelopes_1.length; _i++) {
        var _a = envelopes_1[_i], width = _a[0], height = _a[1];
        console.log({ dp: dp });
        var index = findIndex(dp, height);
        console.log({ index: index });
        if (index === dp.length)
            dp.push(height);
        else
            dp[index] = height;
    }
    return dp.length;
}
for (var _i = 0, testCases_1 = constants_1.testCases; _i < testCases_1.length; _i++) {
    var item = testCases_1[_i];
    console.log("Example:", item);
    var result = maxEnvelopes(item);
    console.log(result);
}
