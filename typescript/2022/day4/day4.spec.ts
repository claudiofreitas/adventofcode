import { solvePart1, solvePart2 } from './day4';

const SAMPLE_DATA_PATH = `${__dirname}/day4-input-sample.txt`;
const REAL_DATA_PATH = `${__dirname}/day4-input-real.txt`;

it('should solve part 1 (sample)', async () => {
  const filename = SAMPLE_DATA_PATH;
  expect(await solvePart1(filename)).toStrictEqual(2);
});

it('should solve part 1 (real)', async () => {
  const filename = REAL_DATA_PATH;
  expect(await solvePart1(filename)).toStrictEqual(518);
});

it('should solve part 2 (sample)', async () => {
  const filename = SAMPLE_DATA_PATH;
  expect(await solvePart2(filename)).toStrictEqual(4);
});

it('should solve part 2 (real)', async () => {
  const filename = REAL_DATA_PATH;
  expect(await solvePart2(filename)).toStrictEqual(909);
});
