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
