import { input } from './input';

let numberOfCorrects = 0;
input.forEach((entry: string) => {
  const tokens = entry.split(' ');
  const [minQuantity, maxQuantity] = tokens[0].split('-').map(Number);
  const letter = tokens[1].slice(0, 1);
  const password = tokens[2];
  const numberOfLetters = password.split('').reduce((_acc: number, l: string) => {
    if (l === letter) {
      return _acc + 1;
    }
    return _acc;
  }, 0);
  if (minQuantity <= numberOfLetters && numberOfLetters <= maxQuantity) {
    numberOfCorrects++;
  }
});
console.log(numberOfCorrects);

