import { part1, part2 } from "./08-treetop-tree-house";
import { readFileSync } from "fs";

const data = readFileSync("src/data/08", "utf8").split("\n");

describe("08 - Treetop Tree House", () => {
  const sample = ["30373", "25512", "65332", "33549", "35390"];

  describe("Part 1", () => {
    xit("Sample", () => {
      expect(part1(sample)).toEqual(21);
    });

    xit("Answer", () => {
      /// 1500 too low
      expect(part1(data)).toBe(1849);
    });
  });

  describe("Part 2", () => {
    it("Sample", () => {
      expect(part2(sample)).toEqual(8);
    });

    it("Answer", () => {
      // 784 is too low
      expect(part2(data)).toBeGreaterThan(784);
    });
  });
});
