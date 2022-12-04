import { part1, part2 } from "../src/04-camp-cleanup";
import { readFileSync } from "fs";

const data = readFileSync("test/data/04", "utf8").split("\n");

describe("04 - Camp Cleanup", () => {
  const sample = [
    "2-4,6-8",
    "2-3,4-5",
    "5-7,7-9",
    "2-8,3-7",
    "6-6,4-6",
    "2-6,4-8",
  ];

  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(2);
    });

    it("Answer", () => {
      expect(part1(data)).toEqual(534);
    });
  });

  describe("Part 2", () => {
    it("Sample", () => {
      expect(part2(sample)).toEqual(4);
    });

    it("Answer", () => {
      expect(part2(data)).toEqual(0);
    });
  });
});
