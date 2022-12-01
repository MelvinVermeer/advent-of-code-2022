import { part1, part2 } from "../src/01-calorie-counting";
import { readFileSync } from "fs";

const data = readFileSync("test/data/01", "utf8")
  .split("\n\n")
  .map((x) => x.split("\n"));

describe("01 - Calorie Counting", () => {
  const sample = [
    ["1000", "2000", "3000"],
    ["4000"],
    ["5000", "6000"],
    ["7000", "8000", "9000"],
    ["10000"],
  ];

  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(24000);
    });

    it("Answer", () => {
      expect(part1(data)).toEqual(71502);
    });
  });

  describe("Part 2", () => {
    it("Sample", () => {
      expect(part2(sample)).toEqual(45000);
    });

    it("Answer", () => {
      expect(part2(data)).toEqual(208191);
    });
  });
});
