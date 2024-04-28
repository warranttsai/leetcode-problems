"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
/**
 * @returns [[string, string]] => [[creator, id]]
 */
function mostPopularCreator(creators, ids, views) {
    var map = {};
    for (var i = 0; i < ids.length; i++) {
        if (map[creators[i]]) {
            var _a = map[creators[i]], popularity = _a.popularity, maxPopularity = _a.maxPopularity, mostViewed = _a.mostViewed;
            if (views[i] > maxPopularity) {
                // New video from the same creator has more views than the current maxPopularity
                // Update maxPopularity & mostViewed
                maxPopularity = views[i];
                mostViewed = ids[i];
            }
            else if (views[i] === maxPopularity) {
                // New video has the same popularity with the current record
                // Choose the video as the most viewed video by the lexicographical order
                mostViewed = ids[i] < mostViewed ? ids[i] : mostViewed;
            }
            // Adding the popularity (amount) with the new video's popularity
            map[creators[i]] = {
                popularity: popularity + views[i],
                maxPopularity: maxPopularity,
                mostViewed: mostViewed,
            };
        }
        else {
            map[creators[i]] = {
                popularity: views[i],
                maxPopularity: views[i],
                mostViewed: ids[i],
            };
        }
        console.log(map);
    }
    // Found the creator with the most viewed video
    var maxP = 0;
    Object.keys(map).forEach(function (e) {
        if (map[e].popularity > maxP) {
            maxP = map[e].popularity;
        }
    });
    var result = [];
    Object.keys(map).forEach(function (e) {
        if (map[e].popularity === maxP) {
            result.push([e, map[e].mostViewed]);
        }
    });
    return result;
}
for (var _i = 0, testCases_1 = constants_1.testCases; _i < testCases_1.length; _i++) {
    var item = testCases_1[_i];
    console.log("Example:", item);
    var result = mostPopularCreator(item.creators, item.ids, item.views);
    console.log(result);
}
