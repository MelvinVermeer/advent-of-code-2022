import { groupsOfSizeN } from "./shared/array";
import { product } from "./shared/math";
import { descending } from "./shared/sorting";

const parseMonkeys = (data: string[]) =>
  data.reduce(groupsOfSizeN(7), [[]] as string[][]).map((lines) => {
    const ifTrue = Number(lines[4].split("monkey ")[1]);
    const ifFalse = Number(lines[5].split("monkey ")[1]);
    const modulo = Number(lines[3].split("divisible by ")[1]);

    return {
      items: lines[1].split(": ")[1].split(", ").map(Number),
      count: 0,
      modulo,
      operation: (old: any): number =>
        eval(lines[2].split("= ")[1].replace(/old/, old)),
      sendTo: (item: number) => (item % modulo === 0 ? ifTrue : ifFalse),
    };
  });

const countMonkeyBusiness = (monkeys: any) =>
  monkeys
    .map((m: any) => m.count)
    .sort(descending)
    .slice(0, 2)
    .reduce(product);

export const part1 = (data: string[]): number => {
  const monkeys = parseMonkeys(data);

  for (let i = 0; i < 20; i++) {
    for (const monkey of monkeys) {
      while (monkey.items.length) {
        monkey.count++;
        const item = Math.floor(monkey.operation(monkey.items.shift()) / 3);
        monkeys[monkey.sendTo(item)].items.push(item);
      }
    }
  }

  return countMonkeyBusiness(monkeys);
};

export const part2 = (data: string[]): number => {
  const monkeys = parseMonkeys(data);
  const modulo = monkeys.map((x) => x.modulo).reduce(product);

  for (let i = 0; i < 10_000; i++) {
    for (const monkey of monkeys) {
      while (monkey.items.length) {
        monkey.count++;
        const item = monkey.operation(monkey.items.shift()) % modulo;
        monkeys[monkey.sendTo(item)].items.push(item);
      }
    }
  }

  return countMonkeyBusiness(monkeys);
};
