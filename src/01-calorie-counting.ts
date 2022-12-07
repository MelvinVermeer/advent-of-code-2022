import { sum } from "./shared/math";
import { descending } from "./shared/sorting";

export const part1 = (elves: string[][]): any =>
  Math.max(...elves.map((elf) => elf.map(Number).reduce(sum)));

export const part2 = (elves: string[][]): any =>
  elves
    .map((elf) => elf.map(Number).reduce(sum))
    .sort(descending)
    .slice(0, 3)
    .reduce(sum);
