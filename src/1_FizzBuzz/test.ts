import { fizzBuzz } from './kata';

describe('Fizz Buzz should', () => {
  test('when input is 1 output is 1', () => {
    expect(fizzBuzz(1)).toBe('1');
  });

  test('when input is 2 output is 2', () => {
    expect(fizzBuzz(2)).toBe('2');
  });

  test('when input is 3 output is fizz', () => {
    expect(fizzBuzz(3)).toBe('fizz');
  });

  test('when input is 6 output is fizz', () => {
    expect(fizzBuzz(6)).toBe('fizz');
  });

  test('when input is 9 output is fizz', () => {
    expect(fizzBuzz(9)).toBe('fizz');
  });

  test('when input is 5 output is buzz', () => {
    expect(fizzBuzz(5)).toBe('buzz');
  });

  test('when input is 10 output is buzz', () => {
    expect(fizzBuzz(10)).toBe('buzz');
  });

  test('when input is 20 output is buzz', () => {
    expect(fizzBuzz(20)).toBe('buzz');
  });

  test('when input is 15 output is fizzbuzz', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
  });
});
