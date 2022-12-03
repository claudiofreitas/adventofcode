import readline from 'readline';
import fs from 'fs';

enum Shape {
  ROCK,
  PAPER,
  SCISSORS,
}

const shapeFromString = (s: string): Shape => {
  return {
    A: Shape.ROCK,
    B: Shape.PAPER,
    C: Shape.SCISSORS,
    X: Shape.ROCK,
    Y: Shape.PAPER,
    Z: Shape.SCISSORS,
  }[s];
};

const calculateRoundPoints = (opponentShape: Shape, myShape: Shape): number => {
  if (
    (opponentShape === Shape.ROCK && myShape === Shape.PAPER) ||
    (opponentShape === Shape.PAPER && myShape === Shape.SCISSORS) ||
    (opponentShape === Shape.SCISSORS && myShape === Shape.ROCK)
  ) {
    return 6;
  } else if (opponentShape === myShape) {
    return 3;
  } else {
    return 0;
  }
};

const valueFromShape = (shape: Shape): number => {
  const SHAPE_TO_VALUE_MAP: Record<Shape, number> = {
    [Shape.ROCK]: 1,
    [Shape.PAPER]: 2,
    [Shape.SCISSORS]: 3,
  };
  return SHAPE_TO_VALUE_MAP[shape];
};

const calculatePoints = async (input: fs.ReadStream) => {
  const readLineInterface = readline.createInterface({
    input: input,
    crlfDelay: Infinity,
  });

  let totalPoints = 0;
  for await (const line of readLineInterface) {
    const [opponentShape, myShape] = line.split(' ').map(shapeFromString);
    const roundPoints = calculateRoundPoints(opponentShape, myShape);
    const shapePoints = valueFromShape(myShape);
    totalPoints += roundPoints + shapePoints;
  }
  return totalPoints;
};

export { calculatePoints };
