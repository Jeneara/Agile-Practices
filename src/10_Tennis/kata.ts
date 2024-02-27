export interface TennisGameInterface {
  wonPoint(playerName: string): void;
  getScore(): string;
}

export class TennisGame implements TennisGameInterface {
  private scorePlayerOne = 0;
  private scorePlayerTwo = 0;
  private namePlayerOne: string;
  private namePlayerTwo: string;

  constructor(namePlayerOne: string, namePlayerTwo: string) {
    this.namePlayerOne = namePlayerOne;
    this.namePlayerTwo = namePlayerTwo;
  }

  wonPoint(playerName: string): void {
    if (playerName === this.namePlayerOne) this.scorePlayerOne += 1;
    else this.scorePlayerTwo += 1;
  }

  getScore(): string {
    let score = '';
    let tempScore = 0;
    if (this.scorePlayerOne === this.scorePlayerTwo) {
      score = this.getEqualScore(this.scorePlayerOne);
    } else if (this.scorePlayerOne >= 4 || this.scorePlayerTwo >= 4) {
      score = this.getWinningOrAdvantagePlayer();
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

  private getWinningOrAdvantagePlayer() {
    const scoreDifference = this.scorePlayerOne - this.scorePlayerTwo;

    if (scoreDifference === 1) {
      return 'Advantage ' + this.namePlayerOne;
    }

    if (scoreDifference === -1) {
      return 'Advantage ' + this.namePlayerTwo;
    }

    if (scoreDifference >= 2) {
      return 'Win for ' + this.namePlayerOne;
    }

    return 'Win for ' + this.namePlayerTwo;
  }

  private getEqualScore(score: number): string {
    switch (score) {
      case 0:
        return 'Love-All';
      case 1:
        return 'Fifteen-All';
      case 2:
        return 'Thirty-All';
      default:
        return 'Deuce';
    }
  }
}
