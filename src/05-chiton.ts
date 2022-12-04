//https://adventofcode.com/2021/day/15

import { dijkstra } from "./shared/dijkstra";

const convertGridToGraph = (grid: number[][]) => {
  const graph: any = {};

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (y === grid.length - 1 && x === grid.length - 1) {
        graph[`${x},${y}`] = {};
        continue;
      }

      graph[`${x},${y}`] = {
        ...(grid[y + 1]?.[x] ? { [`${x},${y + 1}`]: grid[y + 1]?.[x] } : {}),
        ...(grid[y]?.[x + 1] ? { [`${x + 1},${y}`]: grid[y]?.[x + 1] } : {}),
        ...(grid[y - 1]?.[x] ? { [`${x},${y - 1}`]: grid[y - 1]?.[x] } : {}),
        ...(grid[y]?.[x - 1] ? { [`${x - 1},${y}`]: grid[y]?.[x - 1] } : {}),
      };
    }
  }

  return graph;
};

export const part1 = (data: string[]): number => {
  const grid = data.map((x) => x.split("").map(Number));
  const graph = convertGridToGraph(grid);
  const end = `${grid.length - 1},${grid.length - 1}`;
  return dijkstra(graph, "0,0", end);
};

export const part2 = (data: any): any => {
  return data;
};
