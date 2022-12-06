import { part1, part2 } from "../src/05-supply-stacks";
import { readFileSync } from "fs";

const data = readFileSync("src/data/05", "utf8").split("\n");

describe("05 - Supply Stacks", () => {
  const sample = [
    "    [D]    ",
    "[N] [C]    ",
    "[Z] [M] [P]",
    " 1   2   3 ",
    "",
    "move 1 from 2 to 1",
    "move 3 from 1 to 3",
    "move 2 from 2 to 1",
    "move 1 from 1 to 2",
  ];

  describe("Part 1", () => {
    it("Sample", () => {
      expect(part1(sample)).toEqual("CMZ");
    });

    it("Answer", () => {
      expect(part1(data)).toEqual("QPJPLMNNR");
    });
  });

  describe("Part 2", () => {
    it("Sample", () => {
      expect(part2(sample)).toEqual("MCD");
    });

    it("Answer", () => {
      expect(part2(data)).toEqual("BQDNWJPVJ");
    });
  });
});
