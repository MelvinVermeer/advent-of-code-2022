import { arrayEqual, hasLength, intersect, rangeToArray } from "./shared/array";

export const part1 = (data: string[]): number =>
  data
    .map((x) => x.split(",").map(rangeToArray))
    .filter(([pair1, pair2]) => {
      const overlap = intersect([pair1, pair2]);
      return arrayEqual(overlap, pair1) || arrayEqual(overlap, pair2);
    }).length;

export const part2 = (data: string[]): number =>
  data
    .map((x) => x.split(",").map(rangeToArray))
    .map(intersect)
    .filter(hasLength).length;
