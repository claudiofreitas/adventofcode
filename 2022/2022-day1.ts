import readline from 'readline';
import fs from 'fs';

const solveMaxCalories = async (input: fs.ReadStream) => {
  const readLineInterface = readline.createInterface({
    input: input,
    crlfDelay: Infinity,
  });

  const dwarfTotalCalories: number[] = [];
  let accumulator = 0;
  for await (const line of readLineInterface) {
    if (line) {
      accumulator += Number(line);
    } else {
      dwarfTotalCalories.push(accumulator);
      accumulator = 0;
    }
  }

  return Math.max(...dwarfTotalCalories);
};

export { solveMaxCalories };
