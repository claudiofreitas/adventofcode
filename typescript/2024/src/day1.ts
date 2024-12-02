function solvePart1(input: string) {
  const list1: number[] = []
  const list2: number[] = []

  input.split('\n').forEach((line) => {
    const nums = line.split(/\s+/)
    list1.push(Number(nums[0]))
    list2.push(Number(nums[1]))
  })

  list1.sort((a, b) => b - a)
  list2.sort((a, b) => b - a)

  const dists: number[] = []

  for (let i = 0; i < list1.length; i++) {
    if (list1[i] > list2[i]) {
      dists.push((list1[i] - list2[i]))
    } else {
      dists.push((list2[i] - list1[i]))
    }
  }

  return dists.reduce((d, acc) => d + acc, (0))
}

if (import.meta.main) {
  const testInputPart1 =
    `3   4
4   3
2   5
1   3
3   9
3   3`;

  const realInputPart1 =
    `YOU WOULDNT DOWNLOAD AN INPUT`;

  console.group('Part 1:')
  console.log('Test:')
  console.log(solvePart1(testInputPart1));
  console.log('Real:')
  console.log(solvePart1(realInputPart1));
  console.groupEnd()
  console.log('\n')
}

function solvePart2(input: string) {
  const leftList: number[] = []
  const rightList: number[] = []

  const lines = input.split('\n')
  lines.forEach(line => {
    const [left, right] = line.split(/\s+/)
    leftList.push(Number(left))
    rightList.push(Number(right))
  })

  // console.log(leftList)
  // console.log(rightList)

  let score = 0
  for (let i = 0; i < lines.length; i++) {
    const left = leftList[i]
    let countMatches = 0
    rightList.forEach(right => {
      if (left === right) countMatches += 1
    })
    score = score + (leftList[i] * countMatches)
  }

  return score
}



if (import.meta.main) {
  const testInputPart2 = `3   4
4   3
2   5
1   3
3   9
3   3`;

  const realInputPart2 = `DIDNT DO IT`;

  console.group('Part 2:')
  console.log('Test:')
  console.log(solvePart2(testInputPart2));
  console.log('Real:')
  console.log(solvePart2(realInputPart2));
  console.groupEnd()
  console.log('\n')

}

