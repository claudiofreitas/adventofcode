import { calculatePoints, calculatePointsWithIntendedStrategy } from './day2';
import { createReadStream } from 'fs';

const SAMPLE_DATA_PATH = `${__dirname}/day2-input-sample.txt`;
const REAL_DATA_PATH = `${__dirname}/day2-input-real.txt`;

it('should calculate points for strategy (sample)', async () => {
  const fileStream = createReadStream(SAMPLE_DATA_PATH);
  expect(await calculatePoints(fileStream)).toStrictEqual(15);
});

it('should calculate points for strategy (real)', async () => {
  const fileStream = createReadStream(REAL_DATA_PATH);
  expect(await calculatePoints(fileStream)).toStrictEqual(11666);
});

it('should calculate points for intended strategy (sample)', async () => {
  const fileStream = createReadStream(SAMPLE_DATA_PATH);
  expect(await calculatePointsWithIntendedStrategy(fileStream)).toStrictEqual(
    12
  );
});

it('should calculate points for intended strategy (real)', async () => {
  const fileStream = createReadStream(REAL_DATA_PATH);
  expect(await calculatePointsWithIntendedStrategy(fileStream)).toStrictEqual(
    12767
  );
});
