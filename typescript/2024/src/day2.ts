import assert from "assert";

function isReportSafe(levels: string[]): boolean {
  let isIncreasing = true;
  let isDecreasing = true;

  const reportSafe = levels.every((_level, i) => {
    if (i === levels.length - 1) return true

    let isLocalIncreasing: boolean = false
    let isLocalDecreasing: boolean = false
    let isSafeRange: boolean

    const distance = Number(levels[i + 1]) - Number(levels[i])
    if (distance > 0) isLocalIncreasing = true
    if (distance < 0) isLocalDecreasing = true

    isSafeRange = 1 <= Math.abs(distance) && Math.abs(distance) <= 3

    isIncreasing = isIncreasing && isLocalIncreasing
    isDecreasing = isDecreasing && isLocalDecreasing

    return isSafeRange && (isIncreasing || isDecreasing)
  })

  return reportSafe
}

function solvePart1(input: string) {
  const reports = input.split('\n')

  const safe: boolean[] = []

  reports.forEach(report => {
    const levels = report.split(/\s+/);
    const reportSafe = isReportSafe(levels)
    safe.push(reportSafe)
  })

  // console.log(safe)
  return safe.reduce((acc, s) => {
    if (s) return acc + 1
    return acc
  }, 0)

}

if (import.meta.main) {
  const testInputPart1 =
    `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

  const realInputPart1 =
    `TOTALLY NOT THE INPUT`;

  console.group('Part 1:')
  console.log('Test:')
  console.log(solvePart1(testInputPart1));
  console.log('Real:')
  console.log(solvePart1(realInputPart1));
  console.groupEnd()
  console.log('\n')

  assert.strictEqual(
    solvePart1(testInputPart1),
    2
  );

  assert.strictEqual(
    solvePart1(realInputPart1),
    371
  );
}

function solvePart2(input: string) {
  const reports = input.split('\n')

  const safe: boolean[] = []

  reports.forEach(report => {
    const levels = report.split(/\s+/);

    const isDampenedReportsSafe = levels.some((_level, i) => {
      const newLevels: string[] = []
      newLevels.push(...levels.slice(0, i))
      newLevels.push(...levels.slice(i + 1, levels.length))
      return isReportSafe(newLevels)
    })

    safe.push(isReportSafe(levels) || isDampenedReportsSafe)
  })

  // console.log(safe)
  return safe.reduce((acc, s) => {
    if (s) return acc + 1
    return acc
  }, 0)
}



if (import.meta.main) {
  const testInputPart2 =
    `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

  const realInputPart2 =
    `NOT THAT`;

  console.group('Part 2:')
  console.log('Test:')
  console.log(solvePart2(testInputPart2));
  console.log('Real:')
  console.log(solvePart2(realInputPart2));
  console.groupEnd()
  console.log('\n')

  assert.strictEqual(
    solvePart2(testInputPart2),
    4
  );

  assert.strictEqual(
    solvePart2(realInputPart2),
    426
  );
}

