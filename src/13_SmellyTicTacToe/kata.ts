/* eslint-disable */

export class Game {
  private _lastSymbol = ' ';
  private _board: Board = new Board();

  //Primitive Obsession Code Smell
  // Data Clumps Code Smell
  // Long Method Code Smell
  public Play(symbol: string, x: number, y: number): void {
    // Comments Code Smell
    //if first move
    if (this._lastSymbol == ' ') {
      // Comments Code Smell
      //if player is X
      if (symbol == 'O') {
        throw new Error('Invalid first player');
      }
    }
    // Comments Code Smell
    // Switch Statements Code Smell
    //if not first move but player repeated
    else if (symbol == this._lastSymbol) {
      throw new Error('Invalid next player');
    }
    // Comments Code Smell
    // Switch Statements Code Smell
    //if not first move but play on an already played tile
    // Inappropriate Intimacy Code Smell
    else if (this._board.TileAt(x, y).Symbol != ' ') {
      throw new Error('Invalid position');
    }
    // Comments Code Smell
    // update game state
    this._lastSymbol = symbol;
    this._board.AddTileAt(symbol, x, y);
  }

  // Long Method Code Smell
  public Winner(): string {
    // Comments Code Smell
    //if the positions in first row are taken
    // Duplicate Code Code Smell
    if (
      // Feature Envy Code Smell (on board)
      this._board.TileAt(0, 0)!.Symbol != ' ' &&
      this._board.TileAt(0, 1)!.Symbol != ' ' &&
      this._board.TileAt(0, 2)!.Symbol != ' '
    ) {
      // Comments Code Smell
      //if first row is full with same symbol
      if (
        // Message Chains Code Smell
        this._board.TileAt(0, 0)!.Symbol == this._board.TileAt(0, 1)!.Symbol &&
        this._board.TileAt(0, 2)!.Symbol == this._board.TileAt(0, 1)!.Symbol
      ) {
        return this._board.TileAt(0, 0)!.Symbol;
      }
    }
    // Comments Code Smell
    //if the positions in first row are taken
    if (
      this._board.TileAt(1, 0)!.Symbol != ' ' &&
      this._board.TileAt(1, 1)!.Symbol != ' ' &&
      this._board.TileAt(1, 2)!.Symbol != ' '
    ) {
      // Comments Code Smell
      //if middle row is full with same symbol
      if (
        this._board.TileAt(1, 0)!.Symbol == this._board.TileAt(1, 1)!.Symbol &&
        this._board.TileAt(1, 2)!.Symbol == this._board.TileAt(1, 1)!.Symbol
      ) {
        return this._board.TileAt(1, 0)!.Symbol;
      }
    }
    // Comments Code Smell
    //if the positions in first row are taken
    if (
      this._board.TileAt(2, 0)!.Symbol != ' ' &&
      this._board.TileAt(2, 1)!.Symbol != ' ' &&
      this._board.TileAt(2, 2)!.Symbol != ' '
    ) {
      // Comments Code Smell
      //if middle row is full with same symbol
      if (
        this._board.TileAt(2, 0)!.Symbol == this._board.TileAt(2, 1)!.Symbol &&
        this._board.TileAt(2, 2)!.Symbol == this._board.TileAt(2, 1)!.Symbol
      ) {
        return this._board.TileAt(2, 0)!.Symbol;
      }
    }

    return ' ';
  }
}

interface Tile {
  X: number; //Primitive Obsession Code Smell
  Y: number; //Primitive Obsession Code Smell
  Symbol: string; //Primitive Obsession Code Smell
}

class Board {
  private _plays: Tile[] = [];

  constructor() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const tile: Tile = { X: i, Y: j, Symbol: ' ' };
        this._plays.push(tile);
      }
    }
  }

  public TileAt(x: number, y: number): Tile {
    // Duplicate Code Code Smell
    return this._plays.find((t: Tile) => t.X == x && t.Y == y)!;
  }

  // Data Clump Code Smell
  // Primitive Obsession Code Smell
  // Long Parameter List Code Smell
  public AddTileAt(symbol: string, x: number, y: number): void {
    //@ts-ignore
    // Dead Code Code Smell
    const tile: Tile = { X: x, Y: y, Symbol: symbol };
    // Message Chains Code Smell
    this._plays.find((t: Tile) => t.X == x && t.Y == y)!.Symbol = symbol;
  }
}
