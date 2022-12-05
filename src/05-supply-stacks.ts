// const transpose = <T>(array: T[][]): T[][] =>
//   array.map((col, i) => array.map((row) => row[i]));

const transpose = <T>(matrix: T[][]): T[][] => {
  return matrix.reduce(
    (prev, next) => next.map((item, i) => (prev[i] || []).concat(next[i])),
    [] as T[][]
  );
};

const last = <T>(array: T[]) => array[array.length - 1];

const parse = (data: string[]) => {
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

  return {
    stacks,
    instructions,
  };
};

export const part1 = (data: string[]): string => {
  const { stacks, instructions } = parse(data);
  for (const { count, from, to } of instructions) {
    for (let i = 0; i < count; i++) {
      const pickedUpItem = stacks[from].pop();
      if (pickedUpItem) {
        stacks[to].push(pickedUpItem);
      }
    }
  }

  return stacks.map(last).join("");
};

export const part2 = (data: string[]): string => {
  const { stacks, instructions } = parse(data);

  for (const { count, from, to } of instructions) {
    const pickedUpItems = stacks[from].splice(
      stacks[from].length - count,
      count
    );
    stacks[to].push(...pickedUpItems);
  }

  return stacks.map(last).join("");
};
