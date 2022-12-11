import { groupsOfSizeN } from "./shared/array";
import { sum } from "./shared/math";

export const part1 = (data: string[]): number => {
  let x = 1;
  let cycleCount = 0;
  const strengths: number[] = [];

  for (let i = 0; i < data.length; i++) {
    const row = data[i];

    if (row === "noop") {
      cycleCount++;
      if (cycleCount % 40 === 20) {
        strengths.push(x * cycleCount);
      }
    } else {
      cycleCount++;
      if (cycleCount % 40 === 20) {
        strengths.push(x * cycleCount);
      }
      cycleCount++;
      if (cycleCount % 40 === 20) {
        strengths.push(x * cycleCount);
      }

      x += Number(row.slice(5, row.length));
    }
  }
  return strengths.reduce(sum);
};

export const part2 = (data: string[]): any => {
  let spritePos = 1;

  let screen = "";

  for (let i = 0; i < data.length; i++) {
    const row = data[i];

    if (row === "noop") {
      screen = xxxx(spritePos, screen);
    } else {
      screen = xxxx(spritePos, screen);
      screen = xxxx(spritePos, screen);

      spritePos += Number(row.slice(5, row.length));
    }
  }

  return screen
    .split("")
    .reduce(groupsOfSizeN(40), [[]] as string[][])
    .map((x) => x.join(""))
    .join("\n");
};

function xxxx(spritePos: number, screen: string) {
  if (
    spritePos >= (screen.length % 40) - 1 &&
    spritePos <= (screen.length % 40) + 1
  ) {
    screen += "#";
  } else {
    screen += ".";
  }
  return screen;
}
