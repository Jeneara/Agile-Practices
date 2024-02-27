/* eslint-disable */

export interface TennisGame {
  wonPoint(playerName: string): void;
  getScore(): string;
}

export class TennisGame1 implements TennisGame {
  private scorePlayerOne = 0;
  private scorePlayerTwo = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName: string): void {
    if (playerName === this.player1Name) this.scorePlayerOne += 1;
    else this.scorePlayerTwo += 1;
  }

  getScore(): string {
    let score = '';
    let tempScore = 0;
    if (this.scorePlayerOne === this.scorePlayerTwo) {
      switch (this.scorePlayerOne) {
        case 0:
          score = 'Love-All';
          break;
        case 1:
          score = 'Fifteen-All';
          break;
        case 2:
          score = 'Thirty-All';
          break;
        default:
          score = 'Deuce';
          break;
      }
    } else if (this.scorePlayerOne >= 4 || this.scorePlayerTwo >= 4) {
      const minusResult: number = this.scorePlayerOne - this.scorePlayerTwo;
      if (minusResult === 1) score = 'Advantage ' + this.player1Name;
      else if (minusResult === -1) score = 'Advantage ' + this.player2Name;
      else if (minusResult >= 2) score = 'Win for ' + this.player1Name;
      else score = 'Win for ' + this.player2Name;
    } else {
      for (let i = 1; i < 3; i++) {
        if (i === 1) tempScore = this.scorePlayerOne;
        else {
          score += '-';
          tempScore = this.scorePlayerTwo;
        }
        switch (tempScore) {
          case 0:
            score += 'Love';
            break;
          case 1:
            score += 'Fifteen';
            break;
          case 2:
            score += 'Thirty';
            break;
          case 3:
            score += 'Forty';
            break;
        }
      }
    }
    return score;
  }
}
