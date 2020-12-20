import { input } from './2020-day2-input';

let numberOfCorrects = 0;

input.forEach((entry: string) => {
  const tokens = entry.split(' ');
  const [position1, position2] = tokens[0].split('-').map(Number);
  const letter = tokens[1].slice(0, 1);
  const password = tokens[2];
  if(
    (password.charAt(position1-1) === letter && password.charAt(position2-1) !== letter) || 
    (password.charAt(position1-1) !== letter && password.charAt(position2-1) === letter)
  ) {
    numberOfCorrects += 1;
  }
});
console.log(numberOfCorrects);

