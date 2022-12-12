const edges = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
];

const getNodes = (input: string[]) => {
  let start: any = undefined;
  let end: any = undefined;

  let map = input.map((row, y) =>
    row.split("").map((char, x) => {
      let node: any = {
        x,
        y,
        visited: false,
        height: char.charCodeAt(0) - 96,
        distance: Infinity,
        edgeNodes: [],
      };

      if (char == "S") (node.height = 1), (start = node);
      if (char == "E") (node.height = 26), (end = node);
      return node;
    })
  );

  map.forEach((r) => {
    r.forEach((node) => {
      edges.forEach((edge) => {
        if (map[node.y + edge[1]]) {
          let n = map[node.y + edge[1]][node.x + edge[0]];
          n && node.edgeNodes.push(n);
        }
      });
    });
  });

  return { map, start, end };
};

const solution = (data: string[]) => {
  const { start, end } = getNodes(data);

  function solve(node: any) {
    node.distance = 0;
    let queue = [node];
    let solution = Array(2).fill(-1);
    while (queue.length) {
      let node = queue.shift();
      for (const edge of node.edgeNodes) {
        if (!edge.visited && node.height - edge.height < 2) {
          let distance = node.distance + 1;
          if (edge.x == 0 && edge.y == start.y && solution[0] == -1) {
            solution[0] = distance;
          } else if (edge.x == 0 && solution[1] == -1) {
            solution[1] = distance;
          }
          edge.visited = true;
          edge.distance = distance;
          queue.push(edge);
          if (solution.indexOf(-1) == -1) return solution;
        }
      }
    }
    return solution;
  }

  return solve(end);
};

export const part1 = (data: string[]): number => {
  return solution(data)[0];
};

export const part2 = (data: string[]): number => {
  return solution(data)[1];
};
