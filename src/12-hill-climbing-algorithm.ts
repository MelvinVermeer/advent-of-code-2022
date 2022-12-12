import { dijkstra } from "./shared/dijkstra";

type Position = [number, number];
type Grid = number[][];

const convertGridToGraph = (grid: Grid) => {
  const graph: any = {};

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const height = grid[r][c];

      graph[`${r},${c}`] = {};

      if (grid[r + 1]?.[c] <= height + 1) {
        graph[`${r},${c}`][`${r + 1},${c}`] = 1;
      }

      if (grid[r]?.[c + 1] <= height + 1) {
        graph[`${r},${c}`][`${r},${c + 1}`] = 1;
      }

      if (grid[r - 1]?.[c] <= height + 1) {
        graph[`${r},${c}`][`${r - 1},${c}`] = 1;
      }

      if (grid[r]?.[c - 1] <= height + 1) {
        graph[`${r},${c}`][`${r},${c - 1}`] = 1;
      }
    }
  }

  return graph;
};

const convertGridToGraph2 = (grid: Grid) => {
  const graph: any = {};

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const height = grid[r][c];

      graph[`${r},${c}`] = {};

      if (grid[r + 1]?.[c] >= height - 1) {
        graph[`${r},${c}`][`${r + 1},${c}`] = 1;
      }

      if (grid[r]?.[c + 1] >= height - 1) {
        graph[`${r},${c}`][`${r},${c + 1}`] = 1;
      }

      if (grid[r - 1]?.[c] >= height - 1) {
        graph[`${r},${c}`][`${r - 1},${c}`] = 1;
      }

      if (grid[r]?.[c - 1] >= height - 1) {
        graph[`${r},${c}`][`${r},${c - 1}`] = 1;
      }
    }
  }

  return graph;
};

export const part1 = (data: string[]): number => {
  const intermediate = data.map((x) => x.split(""));

  let start: Position = [0, 0];
  let end: Position = [0, 0];
  for (let r = 0; r < intermediate.length; r++) {
    for (let c = 0; c < intermediate[0].length; c++) {
      if (intermediate[r][c] === "S") {
        start = [r, c];
      }
      if (intermediate[r][c] === "E") {
        end = [r, c];
      }
    }
  }

  intermediate[start[0]][start[1]] = "a";
  intermediate[end[0]][end[1]] = "z";

  const grid = intermediate.map((row) => row.map((cell) => cell.charCodeAt(0)));
  const graph = convertGridToGraph(grid);

  return dijkstra(graph, start.join(","))[end.join(",")];
};

export const part2 = (data: string[]): number => {
  const intermediate = data.map((x) => x.split(""));

  let starts: Position[] = [];
  let end: Position = [0, 0];
  for (let r = 0; r < intermediate.length; r++) {
    for (let c = 0; c < intermediate[0].length; c++) {
      if (intermediate[r][c] === "S") {
        intermediate[r][c] = "a";
      }
      if (intermediate[r][c] === "E") {
        end = [r, c];
      }
      if (intermediate[r][c] === "a") {
        starts.push([r, c]);
      }
    }
  }
  intermediate[end[0]][end[1]] = "z";

  const grid = intermediate.map((row) => row.map((cell) => cell.charCodeAt(0)));
  const graph = convertGridToGraph2(grid);
  const distances = dijkstra(graph, end.join(","));
  const paths = starts.map((s) => distances[s.join(",")]);

  return Math.min(...paths);
};
