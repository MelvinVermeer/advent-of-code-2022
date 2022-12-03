import { groupsOfSizeN, intersect, splitInHalf, unique } from "./shared/array";
import { sum } from "./shared/math";
import { stringAsCharArray } from "./shared/string";

type Rucksacks = string[][][];

const getPriority = (item: string): number => {
  if (item === item.toLowerCase()) {
    return item.charCodeAt(0) - 96;
  }

  return item.charCodeAt(0) - 38;
};

const sumPriorities = (arrays: Rucksacks) =>
  arrays.map(intersect).flatMap(unique).map(getPriority).reduce(sum);

export const part1 = (data: string[]): number =>
  sumPriorities(data.map(stringAsCharArray).map(splitInHalf));

export const part2 = (data: string[]): number =>
  sumPriorities(
    data.map(stringAsCharArray).reduce(groupsOfSizeN(3), [[]] as Rucksacks)
  );
