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
    if (this.scorePlayerOne === this.scorePlayerTwo) {
      return this.getEqualScore(this.scorePlayerOne);
    } else if (this.scorePlayerOne >= 4 || this.scorePlayerTwo >= 4) {
      return this.getWinningOrAdvantagePlayer();
    } else {
      return (
        this.getTennisScoreFromNumberOfPoints(this.scorePlayerOne) +
        '-' +
        this.getTennisScoreFromNumberOfPoints(this.scorePlayerTwo)
      );
    }
  }

  private getTennisScoreFromNumberOfPoints(numOfPoints: number) {
    switch (numOfPoints) {
      case 0:
        return 'Love';
      case 1:
        return 'Fifteen';
      case 2:
        return 'Thirty';
      default:
        return 'Forty';
    }
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
