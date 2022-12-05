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

export { getArrayIntersection };
