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

  // test('it is a valid move', () => {
  //   const ticTacToe = new TicTacToe;
  //   expect(ticTacToe.play)
  // });
});

//instance is instantiated with a grid which is a 2d array of null elements
//let my2DArray = Array(3).fill(null).map(() => Array(3).fill(null));

//The public interface of the game is a function called play
//it will take 2 parameters 1 - Player name 2 - position of the square
//player x , position

//testing
//Enter a valid move - within then grid and not already taken
