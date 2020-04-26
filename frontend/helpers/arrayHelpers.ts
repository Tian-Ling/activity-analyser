export const getNthElement: Function = function getNthElement<
  T extends Array<unknown>
>(data: T, n: number): T {
  const newArray: T = [] as T;

  data.forEach((d, index) => {
    if (index % n === 0) {
      newArray.push(d);
    }
  });

  return newArray;
};
