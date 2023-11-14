import { romanNumeral } from './kata';

describe('Roman numeral should', () => {
  test('should return I if arabic number is 1', () => {
    expect(romanNumeral(1)).toBe('I');
  });

  test('should return V if arabic number is 5', () => {
    expect(romanNumeral(5)).toBe('V');
  });

  test('should return X if arabic number is 10', () => {
    expect(romanNumeral(10)).toBe('X');
  });

  test('should return L if arabic number is 50', () => {
    expect(romanNumeral(50)).toBe('L');
  });

  test('should return C if arabic number is 100', () => {
    expect(romanNumeral(100)).toBe('C');
  });

  test('should return D if arabic number is 500', () => {
    expect(romanNumeral(500)).toBe('D');
  });

  test('should return XX if arabic number is 1000', () => {
    expect(romanNumeral(1000)).toBe('M');
  });
});
