export interface TennisGameInterface {
  wonPoint(playerName: string): void;
  getScore(): string;
}

const pointsScoreMapping = new Map<number, string>([
  [0, 'Love'],
  [1, 'Fifteen'],
  [2, 'Thirty'],
  [3, 'Forty'],
]);

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
    if (playerName === this.namePlayerOne) {
      this.scorePlayerOne += 1;
    } else {
      this.scorePlayerTwo += 1;
    }
  }

  getScore(): string {
    if (this.isGameATie()) {
      return this.getEqualScore(this.scorePlayerOne);
    }

    if (this.hasOnePlayerMoreThanFourPoints()) {
      return this.getWinningOrAdvantagePlayer();
    }

    return this.getCurrentTennisScore();
  }

  private getCurrentTennisScore(): string {
    return (
      this.getTennisScoreFromNumberOfPoints(this.scorePlayerOne) +
      '-' +
      this.getTennisScoreFromNumberOfPoints(this.scorePlayerTwo)
    );
  }

  private hasOnePlayerMoreThanFourPoints() {
    return this.scorePlayerOne >= 4 || this.scorePlayerTwo >= 4;
  }

  private isGameATie(): boolean {
    return this.scorePlayerOne === this.scorePlayerTwo;
  }

  private getTennisScoreFromNumberOfPoints(numOfPoints: number) {
    return pointsScoreMapping.get(numOfPoints);
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
    if (score < 3) {
      return `${pointsScoreMapping.get(score)}-All`;
    }
    return 'Deuce';
  }
}
