import { sum } from "./shared/math";

export const part1 = (data: string[]): number => {
  let x = 1;
  let cycleCount = 0;
  const strengths: number[] = [];

  for (let i = 0; i < data.length; i++) {
    const row = data[i];

    if (row === "noop") {
      cycleCount++;
      if (cycleCount % 40 === 20) {
        strengths.push(x * cycleCount);
      }
    } else {
      cycleCount++;
      if (cycleCount % 40 === 20) {
        strengths.push(x * cycleCount);
      }
      cycleCount++;
      if (cycleCount % 40 === 20) {
        strengths.push(x * cycleCount);
      }

      x += Number(row.slice(5, row.length));
    }
  }
  return strengths.reduce(sum);
};

export const part2 = (data: any): any => {
  return data;
};
