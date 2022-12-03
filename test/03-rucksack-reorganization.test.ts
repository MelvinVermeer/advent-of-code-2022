import { part1, part2 } from "../src/03-rucksack-reorganization";
import { readFileSync } from "fs";

const data = readFileSync("test/data/03", "utf8").split("\n");

describe("03 - Rucksack Reorganization", () => {
  const sample = [
    "vJrwpWtwJgWrhcsFMMfFFhFp",
    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    "PmmdzqPrVvPwwTWBwg",
    "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
    "ttgJtRGJQctTZtZT",
    "CrZsJsPPZsGzwwsLwLmpwMDw",
  ];

  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(157);
    });

    it("Answer", () => {
      // 7981 is too low
      expect(part1(data)).toBe(8252);
    });
  });

  describe("Part 2", () => {
    it("Sample", () => {
      expect(part2(sample)).toEqual(70);
    });

    it("Answer", () => {
      expect(part2(data)).toEqual(2828);
    });
  });
});
