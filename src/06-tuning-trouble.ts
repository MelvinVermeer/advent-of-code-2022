// start of packet
// last index of sequence 4 diff

import { unique } from "./shared/array";

export const part1 = (data: string): number => {
  for (let i = 3; i < data.length; i++) {
    const last4 = data.split("").slice(i - 3, i + 1);

    if (last4.length === unique(last4).length) {
      return i + 1;
    }
  }
  return 0;
};

export const part2 = (data: any): any => {
  return data;
};
