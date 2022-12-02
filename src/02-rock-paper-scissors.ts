import { sum } from "./shared/math";

const getLosingMove = (o: number) => (o + 2) % 3;
const getWinningMove = (o: number) => (o + 1) % 3;
const toYourShape = (value: number) => String.fromCharCode(value + 88);

const scoreMatch = (match: string): number => {
  const opponent = match.charCodeAt(0) - 65;
  const you = match.charCodeAt(2) - 88;

  if (getLosingMove(opponent) === you) {
    return you + 1;
  }

  if (getWinningMove(opponent) === you) {
    return 6 + you + 1;
  }

  return 3 + you + 1;
};

const convertInstructionToMatch = (instruction: string): string => {
  const opponentMove = instruction.charCodeAt(0) - 65;
  const desiredResult = instruction.charAt(2);
  const opponentShape = instruction.charAt(0);

  if (desiredResult === "X") {
    return `${opponentShape} ${toYourShape(getLosingMove(opponentMove))}`;
  }

  if (desiredResult === "Z") {
    return `${opponentShape} ${toYourShape(getWinningMove(opponentMove))}`;
  }

  return `${opponentShape} ${toYourShape(opponentMove)}`;
};

export const part1 = (data: string[]): number =>
  data.map(scoreMatch).reduce(sum);

export const part2 = (data: string[]): number =>
  part1(data.map(convertInstructionToMatch));
