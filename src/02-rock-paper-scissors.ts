const sum = (a: number, b: number) => a + b;

const getLosingMove = (o: number) => (o + 2) % 3;
const getWinningMove = (o: number) => (o + 1) % 3;

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

const toYourShape = (value: number) => String.fromCharCode(value + 88);

const convertInstructionToMatch = (instruction: string): string => {
  const opponent = instruction.charCodeAt(0) - 65;
  const desirerResult = instruction.charAt(2);
  const opponentShape = instruction.charAt(0);

  if (desirerResult === "X") {
    return `${opponentShape} ${toYourShape(getLosingMove(opponent))}`;
  }

  if (desirerResult === "Z") {
    return `${opponentShape} ${toYourShape(getWinningMove(opponent))}`;
  }

  return `${opponentShape} ${toYourShape(opponent)}`;
};

export const part1 = (data: string[]): number =>
  data.map(scoreMatch).reduce(sum);

export const part2 = (data: string[]): number =>
  data.map(convertInstructionToMatch).map(scoreMatch).reduce(sum);
