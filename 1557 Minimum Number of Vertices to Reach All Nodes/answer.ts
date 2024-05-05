import { testCases } from "./constants";

function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
  const numSet = new Set<number>(Array.from(Array(n).keys()));

  for (const [_, to] of edges) numSet.delete(to);

  return [...numSet];
}

for (const item of testCases) {
  console.log("Example:", item);

  const result = findSmallestSetOfVertices(item.n, item.edges);
  console.log(result);
}
