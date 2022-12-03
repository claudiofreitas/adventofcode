import readline from 'readline';
import fs from 'fs';

const solveMaxCalories = async (input: fs.ReadStream) => {
  const readLineInterface = readline.createInterface({
    input: input,
    crlfDelay: Infinity,
  });

  const totalCaloriesByElf: number[] = [];
  let accumulator = 0;
  for await (const line of readLineInterface) {
    if (line) {
      accumulator += Number(line);
    } else {
      totalCaloriesByElf.push(accumulator);
      accumulator = 0;
    }
  }
  if (accumulator !== 0) {
    totalCaloriesByElf.push(accumulator);
  }

  const caloriesSortedDesc = [...totalCaloriesByElf].sort(
    (caloriesElfA, caloriesElfB) => caloriesElfB - caloriesElfA
  );

  return caloriesSortedDesc[0];
};

const solveTop3MaxCalories = async (input: fs.ReadStream) => {
  const readLineInterface = readline.createInterface({
    input: input,
    crlfDelay: Infinity,
  });

  const totalCaloriesByElf: number[] = [];
  let accumulator = 0;
  for await (const line of readLineInterface) {
    if (line) {
      accumulator += Number(line);
    } else {
      totalCaloriesByElf.push(accumulator);
      accumulator = 0;
    }
  }
  if (accumulator !== 0) {
    totalCaloriesByElf.push(accumulator);
  }

  const caloriesSortedDesc = [...totalCaloriesByElf].sort(
    (caloriesElfA, caloriesElfB) => caloriesElfB - caloriesElfA
  );

  return caloriesSortedDesc[0] + caloriesSortedDesc[1] + caloriesSortedDesc[2];
};

export { solveMaxCalories, solveTop3MaxCalories };
