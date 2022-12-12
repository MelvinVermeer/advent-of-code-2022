import { part1, part2 } from "./08-treetop-tree-house";
import { readFileSync } from "fs";

const data = readFileSync("src/data/08", "utf8").split("\n");

describe("08 - Treetop Tree House", () => {
  const sample = ["30373", "25512", "65332", "33549", "35390"];

  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(21);
    });

    it("Answer", () => {
      expect(part1(data)).toBe(1849);
    });
  });

  describe("Part 2", () => {
    it("Sample", () => {
      expect(part2(sample)).toEqual(8);
    });

    it("Answer", () => {
      expect(part2(data)).toEqual(201600);
    });
  });
});
