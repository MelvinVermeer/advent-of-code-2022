export const unique = <T>(array: T[]): T[] => [...new Set(array)];

export const intersect = <T>(arrays: T[][]): T[] =>
  arrays.reduce(
    (intersection, array) =>
      intersection.filter((item) => array.some((x) => x === item)),
    arrays[0]
  );

export const splitInHalf = <T>(array: T[]): [T[], T[]] => [
  array.slice(0, array.length / 2),
  array.slice(array.length / 2),
];

export const groupsOfSizeN =
  (n: number) =>
  <T>(groups: T[][], rucksack: T): T[][] => {
    if (groups[groups.length - 1].length < n) {
      groups[groups.length - 1].push(rucksack);
      return groups;
    }
    groups[groups.length] = [rucksack];
    return groups;
  };

export const arrayEqual = <T>(a: T[], b: T[]): boolean =>
  a.length === b.length &&
  a.every((item) => b.some((x) => x === item)) &&
  b.every((item) => a.some((x) => x === item));

/** Converts a range like 4-7 to an array [4,5,6,7] */
export const rangeToArray = (range: string) => {
  const [start, end] = range.split("-").map(Number);
  return new Array(end - start + 1).fill(start).map((n, i) => n + i);
};

export const hasLength = <T>(array: T[]) => array.length > 0;

export const transpose = <T>(prev: T[][], next: T[]) =>
  next.map((_, i) => (prev[i] ?? []).concat(next[i]));

export const last = <T>(array: T[]) => array[array.length - 1];
