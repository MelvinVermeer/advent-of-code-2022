import { part1, part2 } from "./19-not-enough-minerals";
import { readFileSync } from "fs";

const data = readFileSync("src/data/19", "utf8").split("\n");

describe("19 - Not Enough Minerals", () => {
  const sample = ["Sabqponm", "abcryxxl", "accszExk", "acctuvwj", "abdefghi"];

  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(0);
    });

    fit("Answer", () => {
      expect(part1(data)).toEqual(350);
    });
  });

  describe("Part 2", () => {
    it("Sample", () => {
      expect(part2(sample)).toEqual(29);
    });

    it("Answer", () => {
      expect(part2(data)).toEqual(349);
    });
  });
});
