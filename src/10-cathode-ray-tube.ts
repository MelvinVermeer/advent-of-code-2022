export const part1 = (data: string[]): number => {
  let x = 1;
  let cycleCount = 0; // start at 0 or 1?

  const strengts: number[] = [];

  for (let i = 0; i < data.length; i++) {
    const row = data[i];

    if (row === "noop") {
      cycleCount++;
    } else {
    }

    if (cycleCount % 40 === 20) {
      strengts.push(cycleCount * x);
    }
  }

  console.log("strengts", strengts);
  return 13140;
};

export const part2 = (data: any): any => {
  return data;
};
