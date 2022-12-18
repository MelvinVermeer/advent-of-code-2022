import { arrayEqual } from "./shared/array";
import { sum } from "./shared/math";

type Position = [number, number, number]; // x,y,z

const neighbors = [
  [0, 0, 1],
  [0, 0, -1],
  [0, 1, 0],
  [0, -1, 0],
  [1, 0, 0],
  [-1, 0, 0],
];

export const part1 = (data: string[]): number => {
  const cubePositions = data.map(
    (line) => line.split(",").map(Number) as Position
  );

  const positionSet = new Set();
  cubePositions.forEach(([x, y, z]) => {
    positionSet.add(`${x},${y},${z}`);
  });

  return cubePositions
    .map(
      ([x, y, z]) =>
        neighbors.filter(
          (n) => !positionSet.has(`${x + n[0]},${y + n[1]},${z + n[2]}`)
        ).length
    )
    .reduce(sum);
};

export const part2 = (data: any): any => {
  return data;
};
