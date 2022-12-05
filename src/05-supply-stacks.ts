// const transpose = <T>(array: T[][]): T[][] =>
//   array.map((col, i) => array.map((row) => row[i]));

const transpose = <T>(matrix: T[][]): T[][] => {
  return matrix.reduce(
    (prev, next) => next.map((item, i) => (prev[i] || []).concat(next[i])),
    [] as T[][]
  );
};

const last = <T>(array: T[]) => array[array.length - 1];

export const part1 = (data: string[]): string => {
  const a = data.indexOf("");

  const s1 = data
    .slice(0, a - 1)
    .map((x) => x.split("").filter((x, i) => i % 4 === 1));

  const stacks = transpose(s1)
    .map((x) => x.reverse())
    .map((x) => x.filter((y) => y !== " "));

  const instructions = data.slice(a + 1).map((s) => {
    const x = s.split(" ");
    return {
      count: Number(x[1]),
      from: Number(x[3]) - 1,
      to: Number(x[5]) - 1,
    };
  });

  for (const { count, from, to } of instructions) {
    for (let i = 0; i < count; i++) {
      const pickedUpItem = stacks[from].pop();
      if (pickedUpItem) {
        stacks[to].push(pickedUpItem);
      }
    }
  }

  const r = stacks.map(last).join("");

  return r;
};

export const part2 = (data: any): any => {
  return data;
};
