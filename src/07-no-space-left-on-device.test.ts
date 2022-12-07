import { part1, part2 } from "./07-no-space-left-on-device";
import { readFileSync } from "fs";

const data = readFileSync("src/data/07", "utf8").split("\n");

describe("07 - No Space Left On Device", () => {
  const sample = [
    "$ cd /",
    "$ ls",
    "dir a",
    "14848514 b.txt",
    "8504156 c.dat",
    "dir d",
    "$ cd a",
    "$ ls",
    "dir e",
    "29116 f",
    "2557 g",
    "62596 h.lst",
    "$ cd e",
    "$ ls",
    "584 i",
    "$ cd ..",
    "$ cd ..",
    "$ cd d",
    "$ ls",
    "4060174 j",
    "8033020 d.log",
    "5626152 d.ext",
    "7214296 k",
  ];

  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual(95437);
    });

    it("Answer", () => {
      // 1232219 too low
      expect(part1(data)).toBe(1350966);
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
