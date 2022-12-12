import { product } from "./shared/math";

type Grid = (number | string)[][];

const getTreeLines = (grid: Grid, r: number, c: number) => ({
  north: grid.slice(0, Math.max(r, 0)).map((row) => row[c]),
  east: grid[r].slice(c + 1),
  south: grid.slice(r + 1).map((row) => row[c]),
  west: grid[r].slice(0, Math.max(c, 0)),
});

export const part1 = (data: string[]): number => {
  const grid = data.map((row) => row.split("").map(Number));
  let visibleCount = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      const { north, east, south, west } = getTreeLines(grid, r, c);
      const treeLines = [north, east, south, west]
        .map((line) => line.filter((tree) => tree >= grid[r][c]))
        .map((x) => x.length);

      const isVisible = treeLines.some((line) => line === 0);
      if (isVisible) {
        visibleCount++;
      }
    }
  }

  return visibleCount;
};

export const part2 = (data: string[]): number => {
  const grid = data.map((row) => row.split("").map(Number));
  let maxScore = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      const { north, east, south, west } = getTreeLines(grid, r, c);
      const treeLines = [north.reverse(), east, south, west.reverse()].map(
        (line) => {
          const blockingTreeIndex = line.findIndex(
            (tree) => tree >= grid[r][c]
          );
          return blockingTreeIndex === -1 ? line.length : blockingTreeIndex + 1;
        }
      );
      maxScore = Math.max(treeLines.reduce(product), maxScore);
    }
  }

  return maxScore;
};
