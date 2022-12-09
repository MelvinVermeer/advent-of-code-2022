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

const calculateScenicScore = (grid: Grid, row: number, column: number) => {
  // const height = grid[row][column];

  const east = rangeToArray(`${column + 1}-${grid[0].length - 1}`);
  const west = rangeToArray(`0-${column - 1}`);
  const north = rangeToArray(`0-${row - 1}`);
  const south = rangeToArray(`${row + 1}-${grid.length - 1}`);
  const trees: number[] = [];

  if (row === 3 && column === 2) {
    console.log({ north, east, south, west });
  }

  // if (row === 30 && column === 56) {
  //   console.log("");
  // }
  //east
  if (column !== grid[0].length - 1) {
    let highest = -1;
    let count = 0;
    for (let i = 0; i < east.length; i++) {
      if (grid[row][east[i]] > highest) {
        count++;
        highest = Number(grid[row][east[i]]);
      }
    }
    trees.push(count);
  }

  // west
  if (column !== 0) {
    let highest = -1;
    let count = 0;
    for (let i = west.length - 1; i > 0; i--) {
      if (grid[row][west[i]] > highest) {
        count++;
        highest = Number(grid[row][west[i]]);
      }
    }
    trees.push(count);
  }

  // north
  if (row !== 0) {
    let highest = -1;
    let count = 0;
    for (let i = north.length - 1; i > 0; i--) {
      if (grid[north[i]][column] > highest) {
        count++;
        highest = Number(grid[north[i]][column]);
      }
    }
    trees.push(count);
  }

  // south
  if (row !== grid.length - 1) {
    let highest = -1;
    let count = 0;
    for (let i = 0; i < south.length; i++) {
      if (grid[south[i]][column] > highest) {
        count++;
        highest = Number(grid[south[i]][column]);
      }
    }
    trees.push(count);
  }

  return trees;
};

export const part1 = (data: string[]): number => {
  const grid = data.map((row) => row.split("").map(Number));
  let visibleCount = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      const element = grid[r][c];
      const v = isVisible(grid, r, c);
      if (v) {
        visibleCount++;
      }
    }
  }
  // console.log(visibleCount);
  // printGrid(grid);
  return visibleCount;
};

export const part2 = (data: string[]): any => {
  const grid = data.map((row) => row.split("").map(Number));
  let maxScore = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      const y = calculateScenicScore(grid, r, c);
      const x = y.reduce(product);
      if (x > maxScore) {
        console.log({
          r,
          c,
          x,
          y,
          h: grid[r][c],
        });
      }
      maxScore = Math.max(maxScore, x);
    }
  }
  // console.log(visibleCount);
  // printGrid(grid);
  return maxScore;
};
