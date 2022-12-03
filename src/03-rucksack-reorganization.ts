import { sum } from "./shared/math";

const toCompartments = (ruchsack: string[]): [string[], string[]] => {
  const a = ruchsack.slice(0, ruchsack.length / 2);
  const b = ruchsack.slice(ruchsack.length / 2);
  return [a, b];
};

const toGroupsOf3 = (
  groups: string[][][],
  ruchsack: string[]
): string[][][] => {
  if (groups[groups.length - 1].length < 3) {
    groups[groups.length - 1].push(ruchsack);
    return groups;
  }
  groups[groups.length] = [ruchsack];
  return groups;
};

const intersect = <T>(x: T[][]): T[] => {
  if (x.length === 0) return [];

  return x.reduce((a: any, c: any) => {
    return a.filter((item: any) => c.some((y: any) => y === item));
  }, x[0]);
};

const getPriority = (item: string): number => {
  if (item === item.toLowerCase()) {
    return item.charCodeAt(0) - 96;
  }

  return item.charCodeAt(0) - 38;
};

export const part1 = (data: string[]): number =>
  data
    .map((x) => x.split(""))
    .map(toCompartments)
    .map(intersect)
    .map((x) => [...new Set(x)])
    .flat()
    .map(getPriority)
    .reduce(sum);

export const part2 = (data: any): any =>
  data
    .map((x: string) => x.split(""))
    .reduce(toGroupsOf3, [[]])
    .map(intersect)
    .map((x: string[]) => [...new Set(x)])
    .flat()
    .map(getPriority)
    .reduce(sum);
