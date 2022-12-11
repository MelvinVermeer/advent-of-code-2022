import { part1, part2 } from "./09-rope-bridge";
import { readFileSync } from "fs";

const data = readFileSync("src/data/09", "utf8").split("\n");

describe("09 - Rope Bridge", () => {
  describe("Part 1", () => {
    const sample = ["R 4", "U 4", "L 3", "D 1", "R 4", "D 1", "L 5", "R 2"];

    it("Sample", () => {
      expect(part1(sample)).toEqual(13);
    });

    it("Answer", () => {
      expect(part1(data)).toEqual(6037);
    });
  });

  describe("Part 2", () => {
    const sample = ["R 5", "U 8", "L 8", "D 3", "R 17", "D 10", "L 25", "U 20"];

    it("Sample", () => {
      expect(part2(sample)).toEqual(36);
    });

    it("Answer", () => {
      expect(part2(data)).toEqual(2485);
    });
  });
});
