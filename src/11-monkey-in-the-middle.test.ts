import { part1, part2 } from "./11-monkey-in-the-middle";
import { readFileSync } from "fs";

const data = readFileSync("src/data/11", "utf8").split("\n");

describe("11 - Monkey in the Middle", () => {
  const sample = [
    "Monkey 0:",
    "  Starting items: 79, 98",
    "  Operation: new = old * 19",
    "  Test: divisible by 23",
    "    If true: throw to monkey 2",
    "    If false: throw to monkey 3",
    "",
    "Monkey 1:",
    "  Starting items: 54, 65, 75, 74",
    "  Operation: new = old + 6",
    "  Test: divisible by 19",
    "    If true: throw to monkey 2",
    "    If false: throw to monkey 0",
    "",
    "Monkey 2:",
    "  Starting items: 79, 60, 97",
    "  Operation: new = old * old",
    "  Test: divisible by 13",
    "    If true: throw to monkey 1",
    "    If false: throw to monkey 3",
    "",
    "Monkey 3:",
    "  Starting items: 74",
    "  Operation: new = old + 3",
    "  Test: divisible by 17",
    "    If true: throw to monkey 0",
    "    If false: throw to monkey 1",
  ];

  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(10605);
    });

    it("Answer", () => {
      expect(part1(data)).toEqual(102399);
    });
  });

  describe("Part 2", () => {
    it("Sample", () => {
      expect(part2(sample)).toEqual(2713310158);
    });

    it("Answer", () => {
      expect(part2(data)).toEqual(23641658401);
    });
  });
});
