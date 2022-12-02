import readline from 'readline';
import fs from 'fs';

const calculateRoundPoints = (opponentShape: string, myShape: string) => {
  if (
    (opponentShape === 'A' && myShape === 'Y') ||
    (opponentShape === 'B' && myShape === 'Z') ||
    (opponentShape === 'C' && myShape === 'X')
  ) {
    return 6;
  } else if (
    (opponentShape === 'A' && myShape === 'X') ||
    (opponentShape === 'B' && myShape === 'Y') ||
    (opponentShape === 'C' && myShape === 'Z')
  ) {
    return 3;
  } else {
    return 0;
  }
};

const SHAPE_TO_VALUE_MAP = {
  X: 1,
  Y: 2,
  Z: 3,
};

const calculatePoints = async (input: fs.ReadStream) => {
  const readLineInterface = readline.createInterface({
    input: input,
    crlfDelay: Infinity,
  });

  let totalPoints = 0;
  for await (const line of readLineInterface) {
    const [opponentShape, myShape] = line.split(' ') as [
      'A' | 'B' | 'C',
      'X' | 'Y' | 'Z'
    ];
    const roundPoints = calculateRoundPoints(opponentShape, myShape);
    const shapePoints = SHAPE_TO_VALUE_MAP[myShape];
    totalPoints += roundPoints + shapePoints;
  }
  return totalPoints;
};

export { calculatePoints };
