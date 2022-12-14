import { part1, part2 } from "../src/06-tuning-trouble";
import { readFileSync } from "fs";

const data = readFileSync("src/data/06", "utf8");

describe("06 - Tuning Trouble", () => {
  const sample = [""];

  describe("Part 1", () => {
    test.each([
      ["bvwbjplbgvbhsrlpgdmjqwftvncz", 5],
      ["nppdvjthqldpwncqszvftbrmjlhg", 6],
      ["nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", 10],
      ["zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", 11],
    ])("Sample", (input, result) => {
      expect(part1(input)).toEqual(result);
    });

    it("Answer", () => {
      expect(part1(data)).toEqual(1816);
    });
  });

  describe("Part 2", () => {
    test.each([
      ["mjqjpqmgbljsphdztnvjfqwrcgsmlb", 19],
      ["bvwbjplbgvbhsrlpgdmjqwftvncz", 23],
      ["nppdvjthqldpwncqszvftbrmjlhg", 23],
      ["nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", 29],
      ["zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", 26],
    ])("Sample", (input, result) => {
      expect(part2(input)).toEqual(result);
    });

    it("Answer", () => {
      expect(part2(data)).toEqual(2625);
    });
  });
});
