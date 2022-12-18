import { part1, part2 } from "./18-boiling-boulders";
import { readFileSync } from "fs";

const data = readFileSync("src/data/18", "utf8").split("\n");

describe("18 - Boiling Boulders", () => {
  const sample = [
    "2,2,2",
    "1,2,2",
    "3,2,2",
    "2,1,2",
    "2,3,2",
    "2,2,1",
    "2,2,3",
    "2,2,4",
    "2,2,6",
    "1,2,5",
    "3,2,5",
    "2,1,5",
    "2,3,5",
  ];

  describe("Part 1", () => {
    it("Sample1", () => {
      expect(part1(["1,1,1", "2,1,1"])).toEqual(10);
    });

    it("Sample2", () => {
      expect(part1(sample)).toEqual(64);
    });
    it("Answer", () => {
      expect(part1(data)).toEqual(4364);
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
