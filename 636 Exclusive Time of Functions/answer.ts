import { testCases } from "./constants";

function exclusiveTime(n: number, logs: string[]): number[] {
  let processes: any = {};
  for (let i = 0; i < n; i++) processes[i] = 0;

  let stack: string[] = [];
  let previousTimestamp = -1;

  for (const log of logs) {
    const [id, type, timestamp] = log.split(":");
    const currentTimestamp = +timestamp;

    if (type === "start") {
      if (stack.length > 0) {
        const lastStartedId = stack[stack.length - 1];
        processes[lastStartedId] += currentTimestamp - previousTimestamp;
      }
      stack.push(id);
      previousTimestamp = currentTimestamp;
    } else {
      const duration = currentTimestamp - previousTimestamp + 1;
      const lastStartedId = stack.pop();
      processes[lastStartedId as string] += duration;
      previousTimestamp = currentTimestamp + 1;
    }
  }

  const result: number[] = Object.values(processes);
  return result;
}

for (const item of testCases) {
  console.log("Example:", item);

  const result = exclusiveTime(item.n, item.logs);
  console.log(result);
}
