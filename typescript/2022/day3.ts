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

const solvePart1 = async (filename: string) => {
  const lines = await readLines(filename);

  const priorityForRucksack = [];
  lines.forEach((rucksack) => {
    const hash: Record<string, boolean> = {};
    let found = false;
    for (let i = 0; i < rucksack.length / 2; i++) {
      hash[rucksack[i]] = false;
    }
    for (let i = rucksack.length / 2; i < rucksack.length && !found; i++) {
      if (rucksack[i] in hash) {
        const p = priorityForLetter(rucksack[i]);
        priorityForRucksack.push(p);
        found = true;
      }
    }
  });

  return sumArray(priorityForRucksack);
};

export { solvePart1 };
