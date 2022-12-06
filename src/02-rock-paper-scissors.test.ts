import { part1, part2 } from "../src/02-rock-paper-scissors";
import { readFileSync } from "fs";

const data = readFileSync("src/data/02", "utf8").split("\n");

describe("02 - Rock Paper Scissors", () => {
  const sample = ["A Y", "B X", "C Z"];

  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(15);
    });

    it("Answer", () => {
      expect(part1(data)).toEqual(12645);
    });
  });

  describe("Part 2", () => {
    it("Sample", () => {
      expect(part2(sample)).toEqual(12);
    });

    it("Answer", () => {
      expect(part2(data)).toEqual(11756);
    });
  });
});
