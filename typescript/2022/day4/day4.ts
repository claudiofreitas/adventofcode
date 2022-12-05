import { readLines } from '../utils/read-lines';
import { getArrayIntersection} from '../utils/get-array-intersection';

const range = (low: number, high: number): number[] => {
  const length = high - low + 1;
  const numbers = new Array(length).fill(0);
  return numbers.map((_number, index) => {
    return index + low;
  });
};

const solvePart1 = async (filename: string) => {
  const lines = await readLines(filename);

  let numberOfOverlappingPairs = 0;
  for (let i = 0; i < lines.length; i += 1) {
    const [elf1, elf2] = lines[i].split(',');

    const [elf1Low, elf1High] = elf1.split('-').map(Number);
    const [elf2Low, elf2High] = elf2.split('-').map(Number);
    const array1 = range(elf1Low, elf1High);
    const array2 = range(elf2Low, elf2High);

    const isArray2Inside1 = array1[0] <= array2[0] && array2[array2.length - 1] <= array1[array1.length - 1];
    const isArray1Inside2 = array2[0] <= array1[0] && array1[array1.length - 1] <= array2[array2.length - 1];

    if (isArray1Inside2 || isArray2Inside1) {
      numberOfOverlappingPairs += 1;
    }
  }

  return numberOfOverlappingPairs;
};

const solvePart2 = async (filename: string) => {
  const lines = await readLines(filename);

  let numberOfIntersectingPairs = 0;
  for (let i = 0; i < lines.length; i += 1) {
    const [elf1, elf2] = lines[i].split(',');

    const [elf1Low, elf1High] = elf1.split('-').map(Number);
    const [elf2Low, elf2High] = elf2.split('-').map(Number);
    const array1 = range(elf1Low, elf1High);
    const array2 = range(elf2Low, elf2High);

    const intersection = getArrayIntersection(array1, array2);
    if (intersection.length > 0) {
      numberOfIntersectingPairs += 1;
    }
  }

  return numberOfIntersectingPairs;
};

export { solvePart1, solvePart2 };
