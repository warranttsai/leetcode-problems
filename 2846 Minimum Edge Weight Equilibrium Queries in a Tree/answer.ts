import { testCases } from "./constants";

function minOperationsQueries(
  n: number,
  edges: number[][],
  queries: number[][]
): number[] {
  return [];
}

for (const item of testCases) {
  console.log("Example:", item);

  const result = minOperationsQueries(item.n, item.edges, item.queries);
  console.log(result);
}
