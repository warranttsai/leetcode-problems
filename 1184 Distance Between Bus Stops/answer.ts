import { testCases } from "./constants";

function distanceBetweenBusStops(
  distance: number[],
  start: number,
  destination: number
): number {
  const newStart = Math.min(start, destination);
  const newDestination = Math.max(start, destination);

  let clockwiseResult = 0,
    counterClockwiseResult = 0;
  for (let i = 0; i < distance.length; i++) {
    if (i > newStart - 1 && i <= newDestination - 1)
      clockwiseResult += distance[i];
    else counterClockwiseResult += distance[i];
  }

  return Math.min(clockwiseResult, counterClockwiseResult);
}

for (const item of testCases) {
  console.log("Example:", item);

  const result = distanceBetweenBusStops(
    item.distance,
    item.start,
    item.destination
  );
  console.log(result);
}
