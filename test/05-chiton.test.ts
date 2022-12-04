import { part1, part2 } from "../src/05-chiton";
import { readFileSync } from "fs";

const data = readFileSync("test/data/05", "utf8").split("\n");

describe("05 - Chiton", () => {
  const sample = [
    "1163751742",
    "1381373672",
    "2136511328",
    "3694931569",
    "7463417111",
    "1319128137",
    "1359912421",
    "3125421639",
    "1293138521",
    "2311944581",
  ];

  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(40);
    });

    it("Answer", () => {
      expect(part1(data)).toEqual(687);
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
