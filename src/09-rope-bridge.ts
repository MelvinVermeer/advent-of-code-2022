import { last, unique } from "./shared/array";

type Position = [number, number];

const navigate: any = {
  U: [0, 1],
  R: [1, 0],
  D: [0, -1],
  L: [-1, 0],
};

const arraySum = (a: number[], b: number[]) => a.map((n, i) => n + b[i]);

const getNewTailLocation = (head: Position, tail: Position): Position => {
  const xdif = Math.abs(head[0] - tail[0]);
  const ydif = Math.abs(head[1] - tail[1]);

  if (Math.max(xdif, ydif) <= 1) {
    return [...tail];
  }

  let newx = tail[0];
  if (head[0] > tail[0]) newx++;
  if (head[0] < tail[0]) newx--;

  let newy = tail[1];
  if (head[1] > tail[1]) newy++;
  if (head[1] < tail[1]) newy--;

  return [newx, newy];
};

export const part1 = (data: string[]): number => {
  const instructions = data
    .map((x) => x.split(" "))
    .map(([d, n]) => [d, Number(n)]);

  let head = [0, 0];
  const tail: Position[] = [[0, 0]];

  for (const [direction, steps] of instructions) {
    for (let i = 0; i < steps; i++) {
      head = arraySum(navigate[direction], head);
      // if tail is distance away move tail (by pushing)

      const newTail: Position = getNewTailLocation(
        head as Position,
        last(tail)
      );
      tail.push(newTail);
    }
  }

  const k = unique(tail.map(([x, y]) => `${x},${y}`));

  return k.length;
};

export const part2 = (data: any): any => {
  return data;
};
