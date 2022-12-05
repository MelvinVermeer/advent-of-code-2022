import { transpose, last } from "./shared/array";

type Instruction = {
  count: number;
  from: number;
  to: number;
};

const parseInstruction = (input: string): Instruction => {
  const instruction = input.split(" ").map(Number);
  return {
    count: instruction[1],
    from: instruction[3] - 1,
    to: instruction[5] - 1,
  };
};

const parse = (data: string[]) => {
  const stacks = data
    .slice(0, data.indexOf("") - 1)
    .map((x) => x.split("").filter((x, i) => i % 4 === 1))
    .reduce(transpose, [[]] as string[][])
    .map((x) => x.reverse())
    .map((x) => x.filter((y) => y !== " "));

  return {
    stacks,
    instructions: data.slice(data.indexOf("") + 1).map(parseInstruction),
  };
};

const move1By1 = (stacks: string[][], { count, from, to }: Instruction) => {
  for (let i = 0; i < count; i++) {
    const pickedUpItem = stacks[from].pop();
    if (pickedUpItem) {
      stacks[to].push(pickedUpItem);
    }
  }

  return stacks;
};

const moveStack = (stacks: string[][], { count, from, to }: Instruction) => {
  const pickedUpItems = stacks[from].splice(stacks[from].length - count, count);
  stacks[to].push(...pickedUpItems);

  return stacks;
};

export const part1 = (data: string[]): string => {
  const { stacks, instructions } = parse(data);
  return instructions.reduce(move1By1, stacks).map(last).join("");
};

export const part2 = (data: string[]): string => {
  const { stacks, instructions } = parse(data);
  return instructions.reduce(moveStack, stacks).map(last).join("");
};
