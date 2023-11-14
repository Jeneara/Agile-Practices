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

  test('should return II if arabic number is 2', () => {
    expect(romanNumeral(2)).toBe('II');
  });

  test('should return III if arabic number is 3', () => {
    expect(romanNumeral(3)).toBe('III');
  });

  test('should return VI if arabic number is 6', () => {
    expect(romanNumeral(6)).toBe('VI');
  });

  test('should return VII if arabic number is 7', () => {
    expect(romanNumeral(7)).toBe('VII');
  });

  test('should return VIII if arabic number is 8', () => {
    expect(romanNumeral(8)).toBe('VIII');
  });

  test('should return MMM if arabic number is 3000', () => {
    expect(romanNumeral(3000)).toBe('MMM');
  });
});
