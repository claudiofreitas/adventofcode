import { readLines } from './utils/read-lines';

const priorityForLetter = (letter: string): number => {
  const letters = 'abcdefghijklmnopqrstuvwxyz' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return letters.split('').indexOf(letter) + 1;
};

const sumArray = (a: number[]): number => {
  let accumulator = 0;
  a.forEach((element) => {
    accumulator += element;
  });
  return accumulator;
};

const getArrayIntersection = (array1: number[], array2: number[]): number[] => {
  const intersection: number[] = [];
  for (let i = 0; i < array2.length; i += 1) {
    const elementArray2 = array2[i];
    if (array1.includes(elementArray2)) {
      intersection.push(elementArray2);
    }
  }
  return intersection;
};

const solvePart1 = async (filename: string) => {
  const lines = await readLines(filename);

  const priorityForRucksack = [];
  lines.forEach((rucksack) => {
    if (rucksack === '') return;
    const compartment1 = rucksack
      .split('')
      .slice(0, rucksack.length / 2)
      .map(priorityForLetter);
    const compartment2 = rucksack
      .split('')
      .slice(rucksack.length / 2, rucksack.length)
      .map(priorityForLetter);
    const intersection = getArrayIntersection(compartment1, compartment2);
    priorityForRucksack.push(intersection[0]);
  });

  return sumArray(priorityForRucksack);
};

const solvePart2 = async (filename: string) => {
  const lines = await readLines(filename);

  const groupPriorities: number[] = [];
  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 3) {
    const rucksack1 = lines[lineIndex + 0].split('').map(priorityForLetter);
    const rucksack2 = lines[lineIndex + 1].split('').map(priorityForLetter);
    const rucksack3 = lines[lineIndex + 2].split('').map(priorityForLetter);
    const intersection1And2 = getArrayIntersection(rucksack1, rucksack2);
    const intersection1And2And3 = getArrayIntersection(
      intersection1And2,
      rucksack3
    );
    const priority = intersection1And2And3[0];
    groupPriorities.push(priority);
  }

  return sumArray(groupPriorities);
};

export { solvePart1, solvePart2 };
