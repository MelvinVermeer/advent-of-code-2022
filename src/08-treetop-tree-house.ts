import { rangeToArray } from "./shared/array";
import { product } from "./shared/math";

type Grid = (number | string)[][];

const isVisible = (grid: Grid, row: number, column: number) => {
  const height = grid[row][column];

  const east = rangeToArray(`${column + 1}-${grid[0].length - 1}`);
  const west = rangeToArray(`0-${column - 1}`);
  const north = rangeToArray(`0-${row - 1}`);
  const south = rangeToArray(`${row + 1}-${grid.length - 1}`);

  if (
    column === grid[0].length - 1 ||
    east.every((eastColumn) => grid[row][eastColumn] < height)
  ) {
    return true;
  }

  if (
    column === 0 ||
    west.every((westColumn) => grid[row][westColumn] < height)
  ) {
    return true;
  }

  if (row === 0 || north.every((northRow) => grid[northRow][column] < height)) {
    return true;
  }

  if (
    row === grid.length - 1 ||
    south.every((southRow) => grid[southRow][column] < height)
  ) {
    return true;
  }

  return false;
};

export const part1 = (data: string[]): number => {
  const grid = data.map((row) => row.split("").map(Number));
  let visibleCount = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (isVisible(grid, r, c)) {
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
      const east = grid[r].slice(c + 1);
      const west = grid[r].slice(0, Math.max(c, 0)).reverse();
      const south = grid.slice(r + 1).map((row) => row[c]);
      const north = grid
        .slice(0, Math.max(r, 0))
        .map((row) => row[c])
        .reverse();

      const treeLines = [north, east, south, west].map((line) => {
        const blockingTreeIndex = line.findIndex((tree) => tree >= grid[r][c]);
        return blockingTreeIndex === -1 ? line.length : blockingTreeIndex + 1;
      });
      maxScore = Math.max(treeLines.reduce(product), maxScore);
    }
  }
  return maxScore;
};
