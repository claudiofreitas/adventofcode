import readline from 'readline';
import fs from 'fs';

const readLines = async (filepath: string): Promise<string[]> => {
  const fileStream = fs.createReadStream(filepath);
  const readLineInterface = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const lines: string[] = [];
  for await (const line of readLineInterface) {
    lines.push(line);
  }
  return lines;
};

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

const calculatePoints = async (filepath: string) => {
  const lines = await readLines(filepath);

  let totalPoints = 0;
  lines.forEach((line) => {
    const [opponentShape, myShape] = line.split(' ').map(shapeFromString);
    const roundPoints = calculateRoundPoints(opponentShape, myShape);
    const shapePoints = valueFromShape(myShape);
    totalPoints += roundPoints + shapePoints;
  });

  return totalPoints;
};

enum Strategy {
  LOSE,
  DRAW,
  WIN,
}

const strategyFromString = (s: string) => {
  return {
    X: Strategy.LOSE,
    Y: Strategy.DRAW,
    Z: Strategy.WIN,
  }[s];
};

const generateMyShape = (opponentShape: Shape, strategy: Strategy): Shape => {
  if (opponentShape === Shape.ROCK) {
    return {
      [Strategy.WIN]: Shape.PAPER,
      [Strategy.DRAW]: Shape.ROCK,
      [Strategy.LOSE]: Shape.SCISSORS,
    }[strategy];
  } else if (opponentShape === Shape.PAPER) {
    return {
      [Strategy.WIN]: Shape.SCISSORS,
      [Strategy.DRAW]: Shape.PAPER,
      [Strategy.LOSE]: Shape.ROCK,
    }[strategy];
  } else if (opponentShape === Shape.SCISSORS) {
    return {
      [Strategy.WIN]: Shape.ROCK,
      [Strategy.DRAW]: Shape.SCISSORS,
      [Strategy.LOSE]: Shape.PAPER,
    }[strategy];
  }
};

const calculatePointsWithIntendedStrategy = async (filepath: string) => {
  const lines = await readLines(filepath);

  let totalPoints = 0;
  lines.forEach((line) => {
    const [opponentShapeString, myStrategyString] = line.split(' ');
    const opponentShape = shapeFromString(opponentShapeString);
    const myStrategy = strategyFromString(myStrategyString);
    const myShape = generateMyShape(opponentShape, myStrategy);
    const roundPoints = calculateRoundPoints(opponentShape, myShape);
    const shapePoints = valueFromShape(myShape);
    totalPoints += roundPoints + shapePoints;
  });
  return totalPoints;
};

export { calculatePoints, calculatePointsWithIntendedStrategy };
