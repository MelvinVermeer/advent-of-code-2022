import { part1, part2 } from "./12-hill-climbing-algorithm";
import { readFileSync } from "fs";

const data = readFileSync("src/data/12", "utf8").split("\n");

describe("12 - Hill Climbing Algorithm", () => {
  const sample = ["Sabqponm", "abcryxxl", "accszExk", "acctuvwj", "abdefghi"];

  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(31);
    });

    xit("Answer", () => {
      expect(part1(data)).toEqual(data);
    });
  });

  describe("Part 2", () => {
    it("Sample", () => {
      expect(part2(sample)).toEqual(sample);
    });

    xit("Answer", () => {
      expect(part2(data)).toEqual(data);
    });
  });
});
