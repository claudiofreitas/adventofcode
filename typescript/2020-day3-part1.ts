import { input } from './2020-day3-input';

const input2 = `
..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;

const map = input.split("\n").filter(str => str.trim() !== '').map(str => str.split(''));
//console.log(map);

//console.log(map[0][1]);

const stepsRight = 3;
const stepsDown = 1;

let line = 0;
let column = 0;

let numberOfTrees = 0;

while(line < map.length){
  if(map[line][column] === '#') {
    numberOfTrees++;
  }
  line += stepsDown;
  column += stepsRight;
  column = column % map[0].length;
}

console.log(numberOfTrees);

