export const fizzBuzz = (input: number) => {
  if (isMultipleOf(3, input) && isMultipleOf(5, input)) {
    return 'fizzbuzz';
  }
  if (isMultipleOf(3, input)) {
    return 'fizz';
  }
  if (isMultipleOf(5, input)) {
    return 'buzz';
  }
  return input.toString();
};

const isMultipleOf = (multiple: number, input: number): boolean => {
  return input % multiple === 0;
};
