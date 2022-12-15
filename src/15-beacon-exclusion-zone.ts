import { unique } from "./shared/array";

type Position = [number, number];

const distance = ([ax, ay]: Position, [bx, by]: Position) =>
  Math.abs(ax - bx) + Math.abs(ay - by);

export const part1 = (data: string[], testLine: number): any => {
  const parsed = data.map((line) => {
    const [l, r] = line.split(":");
    const sensor = l
      .split(" at ")[1]
      .split(", ")
      .map((o) => Number(o.substring(2))) as Position;
    const beacon = r
      .split(" at ")[1]
      .split(", ")
      .map((o) => Number(o.substring(2))) as Position;
    return { sensor, beacon, distance: distance(sensor, beacon) };
  });

  let xs_taken_on_y_10 = [];

  for (const { sensor, beacon, distance } of parsed) {
    const [sx, sy] = sensor;
    const [bx, by] = beacon;

    const l = Math.abs(sy - testLine);
    if (l <= distance) {
      const width = Math.abs(l - distance) + 1;

      for (let i = 0; i < width; i++) {
        xs_taken_on_y_10.push(sx + i); //?
        xs_taken_on_y_10.push(sx - i); //?
      }
      // sensor is within distance of y10

      xs_taken_on_y_10.push(sx); //?
    }
  }

  return unique(xs_taken_on_y_10).filter(
    (x) =>
      !parsed.some((s) => s.beacon[0] === x && s.beacon[1] === testLine) &&
      !parsed.some((s) => s.sensor[0] === x && s.sensor[1] === testLine)
  ).length;
};

export const part2 = (data: any): any => {
  return data;
};
