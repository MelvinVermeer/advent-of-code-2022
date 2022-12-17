import { part1, part2 } from "./15-beacon-exclusion-zone";
import { readFileSync } from "fs";

const data = readFileSync("src/data/15", "utf8").split("\n");

describe("15 - Beacon Exclusion Zone", () => {
  const sample = [
    "Sensor at x=2, y=18: closest beacon is at x=-2, y=15",
    "Sensor at x=9, y=16: closest beacon is at x=10, y=16",
    "Sensor at x=13, y=2: closest beacon is at x=15, y=3",
    "Sensor at x=12, y=14: closest beacon is at x=10, y=16",
    "Sensor at x=10, y=20: closest beacon is at x=10, y=16",
    "Sensor at x=14, y=17: closest beacon is at x=10, y=16",
    "Sensor at x=8, y=7: closest beacon is at x=2, y=10",
    "Sensor at x=2, y=0: closest beacon is at x=2, y=10",
    "Sensor at x=0, y=11: closest beacon is at x=2, y=10",
    "Sensor at x=20, y=14: closest beacon is at x=25, y=17",
    "Sensor at x=17, y=20: closest beacon is at x=21, y=22",
    "Sensor at x=16, y=7: closest beacon is at x=15, y=3",
    "Sensor at x=14, y=3: closest beacon is at x=15, y=3",
    "Sensor at x=20, y=1: closest beacon is at x=15, y=3",
  ];

  describe("Part 1", () => {
    xit("Sample", () => {
      expect(part1(sample, 10)).toEqual(26);
    });

    xit("Answer", () => {
      expect(part1(data, 2000000)).toEqual(4725496);
    });
  });

  describe("Part 2", () => {
    it("Sample", () => {
      expect(part2(sample, 20)).toEqual(56000011);
    });

    xit("Answer", () => {
      expect(part2(data, 4_000_000)).toEqual(0);
    });
  });
});
