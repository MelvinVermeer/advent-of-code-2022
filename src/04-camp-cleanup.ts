import { intersect } from "./shared/array";

const arrayEqual = <T>(a: T[], b: T[]): boolean => {
  return a.length === b.length && a.every((item) => b.some((x) => x === item));
};

const rangeToArray = (s: string) => {
  const [start, end] = s.split("-").map(Number);
  const a = new Array(end - start + 1).fill(start);
  return a.map((n, i) => n + i);
};

export const part1 = (data: string[]): number => {
  const a = data
    .map((x) => x.split(",").map(rangeToArray))
    .filter(
      (x) => arrayEqual(intersect(x), x[0]) || arrayEqual(intersect(x), x[1])
    );

  return a.length;
};

export const part2 = (data: any): any => {
  return data;
};
