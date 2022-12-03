import { solveMaxCalories, solveTop3MaxCalories } from './day1';
import { createReadStream } from 'fs';

const SAMPLE_DATA_PATH = `${__dirname}/day1-input-sample.txt`;
const REAL_DATA_PATH = `${__dirname}/day1-input-real.txt`;

it('should calculate the total calories for the top 1 elf carrying the most calories (sample data)', async () => {
  const fileStream = createReadStream(SAMPLE_DATA_PATH);
  expect(await solveMaxCalories(fileStream)).toStrictEqual(24000);
});

it('should calculate the total calories for the top 1 elf carrying the most calories (real data)', async () => {
  const fileStream = createReadStream(REAL_DATA_PATH);
  expect(await solveMaxCalories(fileStream)).toStrictEqual(70116);
});

it('should calculate total calories for the top 3 elves carrying the most calories (sample data)', async () => {
  const fileStream = createReadStream(SAMPLE_DATA_PATH);
  expect(await solveTop3MaxCalories(fileStream)).toStrictEqual(45000);
});

it('should calculate total calories for the top 3 elves carrying the most calories (real data)', async () => {
  const fileStream = createReadStream(REAL_DATA_PATH);
  expect(await solveTop3MaxCalories(fileStream)).toStrictEqual(206582);
});
