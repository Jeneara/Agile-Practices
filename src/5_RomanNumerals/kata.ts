const baseNumbers = new Map<number, string>([
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
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
