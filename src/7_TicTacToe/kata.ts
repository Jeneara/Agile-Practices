/* eslint-disable @typescript-eslint/no-unnecessary-condition */
type Position = [number, number];
export class TicTacToe {
  public grid: (string | null)[][];
  private nextPlayer: 'X' | 'O';
  constructor() {
    this.grid = [
      [null, null, null], //0
      [null, null, null], //1
      [null, null, null], //2
    ];
    this.nextPlayer = 'X';
  }

  play(position: Position) {
    const [row, column] = position;

    if (!this.isMoveWithinGrid(row, column)) {
      throw new Error('Play invalid');
    }

    if (!this.isPositionAvailable(row, column)) {
      throw new Error('Position not available');
    }

    this.setMove(row, column);

    this.setNextPlayer();

    if (this.grid[0]?.join() === 'X,X,X') {
      return 'Player X Wins!';
    }

    return this.grid;
  }

  private isMoveWithinGrid(row: number, column: number) {
    return row >= 0 && row <= 2 && column >= 0 && column <= 2;
  }

  private isPositionAvailable(row: number, column: number) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    return this.grid[row][column] === null;
  }

  private setMove(row: number, column: number) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    this.grid[row][column] = this.nextPlayer;
  }

  private setNextPlayer() {
    if (this.nextPlayer === 'X') {
      this.nextPlayer = 'O';
    } else {
      this.nextPlayer = 'X';
    }
  }
}
