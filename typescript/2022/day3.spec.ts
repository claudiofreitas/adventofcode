import { solvePart1 } from './day3';

const SAMPLE_DATA_PATH = `${__dirname}/day3-input-sample.txt`;
const REAL_DATA_PATH = `${__dirname}/day3-input-real.txt`;

it('should calculate points for strategy (sample)', async () => {
  const filename = SAMPLE_DATA_PATH;
  expect(await solvePart1(filename)).toStrictEqual(157);
});

it('should calculate points for strategy (real)', async () => {
  const filename = REAL_DATA_PATH;
  expect(await solvePart1(filename)).toStrictEqual(7597);
});
