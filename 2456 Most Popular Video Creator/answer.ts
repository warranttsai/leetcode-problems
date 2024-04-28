import { testCases } from "./constants";

/**
 * @returns [[string, string]] => [[creator, id]]
 */
function mostPopularCreator(
  creators: string[],
  ids: string[],
  views: number[]
): string[][] {
  let map: {
    [key: string]: {
      popularity: number;
      maxPopularity: number;
      mostViewed: string;
    };
  } = {};

  for (let i = 0; i < ids.length; i++) {
    if (map[creators[i]]) {
      let { popularity, maxPopularity, mostViewed } = map[creators[i]];

      if (views[i] > maxPopularity) {
        // New video from the same creator has more views than the current maxPopularity
        // Update maxPopularity & mostViewed
        maxPopularity = views[i];
        mostViewed = ids[i];
      } else if (views[i] === maxPopularity) {
        // New video has the same popularity with the current record
        // Choose the video as the most viewed video by the lexicographical order
        mostViewed = ids[i] < mostViewed ? ids[i] : mostViewed;
      }

      // Adding the popularity (amount) with the new video's popularity
      map[creators[i]] = {
        popularity: popularity + views[i],
        maxPopularity,
        mostViewed,
      };
    } else {
      map[creators[i]] = {
        popularity: views[i],
        maxPopularity: views[i],
        mostViewed: ids[i],
      };
    }
  }

  // Found the creator with the most viewed video
  let maxP = 0;
  Object.keys(map).forEach((e) => {
    if (map[e].popularity > maxP) {
      maxP = map[e].popularity;
    }
  });

  const result: string[][] = [];
  Object.keys(map).forEach((e) => {
    if (map[e].popularity === maxP) {
      result.push([e, map[e].mostViewed]);
    }
  });

  return result;
}

for (const item of testCases) {
  console.log("Example:", item);

  const result = mostPopularCreator(item.creators, item.ids, item.views);
  console.log(result);
}
