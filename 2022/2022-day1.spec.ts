import { solveMaxCalories } from './2022-day1';
import { createReadStream } from 'fs';

it('should solve for sample', async () => {
  const filepath = `${__dirname}/2022-day1-input-sample.txt`;
  const fileStream = createReadStream(filepath);
  expect(await solveMaxCalories(fileStream)).toStrictEqual(24000);
});

it('should solve real', async () => {
  const filepath = `${__dirname}/real-input.txt`;
  const fileStream = createReadStream(filepath);
  expect(await solveMaxCalories(fileStream)).toStrictEqual(70116);
});
