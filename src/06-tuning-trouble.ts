import { unique } from "./shared/array";

const uniqueSlice = (size: number) => (_: any, i: number, array: any[]) =>
  unique(array.slice(i - (size - 1), i + 1)).length === size;

export const part1 = (data: string): number =>
  data.split("").findIndex(uniqueSlice(4)) + 1;

export const part2 = (data: string): number =>
  data.split("").findIndex(uniqueSlice(14)) + 1;
