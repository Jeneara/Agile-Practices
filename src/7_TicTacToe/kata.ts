/* eslint-disable @typescript-eslint/no-unnecessary-condition */
type Position = [number, number];
export class TicTacToe {
  public grid: (string | null)[][];
  constructor() {
    this.grid = [
      [null, null, null], //0
      [null, null, null], //1
      [null, null, null], //2
    ];
  }

  play(position: Position) {
    const [row, column] = position;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    this.grid[row][column] = 'X';
    return this.grid;
  }
}

// position 1 - between 0 - 2
// position 2 - between 0 - 2

// if (row >= 0 && row <= 2 && column >= 0 && column <= 2) {}
