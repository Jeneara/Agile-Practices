const baseNumbers = new Map<number, string>([
  [1000, 'M'],
  [500, 'D'],
  [100, 'C'],
  [50, 'L'],
  [10, 'X'],
  [5, 'V'],
  [1, 'I'],
]);

export const romanNumeral = (arabicNumber: number): string | undefined => {
  // Behaviours
  // 1. Whole numbers
  // 2. Subtraction numbers -
  // 3. Addition numbers +

  let romanNumeral = '';

  baseNumbers.forEach((value, key) => {
    while (arabicNumber >= key) {
      arabicNumber -= key;
      romanNumeral += value;
    }
  });

  return romanNumeral;
};
