import { input } from './2020-day1-input';

let answer: number;
input.forEach((number1) => {
  input.forEach((number2) => {
    input.forEach((number3) => {
      if (number1 + number2 + number3 === 2020) {
        answer = number1 * number2 * number3;
      }
    });
  });
});

console.log(answer);
