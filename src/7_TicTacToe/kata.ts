/* eslint-disable @typescript-eslint/no-unnecessary-condition */
type Player = 'X' | 'O';
type Position = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Grid = (Player | null)[];

class Board {
  private previousPlays: Grid;

  constructor() {
    this.previousPlays = [null, null, null, null, null, null, null, null, null];
  }

  public isSquarePlayed(position: Position) {
    return this.previousPlays[position] !== null;
  }

  public savePlay(position: Position, player: Player) {
    this.previousPlays[position] = player;
  }
}

export class TicTacToe {
  private nextPlayer: Player;
  private board: Board;

  constructor() {
    this.nextPlayer = 'X';
    this.board = new Board();
  }

  public play(position: Position) {
    const currentPlayer = this.nextPlayer;

    if (this.board.isSquarePlayed(position)) {
      throw new Error('Play invalid');
    }

    this.board.savePlay(position, currentPlayer);

    this.setNextPlayer();

    return currentPlayer;
  }

  private setNextPlayer() {
    this.nextPlayer = this.nextPlayer === 'X' ? 'O' : 'X';
  }
}
