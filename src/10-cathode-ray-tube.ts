import { sum } from "./shared/math";

export const part1 = (data: string[]): number => {
  let x = 1;

  const strengths: number[] = [];
  const xs: number[] = [];

  const actions = data.flatMap((x) => (x === "noop" ? "noop" : x.split(" ")));

  for (let i = 1; i < actions.length; i++) {
    const row = actions[i];

    if (i % 40 === 20) {
      console.log({ i, x });
      strengths.push(i * x);
    }

    if (row !== "noop" && row !== "addx") {
      x = x + Number(row);
      xs.push(x);
    }
  }

  console.log("length", actions.length);
  console.log("strengts", strengths);
  console.log("sum", strengths.reduce(sum));
  console.log(xs);
  return strengths.reduce(sum);
};

export const part2 = (data: any): any => {
  return data;
};
