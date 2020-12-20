import { input } from './2020-day3-input';

let input2 = `
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

function countTrees(stepsRight: number, stepsDown: number): number {
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

  //console.log(numberOfTrees);
  return numberOfTrees;
}

const answer = countTrees(1, 1) * countTrees(3, 1) * countTrees(5, 1) * countTrees(7,1) * countTrees(1,2);
console.log(answer);

