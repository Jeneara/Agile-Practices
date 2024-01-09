import { TicTacToe } from './kata';

describe('TicTacToe should', () => {
  test('the game starts with an empty 3x3 grid', () => {
    const ticTacToe = new TicTacToe();
    expect(ticTacToe.grid).toStrictEqual([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
  });

  test('the first player is player x', () => {
    const ticTacToe = new TicTacToe();
    expect(ticTacToe.play([0, 1])).toStrictEqual([
      [null, 'X', null],
      [null, null, null],
      [null, null, null],
    ]);
  });

  test('invalid when outside of grid', () => {
    const ticTacToe = new TicTacToe();
    expect(() => ticTacToe.play([0, 4])).toThrow('Play invalid');
  });

  test('the second player is player o', () => {
    const ticTacToe = new TicTacToe();
    ticTacToe.play([0, 1]);

    expect(ticTacToe.play([0, 2])).toStrictEqual([
      [null, 'X', 'O'],
      [null, null, null],
      [null, null, null],
    ]);
  });

  test('Players cannot play on a played square', () => {
    const ticTacToe = new TicTacToe();
    ticTacToe.play([0, 1]);

    expect(() => ticTacToe.play([0, 1])).toThrow('Position not available');
  });

  test('A Player wins when it has three squares in a row', () => {
    const ticTacToe = new TicTacToe();
    ticTacToe.play([0, 0]);
    ticTacToe.play([1, 1]);
    ticTacToe.play([0, 1]);
    ticTacToe.play([1, 2]);
    expect(ticTacToe.play([0, 2])).toBe('Player X Wins!');
  });
});

//instance is instantiated with a grid which is a 2d array of null elements
//let my2DArray = Array(3).fill(null).map(() => Array(3).fill(null));

//The public interface of the game is a function called play
//it will take 2 parameters 1 - Player name 2 - position of the square
//player x , position

//testing
//Enter a valid move - within then grid and not already taken
