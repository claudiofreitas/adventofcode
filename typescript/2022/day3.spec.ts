import { solvePart1, solvePart2 } from './day3';

const SAMPLE_DATA_PATH = `${__dirname}/day3-input-sample.txt`;
const REAL_DATA_PATH = `${__dirname}/day3-input-real.txt`;

it('should solve part 1 (sample)', async () => {
  const filename = SAMPLE_DATA_PATH;
  expect(await solvePart1(filename)).toStrictEqual(157);
});

it('should solve part 1 (real)', async () => {
  const filename = REAL_DATA_PATH;
  expect(await solvePart1(filename)).toStrictEqual(7597);
});

it('should solve part 2 (sample)', async () => {
  const filename = SAMPLE_DATA_PATH;
  expect(await solvePart2(filename)).toStrictEqual(70);
});

it('should solve part 2 (real)', async () => {
  const filename = REAL_DATA_PATH;
  expect(await solvePart2(filename)).toStrictEqual(2607);
});
